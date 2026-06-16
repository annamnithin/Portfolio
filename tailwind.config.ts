import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        washi: "var(--washi)",
        sumi: "var(--sumi)",
        ai: "var(--ai)",
        "ai-soft": "var(--ai-soft)",
        shu: "var(--shu)",
        ochre: "var(--ochre)",
        matcha: "var(--matcha)",
        card: "var(--card)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-zen-kaku)", "system-ui", "sans-serif"],
        serif: ["var(--font-shippori)", "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      keyframes: {
        "leaf-fall": {
          "0%": { transform: "translate(0,0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translate(var(--drift), 110vh) rotate(720deg)", opacity: "0" },
        },
        "petal-drift": {
          "0%": { transform: "translate(0,0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "100%": { transform: "translate(var(--drift), 110vh) rotate(360deg)", opacity: "0" },
        },
        "screen-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "gentle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "sway": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "code-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        "ripple": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "gentle-float": "gentle-float 6s ease-in-out infinite",
        "sway": "sway 5s ease-in-out infinite",
        "screen-glow": "screen-glow 3.5s ease-in-out infinite",
        "code-blink": "code-blink 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [],
}

export default config
