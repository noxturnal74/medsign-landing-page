"use client";
import { motion } from "framer-motion";

interface DolphinSVGProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

export default function DolphinSVG({ size = 40, animate = false, className = "" }: DolphinSVGProps) {
  const Wrapper = animate ? motion.div : "div";
  const animProps = animate
    ? {
        animate: { y: [0, -16, -7, -18, 0], rotate: [-3, 0, 3, 0, -3] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }
    : {};

  return (
    <Wrapper className={className} {...(animProps as object)}>
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="dg1" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#39cedd" />
            <stop offset="100%" stopColor="#4a9bd7" />
          </linearGradient>
          <linearGradient id="dg2" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#48BED9" />
            <stop offset="100%" stopColor="#172D9D" />
          </linearGradient>
        </defs>
        <ellipse cx="38" cy="44" rx="28" ry="16" fill="url(#dg1)" opacity=".9" />
        <path d="M10 44 Q6 36 14 30 Q20 26 28 28" stroke="url(#dg1)" strokeWidth="3" fill="none" />
        <ellipse cx="28" cy="30" rx="14" ry="10" fill="url(#dg1)" />
        <path d="M42 26 Q52 18 60 24 Q64 28 58 32" fill="url(#dg1)" />
        <circle cx="22" cy="28" r="3" fill="#060e1e" />
        <circle cx="23" cy="27" r="1" fill="white" />
        <path d="M66 30 Q72 28 68 38 Q74 36 70 44" fill="url(#dg1)" opacity=".8" />
        <path d="M38 58 Q32 64 22 60 Q28 68 40 62" fill="url(#dg2)" opacity=".7" />
      </svg>
    </Wrapper>
  );
}
