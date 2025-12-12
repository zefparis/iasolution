"use client";

import { useState, useEffect } from "react";
import Link, { LinkProps } from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { useLanguage } from "@/contexts/LanguageContext";
import { Container } from "@/components/ui";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-bg-primary/80 border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="text-xl font-semibold tracking-tight text-white group-hover:text-accent-purple transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {content.navigation.main.map((item: { name: string; href: string; badge?: string }) => (
              <Link
                key={item.name}
                href={item.href as LinkProps<string>["href"]}
                className="text-sm text-text-secondary hover:text-white transition-colors relative group flex items-center gap-1"
              >
                {item.name}
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                    {item.badge}
                  </span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent-purple to-accent-blue group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm px-5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white hover:bg-white/[0.06] hover:border-accent-purple/30 transition-all duration-300"
            >
              Contact
            </Link>
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-colors text-sm font-medium text-text-secondary hover:text-text-primary"
              aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language === "fr" ? "EN" : "FR"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden backdrop-blur-xl bg-bg-primary/95 border-b border-white/[0.08]"
          >
            <Container>
              <div className="py-6 space-y-4">
                {content.navigation.main.map((item: { name: string; href: string; badge?: string }) => (
                  <Link
                    key={item.name}
                    href={item.href as LinkProps<string>["href"]}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-base text-text-secondary hover:text-white transition-colors py-2"
                  >
                    {item.name}
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 mt-4 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white hover:bg-white/[0.06] hover:border-accent-purple/30 transition-all"
                >
                  Contact
                </Link>
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 mt-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-text-secondary hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === "fr" ? "English" : "Français"}</span>
                </button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
