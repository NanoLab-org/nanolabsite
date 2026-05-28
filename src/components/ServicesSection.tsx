"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const icons = ["mdi:rocket-launch-outline", "mdi:trending-up", "mdi:account-group-outline"];

export default function ServicesSection() {
  const t = useTranslations("services");
  const items = t.raw("items") as Array<{
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    cta: string;
  }>;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="relative bg-white dark:bg-nl-dark px-6 lg:px-8 py-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-nl-accent/[0.03] rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-nl-primary/[0.03] rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
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
          {items.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-8 shadow-nl-card flex flex-col transition-shadow hover:shadow-nl-glow"
            >
              <div className="w-14 h-14 bg-nl-accent/10 rounded-nl-icon flex items-center justify-center mb-6">
                <Icon icon={icons[index]} className="text-nl-accent" width={28} height={28} />
              </div>

              <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="font-dm font-medium text-sm text-nl-accent mb-4">
                {service.subtitle}
              </p>
              <p className="font-dm font-medium text-[15px] leading-normal text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-nl-accent rounded-full mt-2 shrink-0" />
                    <span className="font-dm text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="mt-auto border border-nl-accent text-nl-primary dark:text-white rounded-nl-btn font-dm font-bold text-sm w-full text-center py-3 transition-colors hover:bg-nl-accent/10"
              >
                {service.cta}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
