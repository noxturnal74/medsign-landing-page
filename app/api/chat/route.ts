import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `Kamu adalah Signi, asisten AI virtual dari proyek MedSign PKM-KC 2026 Universitas Ma Chung.

ATURAN PENTING:
1. HANYA jawab tentang: MedSign, BISINDO, tim, teknologi (MediaPipe/LSTM/CNN/TensorFlow), masalah tunarungu di kesehatan, PKM-KC 2026, Universitas Ma Chung.
2. Jika di luar topik, tolak sopan: "Maaf, aku hanya bisa menjawab seputar MedSign dan proposal PKM kami 😊"

PROPOSAL PKM MEDSIGN:
Judul: "Sistem Pendeteksi Bahasa Isyarat Indonesia Berbasis Computer Vision dan Deep Learning untuk Komunikasi Inklusif Tenaga Medis dan Tunarungu"
Program: PKM-KC 2026 | Universitas Ma Chung, Malang | Instagram: @medsign.pkmkc

MASALAH:
- 0,4% populasi Indonesia tunarungu (BPS 2023)
- 64,7% kesulitan akses layanan kesehatan (Varry et al., 2025)
- Tidak ada penerjemah BISINDO di fasilitas kesehatan
- Risiko salah diagnosis akibat hambatan komunikasi

SOLUSI:
1. Pasien gestur BISINDO di depan kamera
2. MediaPipe ekstrak 21 titik tangan + 468 titik wajah
3. LSTM (gestur dinamis/video) + CNN (abjad statis A-Z)
4. Output: teks real-time + suara opsional

TEKNOLOGI: MediaPipe, LSTM, CNN, Python, TensorFlow/Keras, VPS KVM IDCloudHost, Cloudflare Pro
Target akurasi: 90% | Kosakata: ±200 kata medis

BISINDO: Bahasa Isyarat Indonesia alami komunitas tuli, multimodal (tangan+wajah+mulut), beda dari SIBI

TIM:
- Glenn Emmanuel Abraham — Ketua, Teknik Informatika '24, @glenn.abrahm_
- Lorensa Amelia — Anggota, Manajemen '24, @lorensamelia_
- Albert William Saputra — Anggota, Teknik Informatika '22, @albetwss
- Albert Cheng — Anggota, Farmasi '25, @albertcheng65
- Dr. Kestrilia Rega Prilianti, M.Si. — Dosen Pembimbing

Jawab ramah, informatif, Bahasa Indonesia, maksimal 3-4 paragraf pendek.`;

const rateMap = new Map<string, { count: number; resetAt: number }>();
function checkRate(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) { rateMap.set(ip, { count: 1, resetAt: now + 60_000 }); return true; }
  if (entry.count >= 20) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (!checkRate(ip)) return NextResponse.json({ error: "Terlalu banyak permintaan, coba lagi nanti." }, { status: 429 });

  const { messages } = await req.json();
  if (!Array.isArray(messages) || messages.length === 0)
    return NextResponse.json({ error: "Invalid messages" }, { status: 400 });

  const sanitized = messages.map((m: { role: string; content: string }) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m.content).slice(0, 500).replace(/<[^>]*>/g, "") }],
  }));

  const res = await fetch(GEMINI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: sanitized,
      generationConfig: { maxOutputTokens: 800, temperature: 0.7 },
    }),
  });

  const data = await res.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? data.error?.message ?? "Maaf, terjadi kesalahan.";
  return NextResponse.json({ reply });
}
