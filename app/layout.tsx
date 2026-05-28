import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedSign AI – Komunikasi Tanpa Batas untuk Semua Pasien",
  description:
    "MedSign mendeteksi Bahasa Isyarat Indonesia (BISINDO) secara real-time menggunakan Computer Vision & Deep Learning — menjembatani tenaga medis dan pasien tunarungu tanpa hambatan. PKM-KC 2026 Universitas Ma Chung.",
  keywords: ["MedSign", "BISINDO", "bahasa isyarat", "tunarungu", "PKM-KC", "computer vision", "deep learning"],
  openGraph: {
    title: "MedSign AI – Komunikasi Tanpa Batas",
    description: "Sistem pendeteksi BISINDO real-time untuk komunikasi inklusif tenaga medis dan tunarungu.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-dark text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
