import type { Metadata } from "next";
import { syne, dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "NanoLab | Expert Nanotechnology Solutions & Consulting",
  description:
    "NanoLab delivers cutting-edge nanotechnology solutions, strategic consulting, and custom nano-engineered products for industry leaders worldwide.",
  keywords: [
    "nanotechnology",
    "nano engineering",
    "nanolab",
    "nano consulting",
    "nano solutions",
    "nano products",
  ],
  openGraph: {
    title: "NanoLab | Expert Nanotechnology Solutions & Consulting",
    description:
      "Cutting-edge nanotechnology solutions, strategic consulting, and custom nano-engineered products.",
    siteName: "NanoLab",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoLab | Expert Nanotechnology Solutions & Consulting",
    description:
      "Cutting-edge nanotechnology solutions, strategic consulting, and custom nano-engineered products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
