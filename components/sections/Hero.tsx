"use client";
import { motion } from "framer-motion";
import { ArrowDown, Bot } from "lucide-react";
import Counter from "@/components/Counter";
import ChatBot from "@/components/ChatBot";
import Particles from "@/components/Particles";

const stats = [
  { value: 0.4,  suffix: "%", isFloat: true,  label: "Populasi Indonesia\nTunarungu (BPS 2023)" },
  { value: 64.7, suffix: "%", isFloat: true,  label: "Kesulitan Akses\nLayanan Kesehatan" },
  { value: 200,  prefix: "±", isFloat: false, label: "Kosakata Medis\nBISINDO Dikenali" },
  { value: 90,   suffix: "%", isFloat: false, label: "Target Akurasi\nSistem" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 20%,rgba(57,206,221,.2) 0%,rgba(74,155,215,.12) 40%,transparent 70%)," +
            "radial-gradient(ellipse 60% 80% at 85% 85%,rgba(23,45,157,.3) 0%,transparent 60%)," +
            "radial-gradient(ellipse 50% 50% at 10% 80%,rgba(120,124,254,.12) 0%,transparent 60%)," +
            "#060e1e",
        }}
      />
      <div className="absolute inset-0 z-0 hero-grid-bg" />
      <Particles />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl">
        {/* LEFT */}
        <div>
          <motion.div {...fadeUp(0)} className="mb-7">
            <span className="inline-flex items-center gap-2 bg-teal/10 border border-teal/28 text-teal px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              🏆 PKM-KC 2026 · Universitas Ma Chung
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-[clamp(2.6rem,5vw,4.8rem)] font-extrabold leading-[1.06] tracking-[-2.5px] mb-6"
          >
            Komunikasi<br />
            <span className="grad-text">Tanpa Batas</span><br />
            untuk Semua Pasien
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-[17px] text-white/65 leading-[1.75] max-w-[520px] mb-10">
            MedSign mendeteksi Bahasa Isyarat Indonesia (BISINDO) secara{" "}
            <strong className="text-white">real-time</strong> menggunakan Computer Vision &amp; Deep
            Learning — menjembatani tenaga medis dan pasien tunarungu tanpa hambatan.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3.5 mb-14">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-2 grad-bg text-white px-8 py-4 rounded-full text-[15px] font-bold glow-teal hover:-translate-y-1 hover:glow-teal-lg transition-all duration-200"
            >
              🔍 Pelajari MedSign
            </a>
            <a
              href="#demo"
              onClick={(e) => { e.preventDefault(); document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-2 text-teal border-2 border-teal/45 px-8 py-4 rounded-full text-[15px] font-bold hover:border-teal hover:bg-teal/10 hover:-translate-y-1 transition-all duration-200"
            >
              <Bot size={16} /> Tanya Dofi AI
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, borderColor: "rgba(57,206,221,0.4)" }}
                className="bg-white/4 border border-teal/14 rounded-[18px] p-5 transition-all duration-300 cursor-default"
              >
                <div className="font-extrabold font-mono text-[2rem] leading-none grad-text">
                  <Counter
                    target={s.value}
                    suffix={s.suffix ?? ""}
                    prefix={s.prefix ?? ""}
                    isFloat={s.isFloat}
                  />
                </div>
                <div className="text-[12px] text-white/50 mt-1.5 leading-[1.5] whitespace-pre-line">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Chatbot */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChatBot compact chatId="hero" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs"
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
