"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

interface FormData {
  nom: string;
  email: string;
  societe: string;
  besoin: string;
  budget: string;
  message: string;
}

export default function ContactSection() {
  const t = useTranslations("contact");
  const form = useTranslations("contact.form");
  const besoinOptions = t.raw("form.besoinOptions") as Array<{ value: string; label: string }>;
  const budgetOptions = t.raw("form.budgetOptions") as Array<{ value: string; label: string }>;

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
    alert(form("successMessage"));
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
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-8 shadow-nl-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                      {form("nomLabel")}
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={form("nomPlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                      {form("emailLabel")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={form("emailPlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="societe" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                    {form("societeLabel")}
                  </label>
                  <input
                    type="text"
                    id="societe"
                    name="societe"
                    value={formData.societe}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={form("societePlaceholder")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="besoin" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                      {form("besoinLabel")}
                    </label>
                    <select
                      id="besoin"
                      name="besoin"
                      required
                      value={formData.besoin}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">{form("besoinPlaceholder")}</option>
                      {besoinOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                      {form("budgetLabel")}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">{form("budgetPlaceholder")}</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-dm font-semibold text-sm text-nl-primary dark:text-white mb-2">
                    {form("messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder={form("messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-nl-accent text-nl-primary shadow-nl-btn rounded-nl-btn font-dm font-bold text-sm py-4 transition-opacity hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? form("submitting") : form("submit")}
                  <Icon icon="mdi:send" width={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-8 shadow-nl-card">
              <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white mb-6">
                {t("infoTitle")}
              </h3>
              <div className="space-y-5">
                {[
                  { icon: "mdi:email-outline", label: t("emailLabel"), value: "contact@nanolab.tn" },
                  { icon: "mdi:map-marker-outline", label: t("locationLabel"), value: t("location") },
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
          </div>
        </div>
      </div>
    </section>
  );
}
