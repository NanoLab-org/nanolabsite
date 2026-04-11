"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";

const realProject = {
  title: "ElBATIMA",
  category: "Plateforme BTP + IA",
  type: "Projet interne",
  description:
    "Plateforme digitale révolutionnant la gestion de projets BTP avec IA prédictive pour l'optimisation des coûts et délais.",
  results: [
    "Réduction de 30% des délais",
    "Optimisation des coûts de 25%",
    "Interface utilisateur primée",
  ],
  tags: ["React", "Node.js", "IA", "BTP"],
  status: "En production",
};

const impactDomains = [
  { icon: "mdi:target", title: "Applications métier sur mesure" },
  { icon: "mdi:database-outline", title: "Solutions IA & data-driven" },
  { icon: "mdi:layers-outline", title: "Plateformes SaaS B2B" },
  { icon: "mdi:cog-outline", title: "Automatisation & optimisation" },
  { icon: "mdi:flash-outline", title: "Produits digitaux scalables" },
];

export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -40]);

  return (
    <motion.section
      ref={ref}
      id="realisations"
      style={{ opacity, scale, y }}
      className="relative bg-nl-white px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-nl-text mb-4"
          >
            Réalisations & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-nl-text-muted max-w-3xl mx-auto"
          >
            Découvrez notre approche produit et nos domaines d&apos;impact
          </motion.p>
        </div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-nl-white border border-nl-border rounded-nl-card p-10 shadow-nl-card group">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-nl-accent-subtle text-nl-accent font-dm font-extrabold text-[11px] tracking-[0.55px] uppercase tracking-widest rounded-nl-badge mb-3">
                  {realProject.type}
                </span>
                <h3 className="font-syne font-extrabold text-[28px] leading-[1.2] text-nl-text">
                  {realProject.title}
                </h3>
                <p className="font-dm font-medium text-sm text-nl-accent">
                  {realProject.category}
                </p>
              </div>
              <Icon
                icon="mdi:arrow-top-right"
                className="text-nl-text-muted group-hover:text-nl-accent transition-colors"
                width={20}
              />
            </div>

            <p className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-nl-text-muted mb-8 max-w-3xl">
              {realProject.description}
            </p>

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {realProject.results.map((result) => (
                <div key={result} className="bg-nl-surface p-4 rounded-nl-icon">
                  <div className="w-2 h-2 bg-nl-accent rounded-full mb-2" />
                  <p className="font-dm font-semibold text-sm text-nl-text">{result}</p>
                </div>
              ))}
            </div>

            {/* Tags + Status */}
            <div className="border-t border-nl-border pt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {realProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-nl-surface text-nl-text-muted font-dm text-sm rounded-nl-badge"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-dm font-semibold text-sm text-green-600">
                {realProject.status}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-nl-accent-subtle border border-nl-accent/20 rounded-nl-card p-8 text-center">
            <p className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-nl-text italic">
              &ldquo;Chaque projet est conçu comme un produit, pas comme une
              simple mission.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Impact domains */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-text text-center mb-10">
            Ce que nous construisons pour nos clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {impactDomains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-nl-white border border-nl-border rounded-nl-card p-6 text-center shadow-nl-card hover:border-nl-accent/30 transition-all group"
              >
                <div className="w-12 h-12 bg-nl-accent-subtle rounded-nl-icon flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon icon={domain.icon} className="text-nl-accent" width={24} height={24} />
                </div>
                <h4 className="font-dm font-semibold text-sm text-nl-text">
                  {domain.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
