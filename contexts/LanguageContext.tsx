"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import { getContentByLanguage, type Language } from "@/lib/content-bilingual";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: ReturnType<typeof getContentByLanguage>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Load language from localStorage on client
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "en") {
        setLanguageState("en");
      }
    }
    setIsHydrated(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const content = useMemo(() => getContentByLanguage(language), [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export type { Language };
