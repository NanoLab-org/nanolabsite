"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

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

interface AILabItem {
  title: string;
  description: string;
}

interface AILabContentProps {
  capabilitiesTitle: string;
  capabilities: AILabItem[];
  principlesTitle: string;
  principles: AILabItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

function HudCorners() {
  return (
    <>
      <span className="absolute top-1.5 left-1.5 w-0 h-0 border-t-2 border-l-2 border-nl-accent opacity-0 rounded-tl-sm transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:opacity-100" />
      <span className="absolute top-1.5 right-1.5 w-0 h-0 border-t-2 border-r-2 border-nl-accent opacity-0 rounded-tr-sm transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:opacity-100" />
      <span className="absolute bottom-1.5 left-1.5 w-0 h-0 border-b-2 border-l-2 border-nl-accent opacity-0 rounded-bl-sm transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:opacity-100" />
      <span className="absolute bottom-1.5 right-1.5 w-0 h-0 border-b-2 border-r-2 border-nl-accent opacity-0 rounded-br-sm transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:opacity-100" />
    </>
  );
}

export default function AILabContent({
  capabilitiesTitle,
  capabilities,
  principlesTitle,
  principles,
  ctaTitle,
  ctaDescription,
  ctaButton,
}: AILabContentProps) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-syne font-extrabold text-2xl leading-[1.3] text-white mb-8"
          >
            {capabilitiesTitle}
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/10 backdrop-blur-md p-6 rounded-nl-card border border-white/20 hover:border-nl-accent/40 transition-all shadow-lg"
              >
                <HudCorners />
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
            {principlesTitle}
          </motion.h3>
          <div className="space-y-6">
            {principles.map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-nl-card border border-white/20 hover:border-nl-accent/40 transition-all"
              >
                <HudCorners />
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
          {ctaTitle}
        </h3>
        <p className="font-dm font-medium text-[15px] leading-normal text-white/60 mb-6 max-w-2xl mx-auto">
          {ctaDescription}
        </p>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-nl-accent text-nl-primary shadow-nl-btn rounded-nl-btn font-dm font-bold text-sm px-8 py-3 transition-all duration-300 hover:opacity-95 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(50,199,207,0.4)]"
        >
          {ctaButton}
        </button>
      </motion.div>
    </>
  );
}