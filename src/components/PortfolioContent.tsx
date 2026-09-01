"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import DomainsHelix from "./DomainsHelix";
import HelixFragmentsField from "./HelixStrandDecor";

const domainIcons = [
  "mdi:target",
  "mdi:database-outline",
  "mdi:layers-outline",
  "mdi:cog-outline",
  "mdi:flash-outline",
];

const projectTags = ["React", "Node.js", "IA", "BTP"];

interface Project {
  title: string;
  category: string;
  type: string;
  description: string;
  results: string[];
  status: string;
}

interface PortfolioContentProps {
  project: Project;
  quote: string;
  whatWeBuild: string;
  domains: string[];
}

export default function PortfolioContent({ project, quote, whatWeBuild, domains }: PortfolioContentProps) {
  return (
    <>
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
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </motion.div>

     <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <HelixFragmentsField />

        <div className="relative z-10">
          <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white text-center mb-10">
            {whatWeBuild}
          </h3>
          <DomainsHelix
            items={domains.map((domain, index) => ({
              id: index + 1,
              title: domain,
              description: `Notre expertise en ${domain.toLowerCase()} au service de vos projets.`,
              icon: domainIcons[index],
            }))}
          />
        </div>
      </motion.div>
    </>
  );
}