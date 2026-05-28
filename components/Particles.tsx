"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const colors = ["rgba(57,206,221,", "rgba(74,155,215,", "rgba(120,124,254,"];
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 4 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * 0.5 + 0.2;
      const duration = Math.random() * 18 + 10;
      const delay = Math.random() * 15;
      const left = Math.random() * 100;
      p.style.cssText = `
        position:absolute;border-radius:50%;
        width:${size}px;height:${size}px;
        left:${left}%;
        background:${color}${opacity});
        animation:particleFloat ${duration}s linear -${delay}s infinite;
        pointer-events:none;
      `;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach((p) => p.remove());
  }, []);

  return <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" />;
}
