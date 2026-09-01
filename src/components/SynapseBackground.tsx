"use client";

import { useRef, useEffect } from "react";

interface Pulse {
  start: NodeParticle;
  end: NodeParticle;
  progress: number;
  speed: number;
  update(): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

class PulseImpl implements Pulse {
  start: NodeParticle;
  end: NodeParticle;
  progress = 0;
  speed = 0.03;

  constructor(s: NodeParticle, e: NodeParticle) {
    this.start = s;
    this.end = e;
  }

  update() {
    this.progress += this.speed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const x = this.start.x + (this.end.x - this.start.x) * this.progress;
    const y = this.start.y + (this.end.y - this.start.y) * this.progress;
    ctx.beginPath();
    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fill();
  }
}

class NodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: NodeParticle[] = [];
  pulses: Pulse[] = [];
  activation = 0;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 1.8 + 1.5;
  }

  update(width: number, height: number, mouse: { x: number; y: number }, connectionRadius: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.hypot(dx, dy);
    const target = Math.max(0, 1 - dist / (connectionRadius * 0.8));
    this.activation += (target - this.activation) * 0.1;

    if (this.activation > 0.5 && Math.random() > 0.98 && this.connections.length > 0) {
      const to = this.connections[Math.floor(Math.random() * this.connections.length)];
      if (to) this.pulses.push(new PulseImpl(this, to));
    }

    this.pulses = this.pulses.filter((p) => p.progress < 1);
    this.pulses.forEach((p) => p.update());
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    const alpha = Math.max(0.25, this.activation);
    ctx.fillStyle = `rgba(50,199,207,${alpha})`;
    ctx.fill();

    this.pulses.forEach((p) => p.draw(ctx));
  }
}

interface SynapseBackgroundProps {
  nodeCount?: number;
  connectionRadius?: number;
  trailOpacity?: number;
}

export default function SynapseBackground({
  nodeCount = 45,
  connectionRadius = 160,
  trailOpacity = 0.18,
}: SynapseBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let nodes: NodeParticle[] = [];
    const mouse = { x: -9999, y: -9999 };

    const setSize = () => {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
    };

    const initNodes = () => {
      nodes = Array.from({ length: nodeCount }, () => new NodeParticle(width, height));
      nodes.forEach((n1) => {
        nodes.forEach((n2) => {
          if (n1 !== n2) {
            const d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
            if (d < connectionRadius) n1.connections.push(n2);
          }
        });
      });
    };

    setSize();
    initNodes();

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      setSize();
      initNodes();
    };

    window.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    const animate = () => {
      if (!isVisibleRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = `rgba(13,21,37,${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((n1) => {
        n1.connections.forEach((n2) => {
          const a = Math.max(0.04, n1.activation, n2.activation) * 0.25;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = `rgba(50,199,207,${a})`;
          ctx.stroke();
        });
      });

      nodes.forEach((n) => {
        n.update(width, height, mouse, connectionRadius);
        n.draw(ctx);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [nodeCount, connectionRadius, trailOpacity]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full block" />
    </div>
  );
}