"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-colors text-sm font-medium text-text-secondary hover:text-text-primary"
      aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{language === "fr" ? "EN" : "FR"}</span>
    </button>
  );
}
