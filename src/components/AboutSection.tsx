"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const valueIcons = ["mdi:target", "mdi:heart-outline", "mdi:lightbulb-outline"];

export default function AboutSection() {
  const t = useTranslations("about");
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-8 shadow-nl-card text-center"
              >
                <div className="w-16 h-16 bg-nl-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon={valueIcons[index]} className="text-nl-accent" width={32} height={32} />
                </div>
                <h4 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white mb-4">
                  {value.title}
                </h4>
                <p className="font-dm font-medium text-[15px] leading-normal text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
