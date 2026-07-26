"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const icons = ["mdi:code-tags", "mdi:brain", "mdi:bullhorn-outline"];

interface DepartmentItem {
  title: string;
  description: string;
  features: string[];
}

interface DepartmentsCardsProps {
  items: DepartmentItem[];
}

export default function DepartmentsCards({ items }: DepartmentsCardsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {items.map((dept, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
          className="group h-full"
        >
          <div className="bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 p-10 rounded-nl-card shadow-nl-card dark:shadow-[0_0_15px_rgba(50,199,207,0.15)] transition-all duration-500 group-hover:shadow-nl-glow group-hover:border-nl-accent/20 h-full flex flex-col overflow-hidden">
            <motion.div
              className="w-20 h-20 bg-nl-accent/10 rounded-nl-card flex items-center justify-center mx-auto mb-8"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.5 }}
            >
              <Icon icon={icons[index]} className="text-nl-accent" width={40} height={40} />
            </motion.div>

            <h3 className="font-syne font-extrabold text-[28px] leading-[1.2] text-nl-primary dark:text-white mb-6 text-center break-words">
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
  );
}