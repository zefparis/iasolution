"use client";

import { useState, useEffect } from "react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, ShieldCheck, Plane } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Container } from "@/components/ui";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  const products = [
    {
      href: '/hcs-u7',
      icon: ShieldCheck,
      name: 'HCS-U7',
      description: language === 'fr' 
        ? 'Authentification Cognitive' 
        : 'Cognitive Authentication',
      color: 'purple',
    },
    {
      href: '/hcs-shield',
      icon: Plane,
      name: 'HCS-SHIELD',
      description: language === 'fr' 
        ? 'Application offline sécurisée (R&D)' 
        : 'Secure offline app (R&D)',
      color: 'emerald',
    },
  ];

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
            <Image
              src="/image/logo.png"
              alt="IA SOLUTION"
              width={140}
              height={40}
              className="h-8 w-auto group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-sm text-text-secondary hover:text-white transition-colors flex items-center gap-1 group">
                {language === 'fr' ? 'Produits' : 'Products'}
                <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 backdrop-blur-xl bg-bg-primary/95 rounded-lg shadow-xl border border-white/[0.08] overflow-hidden"
                  >
                    {products.map((product) => {
                      const Icon = product.icon;
                      return (
                        <Link
                          key={product.href}
                          href={product.href as LinkProps<string>["href"]}
                          className="block px-4 py-3 hover:bg-white/[0.05] transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                              product.color === 'purple' 
                                ? 'bg-accent-purple/10' 
                                : 'bg-emerald-500/10'
                            }`}>
                              <Icon className={product.color === 'purple' ? 'text-accent-purple' : 'text-emerald-400'} size={20} />
                            </div>
                            <div>
                              <div className="font-semibold text-white">{product.name}</div>
                              <div className="text-sm text-text-secondary">
                                {product.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {content.navigation.main.filter((item: { name: string }) => 
              !['HCS-U7', 'HCS-SHIELD'].includes(item.name)
            ).map((item: { name: string; href: string; badge?: string }) => (
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
                {/* Products in Mobile */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-text-secondary uppercase tracking-wider px-2 mb-2">
                    {language === 'fr' ? 'Produits' : 'Products'}
                  </div>
                  {products.map((product) => {
                    const Icon = product.icon;
                    return (
                      <Link
                        key={product.href}
                        href={product.href as LinkProps<string>["href"]}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-2 py-2 hover:bg-white/[0.05] rounded-lg transition-colors"
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                          product.color === 'purple' 
                            ? 'bg-accent-purple/10' 
                            : 'bg-emerald-500/10'
                        }`}>
                          <Icon className={product.color === 'purple' ? 'text-accent-purple' : 'text-emerald-400'} size={18} />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">{product.name}</div>
                          <div className="text-xs text-text-secondary">{product.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="border-t border-white/[0.08] pt-4 space-y-2">
                  {content.navigation.main.filter((item: { name: string }) => 
                    !['HCS-U7', 'HCS-SHIELD'].includes(item.name)
                  ).map((item: { name: string; href: string; badge?: string }) => (
                    <Link
                      key={item.name}
                      href={item.href as LinkProps<string>["href"]}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 text-base text-text-secondary hover:text-white transition-colors py-2 px-2"
                    >
                      {item.name}
                      {item.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>

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
