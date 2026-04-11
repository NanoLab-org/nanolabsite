"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface FormData {
  nom: string;
  email: string;
  societe: string;
  besoin: string;
  budget: string;
  message: string;
}

export default function ContactSection() {

  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    societe: "",
    besoin: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    alert("Merci pour votre message ! Nous vous recontacterons sous 24h.");
    setFormData({ nom: "", email: "", societe: "", besoin: "", budget: "", message: "" });
    setIsSubmitting(false);
  };

  const inputClass =
    "w-full px-5 py-4 border border-gray-200/60 dark:border-white/10 rounded-nl-btn focus:ring-2 focus:ring-nl-accent/20 focus:border-nl-accent/50 font-dm text-[15px] leading-normal text-nl-primary dark:text-white transition-all bg-white dark:bg-nl-dark-card";

  return (
    <section
      id="contact"
      className="relative bg-white dark:bg-nl-dark px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-nl-primary dark:text-white mb-4"
          >
            Parlons de Votre Projet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Prêt à transformer vos idées en réalité digitale ? Contactez-nous
            pour un échange personnalisé.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-8 shadow-nl-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="societe" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                    Société
                  </label>
                  <input
                    type="text"
                    id="societe"
                    name="societe"
                    value={formData.societe}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="besoin" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                      Type de besoin *
                    </label>
                    <select
                      id="besoin"
                      name="besoin"
                      required
                      value={formData.besoin}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Sélectionnez votre besoin</option>
                      <option value="Application web">Application web</option>
                      <option value="Application mobile">Application mobile</option>
                      <option value="Solution IA">Solution IA</option>
                      <option value="Stratégie digitale">Stratégie digitale</option>
                      <option value="Audit technique">Audit technique</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Budget estimé</option>
                      <option value="< 10k€">Moins de 10 000€</option>
                      <option value="10-25k€">10 000 - 25 000€</option>
                      <option value="25-50k€">25 000 - 50 000€</option>
                      <option value="50k€+">Plus de 50 000€</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Décrivez vos objectifs, contraintes, et tout élément important pour comprendre votre besoin..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-nl-accent text-nl-primary shadow-nl-btn rounded-nl-btn font-dm font-bold text-sm py-4 transition-opacity hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  <Icon icon="mdi:send" width={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Info sidebar */}
          <div className="space-y-6">
            {/* Contact info */}
            <div className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-8 shadow-nl-card">
              <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white mb-6">
                Informations de Contact
              </h3>
              <div className="space-y-5">
                {[
                  { icon: "mdi:email-outline", label: "Email", value: "contact@nanolab.tn" },
                  { icon: "mdi:phone-outline", label: "Téléphone", value: "+216 XX XXX XXX" },
                  { icon: "mdi:map-marker-outline", label: "Localisation", value: "Tunis, Tunisie" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-nl-accent/10 rounded-nl-icon flex items-center justify-center shrink-0">
                      <Icon icon={item.icon} className="text-nl-accent" width={20} />
                    </div>
                    <div>
                      <p className="font-dm font-bold text-sm text-nl-primary dark:text-white">{item.label}</p>
                      <p className="font-dm text-sm text-gray-600 dark:text-gray-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule call */}
            <div className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-8 shadow-nl-card text-center">
              <Icon icon="mdi:calendar-outline" className="text-nl-accent mx-auto mb-4" width={40} />
              <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white mb-3">
                Planifier un Appel
              </h3>
              <p className="font-dm text-sm text-gray-600 dark:text-gray-300 mb-6">
                Réservez un créneau de 30 minutes pour discuter de votre projet
                en détail.
              </p>
              <button className="w-full border border-nl-accent text-nl-primary dark:text-white rounded-nl-btn font-dm font-bold text-sm py-3 transition-colors hover:bg-nl-accent/10">
                Réserver un appel
              </button>
            </div>

            {/* Response time */}
            <div className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-8 shadow-nl-card text-center">
              <h4 className="font-dm font-bold text-sm text-nl-primary dark:text-white mb-2">
                Temps de réponse
              </h4>
              <motion.p
                className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-nl-accent mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                &lt; 24h
              </motion.p>
              <p className="font-dm text-sm text-gray-600 dark:text-gray-300">
                Nous nous engageons à vous répondre rapidement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
