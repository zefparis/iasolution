/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0D0D1A",
          secondary: "#12122A",
          card: "rgba(255, 255, 255, 0.03)",
          "card-hover": "rgba(255, 255, 255, 0.06)"
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A0A0B0",
          muted: "#6B6B80"
        },
        accent: {
          purple: "#A855F7",
          blue: "#4FACFE",
          pink: "#F093FB",
          cyan: "#00F2FE",
          indigo: "#6366F1"
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.15)",
          glow: "rgba(167, 139, 250, 0.3)"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"]
      },
      fontSize: {
        hero: ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-mobile": ["40px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "h1-mobile": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h2: ["36px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "h2-mobile": ["28px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h3: ["24px", { lineHeight: "1.4" }],
        "h3-mobile": ["20px", { lineHeight: "1.4" }],
        body: ["16px", { lineHeight: "1.7" }],
        small: ["14px", { lineHeight: "1.5" }],
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.15em" }]
      },
      maxWidth: {
        container: "1200px"
      },
      spacing: {
        section: "120px",
        "section-mobile": "80px"
      },
      borderRadius: {
        card: "16px"
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #1a1a3e 0%, #0d0d1a 50%, #1a0a2e 100%)",
        "gradient-accent": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-pink": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "gradient-blue": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        "gradient-purple": "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))"
      },
      backdropBlur: {
        xs: "2px"
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite"
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};
