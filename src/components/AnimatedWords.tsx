"use client";

import { motion, Variants } from "framer-motion";
import { ElementType } from "react";

interface AnimatedWordsProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  trigger?: "mount" | "scroll";
  wordDelay?: number;
  startDelay?: number;
}

export default function AnimatedWords({
  text,
  className,
  as = "h2",
  trigger = "scroll",
  wordDelay = 0.08,
  startDelay = 0,
}: AnimatedWordsProps) {
  const words = text.split(" ");
  const MotionTag = motion[as] as ElementType;

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: wordDelay,
        delayChildren: startDelay,
      },
    },
  };

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const viewportProps =
    trigger === "scroll"
      ? { whileInView: "visible", viewport: { once: true } }
      : { animate: "visible" };

  return (
    <MotionTag className={className} initial="hidden" {...viewportProps} variants={container}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}