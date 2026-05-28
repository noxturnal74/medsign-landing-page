"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Instagram } from "lucide-react";

const members = [
  { 
    name: "Glenn Emmanuel Abraham", 
    role: "🏆 Ketua Tim",   
    prodi: "Teknik Informatika '24", 
    nim: "312410007", 
    ig: "glenn.abrahm_",  
    photos: ["/team/glenn-2.jpg", "/team/glenn-3.jpg"] 
  },
  { 
    name: "Lorensa Amelia",         
    role: "📊 Anggota Tim", 
    prodi: "Manajemen '24",           
    nim: "112410028", 
    ig: "lorensamelia_",  
    photos: ["/team/loren-1.jpg", "/team/loren-2.jpg", "/team/loren-3.jpg"] 
  },
  { 
    name: "Albert William Saputra", 
    role: "💻 Anggota Tim", 
    prodi: "Teknik Informatika '22",  
    nim: "312210002", 
    ig: "albetwss",       
    photos: ["/team/albert-2.jpg", "/team/albert-3.jpg"] 
  },
  { 
    name: "Albert Cheng",           
    role: "💊 Anggota Tim", 
    prodi: "Farmasi '25",             
    nim: "612510002", 
    ig: "albertcheng65", 
    photos: ["/team/albert-cheng-1.jpg", "/team/albert-cheng-2.jpg", "/team/albert-cheng-3.jpg"] 
  },
];

function TeamMemberCard({ member }: { member: typeof members[0] }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || member.photos.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % member.photos.length);
    }, 1200); // ganti setiap 1.2 detik
    return () => clearInterval(interval);
  }, [isPaused, member.photos.length]);

  return (
    <motion.div
      whileHover={{ y: -8, borderColor: "rgba(57,206,221,0.35)", boxShadow: "0 12px 40px rgba(57,206,221,.15)" }}
      className="bg-white/[0.02] border border-teal/10 rounded-[28px] overflow-hidden transition-all duration-300 h-full flex flex-col group cursor-pointer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => setIsPaused(!isPaused)}
    >
      {/* Photo Area with Slideshow */}
      <div className="w-full aspect-[4/5] relative overflow-hidden bg-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0.5, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image 
              src={member.photos[currentIdx]} 
              alt={member.name} 
              fill 
              className="object-cover object-top" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Play/Pause indicator logic */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1 text-[10px] text-white font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 border border-white/10">
          {isPaused ? (
            <><div className="w-2 h-2 flex gap-0.5"><div className="w-[3px] bg-white h-full"/><div className="w-[3px] bg-white h-full"/></div> Paused</>
          ) : (
            <><div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent" /> Auto</>
          )}
        </div>
      </div>

      {/* Info Area */}
      <div className="p-6 flex-1 flex flex-col items-center text-center">
        <div className="text-[17px] font-extrabold mb-1">{member.name}</div>
        <div className="text-[12px] text-teal font-bold uppercase tracking-[0.5px] mb-2">{member.role}</div>
        <div className="text-[12px] text-white/50 mb-5 leading-[1.6]">{member.prodi}<br />NIM. {member.nim}</div>
        
        <a
          href={`https://www.instagram.com/${member.ig}/`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // prevent card click
          className="mt-auto flex items-center gap-2 text-white/70 text-[12px] font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-teal/15 hover:text-teal hover:border-teal/30 transition-all duration-200"
        >
          <Instagram size={14} /> @{member.ig}
        </a>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-32 bg-gradient-to-b from-dark to-[#0a1120]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up" className="text-center mb-20">
          <p className="text-[12px] uppercase tracking-[3px] text-teal font-bold mb-4">Meet Our Team</p>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[1.15] tracking-[-1.5px] mb-5">
            Orang-orang di Balik MedSign
          </h2>
          <p className="text-[18px] text-white/60 leading-[1.75] max-w-2xl mx-auto">
            Tim multidisiplin dari Universitas Ma Chung yang bersatu untuk menciptakan inovasi inklusif di bidang kesehatan.
          </p>
        </AnimateOnScroll>

        {/* Member cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {members.map((m, i) => (
            <AnimateOnScroll key={m.name} direction="up" delay={i * 0.1}>
              <TeamMemberCard member={m} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Dosen Pembimbing */}
        <AnimateOnScroll direction="up" delay={0.2}>
          <motion.div
            whileHover={{ borderColor: "rgba(57,206,221,0.3)", y: -4, boxShadow: "0 12px 40px rgba(57,206,221,.1)" }}
            className="bg-gradient-to-br from-teal/10 to-navy/15 border border-teal/20 rounded-[32px] p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 sm:gap-10 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="w-[140px] h-[140px] rounded-full border-[4px] border-teal/30 overflow-hidden flex-shrink-0 relative z-10 shadow-[0_0_30px_rgba(57,206,221,0.2)]">
              <Image src="/team/bu-lia.png" alt="Dr. Kestrilia Rega Prilianti" fill className="object-cover object-top" />
            </div>
            <div className="text-center sm:text-left z-10">
              <h3 className="text-[24px] font-extrabold mb-2">Dr. Kestrilia Rega P., M.Si.</h3>
              <span className="inline-block bg-teal/15 border border-teal/30 text-teal text-[12px] font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                🎓 Dosen Pembimbing
              </span>
              <p className="text-[15px] text-white/60 leading-[1.75] max-w-2xl">
                Dosen Teknik Informatika Universitas Ma Chung. Doktor Matematika dari Universitas Brawijaya. Pakar di bidang Machine Learning, Computer Vision, dan Deep Learning. Pembimbing PKM-KC MedSign 2026.
              </p>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
