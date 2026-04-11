"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden bg-nl-white"
    >
      <BackgroundPaths />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-[64px] lg:leading-[1.05] lg:tracking-[-3.2px] text-nl-text leading-tight">
              NanoLab —{" "}
              <motion.span
                className="text-nl-accent relative inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Build, AI, Growth.
                <motion.span
                  className="absolute -inset-1 bg-nl-accent-subtle rounded-lg -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-dm font-medium text-lg lg:text-xl text-nl-text-muted max-w-2xl mx-auto leading-relaxed"
            >
              Studio produit + laboratoire IA. Nous créons des applications, des
              stratégies et des solutions data/IA pour transformer vos idées en
              succès digital.
            </motion.p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="group bg-nl-accent text-nl-primary shadow-nl-btn rounded-nl-btn font-dm font-bold text-base px-8 py-4 transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
            >
              Parler de votre projet
              <Icon
                icon="mdi:arrow-right"
                width={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="group border border-nl-accent text-nl-primary rounded-nl-btn font-dm font-bold text-base px-8 py-4 transition-colors hover:bg-nl-accent-subtle flex items-center justify-center gap-2"
            >
              <Icon
                icon="mdi:play"
                width={20}
                className="group-hover:scale-110 transition-transform"
              />
              Voir nos services
            </button>
          </motion.div>

          {/* Micro indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-3 font-dm text-sm text-nl-text-muted justify-center"
          >
            <Icon icon="mdi:sparkles" width={16} className="text-nl-accent" />
            <span>Innovation · Technology · Growth</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
