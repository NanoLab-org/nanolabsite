"use client";

import { motion } from "framer-motion";
import AnimatedWords from "./AnimatedWords";

interface ProcessHeadingProps {
  title: string;
  subtitle: string;
}

export default function ProcessHeading({ title, subtitle }: ProcessHeadingProps) {
  return (
    <div className="text-center mb-16">
      <AnimatedWords
        text={title}
        as="h2"
        trigger="scroll"
        className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-nl-primary dark:text-white mb-4"
      />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}