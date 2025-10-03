/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: "#05070f",
        abyss: "#0a0f1f",
        aurora: {
          pink: "#f472b6",
          blue: "#60a5fa",
          violet: "#a855f7"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top, rgba(96,165,250,0.25), transparent 55%)",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, rgba(168,85,247,0.2), transparent)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(96,165,250,0.25)",
        neon: "0 0 25px rgba(244,114,182,0.35)"
      }
    }
  },
  plugins: []
};
