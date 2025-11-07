"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitch } from "@/components/language-switch";
import { translations } from "@/lib/translations";

const getNavigation = (lang: "fr" | "en") => [
  { label: translations[lang].nav.services, href: "#services" },
  { label: translations[lang].nav.projects, href: "#projets" },
  { label: translations[lang].nav.about, href: "#a-propos" },
  { label: translations[lang].nav.contact, href: "#contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const navigation = getNavigation(language);
  const t = translations[language].nav;

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundOpacity = useTransform(scrollY, [0, 180], [0.4, 0.85]);
  const borderOpacity = useTransform(scrollY, [0, 180], [0.12, 0.25]);
  const blurValue = useTransform(scrollY, [0, 180], [0, 12]);

  const background = useMotionTemplate`rgba(8, 11, 22, ${backgroundOpacity})`;
  const borderColor = useMotionTemplate`rgba(255, 255, 255, ${borderOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blurValue}px)`;

  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <motion.div
        className="mx-auto flex max-w-7xl items-center justify-between border-b px-4 py-3 text-sm font-medium sm:px-6 sm:py-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={
          mounted
            ? {
                backgroundColor: background,
                borderColor,
                backdropFilter,
              }
            : {
                backgroundColor: "rgba(8, 11, 22, 0.6)",
                borderColor: "rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(10px)",
              }
        }
      >
        <a href="#hero" className="text-sm font-semibold text-white sm:text-base">
          IA-Solution
        </a>
        <nav className="hidden items-center gap-4 text-slate-200 lg:gap-6 xl:gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <a
            href="#contact"
            className="hidden rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white shadow-glow transition hover:bg-white/20 sm:px-4 sm:py-2 md:inline-flex"
          >
            {t.workTogether}
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-1.5 text-white/80 transition hover:text-white focus:outline-none sm:p-2 md:hidden"
            aria-label={t.openMenu}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full mx-4 mt-2 rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur-xl shadow-neon md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-transparent px-4 py-2 transition hover:border-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
              >
                {t.workTogether}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
