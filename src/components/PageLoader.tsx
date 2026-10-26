"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("nl-loaded");
    if (alreadyLoaded) return;

    setVisible(true);
    sessionStorage.setItem("nl-loaded", "1");

    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-nl-primary"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-syne font-extrabold text-3xl tracking-tight"
            >
              <span className="text-white">Nano</span>
              <span className="text-nl-accent">Lab</span>
            </motion.span>
            <svg width="120" height="4" viewBox="0 0 120 4">
              <motion.line
                x1="2"
                y1="2"
                x2="118"
                y2="2"
                stroke="currentColor"
                className="text-nl-accent"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}