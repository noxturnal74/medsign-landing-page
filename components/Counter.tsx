"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  isFloat?: boolean;
  duration?: number;
  className?: string;
}

export default function Counter({ target, suffix = "", prefix = "", isFloat = false, duration = 1800, className = "" }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -40px 0px" });

  useEffect(() => {
    if (!inView) { setValue(0); return; }
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(isFloat ? parseFloat((eased * target).toFixed(1)) : Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration, isFloat]);

  return (
    <span ref={ref} className={className}>
      {prefix}{isFloat ? value.toFixed(1) : value}{suffix}
    </span>
  );
}
