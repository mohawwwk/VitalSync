import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        border: "rgba(255,255,255,0.08)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--text-primary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          warm: "#FF6B6B",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "#4A4A5A",
        },
      },
      fontFamily: {
        display: ["Cabinet Grotesk", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "noise-texture": "url('/noise.svg')",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
