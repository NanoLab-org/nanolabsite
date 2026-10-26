"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-nl-accent/20 blur-[100px]"
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-1/4 w-[50%] h-[50%] rounded-full bg-nl-primary/15 dark:bg-nl-accent/10 blur-[110px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 left-1/3 w-[45%] h-[45%] rounded-full bg-nl-accent/15 blur-[90px]"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}