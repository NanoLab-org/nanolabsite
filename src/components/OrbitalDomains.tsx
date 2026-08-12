"use client";

import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface OrbitalItem {
  id: number;
  title: string;
  description?: string;
  icon: string;
  relatedIds?: number[];
}

interface OrbitalDomainsProps {
  items: OrbitalItem[];
}

export default function OrbitalDomains({ items }: OrbitalDomainsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedId(null);
      setAutoRotate(true);
    }
  };

  const centerViewOnNode = (id: number) => {
    const nodeIndex = items.findIndex((item) => item.id === id);
    if (nodeIndex === -1) return;
    const targetAngle = (nodeIndex / items.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      setAutoRotate(true);
    } else {
      setExpandedId(id);
      setAutoRotate(false);
      centerViewOnNode(id);
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (autoRotate) {
      timer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
      }, 50);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoRotate]);

  const calculatePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 190;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.45, Math.min(1, 0.45 + 0.55 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, zIndex, opacity };
  };

  const isRelated = (id: number) => {
    if (expandedId === null) return false;
    const current = items.find((i) => i.id === expandedId);
    return current?.relatedIds?.includes(id) ?? false;
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full h-[560px] md:h-[640px] flex items-center justify-center overflow-hidden rounded-nl-card border border-nl-accent/30 bg-gradient-to-br from-nl-accent/25 via-nl-secondary/20 to-nl-primary/30 backdrop-blur-xl"
    >

      <div
        ref={orbitRef}
        className="absolute w-full h-full flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute w-14 h-14 rounded-full bg-nl-accent/80 flex items-center justify-center z-10">
          <div className="absolute w-20 h-20 rounded-full border border-nl-accent/30 animate-ping opacity-60" />
          <div className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-md" />
        </div>

        <div className="absolute w-[380px] h-[380px] rounded-full border border-white/10" />

        {items.map((item, index) => {
          const pos = calculatePosition(index, items.length);
          const expanded = expandedId === item.id;
          const related = isRelated(item.id);

          return (
            <div
              key={item.id}
              className="absolute transition-all duration-700 cursor-pointer"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                zIndex: expanded ? 200 : pos.zIndex,
                opacity: expanded ? 1 : pos.opacity,
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  expanded
                    ? "bg-nl-accent text-nl-primary border-nl-accent scale-125 shadow-lg shadow-nl-accent/40"
                    : related
                    ? "bg-nl-accent/50 text-nl-primary border-nl-accent animate-pulse"
                    : "bg-white/60 text-nl-primary border-white/60"
                }`}
              >
                <Icon icon={item.icon} width={22} height={22} />
              </div>

              <div
                className={`absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-dm font-semibold tracking-wide text-center transition-all duration-300 ${
                  expanded ? "text-nl-primary scale-110" : "text-nl-primary/80"
                }`}
              >
                {item.title}
              </div>

              {expanded && (
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-64 bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/15 rounded-nl-card shadow-xl overflow-hidden">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-2 bg-white/40" />

                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-white/10 bg-nl-accent/5">
                    <div className="w-9 h-9 rounded-nl-icon bg-nl-accent/10 flex items-center justify-center shrink-0">
                      <Icon icon={item.icon} className="text-nl-accent" width={18} height={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-dm font-bold text-[11px] tracking-widest uppercase text-nl-accent">
                        Domaine 0{item.id}
                      </span>
                      <h4 className="font-syne font-extrabold text-sm text-nl-primary dark:text-white truncate">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <div className="px-4 py-4">
                    <p className="font-dm text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}