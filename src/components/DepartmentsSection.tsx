import { getTranslations } from "next-intl/server";
import DepartmentsHeading from "./DepartmentsHeading";
import DepartmentsCards from "./DepartmentsCards";

export default async function DepartmentsSection() {
  const t = await getTranslations("departments");
  const items = t.raw("items") as Array<{ title: string; description: string; features: string[] }>;

  return (
    <section
      id="departements"
      className="relative bg-gray-50 dark:bg-nl-dark-surface px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <DepartmentsHeading title={t("title")} subtitle={t("subtitle")} />
        <DepartmentsCards items={items} />
      </div>
    </section>
  );
}