"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const techs = [
  { icon: "🎥", name: "MediaPipe", role: "Computer Vision Engine", desc: "Framework Google untuk ekstraksi landmark tangan (21 titik) dan wajah (468 titik) secara real-time. Memungkinkan deteksi gestur yang akurat dan efisien.", tags: ["Google", "Real-time", "Multi-modal"] },
  { icon: "🔁", name: "LSTM", role: "Dynamic Gesture Recognition", desc: "Long Short-Term Memory untuk menganalisis pola urutan gerakan tangan dan ekspresi wajah pada input video kata medis BISINDO secara temporal.", tags: ["Sequential", "Video Input", "±200 Kosakata"] },
  { icon: "🖼️", name: "CNN", role: "Static Gesture Recognition", desc: "Convolutional Neural Network untuk pengenalan abjad BISINDO A–Z dari input gambar. Dioptimalkan untuk deteksi pola koordinat cepat dan akurat.", tags: ["Image Input", "A–Z Abjad", "Fast Inference"] },
  { icon: "🐍", name: "Python & TensorFlow", role: "Backend & Model Training", desc: "Python sebagai bahasa utama pengembangan model. TensorFlow/Keras untuk training, evaluasi, dan deployment model deep learning MedSign.", tags: ["Python", "TensorFlow", "NumPy"] },
  { icon: "🌐", name: "Web Interface", role: "Inclusive UI/UX Platform", desc: "Interface website responsif dan inklusif yang mudah digunakan oleh tenaga medis maupun pasien. Mendukung mode video call split-screen dan PiP.", tags: ["Responsive", "Split-screen", "Accessible"] },
  { icon: "☁️", name: "Cloud & Deployment", role: "Infrastructure & Hosting", desc: "VPS KVM IDCloudHost untuk hosting backend, Cloudflare Pro untuk bandwidth & CDN, Google One Premium untuk penyimpanan dataset dan model.", tags: ["VPS KVM", "Cloudflare", "Google Cloud"] },
];

export default function Technology() {
  return (
    <section id="tech" className="py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up" className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[3px] text-teal font-bold mb-3">Teknologi</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-1.5px] mb-4">
            Stack Teknologi MedSign
          </h2>
          <p className="text-[17px] text-white/60 leading-[1.75] max-w-xl mx-auto">
            Kombinasi teknologi mutakhir Computer Vision dan Deep Learning untuk akurasi penerjemahan tertinggi.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techs.map((t, i) => (
            <AnimateOnScroll key={t.name} direction="up" delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, borderColor: "rgba(57,206,221,0.3)", boxShadow: "0 24px 60px rgba(57,206,221,.18)" }}
                className="relative bg-gradient-to-br from-teal/5 to-navy/7 border border-teal/13 rounded-3xl p-8 h-full transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] grad-bg" />
                <div className="text-4xl mb-5">{t.icon}</div>
                <div className="text-[19px] font-extrabold text-teal mb-1.5">{t.name}</div>
                <div className="text-[11px] text-white/40 uppercase tracking-[1.2px] font-bold mb-3">{t.role}</div>
                <p className="text-[13px] text-white/58 leading-[1.7] mb-4">{t.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold text-teal bg-teal/10 border border-teal/18 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
