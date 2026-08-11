"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const icons = [
  "mdi:target",
  "mdi:palette-outline",
  "mdi:code-braces",
  "mdi:rocket-launch-outline",
];

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-nl-accent to-nl-primary hidden lg:block" />

      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-start"
          >
            <div className="hidden lg:flex w-16 h-16 bg-white dark:bg-nl-dark-card rounded-full border-2 border-nl-accent shadow-sm items-center justify-center relative z-10 shrink-0">
              <Icon icon={icons[index]} className="text-nl-accent" width={28} height={28} />
            </div>

            <div className="lg:ml-8 bg-white dark:bg-nl-dark-card p-8 rounded-nl-card border border-gray-200/60 dark:border-white/10 shadow-nl-card w-full">
              <div className="flex items-center gap-4 mb-4 lg:hidden">
                <div className="w-12 h-12 bg-nl-accent/10 rounded-nl-icon flex items-center justify-center">
                  <Icon icon={icons[index]} className="text-nl-accent" width={24} height={24} />
                </div>
                <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white">
                  {step.title}
                </h3>
              </div>

              <div className="hidden lg:block mb-4">
                <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white">
                  {step.title}
                </h3>
              </div>

              <p className="font-dm font-medium text-[15px] leading-normal text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}