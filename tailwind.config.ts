import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        neon: "var(--font-tilt-neon)",
        carattere: "var(--font-carattere)",
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          100: "#333333",
        },
        white:{
          DEFAULT: "#ffffff",
          100: "#f5f5f5"
        },
        accent:{
          DEFAULT: "#00a8a8"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
