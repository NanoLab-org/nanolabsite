import type { Metadata } from "next";
import { syne, dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "NanoLab | Expert en IA, Dev & Stratégie Digitale — Tunis",
  description:
    "NanoLab est un studio produit et laboratoire IA basé à Tunis. Nous créons des applications, des stratégies et des solutions data/IA pour transformer vos idées en succès digital.",
  keywords: [
    "agence digitale Tunis",
    "développement web Tunisie",
    "application mobile Tunisie",
    "intelligence artificielle Tunisie",
    "marketing digital Tunisie",
    "studio produit Tunis",
    "laboratoire IA Tunisie",
    "NanoLab",
  ],
  openGraph: {
    title: "NanoLab | Expert en IA, Dev & Stratégie Digitale — Tunis",
    description:
      "Studio produit et laboratoire IA basé à Tunis. Applications web & mobile, solutions IA et stratégie digitale.",
    siteName: "NanoLab",
    url: "https://www.nanolab.tn",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoLab | Expert en IA, Dev & Stratégie Digitale — Tunis",
    description:
      "Studio produit et laboratoire IA basé à Tunis. Applications web & mobile, solutions IA et stratégie digitale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "http://nanolab.tn/#organization",
    "name": "NanoLab",
    "url": "http://nanolab.tn/",
    "logo": {
      "@type": "ImageObject",
      "url": "http://nanolab.tn/logo.png",
      "width": 200,
      "height": 60,
    },
    "description":
      "Studio produit et laboratoire IA spécialisé dans la création d'applications innovantes et de solutions data-driven pour les entreprises.",
    "slogan": "Build, AI, Growth.",
    "foundingDate": "2025",
    "foundingLocation": { "@type": "Place", "name": "Tunis, Tunisie" },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tunis",
      "addressCountry": "TN",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@nanolab.tn",
      "contactType": "customer service",
      "availableLanguage": ["French", "Arabic", "English"],
    },
    "founder": {
      "@type": "Person",
      "name": "Dridi Yassine",
      "jobTitle": "CEO & AI Lead",
      "worksFor": { "@id": "http://nanolab.tn/#organization" },
    },
    "sameAs": [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "http://nanolab.tn/#website",
    "url": "http://nanolab.tn/",
    "name": "NanoLab",
    "description": "Studio produit + laboratoire IA — Build, AI, Growth.",
    "inLanguage": "fr-FR",
    "publisher": { "@id": "http://nanolab.tn/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "http://nanolab.tn/#service-build",
    "name": "Développement d'applications web & mobile",
    "serviceType": "Software Development",
    "description":
      "Développement sur mesure d'applications web progressives (PWA), apps mobiles natives & hybrides, plateformes e-commerce et systèmes de gestion métier.",
    "provider": { "@id": "http://nanolab.tn/#organization" },
    "areaServed": { "@type": "Country", "name": "Tunisie" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Offres Build",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Applications web progressives (PWA)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Apps mobiles natives & hybrides" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plateformes e-commerce" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Systèmes de gestion métier" } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "http://nanolab.tn/#service-ia",
    "name": "Laboratoire IA & Intelligence Artificielle",
    "serviceType": "Artificial Intelligence Consulting",
    "description":
      "POC, prototypes et industrialisation IA — Machine Learning, Deep Learning, Computer Vision, NLP, Recommender Systems, MLOps.",
    "provider": { "@id": "http://nanolab.tn/#organization" },
    "areaServed": { "@type": "Country", "name": "Tunisie" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Offres IA",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Machine Learning & Deep Learning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer Vision & NLP" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Recommender Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MLOps & déploiement IA" } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "http://nanolab.tn/#service-strategy",
    "name": "Stratégie digitale & Marketing",
    "serviceType": "Digital Marketing",
    "description":
      "Go-to-market, acquisition, branding, content marketing, growth hacking et événements pour amplifier votre présence digitale.",
    "provider": { "@id": "http://nanolab.tn/#organization" },
    "areaServed": { "@type": "Country", "name": "Tunisie" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "http://nanolab.tn/#webpage",
    "url": "http://nanolab.tn/",
    "name": "NanoLab | Expert en IA, Dev & Stratégie Digitale — Tunis",
    "description":
      "NanoLab est un studio produit et laboratoire IA basé à Tunis. Nous créons des applications, des stratégies et des solutions data/IA pour transformer vos idées en succès digital.",
    "isPartOf": { "@id": "http://nanolab.tn/#website" },
    "about": { "@id": "http://nanolab.tn/#organization" },
    "inLanguage": "fr-FR",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "http://nanolab.tn/" },
    ],
  },
];

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
