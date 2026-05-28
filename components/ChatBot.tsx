"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import DolphinSVG from "./DolphinSVG";

interface Message { role: "user" | "bot"; text: string; }

const QUICK = [
  "Analisis gejala pasien",
  "Informasi obat",
  "Rekomendasi tindakan awal",
  "Panduan konsultasi",
];

interface Props {
  compact?: boolean;
  chatId?: string;
}

export default function ChatBot({ compact = false, chatId = "main" }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Halo! Saya **Dofi**, asisten AI MedSign. Ada yang bisa saya bantu hari ini?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [history, setHistory] = useState<{ role: string; content: string }[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setInput("");
    setShowQuick(false);
    const userMsg: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    const newHistory = [...history, { role: "user", content: text }];
    setHistory(newHistory);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });
      const data = await res.json();
      const reply = data.reply ?? "Maaf, terjadi kesalahan. Silakan coba lagi.";
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setHistory((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Maaf, koneksi bermasalah. Silakan coba lagi." }]);
    } finally {
      setLoading(false);
    }
  };

  const formatText = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br/>");

  const msgHeight = compact ? "h-[300px]" : "h-[420px]";

  return (
    <div className="flex flex-col rounded-3xl overflow-hidden border border-teal/20 shadow-[0_24px_80px_rgba(23,45,157,.35)] bg-white/[0.03]">
      {/* Topbar */}
      <div className="grad-bg px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <DolphinSVG size={24} />
        </div>
        <div>
          <h4 className="font-extrabold text-sm text-white">Dofi – AI MedSign</h4>
          <p className="text-[11px] text-white/80">Asisten virtual berbasis Gemini AI</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5 text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-blink" />
          Online
        </div>
      </div>

      {/* Messages */}
      <div className={`${msgHeight} overflow-y-auto p-5 flex flex-col gap-3 scrollbar-thin`}>
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={`${chatId}-${i}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-2.5 max-w-[85%] ${m.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs ${
                  m.role === "bot" ? "grad-bg" : "bg-teal/20"
                }`}
              >
                {m.role === "bot" ? <DolphinSVG size={16} /> : "👤"}
              </div>
              <div
                className={`px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                  m.role === "bot"
                    ? "bg-white/7 border border-teal/15 text-white/90 rounded-tl-sm"
                    : "grad-bg text-white rounded-tr-sm"
                }`}
                dangerouslySetInnerHTML={{ __html: formatText(m.text) }}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-full grad-bg flex items-center justify-center flex-shrink-0">
                <DolphinSVG size={16} />
              </div>
              <div className="flex gap-1.5 px-3.5 py-3 bg-white/7 border border-teal/15 rounded-2xl rounded-tl-sm">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-teal opacity-50 animate-type-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Quick chips */}
      <AnimatePresence>
        {showQuick && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="px-5 py-2.5 flex flex-wrap gap-2 border-t border-teal/8"
          >
            {QUICK.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-[11px] font-bold text-teal bg-teal/8 border border-teal/20 px-3.5 py-1.5 rounded-full hover:bg-teal/20 transition-all duration-200"
              >
                {q}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div className="px-5 py-4 border-t border-teal/10 flex gap-2.5 items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="Tanya tentang MedSign..."
          disabled={loading}
          className="flex-1 bg-white/6 border border-teal/20 rounded-full px-5 py-3 text-[13px] text-white placeholder-white/30 outline-none focus:border-teal transition-colors duration-200 disabled:opacity-50"
        />
        <button
          onClick={() => send(input)}
          disabled={loading || !input.trim()}
          className="w-11 h-11 rounded-full grad-bg flex items-center justify-center glow-teal hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          aria-label="Send"
        >
          <Send size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
}
