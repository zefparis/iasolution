"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-lg">
      <button
        onClick={() => setLanguage("fr")}
        className={`relative z-10 px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
          language === "fr" ? "text-midnight" : "text-white/70 hover:text-white"
        }`}
        aria-label="Français"
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`relative z-10 px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
          language === "en" ? "text-midnight" : "text-white/70 hover:text-white"
        }`}
        aria-label="English"
      >
        EN
      </button>
      <motion.div
        className="absolute left-1 top-1 h-[calc(100%-8px)] rounded-full bg-white shadow-neon"
        initial={false}
        animate={{
          x: language === "fr" ? 0 : "calc(100% + 4px)",
          width: language === "fr" ? 36 : 36,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
    </div>
  );
}

export function LanguageSwitchWithIcon() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4 text-white/50" />
      <div className="relative flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-lg">
        <button
          onClick={() => setLanguage("fr")}
          className={`relative z-10 px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
            language === "fr" ? "text-midnight" : "text-white/70 hover:text-white"
          }`}
          aria-label="Français"
        >
          FR
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`relative z-10 px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
            language === "en" ? "text-midnight" : "text-white/70 hover:text-white"
          }`}
          aria-label="English"
        >
          EN
        </button>
        <motion.div
          className="absolute left-1 top-1 h-[calc(100%-8px)] rounded-full bg-white shadow-glow"
          initial={false}
          animate={{
            x: language === "fr" ? 0 : "calc(100% + 2px)",
            width: 38,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      </div>
    </div>
  );
}
