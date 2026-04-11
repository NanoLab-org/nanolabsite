"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const navItems = [
  { id: "accueil", label: "Accueil", href: "#accueil" },
  { id: "services", label: "Services", href: "#services" },
  { id: "lab-ia", label: "Lab IA", href: "#lab-ia" },
  { id: "realisations", label: "Réalisations", href: "#realisations" },
  { id: "process", label: "Process", href: "#process" },
  { id: "a-propos", label: "À propos", href: "#a-propos" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const ids = navItems.map((n) => n.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] bg-nl-white/98 backdrop-blur-md border-b border-nl-border flex items-center transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="NanoLab - Accueil">
          <span className="font-syne font-extrabold text-2xl tracking-tight">
            <span className="text-nl-primary">Nano</span>
            <span className="text-nl-accent">Lab</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-dm font-semibold text-sm transition-colors ${
                activeSection === item.id
                  ? "text-nl-accent"
                  : "text-nl-text hover:text-nl-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:inline-flex bg-nl-primary text-nl-white font-dm font-bold text-sm px-6 py-3 rounded-nl-btn transition-opacity hover:opacity-90"
          >
            Demander un devis
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-nl-text hover:text-nl-accent transition-colors"
            aria-label="Menu"
          >
            <Icon icon={mobileOpen ? "mdi:close" : "mdi:menu"} width={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[72px] left-0 right-0 bg-nl-white border-b border-nl-border lg:hidden"
          >
            <nav className="flex flex-col gap-3 px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left font-dm font-semibold text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-nl-accent"
                      : "text-nl-text hover:text-nl-accent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 bg-nl-primary text-nl-white font-dm font-bold text-sm px-6 py-3 rounded-nl-btn self-start"
              >
                Demander un devis
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
