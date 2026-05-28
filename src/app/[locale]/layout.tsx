import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { syne, dmSans } from "@/lib/fonts";
import "../globals.css";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "http://nanolab.tn/#organization",
    name: "NanoLab",
    url: "http://nanolab.tn/",
    logo: { "@type": "ImageObject", url: "http://nanolab.tn/logo.png", width: 200, height: 60 },
    description: "Studio produit et laboratoire IA spécialisé dans la création d'applications innovantes et de solutions data-driven pour les entreprises.",
    slogan: "Build, AI, Growth.",
    foundingDate: "2025",
    foundingLocation: { "@type": "Place", name: "Tunis, Tunisie" },
    address: { "@type": "PostalAddress", addressLocality: "Tunis", addressCountry: "TN" },
    contactPoint: { "@type": "ContactPoint", email: "contact@nanolab.tn", contactType: "customer service", availableLanguage: ["French", "Arabic", "English"] },
    founder: { "@type": "Person", name: "Dridi Yassine", jobTitle: "CEO & AI Lead", worksFor: { "@id": "http://nanolab.tn/#organization" } },
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "http://nanolab.tn/#website",
    url: "http://nanolab.tn/",
    name: "NanoLab",
    description: "Studio produit + laboratoire IA — Build, AI, Growth.",
    inLanguage: "fr-FR",
    publisher: { "@id": "http://nanolab.tn/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "http://nanolab.tn/#service-build",
    name: "Développement d'applications web & mobile",
    serviceType: "Software Development",
    provider: { "@id": "http://nanolab.tn/#organization" },
    areaServed: { "@type": "Country", name: "Tunisie" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "http://nanolab.tn/#service-ia",
    name: "Laboratoire IA & Intelligence Artificielle",
    serviceType: "Artificial Intelligence Consulting",
    provider: { "@id": "http://nanolab.tn/#organization" },
    areaServed: { "@type": "Country", name: "Tunisie" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "http://nanolab.tn/#service-strategy",
    name: "Stratégie digitale & Marketing",
    serviceType: "Digital Marketing",
    provider: { "@id": "http://nanolab.tn/#organization" },
    areaServed: { "@type": "Country", name: "Tunisie" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "http://nanolab.tn/" }],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "NanoLab",
      url: "https://www.nanolab.tn",
      type: "website",
      locale: locale === "ar" ? "ar_TN" : locale === "en" ? "en_US" : "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: "https://www.nanolab.tn",
      languages: {
        fr: "https://www.nanolab.tn",
        en: "https://www.nanolab.tn/en",
        ar: "https://www.nanolab.tn/ar",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en" | "ar")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
