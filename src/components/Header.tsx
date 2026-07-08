"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("header");
  const [activeSection, setActiveSection] = useState("accueil");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle: toggleDark } = useDarkMode();

  const navItems = [
    { id: "accueil", label: t("nav.accueil"), href: "#accueil" },
    { id: "services", label: t("nav.services"), href: "#services" },
    { id: "lab-ia", label: t("nav.labIA"), href: "#lab-ia" },
    { id: "realisations", label: t("nav.realisations"), href: "#realisations" },
    { id: "process", label: t("nav.process"), href: "#process" },
    { id: "a-propos", label: t("nav.aPropos"), href: "#a-propos" },
    { id: "contact", label: t("nav.contact"), href: "#contact" },
  ];

  // Shadow au scroll (séparé de la détection de section active)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Détection de la section active via IntersectionObserver
  useEffect(() => {
    const ids = ["accueil", "services", "lab-ia", "realisations", "process", "a-propos", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-96px 0px -60% 0px",
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] bg-white/95 dark:bg-nl-dark/95 backdrop-blur-md border-b border-nl-border dark:border-white/10 flex items-center transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" aria-label={t("ariaHome")}>
          <span className="font-syne font-extrabold text-2xl tracking-tight">
            <span className="text-nl-primary dark:text-white">Nano</span>
            <span className="text-nl-accent">Lab</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label={t("ariaNav")}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-dm font-semibold text-sm transition-colors ${
                activeSection === item.id
                  ? "text-nl-accent"
                  : "text-nl-primary dark:text-gray-300 hover:text-nl-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:inline-flex bg-nl-primary text-white font-dm font-bold text-sm px-6 py-3 rounded-nl-btn transition-opacity hover:opacity-90"
          >
            {t("cta")}
          </button>

          <button
            onClick={toggleDark}
            className="p-2 text-nl-primary dark:text-gray-300 hover:text-nl-accent transition-colors"
            aria-label={t("ariaDarkMode")}
          >
            <Icon icon={isDark ? "mdi:weather-sunny" : "mdi:weather-night"} width={20} />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-nl-primary dark:text-gray-300 hover:text-nl-accent transition-colors"
            aria-label={t("ariaMenu")}
          >
            <Icon icon={mobileOpen ? "mdi:close" : "mdi:menu"} width={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[72px] left-0 right-0 bg-white dark:bg-nl-dark border-b border-nl-border dark:border-white/10 lg:hidden"
          >
            <nav className="flex flex-col gap-3 px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left font-dm font-semibold text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-nl-accent"
                      : "text-nl-primary dark:text-gray-300 hover:text-nl-accent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 bg-nl-primary text-white font-dm font-bold text-sm px-6 py-3 rounded-nl-btn self-start"
              >
                {t("cta")}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}