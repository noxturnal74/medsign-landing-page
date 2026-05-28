"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import Image from "next/image";
const links = [
  { href: "#about",  label: "Tentang" },
  { href: "#how",    label: "Cara Kerja" },
  { href: "#tech",   label: "Teknologi" },
  { href: "#team",   label: "Tim" },
  { href: "#demo",   label: "AI Chat" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(6,14,30,0.97)] border-b border-teal/20 shadow-lg"
            : "bg-[rgba(6,14,30,0.8)] border-b border-teal/10"
        }`}
        style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
      >
        {/* Logo */}
        <button onClick={() => handleNav("#hero")} className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight">
          <Image src="/images/medsign_logo.png" alt="MedSign Logo" width={34} height={34} className="rounded-md" />
          <span className="text-teal">Med</span><span className="text-white">Sign</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 group ${
                  active === l.href.slice(1) ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-teal rounded-full transition-transform duration-300 origin-left ${
                    active === l.href.slice(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://www.instagram.com/medsign.pkmkc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 grad-bg text-white text-sm font-bold px-5 py-2.5 rounded-full glow-teal hover:-translate-y-0.5 transition-all duration-200"
            >
              <Instagram size={14} /> Follow IG
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[rgba(6,14,30,0.98)] border-b border-teal/15 p-6 flex flex-col gap-1"
            style={{ backdropFilter: "blur(24px)" }}
          >
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left px-4 py-3.5 text-[15px] font-semibold text-white/75 rounded-xl hover:bg-teal/10 hover:text-teal transition-all duration-200"
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://www.instagram.com/medsign.pkmkc/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-teal font-bold px-4 py-3"
            >
              <Instagram size={16} /> @medsign.pkmkc
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
