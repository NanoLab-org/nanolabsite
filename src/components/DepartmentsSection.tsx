"use client";


import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const departments = [
  {
    icon: "mdi:code-tags",
    title: "Dev & Tech",
    description:
      "Création d'applications web & mobile innovantes avec les technologies les plus avancées",
    features: [
      "Développement frontend/backend",
      "Architecture cloud native",
      "APIs & microservices",
      "Mobile iOS/Android",
    ],
  },
  {
    icon: "mdi:brain",
    title: "IA & Innovation Lab",
    description:
      "POC, prototypes et industrialisation IA pour transformer vos données en avantage concurrentiel",
    features: [
      "Machine Learning & Deep Learning",
      "Computer Vision & NLP",
      "Recommender Systems",
      "MLOps & déploiement",
    ],
  },
  {
    icon: "mdi:bullhorn-outline",
    title: "Marketing & Communication",
    description:
      "Stratégie digitale et événementiel pour amplifier votre présence et accélérer votre croissance",
    features: [
      "Branding & identité visuelle",
      "Content marketing",
      "Growth hacking",
      "Événements & webinars",
    ],
  },
];

export default function DepartmentsSection() {

  return (
    <section
      id="departements"
      
      className="relative bg-gray-50 dark:bg-nl-dark-surface px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-nl-primary dark:text-white mb-6"
          >
            Nos 3 Départements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
          >
            Une approche intégrée pour transformer vos idées en solutions
            digitales performantes
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.5 } }}
              className="group"
            >
              <div className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 p-10 rounded-nl-card shadow-nl-card dark:shadow-none transition-all duration-500 group-hover:shadow-nl-glow group-hover:border-nl-accent/20 h-full min-h-[420px] flex flex-col">
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 bg-nl-accent/10 rounded-nl-card flex items-center justify-center mx-auto mb-8"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon icon={dept.icon} className="text-nl-accent" width={40} height={40} />
                </motion.div>

                <h3 className="font-syne font-extrabold text-[28px] leading-[1.2] text-nl-primary dark:text-white mb-6 text-center">
                  {dept.title}
                </h3>

                <p className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-10 text-center flex-grow">
                  {dept.description}
                </p>

                <div className="space-y-4">
                  {dept.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + idx * 0.1, duration: 0.6 }}
                    >
                      <div className="w-2 h-2 bg-nl-accent rounded-full mr-4 shrink-0" />
                      <span className="font-dm font-medium text-[15px] leading-normal text-nl-primary dark:text-white">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
