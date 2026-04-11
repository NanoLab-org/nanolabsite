"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -40]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      style={{ opacity, scale, y }}
      className="relative bg-nl-primary py-24 px-nl-section-x flex flex-col items-center text-center rounded-t-[40px]"
    >
      <h2 className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-nl-white">
        Prêt à franchir le cap technologique ?
      </h2>
      <Link
        href="#contact"
        className="bg-nl-accent text-nl-primary shadow-nl-btn rounded-nl-btn font-dm font-bold text-sm px-10 py-4 mt-10 transition-opacity hover:opacity-90"
      >
        Discuter de mon projet
      </Link>
    </motion.section>
  );
}
