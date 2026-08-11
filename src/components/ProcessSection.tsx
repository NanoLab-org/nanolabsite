import { getTranslations } from "next-intl/server";
import ProcessHeading from "./ProcessHeading";
import ProcessTimeline from "./ProcessTimeline";

export default async function ProcessSection() {
  const t = await getTranslations("process");
  const steps = t.raw("steps") as Array<{ title: string; description: string }>;

  return (
    <section
      id="process"
      className="relative bg-gray-50 dark:bg-nl-dark-surface px-6 lg:px-8 pt-20 pb-10"
    >
      <div className="w-full max-w-4xl mx-auto">
        <ProcessHeading title={t("title")} subtitle={t("subtitle")} />
        <ProcessTimeline steps={steps} />
      </div>
    </section>
  );
}