"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface Props {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },    visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 },   visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -50 },   visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 },    visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
};

export default function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  className = "",
  once = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  // once=false → bidirectional (re-triggers on scroll up too)
  const inView = useInView(ref, { once, margin: "0px 0px -60px 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
