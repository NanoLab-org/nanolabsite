"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const icons = ["mdi:rocket-launch-outline", "mdi:trending-up", "mdi:account-group-outline"];

interface OfferItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
}

interface OffersTabsProps {
  items: OfferItem[];
}

export default function OffersTabs({ items }: OffersTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const goTo = (index: number) => {
    setActiveIndex((index + items.length) % items.length);
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-8 mb-10 border-b border-gray-200/60 dark:border-white/10">
        {items.map((item, index) => (
          <button
            key={item.title}
            onClick={() => setActiveIndex(index)}
            className={`relative font-dm font-bold text-sm uppercase tracking-wide pb-4 transition-colors ${
              activeIndex === index
                ? "text-nl-accent"
                : "text-gray-500 dark:text-gray-400 hover:text-nl-primary dark:hover:text-white"
            }`}
          >
            {item.title}
            <span
              className={`absolute left-0 -bottom-px h-0.5 bg-nl-accent transition-all duration-300 ${
                activeIndex === index ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => goTo(activeIndex - 1)}
          className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center rounded-full border border-gray-200/60 dark:border-white/10 text-nl-primary dark:text-white hover:border-nl-accent hover:text-nl-accent transition-colors"
          aria-label="Previous offer"
        >
          <Icon icon="mdi:chevron-left" width={22} />
        </button>

        <div className="flex-1 grid">
          {items.map((item, index) => (
            <div
              key={item.title}
              aria-hidden={activeIndex !== index}
              className={`[grid-area:1/1] transition-opacity duration-300 bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/10 rounded-nl-card p-8 lg:p-10 shadow-nl-card ${
                activeIndex === index
                  ? "opacity-100 pointer-events-auto relative z-10"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="w-14 h-14 bg-nl-accent/10 rounded-nl-icon flex items-center justify-center mb-6 mx-auto">
                <Icon icon={icons[index]} className="text-nl-accent" width={28} height={28} />
              </div>

              <h3 className="font-syne font-extrabold text-2xl leading-[1.3] text-nl-primary dark:text-white mb-2 text-center">
                {item.title}
              </h3>
              <p className="font-dm font-medium text-sm text-nl-accent mb-4 text-center">
                {item.subtitle}
              </p>
              <p className="font-dm font-medium text-[15px] leading-normal text-gray-600 dark:text-gray-300 mb-6 text-center max-w-2xl mx-auto">
                {item.description}
              </p>

              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-nl-accent rounded-full shrink-0" />
                    <span className="font-dm text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center">
                <button
                  onClick={scrollToContact}
                  className="border border-nl-accent text-nl-primary dark:text-white rounded-nl-btn font-dm font-bold text-sm px-8 py-3 transition-colors hover:bg-nl-accent/10"
                >
                  {item.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => goTo(activeIndex + 1)}
          className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center rounded-full border border-gray-200/60 dark:border-white/10 text-nl-primary dark:text-white hover:border-nl-accent hover:text-nl-accent transition-colors"
          aria-label="Next offer"
        >
          <Icon icon="mdi:chevron-right" width={22} />
        </button>
      </div>
    </div>
  );
}