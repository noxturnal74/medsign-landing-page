"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import DolphinSVG from "./DolphinSVG";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Dolphin FAB → scroll to demo */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full grad-bg flex items-center justify-center animate-float-pulse shadow-[0_8px_32px_rgba(57,206,221,.4)]"
        aria-label="Tanya Signi AI"
        title="Tanya Signi AI"
      >
        <DolphinSVG size={28} />
      </motion.button>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-28 right-8 z-50 w-10 h-10 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal hover:bg-teal/25 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
