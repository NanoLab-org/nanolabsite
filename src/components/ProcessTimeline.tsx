"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import RoadmapPath from "./RoadmapPath";

const icons = [
  "mdi:target",
  "mdi:palette-outline",
  "mdi:code-braces",
  "mdi:rocket-launch-outline",
];

const alignments = ["items-start text-left", "items-end text-right", "items-start text-left", "items-end text-right"];
const topOffsets = ["0%", "24%", "50%", "76%"];

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto" style={{ height: "1000px" }}>
      <RoadmapPath stepTitles={steps.map((s) => s.title)} />

      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className={`absolute w-[70%] flex flex-col group ${alignments[index % alignments.length]} ${
            index % 2 === 0 ? "left-0" : "right-0"
          }`}
          style={{ top: topOffsets[index % topOffsets.length] }}
        >
          <div className="relative mb-4">
            <motion.div
              className="absolute inset-0 rounded-full bg-nl-accent/30 blur-md"
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: [0.9, 1.3, 0.9], opacity: [0.6, 0.15, 0.6] }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
              whileHover={{ scale: 1.1 }}
              className="relative w-16 h-16 bg-white dark:bg-nl-dark-card border-2 border-nl-accent rounded-full flex items-center justify-center shadow-lg shadow-nl-accent/10 transition-shadow duration-300 group-hover:shadow-nl-glow"
            >
              <Icon icon={icons[index % icons.length]} className="text-nl-accent" width={26} height={26} />
            </motion.div>
          </div>

          <span className="font-syne font-extrabold text-nl-accent/30 text-4xl mb-1">
            0{index + 1}
          </span>
          <h3 className="font-syne font-extrabold text-xl text-nl-primary dark:text-white mb-2">
            {step.title}
          </h3>
          <p className="font-dm text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xs">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}