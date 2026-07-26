import { getTranslations } from "next-intl/server";
import PortfolioHeading from "./PortfolioHeading";
import PortfolioContent from "./PortfolioContent";

export default async function PortfolioSection() {
  const t = await getTranslations("portfolio");
  const project = t.raw("project") as {
    title: string;
    category: string;
    type: string;
    description: string;
    results: string[];
    status: string;
  };
  const domains = t.raw("domains") as string[];

  return (
    <section
      id="realisations"
      className="relative bg-white dark:bg-nl-dark px-6 lg:px-8 pt-10 pb-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <PortfolioHeading title={t("title")} subtitle={t("subtitle")} />
        <PortfolioContent
          project={project}
          quote={t("quote")}
          whatWeBuild={t("whatWeBuild")}
          domains={domains}
        />
      </div>
    </section>
  );
}