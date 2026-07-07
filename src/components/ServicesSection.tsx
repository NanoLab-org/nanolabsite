import { getTranslations } from "next-intl/server";
import OffersHeading from "./OffersHeading";
import OffersTabs from "./OffersTabs";

export default async function ServicesSection() {
  const t = await getTranslations("services");
  const items = t.raw("items") as Array<{
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    cta: string;
  }>;

  return (
    <section
      id="services"
      className="relative bg-white dark:bg-nl-dark px-6 lg:px-8 py-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-nl-accent/[0.03] rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-nl-primary/[0.03] rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <OffersHeading title={t("title")} subtitle={t("subtitle")} />
        <OffersTabs items={items} />
      </div>
    </section>
  );
}