"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

interface DomainItem {
  id: number;
  title: string;
  description?: string;
  icon: string;
}

interface DomainsHelixProps {
  items: DomainItem[];
}

const rungCount = 22;
const height = 520;
const amplitude = 130;
const centerX = 200;

export default function DomainsHelix({ items }: DomainsHelixProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const frameRef = useRef<number | null>(null);
  const phaseRef = useRef(0);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const animate = () => {
      if (isVisibleRef.current) {
        phaseRef.current += 0.012;
        updateHelixDOM(phaseRef.current);
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    const updateHelixDOM = (phase: number) => {
      const svg = svgRef.current;
      if (!svg) return;

      for (let i = 0; i <= rungCount; i++) {
        const angle = (i / rungCount) * Math.PI * 2 + phase;
        const x1 = centerX + Math.sin(angle) * amplitude;
        const x2 = centerX + Math.sin(angle + Math.PI) * amplitude;
        const front1 = (Math.cos(angle) + 1) / 2;
        const front2 = (Math.cos(angle + Math.PI) + 1) / 2;

        const line = svg.querySelector<SVGLineElement>(`[data-rung-line="${i}"]`);
        const c1 = svg.querySelector<SVGCircleElement>(`[data-rung-c1="${i}"]`);
        const c2 = svg.querySelector<SVGCircleElement>(`[data-rung-c2="${i}"]`);

        if (line) {
          line.setAttribute("x1", x1.toFixed(2));
          line.setAttribute("x2", x2.toFixed(2));
        }
        if (c1) {
          c1.setAttribute("cx", x1.toFixed(2));
          c1.setAttribute("opacity", (0.3 + 0.5 * front1).toFixed(2));
        }
        if (c2) {
          c2.setAttribute("cx", x2.toFixed(2));
          c2.setAttribute("opacity", (0.3 + 0.5 * front2).toFixed(2));
        }
      }

      const step = rungCount / items.length;
      items.forEach((item, idx) => {
        const i = idx * step + step / 2;
        const angle = (i / rungCount) * Math.PI * 2 + phase;
        const x = centerX + Math.sin(angle) * amplitude;
        const front = (Math.cos(angle) + 1) / 2;
        const scale = 0.85 + 0.35 * front;
        const y = (i / rungCount) * height;

        const g = svg.querySelector<SVGGElement>(`[data-item="${item.id}"]`);
        if (g) {
          g.setAttribute("transform", `translate(${x.toFixed(2)}, ${y.toFixed(2)}) scale(${scale.toFixed(3)})`);
        }
      });
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
  }, [items]);

  const initialRungs = Array.from({ length: rungCount + 1 }, (_, i) => {
    const angle = (i / rungCount) * Math.PI * 2;
    const y = (i / rungCount) * height;
    const x1 = centerX + Math.sin(angle) * amplitude;
    const x2 = centerX + Math.sin(angle + Math.PI) * amplitude;
    return { i, y, x1, x2 };
  });

  const step = rungCount / items.length;

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center">
      <svg
        ref={svgRef}
        viewBox={`0 0 400 ${height}`}
        className="w-full max-w-lg"
        style={{ height: `${height}px` }}
      >
        {initialRungs.map((r) => (
          <g key={r.i}>
            <line
              data-rung-line={r.i}
              x1={r.x1}
              y1={r.y}
              x2={r.x2}
              y2={r.y}
              stroke="currentColor"
              className="text-nl-accent/15"
              strokeWidth="1"
            />
            <circle data-rung-c1={r.i} cx={r.x1} cy={r.y} r="3" fill="currentColor" className="text-nl-accent" />
            <circle data-rung-c2={r.i} cx={r.x2} cy={r.y} r="3" fill="currentColor" className="text-nl-accent" />
          </g>
        ))}

        {items.map((item, idx) => {
          const i = idx * step + step / 2;
          const y = (i / rungCount) * height;
          const expanded = expandedId === item.id;

          return (
            <g
              key={item.id}
              data-item={item.id}
              transform={`translate(${centerX}, ${y})`}
              className="cursor-pointer"
              onClick={() => setExpandedId(expanded ? null : item.id)}
            >
              <circle
                r="20"
                fill="currentColor"
                className={expanded ? "text-nl-accent" : "text-white dark:text-nl-dark-card"}
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle r="20" fill="none" stroke="currentColor" className="text-nl-accent/40" strokeWidth="2" />
              <foreignObject x="-11" y="-11" width="22" height="22">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon
                    icon={item.icon}
                    width={18}
                    height={18}
                    className={expanded ? "text-nl-primary" : "text-nl-accent"}
                  />
                </div>
              </foreignObject>
              <text
                y="36"
                textAnchor="middle"
                className="fill-nl-primary dark:fill-white font-dm font-semibold"
                style={{ fontSize: "11px" }}
              >
                {item.title}
              </text>
            </g>
          );
        })}
      </svg>

      {expandedId !== null && (
        <div className="mt-2 w-full max-w-sm bg-white dark:bg-nl-dark-card border border-gray-200/60 dark:border-white/15 rounded-nl-card p-5 shadow-lg text-center animate-in fade-in duration-300">
          {(() => {
            const active = items.find((i) => i.id === expandedId);
            if (!active) return null;
            return (
              <>
                <div className="w-10 h-10 bg-nl-accent/10 rounded-nl-icon flex items-center justify-center mx-auto mb-3">
                  <Icon icon={active.icon} className="text-nl-accent" width={20} height={20} />
                </div>
                <h4 className="font-syne font-extrabold text-base text-nl-primary dark:text-white mb-1">
                  {active.title}
                </h4>
                <p className="font-dm text-sm text-gray-600 dark:text-gray-300">
                  {active.description}
                </p>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}