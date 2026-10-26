"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const valueIcons = ["mdi:target", "mdi:heart-outline", "mdi:lightbulb-outline"];

interface ValueItem {
  title: string;
  description: string;
}

interface ValuesGridProps {
  values: ValueItem[];
}

function GrowthRingIcon({ icon, delay }: { icon: string; delay: number }) {
  const circumference = 2 * Math.PI * 42;

  return (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-nl-accent/10"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-nl-accent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </svg>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.9 }}
      >
        <Icon icon={icon} className="text-nl-accent" width={28} height={28} />
      </motion.div>
    </div>
  );
}

export default function ValuesGrid({ values }: ValuesGridProps) {
  return (
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
          <GrowthRingIcon icon={valueIcons[index]} delay={index * 0.15} />
          <h4 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white mb-4">
            {value.title}
          </h4>
          <p className="font-dm font-medium text-[15px] leading-normal text-gray-600 dark:text-gray-300">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}