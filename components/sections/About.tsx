"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Counter from "@/components/Counter";

const problems = [
  { icon: "🗣️", title: "Kurangnya Penerjemah BISINDO", desc: "Mayoritas fasilitas kesehatan tidak memiliki penerjemah bahasa isyarat profesional yang memahami kosakata medis." },
  { icon: "📝", title: "Media Tulis Tidak Efektif", desc: "Komunikasi tulis terlalu lambat dan berisiko salah tafsir karena perbedaan struktur bahasa isyarat dan tulisan." },
  { icon: "👨‍⚕️", title: "Tenaga Medis Tidak Bisa BISINDO", desc: "Dokter dan perawat umumnya tidak memiliki kemampuan bahasa isyarat, memaksa pasien bergantung pada keluarga." },
  { icon: "⚠️", title: "Risiko Kesalahan Diagnosis", desc: "Kesenjangan komunikasi meningkatkan risiko salah diagnosis dan pelanggaran privasi pasien." },
];

const solStats = [
  { value: 21,  label: "Titik koordinat\ntangan terdeteksi", isFloat: false },
  { value: 468, label: "Titik koordinat\nwajah terdeteksi",  isFloat: false },
  { value: 90,  suffix: "%", label: "Target akurasi\nsistem", isFloat: false },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up">
          <p className="text-[11px] uppercase tracking-[3px] text-teal font-bold mb-3">Tentang MedSign</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-1.5px] mb-4">
            Mengapa MedSign<br />Diperlukan?
          </h2>
          <p className="text-[17px] text-white/60 leading-[1.75] max-w-xl">
            Hambatan komunikasi di fasilitas kesehatan adalah masalah nyata yang dihadapi jutaan penyandang tunarungu di Indonesia setiap harinya.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div className="flex flex-col gap-4">
            {problems.map((p, i) => (
              <AnimateOnScroll key={p.title} direction="left" delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 8, borderColor: "rgba(57,206,221,0.35)" }}
                  className="flex items-start gap-4 bg-teal/[0.04] border border-teal/12 rounded-[20px] p-5 transition-all duration-300 cursor-default"
                >
                  <div className="w-11 h-11 rounded-[14px] grad-bg flex items-center justify-center text-xl flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold mb-1">{p.title}</h4>
                    <p className="text-[13px] text-white/55 leading-[1.65]">{p.desc}</p>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Solution */}
          <AnimateOnScroll direction="right">
            <div className="relative bg-gradient-to-br from-teal/7 to-navy/10 border border-teal/20 rounded-[28px] p-10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] grad-bg" />
              <h3 className="text-[22px] font-extrabold mb-4">💡 Solusi: MedSign</h3>
              <p className="text-[14px] text-white/62 leading-[1.75] mb-3">
                MedSign atau <em>Medical Sign</em> adalah sistem pendukung komunikasi yang menggunakan kamera untuk mendeteksi gestur BISINDO pasien tunarungu secara <strong className="text-white">real-time</strong>, kemudian menerjemahkannya menjadi teks atau suara yang dapat dipahami oleh tenaga medis.
              </p>
              <p className="text-[14px] text-white/62 leading-[1.75] mb-6">
                Sistem menggunakan <strong className="text-white">MediaPipe</strong> untuk mendeteksi 21 titik koordinat tangan dan 468 titik wajah, yang kemudian dianalisis menggunakan arsitektur hybrid <strong className="text-white">LSTM + CNN</strong>.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {solStats.map((s) => (
                  <div key={s.label} className="bg-teal/7 rounded-2xl p-4 text-center">
                    <div className="text-[1.9rem] font-extrabold text-teal font-mono leading-none">
                      <Counter target={s.value} suffix={s.suffix ?? ""} isFloat={s.isFloat} />
                    </div>
                    <div className="text-[11px] text-white/45 mt-1.5 leading-[1.5] whitespace-pre-line">{s.label}</div>
                  </div>
                ))}
                <div className="bg-teal/7 rounded-2xl p-4 text-center">
                  <div className="text-[1.9rem] font-extrabold text-teal font-mono leading-none">A–Z</div>
                  <div className="text-[11px] text-white/45 mt-1.5 leading-[1.5]">Abjad BISINDO<br />yang didukung</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
