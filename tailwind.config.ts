import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ucademy: {
          dark: "#1A1A1A",
          accent: "#FFE45E",
          "accent-hover": "#FFD700",
          "bg-soft": "#F9F9F7",
          border: "#E8E8E6",
          "text-secondary": "#6B6B6B",
          "text-muted": "#9CA3AF",
        },
      },
      fontFamily: {
        display: ["Besley", "Georgia", "serif"],
        body: ["Poppins", "system-ui", "sans-serif"],
        button: ["Besley", "Georgia", "serif"],
      },
      borderRadius: {
        button: "999px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
