"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const capabilityIcons = [
  "mdi:chat-outline",
  "mdi:eye-outline",
  "mdi:chart-bar",
  "mdi:brain",
];

const principleIcons = [
  "mdi:shield-lock-outline",
  "mdi:chart-line",
  "mdi:flash-outline",
];

export default function AILabSection() {
  const t = useTranslations("ailab");
  const capabilities = t.raw("capabilities") as Array<{ title: string; description: string }>;
  const principles = t.raw("principles") as Array<{ title: string; description: string }>;

  return (
    <section
      id="lab-ia"
      className="relative bg-nl-primary px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-white mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-white/60 max-w-3xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-syne font-extrabold text-2xl leading-[1.3] text-white mb-8"
            >
              {t("capabilitiesTitle")}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-nl-card border border-white/20 hover:border-nl-accent/40 transition-all shadow-lg"
                >
                  <Icon icon={capabilityIcons[index]} className="text-nl-accent mb-4" width={32} height={32} />
                  <h4 className="font-dm font-bold text-[15px] leading-normal text-white mb-2">
                    {cap.title}
                  </h4>
                  <p className="font-dm text-sm text-white/60">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-syne font-extrabold text-2xl leading-[1.3] text-white mb-8"
            >
              {t("principlesTitle")}
            </motion.h3>
            <div className="space-y-6">
              {principles.map((p, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-nl-card border border-white/20"
                >
                  <div className="w-12 h-12 bg-nl-accent/20 border border-nl-accent/30 rounded-nl-icon flex items-center justify-center shrink-0">
                    <Icon icon={principleIcons[index]} className="text-nl-accent" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-dm font-bold text-[15px] leading-normal text-white mb-2">
                      {p.title}
                    </h4>
                    <p className="font-dm text-sm text-white/60">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white/10 backdrop-blur-md p-8 rounded-nl-card border border-white/20 shadow-nl-glow"
        >
          <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-white mb-4">
            {t("ctaTitle")}
          </h3>
          <p className="font-dm font-medium text-[15px] leading-normal text-white/60 mb-6 max-w-2xl mx-auto">
            {t("ctaDescription")}
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-nl-accent text-nl-primary shadow-nl-btn rounded-nl-btn font-dm font-bold text-sm px-8 py-3 transition-opacity hover:opacity-90"
          >
            {t("ctaButton")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
