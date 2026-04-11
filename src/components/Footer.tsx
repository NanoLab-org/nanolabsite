import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-nl-primary py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" aria-label="NanoLab - Accueil">
              <span className="font-syne font-extrabold text-2xl tracking-tight">
                <span className="text-nl-white">Nano</span>
                <span className="text-nl-accent">Lab</span>
              </span>
            </Link>
            <p className="font-dm text-sm text-nl-white/60 mt-4 max-w-md">
              Studio produit et laboratoire IA spécialisé dans la création
              d&apos;applications innovantes et de solutions data-driven pour les
              entreprises.
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
                  className="text-nl-white/40 hover:text-nl-accent transition-colors"
                >
                  <Icon icon={social.icon} width={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-dm font-bold text-sm text-nl-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Nos Services", href: "#services" },
                { label: "Lab IA", href: "#lab-ia" },
                { label: "Réalisations", href: "#realisations" },
                { label: "À propos", href: "#a-propos" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-dm text-sm text-nl-white/60 hover:text-nl-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-dm font-bold text-sm text-nl-white mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              {[
                { icon: "mdi:email-outline", text: "contact@nanolab.tn" },
                { icon: "mdi:phone-outline", text: "+216 XX XXX XXX" },
                { icon: "mdi:map-marker-outline", text: "Tunis, Tunisie" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <Icon icon={item.icon} className="text-nl-white/40" width={16} />
                  <span className="font-dm text-sm text-nl-white/60">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-nl-white/10 mt-8 pt-8 text-center">
          <p className="font-dm text-sm text-nl-white/40">
            © 2025 NanoLab. Tous droits réservés. |{" "}
            <a href="#" className="hover:text-nl-accent transition-colors">
              Mentions légales
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
