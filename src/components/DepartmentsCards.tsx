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
          className="h-[420px]"
          style={{ perspective: "1200px" }}
        >
          <div className="group relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out [transform:rotateY(0deg)] hover:[transform:rotateY(180deg)]">
            {/* Face avant */}
            <div className="absolute inset-0 [backface-visibility:hidden] bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card shadow-nl-card flex flex-col items-center justify-center p-10 text-center">
              <div className="w-20 h-20 bg-nl-accent/10 rounded-nl-card flex items-center justify-center mb-8">
                <Icon icon={icons[index]} className="text-nl-accent" width={40} height={40} />
              </div>
              <h3 className="font-syne font-extrabold text-[28px] leading-[1.2] text-nl-primary dark:text-white">
                {dept.title}
              </h3>
              <span className="mt-6 font-dm text-xs text-gray-400 dark:text-gray-500">
                Survolez pour en savoir plus
              </span>
            </div>

            {/* Face arrière */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-nl-primary dark:bg-nl-dark-card border border-nl-accent/30 rounded-nl-card shadow-nl-glow flex flex-col p-8 overflow-y-auto">
              <div className="w-14 h-14 bg-nl-accent/15 rounded-nl-icon flex items-center justify-center mb-5 shrink-0">
                <Icon icon={icons[index]} className="text-nl-accent" width={26} height={26} />
              </div>
              <h3 className="font-syne font-extrabold text-xl text-white mb-4">
                {dept.title}
              </h3>
              <p className="font-dm text-sm leading-relaxed text-white/70 mb-6">
                {dept.description}
              </p>
              <div className="space-y-3 mt-auto">
                {dept.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-nl-accent rounded-full mr-3 shrink-0" />
                    <span className="font-dm text-sm text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}