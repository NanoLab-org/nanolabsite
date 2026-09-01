function generateRibbonPath(rungCount: number, width: number, height: number, amplitude: number, phaseOffset: number, strand: 0 | 1) {
  const centerX = width / 2;
  const points = Array.from({ length: rungCount + 1 }, (_, i) => {
    const y = Number(((i / rungCount) * height).toFixed(2));
    const angle = (i / rungCount) * Math.PI * 2.2 + phaseOffset + (strand === 1 ? Math.PI : 0);
    const x = Number((centerX + Math.sin(angle) * amplitude).toFixed(2));
    return { x, y };
  });

  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = Number(((prev.y + curr.y) / 2).toFixed(2));
    d += ` C${prev.x},${midY} ${curr.x},${midY} ${curr.x},${curr.y}`;
  }
  return { d, points };
}

export function HelixFragment({
  size = 60,
  opacity = 0.35,
  phaseOffset = 0,
}: {
  size?: number;
  opacity?: number;
  phaseOffset?: number;
}) {
  const width = size;
  const height = size * 1.7;
  const amplitude = size * 0.22;
  const rungCount = 7;

  const strandA = generateRibbonPath(rungCount, width, height, amplitude, phaseOffset, 0);
  const strandB = generateRibbonPath(rungCount, width, height, amplitude, phaseOffset, 1);

  const uid = `helix-${size}-${phaseOffset.toString().replace(".", "p")}`;
  const gradId = `${uid}-grad`;
  const glowId = `${uid}-glow`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} style={{ opacity }} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-nl-accent, #32C7CF)" stopOpacity="0.9" />
          <stop offset="50%" stopColor="var(--color-nl-secondary, #7285F2)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--color-nl-accent, #32C7CF)" stopOpacity="0.9" />
        </linearGradient>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#${glowId})`}>
        <path d={strandB.d} fill="none" stroke={`url(#${gradId})`} strokeWidth={size * 0.045} strokeLinecap="round" opacity="0.55" />
        <path d={strandA.d} fill="none" stroke={`url(#${gradId})`} strokeWidth={size * 0.06} strokeLinecap="round" />

        {strandA.points.map((p, i) => (
          <circle key={`a-${i}`} cx={p.x} cy={p.y} r={size * 0.03} fill="var(--color-nl-accent, #32C7CF)" />
        ))}
        {strandB.points.map((p, i) => (
          <circle key={`b-${i}`} cx={p.x} cy={p.y} r={size * 0.025} fill="var(--color-nl-secondary, #7285F2)" opacity="0.7" />
        ))}
      </g>
    </svg>
  );
}

const FRAGMENTS = [
  { top: "2%", left: "3%", size: 55, duration: 16, delay: 0, opacity: 0.35, phase: 0 },
  { top: "16%", left: "9%", size: 44, duration: 13, delay: 1, opacity: 0.4, phase: 1.2 },
  { top: "32%", left: "2%", size: 60, duration: 19, delay: 0.5, opacity: 0.3, phase: 2.1 },
  { top: "48%", left: "8%", size: 46, duration: 12, delay: 1.8, opacity: 0.4, phase: 0.6 },
  { top: "64%", left: "3%", size: 58, duration: 17, delay: 0.3, opacity: 0.32, phase: 3.0 },
  { top: "80%", left: "10%", size: 48, duration: 14, delay: 1.4, opacity: 0.36, phase: 1.7 },

  { top: "4%", left: "88%", size: 52, duration: 15, delay: 0.7, opacity: 0.35, phase: 2.6 },
  { top: "20%", left: "94%", size: 42, duration: 11, delay: 1.6, opacity: 0.42, phase: 0.3 },
  { top: "36%", left: "90%", size: 58, duration: 18, delay: 0.2, opacity: 0.3, phase: 1.9 },
  { top: "52%", left: "95%", size: 48, duration: 13.5, delay: 1.1, opacity: 0.38, phase: 3.4 },
  { top: "68%", left: "89%", size: 54, duration: 16.5, delay: 0.9, opacity: 0.32, phase: 0.9 },
  { top: "84%", left: "93%", size: 44, duration: 12.5, delay: 1.9, opacity: 0.4, phase: 2.3 },
];

export default function HelixFragmentsField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {FRAGMENTS.map((f, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: f.top,
            left: f.left,
            animation: `helix-spin ${f.duration}s linear infinite`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <HelixFragment size={f.size} opacity={f.opacity} phaseOffset={f.phase} />
        </div>
      ))}
    </div>
  );
}