import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Where submissions are delivered and what they're sent as.
// Overridable via env, with sensible NanoLab defaults.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "contact@nanolab.tn";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "NanoLab <noreply@nanolab.tn>";

interface ContactPayload {
  nom?: string;
  email?: string;
  societe?: string;
  besoin?: string;
  budget?: string;
  message?: string;
  // Honeypot: real users never fill this; bots do.
  website?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Spam trap: pretend success so bots don't retry, but send nothing.
  if (data.website && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const nom = data.nom?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const besoin = data.besoin?.trim() ?? "";
  const message = data.message?.trim() ?? "";
  const societe = data.societe?.trim() ?? "";
  const budget = data.budget?.trim() ?? "";

  if (!nom || !email || !besoin || !message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const html = `
    <h2>New contact form submission</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(nom)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(societe) || "—"}</td></tr>
      <tr><td><strong>Need</strong></td><td>${escapeHtml(besoin)}</td></tr>
      <tr><td><strong>Budget</strong></td><td>${escapeHtml(budget) || "—"}</td></tr>
      <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: email,
        subject: `New request from ${nom} — ${besoin}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error", res.status, detail);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend request failed", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
