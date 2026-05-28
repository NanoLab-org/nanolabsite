"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const domainIcons = [
  "mdi:target",
  "mdi:database-outline",
  "mdi:layers-outline",
  "mdi:cog-outline",
  "mdi:flash-outline",
];

const projectTags = ["React", "Node.js", "IA", "BTP"];

export default function PortfolioSection() {
  const t = useTranslations("portfolio");
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
      className="relative bg-white dark:bg-nl-dark px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-nl-primary dark:text-white mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-10 shadow-nl-card group">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-nl-accent/10 text-nl-accent font-dm font-extrabold text-[11px] tracking-[0.55px] uppercase tracking-widest rounded-nl-badge mb-3">
                  {project.type}
                </span>
                <h3 className="font-syne font-extrabold text-[28px] leading-[1.2] text-nl-primary dark:text-white">
                  {project.title}
                </h3>
                <p className="font-dm font-medium text-sm text-nl-accent">
                  {project.category}
                </p>
              </div>
              <Icon
                icon="mdi:arrow-top-right"
                className="text-gray-600 dark:text-gray-300 group-hover:text-nl-accent transition-colors"
                width={20}
              />
            </div>

            <p className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
              {project.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {project.results.map((result, i) => (
                <div key={i} className="bg-gray-50 dark:bg-nl-dark-surface p-4 rounded-nl-icon">
                  <div className="w-2 h-2 bg-nl-accent rounded-full mb-2" />
                  <p className="font-dm font-semibold text-sm text-nl-primary dark:text-white">{result}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-nl-border pt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {projectTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-50 dark:bg-nl-dark-surface text-gray-600 dark:text-gray-300 font-dm text-sm rounded-nl-badge"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-dm font-semibold text-sm text-green-600">
                {project.status}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-nl-accent/10 border border-nl-accent/20 rounded-nl-card p-8 text-center">
            <p className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-nl-primary dark:text-white italic">
              &ldquo;{t("quote")}&rdquo;
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white text-center mb-10">
            {t("whatWeBuild")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-6 text-center shadow-nl-card hover:border-nl-accent/30 transition-all group"
              >
                <div className="w-12 h-12 bg-nl-accent/10 rounded-nl-icon flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon icon={domainIcons[index]} className="text-nl-accent" width={24} height={24} />
                </div>
                <h4 className="font-dm font-semibold text-sm text-nl-primary dark:text-white">
                  {domain}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
