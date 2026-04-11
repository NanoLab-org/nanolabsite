"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const carouselContent = [
  {
    title: "Notre Mission",
    subtitle: "CEO & AI Lead",
    content: [
      "NanoLab existe pour transformer les idées innovantes en solutions digitales performantes. Nous croyons que chaque entreprise mérite d'avoir accès aux meilleures technologies pour accélérer sa croissance.",
      "Fondée à Tunis avec une vision internationale, notre équipe combine expertise technique, créativité design et stratégie business pour livrer des projets qui dépassent les attentes.",
    ],
    founder: "DRIDI Yassine",
    initials: "DY",
    role: "Fondateur",
  },
  {
    title: "Notre Vision",
    subtitle: "Tech Lead",
    content: [
      "Nous développons des solutions techniques innovantes et scalables qui propulsent votre business vers l'avenir. Notre expertise couvre le développement web, mobile, l'intelligence artificielle et l'architecture cloud.",
      "Avec une approche centrée sur la performance et la qualité du code, nous construisons des applications robustes qui évoluent avec vos besoins.",
    ],
    founder: "Mimouni Med Aziz",
    initials: "MA",
    role: "Tech Lead",
  },
  {
    title: "Stratégie Marketing",
    subtitle: "Marketing Lead",
    content: [
      "Nous élaborons des stratégies marketing digitales data-driven qui génèrent des résultats mesurables. De l'acquisition client à la fidélisation, nous optimisons chaque étape de votre funnel de conversion.",
      "Notre approche combine créativité, analyse comportementale et technologies marketing pour maximiser votre ROI et accélérer votre croissance.",
    ],
    founder: "Mariem Said",
    initials: "MS",
    role: "Marketing Lead",
  },
];

const values = [
  {
    icon: "mdi:target",
    title: "Excellence",
    description:
      "Nous visons la perfection dans chaque ligne de code et chaque pixel de design.",
  },
  {
    icon: "mdi:heart-outline",
    title: "Passion",
    description:
      "Notre équipe est animée par la passion de créer des solutions qui font la différence.",
  },
  {
    icon: "mdi:lightbulb-outline",
    title: "Innovation",
    description:
      "Nous restons à la pointe des technologies pour offrir des solutions d'avant-garde.",
  },
];

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = carouselContent[currentIndex];
  const next = () => setCurrentIndex((i) => (i + 1) % carouselContent.length);
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + carouselContent.length) % carouselContent.length);

  return (
    <section
      id="a-propos"
      
      className="relative bg-gray-50 dark:bg-nl-dark-surface px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-nl-primary dark:text-white mb-4"
          >
            À Propos de NanoLab
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dm font-medium text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Une équipe passionnée au service de votre transformation digitale
          </motion.p>
        </div>

        {/* Carousel + Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.h3
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-syne font-extrabold text-[28px] leading-[1.2] text-nl-primary dark:text-white mb-6"
            >
              {current.title}
            </motion.h3>

            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              {current.content.map((p, i) => (
                <p key={i} className="font-dm font-medium text-[15px] leading-normal text-gray-600 dark:text-gray-300">
                  {p}
                </p>
              ))}
            </motion.div>

            {/* Founder */}
            <div className="mt-8">
              <h4 className="font-dm font-bold text-sm text-nl-primary dark:text-white mb-4">
                {current.role}
              </h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-nl-accent/10 rounded-nl-icon flex items-center justify-center">
                  <motion.span
                    key={`init-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-dm font-semibold text-nl-accent"
                  >
                    {current.initials}
                  </motion.span>
                </div>
                <div>
                  <motion.p
                    key={`name-${currentIndex}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-dm font-bold text-sm text-nl-primary dark:text-white"
                  >
                    {current.founder}
                  </motion.p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      className="p-1 text-gray-600 dark:text-gray-300 hover:text-nl-accent transition-colors"
                      aria-label="Précédent"
                    >
                      <Icon icon="mdi:chevron-left" width={16} />
                    </button>
                    <span className="font-dm text-sm text-gray-600 dark:text-gray-300 min-w-[120px] text-center">
                      {current.subtitle}
                    </span>
                    <button
                      onClick={next}
                      className="p-1 text-gray-600 dark:text-gray-300 hover:text-nl-accent transition-colors"
                      aria-label="Suivant"
                    >
                      <Icon icon="mdi:chevron-right" width={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-square bg-white dark:bg-nl-dark-card rounded-nl-card border border-gray-200/60 dark:border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-nl-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-nl-glow">
                  <span className="text-white font-syne font-extrabold text-3xl">N</span>
                </div>
                <p className="font-dm font-medium text-gray-600 dark:text-gray-300">
                  Innovation · Expertise · Results
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <h3 className="font-syne font-extrabold text-[28px] leading-[1.2] text-nl-primary dark:text-white text-center mb-12">
            Nos Valeurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-8 shadow-nl-card text-center"
              >
                <div className="w-16 h-16 bg-nl-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon={value.icon} className="text-nl-accent" width={32} height={32} />
                </div>
                <h4 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white mb-4">
                  {value.title}
                </h4>
                <p className="font-dm font-medium text-[15px] leading-normal text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
