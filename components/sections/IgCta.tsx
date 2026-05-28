"use client";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function IgCta() {
  return (
    <section id="ig-cta" className="py-24 border-y border-teal/10 bg-gradient-to-br from-teal/7 to-navy/10">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <AnimateOnScroll direction="up">
          <div className="text-5xl mb-5">📱</div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold mb-3">
            Ikuti Perjalanan MedSign
          </h2>
          <p className="text-[16px] text-white/55 mb-7">
            Update terbaru, behind the scenes pengembangan, dan milestone PKM-KC 2026 ada di Instagram kami!
          </p>
          <span className="block text-[22px] font-extrabold text-teal font-mono mb-7">
            @medsign.pkmkc
          </span>
          <motion.a
            href="https://www.instagram.com/medsign.pkmkc/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 grad-bg text-white px-8 py-4 rounded-full text-[15px] font-bold glow-teal"
          >
            <Instagram size={18} /> Follow di Instagram
          </motion.a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
