"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion";

const ROAD_PATH =
  "M120,100 C220,180 260,260 280,380 C300,480 140,560 110,680 C90,760 250,860 290,980";

const MILESTONES = [12, 37, 62, 87];

interface RoadmapPathProps {
  stepTitles: string[];
}

export default function RoadmapPath({ stepTitles }: RoadmapPathProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.3"],
  });

  const dashOffset = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const headDistance = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(headDistance, "change", (latest) => {
    const segment = 100 / stepTitles.length;
    const idx = Math.min(stepTitles.length - 1, Math.floor(latest / segment));
    setActiveIndex(idx);
  });

  const trail1 = useTransform(headDistance, (v) => Math.max(0, v - 3));
  const trail2 = useTransform(headDistance, (v) => Math.max(0, v - 6));
  const trail3 = useTransform(headDistance, (v) => Math.max(0, v - 9));

  const headOffset = useMotionTemplate`${headDistance}%`;
  const trail1Offset = useMotionTemplate`${trail1}%`;
  const trail2Offset = useMotionTemplate`${trail2}%`;
  const trail3Offset = useMotionTemplate`${trail3}%`;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <svg viewBox="0 0 400 1200" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
        <path d={ROAD_PATH} fill="none" stroke="currentColor" className="text-nl-accent/15" strokeWidth="2" />
        <motion.path
          d={ROAD_PATH}
          fill="none"
          stroke="currentColor"
          className="text-nl-accent"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>

      {MILESTONES.map((p) => {
        const opacity = useTransform(headDistance, [p - 6, p], [0.15, 1]);
        return (
          <motion.div
            key={p}
            className="absolute w-1.5 h-1.5 rounded-full bg-nl-accent"
            style={{ offsetPath: `path('${ROAD_PATH}')`, offsetDistance: `${p}%`, opacity }}
          />
        );
      })}

      <motion.div
        className="absolute w-2 h-2 rounded-full bg-nl-accent/30 blur-[2px]"
        style={{ offsetPath: `path('${ROAD_PATH}')`, offsetDistance: trail3Offset }}
      />
      <motion.div
        className="absolute w-2.5 h-2.5 rounded-full bg-nl-accent/50 blur-[1px]"
        style={{ offsetPath: `path('${ROAD_PATH}')`, offsetDistance: trail2Offset }}
      />
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-nl-accent/75"
        style={{ offsetPath: `path('${ROAD_PATH}')`, offsetDistance: trail1Offset }}
      />
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-nl-accent shadow-[0_0_16px_4px_rgba(50,199,207,0.6)]"
        style={{ offsetPath: `path('${ROAD_PATH}')`, offsetDistance: headOffset }}
      />

      <motion.div
        className="absolute px-3 py-1 rounded-nl-badge bg-nl-primary dark:bg-nl-dark-card border border-nl-accent/40 shadow-lg whitespace-nowrap"
        style={{ offsetPath: `path('${ROAD_PATH}')`, offsetDistance: headOffset, offsetRotate: "0deg", marginLeft: "20px", marginTop: "-10px" }}
      >
        <span className="font-dm font-bold text-[11px] text-nl-accent">
          {stepTitles[activeIndex]}
        </span>
      </motion.div>
    </div>
  );
}