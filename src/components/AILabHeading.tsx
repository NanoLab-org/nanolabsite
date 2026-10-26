"use client";

import { motion } from "framer-motion";
import AnimatedWords from "./AnimatedWords";

interface AILabHeadingProps {
  title: string;
  subtitle: string;
}

export default function AILabHeading({ title, subtitle }: AILabHeadingProps) {
  return (
    <div className="text-center mb-16">
    <AnimatedWords
        text={title}
        as="h2"
        trigger="scroll"
        className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-white mb-4 [text-shadow:0_0_24px_rgba(50,199,207,0.5)]"
      />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-white/60 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}