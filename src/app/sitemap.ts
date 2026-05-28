import type { MetadataRoute } from "next";

const baseUrl = "https://www.nanolab.tn";
const locales = ["fr", "en", "ar"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: locale === "fr" ? baseUrl : `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "fr" ? 1 : 0.8,
  }));
}
