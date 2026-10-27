/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC",
          muted: "#F1F5F9",
          dark: "#0F172A",
        },
        border: {
          DEFAULT: "#E2E8F0",
          light: "#F1F5F9",
          dark: "#CBD5E1",
        },
        txt: {
          DEFAULT: "#0F172A",   // headings
          body: "#475569",      // body text
          muted: "#94A3B8",     // muted
          dim: "#CBD5E1",       // very light
        },
        brand: {
          sky: "#0EA5E9",       // primary blue
          blue: "#3B82F6",      // royal blue
          violet: "#8B5CF6",    // violet
          gold: "#F59E0B",      // amber
          green: "#10B981",     // success
          pink: "#EC4899",      // accent pink
        },
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "sans-serif"],
        arabic: ["Cairo", "sans-serif"], // ✅ Arabic Font added
      },
      boxShadow: {
        soft: "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
        card: "0 4px 20px rgba(15,23,42,0.06)",
        "card-hover": "0 20px 60px rgba(14,165,233,0.15)",
        glow: "0 0 40px rgba(14,165,233,0.3)",
        "glow-violet": "0 0 40px rgba(139,92,246,0.3)",
        "glow-soft": "0 10px 40px rgba(14,165,233,0.12)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 100%)",
        "gradient-sky": "linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)",
        "gradient-violet": "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
        "gradient-gold": "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
        "gradient-soft": "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
        "gradient-hero": "linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 60%, #F8FAFC 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "shine": "shine 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-30px) translateX(15px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.08)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
    },
  },
  plugins: [],
};