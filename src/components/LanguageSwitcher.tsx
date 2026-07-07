"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const locales = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "en", label: "English", short: "EN" },
  { code: "ar", label: "عربي", short: "AR" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (code: string) => {
    router.replace(pathname, { locale: code });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-nl-border dark:border-white/15 text-nl-primary dark:text-gray-300 hover:text-nl-accent hover:border-nl-accent/50 transition-colors font-dm font-semibold text-xs"
        aria-label="Switch language"
        aria-expanded={open}
      >
        {current.short}
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-36 bg-white dark:bg-nl-dark border border-nl-border dark:border-white/10 rounded-lg shadow-lg py-1 z-50">
          {locales.map(({ code, label, short }) => (
            <button
              key={code}
              onClick={() => switchLocale(code)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm font-dm transition-colors ${
                code === locale
                  ? "text-nl-accent font-semibold"
                  : "text-nl-primary dark:text-gray-300 hover:text-nl-accent"
              }`}
            >
              <span className="font-bold text-xs w-6 shrink-0">{short}</span>
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}