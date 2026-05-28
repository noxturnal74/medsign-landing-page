import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal:    "#39cedd",
        blue:    "#4a9bd7",
        navy:    "#172D9D",
        lavender:"#787CFE",
        sky:     "#48BED9",
        dark:    "#060e1e",
        dark2:   "#0a1628",
        dark3:   "#0d1b2e",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        "grad-main": "linear-gradient(135deg,#39cedd 0%,#4a9bd7 50%,#172D9D 100%)",
      },
      animation: {
        "dolphin-swim": "dolphinSwim 4s ease-in-out infinite",
        "float-pulse":  "floatPulse 3s ease-in-out infinite",
        "blink":        "blink 1.5s infinite",
        "type-bounce":  "typeBounce 1.2s infinite",
        "particle":     "particleFloat linear infinite",
        "gradient-x":   "gradientX 6s ease infinite",
        "spin-slow":    "spin 20s linear infinite",
      },
      keyframes: {
        dolphinSwim: {
          "0%,100%": { transform: "translateY(0) rotate(-3deg)" },
          "25%":     { transform: "translateY(-16px) rotate(0deg)" },
          "50%":     { transform: "translateY(-7px) rotate(3deg)" },
          "75%":     { transform: "translateY(-18px) rotate(0deg)" },
        },
        floatPulse: {
          "0%,100%": { boxShadow: "0 8px 32px rgba(57,206,221,.4)" },
          "50%":     { boxShadow: "0 12px 48px rgba(57,206,221,.65)" },
        },
        blink: {
          "0%,100%": { opacity: "1", boxShadow: "0 0 6px #4ade80" },
          "50%":     { opacity: "0.4", boxShadow: "none" },
        },
        typeBounce: {
          "0%,60%,100%": { transform: "translateY(0)", opacity: "0.5" },
          "30%":          { transform: "translateY(-7px)", opacity: "1" },
        },
        particleFloat: {
          "0%":   { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "10%":  { opacity: "1" },
          "90%":  { opacity: "0.6" },
          "100%": { transform: "translateY(-100px) scale(1)", opacity: "0" },
        },
        gradientX: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%":     { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
