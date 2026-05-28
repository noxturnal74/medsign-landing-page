"use client";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const logos = [
  "Kemendikbudristek",
  "DIKTISAINTEK Berdampak",
  "SIMBELMAWA",
  "PKM 2026",
  "Universitas Ma Chung",
];

export default function TrustedBy() {
  return (
    <section id="trusted" className="py-12 border-y border-teal/8 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[11px] uppercase tracking-[3px] text-white/30 font-bold mb-6">
          Didukung oleh
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {logos.map((name, i) => (
            <AnimateOnScroll key={name} direction="up" delay={i * 0.07}>
              <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                <span className="text-[13px] font-bold tracking-wide text-white/80">{name}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
