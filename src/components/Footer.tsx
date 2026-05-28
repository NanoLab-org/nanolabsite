import Link from "next/link";
import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");
  const links = t.raw("links") as Array<{ label: string; href: string }>;

  return (
    <footer className="bg-nl-primary dark:bg-nl-dark-footer py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" aria-label={t("ariaHome")}>
              <span className="font-syne font-extrabold text-2xl tracking-tight">
                <span className="text-white">Nano</span>
                <span className="text-nl-accent">Lab</span>
              </span>
            </Link>
            <p className="font-dm text-sm text-white/60 mt-4 max-w-md">
              {t("description")}
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: "mdi:linkedin", label: "LinkedIn" },
                { icon: "mdi:twitter", label: "Twitter" },
                { icon: "mdi:github", label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="text-white/40 hover:text-nl-accent transition-colors"
                >
                  <Icon icon={social.icon} width={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-dm font-bold text-sm text-white mb-4">
              {t("navigationTitle")}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-dm text-sm text-white/60 hover:text-nl-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-dm font-bold text-sm text-white mb-4">
              {t("contactTitle")}
            </h4>
            <div className="space-y-3">
              {[
                { icon: "mdi:email-outline", text: "contact@nanolab.tn" },
                { icon: "mdi:map-marker-outline", text: "Tunis, Tunisie" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <Icon icon={item.icon} className="text-white/40" width={16} />
                  <span className="font-dm text-sm text-white/60">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-nl-white/10 mt-8 pt-8 text-center">
          <p className="font-dm text-sm text-white/40">
            {t("copyright")}{" "}
            <a href="#" className="hover:text-nl-accent transition-colors">
              {t("legal")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
