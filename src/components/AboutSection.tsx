import { getTranslations } from "next-intl/server";
import ValuesGrid from "./ValuesGrid";

export default async function AboutSection() {
  const t = await getTranslations("about");
  const values = t.raw("values") as Array<{ title: string; description: string }>;

  return (
    <section
      id="a-propos"
      className="relative bg-gray-50 dark:bg-nl-dark-surface px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div>
          <h3 className="font-syne font-extrabold text-[28px] leading-[1.2] text-nl-primary dark:text-white text-center mb-12">
            {t("valuesTitle")}
          </h3>
          <ValuesGrid values={values} />
        </div>
      </div>
    </section>
  );
}