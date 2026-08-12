"use client";

import Hero from "@/components/ui/animated-shader-hero";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Hero
      trustBadge={{
        text: t("badge"),
        icons: ["✨"],
      }}
      headline={{
        line1: "NanoLab —",
        line2: t("tagline"),
      }}
      subtitle={t("description")}
      buttons={{
        primary: {
          text: t("ctaPrimary"),
          onClick: () => scrollTo("contact"),
        },
        secondary: {
          text: t("ctaSecondary"),
          onClick: () => scrollTo("services"),
        },
      }}
    />
  );
}