"use client";


import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const aiCapabilities = [
  {
    icon: "mdi:chat-outline",
    title: "Natural Language Processing",
    description: "Chatbots intelligents, analyse de sentiment, traduction automatique",
  },
  {
    icon: "mdi:eye-outline",
    title: "Computer Vision",
    description: "Reconnaissance d'objets, OCR, analyse d'images médicales",
  },
  {
    icon: "mdi:chart-bar",
    title: "Recommender Systems",
    description: "Personnalisation, systèmes de recommandation, prédiction comportementale",
  },
  {
    icon: "mdi:brain",
    title: "Assistants IA",
    description: "Agents conversationnels, automatisation intelligente, support client",
  },
];

const principles = [
  {
    icon: "mdi:shield-lock-outline",
    title: "Privacy by Design",
    description: "Protection des données personnelles et conformité RGPD native",
  },
  {
    icon: "mdi:chart-line",
    title: "Évaluation Continue",
    description: "Métriques de performance, A/B testing et monitoring en temps réel",
  },
  {
    icon: "mdi:flash-outline",
    title: "MLOps",
    description: "Déploiement automatisé, versioning des modèles, CI/CD pour l'IA",
  },
];

export default function AILabSection() {

  return (
    <section
      id="lab-ia"
      
      className="relative bg-nl-primary px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-white mb-4"
          >
            Le Lab IA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-white/60 max-w-3xl mx-auto"
          >
            Notre laboratoire d&apos;innovation pour développer des solutions IA
            sur mesure
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* AI Capabilities */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-syne font-extrabold text-2xl leading-[1.3] text-white mb-8"
            >
              Types de Projets IA
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aiCapabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-nl-card border border-white/20 hover:border-nl-accent/40 transition-all shadow-lg"
                >
                  <Icon icon={cap.icon} className="text-nl-accent mb-4" width={32} height={32} />
                  <h4 className="font-dm font-bold text-[15px] leading-normal text-white mb-2">
                    {cap.title}
                  </h4>
                  <p className="font-dm text-sm text-white/60">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-syne font-extrabold text-2xl leading-[1.3] text-white mb-8"
            >
              Nos Principes
            </motion.h3>
            <div className="space-y-6">
              {principles.map((p, index) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-nl-card border border-white/20"
                >
                  <div className="w-12 h-12 bg-nl-accent/20 border border-nl-accent/30 rounded-nl-icon flex items-center justify-center shrink-0">
                    <Icon icon={p.icon} className="text-nl-accent" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-dm font-bold text-[15px] leading-normal text-white mb-2">
                      {p.title}
                    </h4>
                    <p className="font-dm text-sm text-white/60">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white/10 backdrop-blur-md p-8 rounded-nl-card border border-white/20 shadow-nl-glow"
        >
          <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-white mb-4">
            Prêt à explorer l&apos;IA pour votre entreprise ?
          </h3>
          <p className="font-dm font-medium text-[15px] leading-normal text-white/60 mb-6 max-w-2xl mx-auto">
            Nous commençons toujours par un POC pour valider la faisabilité
            technique et l&apos;impact business avant l&apos;industrialisation.
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-nl-accent text-nl-primary shadow-nl-btn rounded-nl-btn font-dm font-bold text-sm px-8 py-3 transition-opacity hover:opacity-90"
          >
            Discuter de votre projet IA
          </button>
        </motion.div>
      </div>
    </section>
  );
}
