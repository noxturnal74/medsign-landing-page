"use client";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ChatBot from "@/components/ChatBot";

export default function Demo() {
  return (
    <section id="demo" className="py-28 bg-gradient-to-b from-dark2 to-dark">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up" className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[3px] text-teal font-bold mb-3">AI Chatbot</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-1.5px] mb-4">
            Tanya Apa Saja tentang MedSign
          </h2>
          <p className="text-[17px] text-white/60 leading-[1.75] max-w-xl mx-auto">
            Powered by Gemini AI — Signi siap menjawab pertanyaan seputar MedSign, BISINDO, dan inovasi inklusif healthcare.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={0.1} className="max-w-3xl mx-auto">
          <ChatBot chatId="demo" />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
