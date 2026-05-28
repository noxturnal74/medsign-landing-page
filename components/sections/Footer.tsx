"use client";
import { Instagram } from "lucide-react";
import DolphinSVG from "@/components/DolphinSVG";

const nav = [
  { href: "#about", label: "Tentang MedSign" },
  { href: "#how",   label: "Cara Kerja" },
  { href: "#tech",  label: "Teknologi" },
  { href: "#team",  label: "Tim Kami" },
  { href: "#demo",  label: "AI Chatbot" },
];

const team = [
  { href: "https://www.instagram.com/medsign.pkmkc/", label: "📸 @medsign.pkmkc" },
  { href: "https://www.instagram.com/glenn.abrahm_/", label: "Glenn Abraham" },
  { href: "https://www.instagram.com/lorensamelia_/", label: "Lorensa Amelia" },
  { href: "https://www.instagram.com/albetwss/",      label: "Albert William" },
  { href: "https://www.instagram.com/albertcheng65/", label: "Albert Cheng" },
];

const badges = ["PKM-KC 2026", "Universitas Ma Chung", "SIMBELMAWA", "DIKTISAINTEK"];

export default function Footer() {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040a14] pt-16 pb-8 border-t border-teal/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-14 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 font-extrabold text-2xl mb-3">
              <DolphinSVG size={30} />
              <span className="text-teal">Med</span><span className="text-white">Sign</span>
            </div>
            <p className="text-[13px] text-white/42 leading-[1.75] max-w-[300px] mb-6">
              Sistem Pendeteksi Bahasa Isyarat Indonesia berbasis Computer Vision &amp; Deep Learning untuk komunikasi inklusif tenaga medis dan tunarungu.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b} className="text-[10px] font-bold tracking-[0.5px] bg-teal/7 border border-teal/13 px-3 py-1.5 rounded-lg text-white/45">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[1.5px] uppercase text-teal mb-5">Navigasi</h4>
            <ul className="flex flex-col gap-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scroll(l.href)}
                    className="text-[13px] text-white/42 hover:text-teal transition-colors duration-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[1.5px] uppercase text-teal mb-5">Tim &amp; Kontak</h4>
            <ul className="flex flex-col gap-3">
              {team.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/42 hover:text-teal transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 flex-wrap">
          <p className="text-[12px] text-white/28">© 2026 MedSign – Universitas Ma Chung. PKM-KC Kemendikbudristek.</p>
          <p className="text-[12px] text-white/28">
            Dibuat dengan ❤️ untuk inklusivitas layanan kesehatan Indonesia ·{" "}
            <a href="https://www.instagram.com/medsign.pkmkc/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
              @medsign.pkmkc
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
