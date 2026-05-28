"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const steps = [
  { num: "01", icon: "🤝", title: "Input Isyarat BISINDO", desc: "Pasien tunarungu melakukan gerakan bahasa isyarat BISINDO di depan kamera. Sistem menerima input berupa video (kata) atau gambar (abjad A–Z)." },
  { num: "02", icon: "🎯", title: "Deteksi MediaPipe", desc: "MediaPipe mengekstraksi 21 titik koordinat tangan (sendi & telapak) dan 468 titik wajah menjadi data numerik (x, y, z) secara real-time." },
  { num: "03", icon: "🧠", title: "Analisis Deep Learning", desc: "LSTM menganalisis gerakan dinamis (video kata medis), CNN menganalisis gestur statis (gambar abjad). Preprocessing normalisasi invarian posisi." },
  { num: "04", icon: "📢", title: "Output Teks & Suara", desc: "Sistem menghasilkan terjemahan teks real-time yang dapat dibaca dokter, disertai output suara opsional untuk komunikasi lebih lancar." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 bg-gradient-to-b from-dark to-dark2">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up" className="text-center mb-18">
          <p className="text-[11px] uppercase tracking-[3px] text-teal font-bold mb-3">Cara Kerja</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-1.5px] mb-4">
            Bagaimana MedSign Bekerja?
          </h2>
          <p className="text-[17px] text-white/60 leading-[1.75] max-w-xl mx-auto">
            Proses penerjemahan BISINDO berlangsung dalam 4 tahap terintegrasi secara real-time di dalam fasilitas kesehatan.
          </p>
        </AnimateOnScroll>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-18">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-teal via-blue to-navy opacity-30 z-0" />

          {steps.map((s, i) => (
            <AnimateOnScroll key={s.num} direction="up" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10, borderColor: "rgba(57,206,221,0.35)" }}
                className="relative z-10 bg-white/[0.03] border border-teal/10 rounded-3xl p-7 text-center transition-all duration-300 h-full"
                style={{ boxShadow: "none" }}
                whileHover-boxShadow="0 8px 40px rgba(57,206,221,.18)"
              >
                <div className="w-14 h-14 rounded-full grad-bg flex items-center justify-center text-lg font-extrabold font-mono mx-auto mb-5 shadow-[0_8px_24px_rgba(57,206,221,.4)]">
                  {s.num}
                </div>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-[15px] font-bold mb-2.5">{s.title}</h3>
                <p className="text-[13px] text-white/52 leading-[1.65]">{s.desc}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
