import { getTranslations } from "next-intl/server";
import AILabHeading from "./AILabHeading";
import AILabContent from "./AILabContent";

export default async function AILabSection() {
  const t = await getTranslations("ailab");
  const capabilities = t.raw("capabilities") as Array<{ title: string; description: string }>;
  const principles = t.raw("principles") as Array<{ title: string; description: string }>;

  return (
    <section
      id="lab-ia"
      className="relative bg-nl-primary px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <AILabHeading title={t("title")} subtitle={t("subtitle")} />
        <AILabContent
          capabilitiesTitle={t("capabilitiesTitle")}
          capabilities={capabilities}
          principlesTitle={t("principlesTitle")}
          principles={principles}
          ctaTitle={t("ctaTitle")}
          ctaDescription={t("ctaDescription")}
          ctaButton={t("ctaButton")}
        />
      </div>
    </section>
  );
}