"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { getContent } from "@/lib/content-i18n";
import bannerImage from "../banner-8192025_1280.png";

const headlineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const content = getContent(language);
  const heroContent = content.heroContent;

  const stats = [
    {
      value: t.stats.projectsValue,
      label: t.stats.projectsLabel,
      description: t.stats.projectsDesc,
    },
    {
      value: t.stats.clientsValue,
      label: t.stats.clientsLabel,
      description: t.stats.clientsDesc,
    },
    {
      value: t.stats.cycleValue,
      label: t.stats.cycleLabel,
      description: t.stats.cycleDesc,
    },
  ];

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-4 pb-16 pt-28 sm:px-6 md:pt-32 lg:px-8">
      <div className="absolute inset-0 -z-20">
        <Image
          src={bannerImage}
          alt="Vue panoramique illustrant IA-Solution"
          fill
          priority
          className="object-cover"
        />
      </div>
      <motion.div
        className="absolute inset-0 -z-15 bg-gradient-to-b from-midnight/90 via-midnight/75 to-midnight/65"
        style={{ backgroundSize: "200% 200%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-x-4 top-10 bottom-8 z-0 rounded-[44px] border border-white/10 bg-white/10 backdrop-blur-2xl opacity-60 md:inset-x-8 md:top-16 md:bottom-12" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora-blue/20 blur-3xl"
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.4, 0.6, 0.4] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-aurora-pink/20 blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/5 top-1/4 h-72 w-72 rounded-full bg-aurora-violet/20 blur-3xl"
          animate={{ y: [0, -25, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 rounded-3xl border border-white/5 bg-midnight/50 px-4 py-8 text-center shadow-[0_0_80px_rgba(63,94,251,0.2)] backdrop-blur-xl sm:gap-10 sm:px-8 sm:py-12 md:gap-12 md:px-12 md:py-16 lg:rounded-[40px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col items-center gap-6"
        >
          <motion.span
            variants={headlineVariants}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            IA-Solution
          </motion.span>
          <motion.h1
            variants={headlineVariants}
            className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{heroContent.title}</span>
          </motion.h1>
          <motion.p
            variants={headlineVariants}
            className="max-w-2xl text-pretty text-sm text-slate-300 sm:text-base md:text-lg"
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.ul
            variants={headlineVariants}
            className="flex flex-col gap-2 text-xs text-slate-300 sm:text-sm md:flex-row md:gap-4 lg:gap-6"
          >
            {content.heroContent.highlights.map((item) => (
              <li key={item} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur sm:px-4 sm:py-2">
                <CheckCircle2 className="h-4 w-4 text-aurora-blue" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-midnight shadow-neon transition hover:bg-slate-100 sm:w-auto sm:px-6 sm:py-3"
          >
            {heroContent.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto sm:px-6 sm:py-3"
          >
            {heroContent.ctaSecondary}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
          className="glass-card w-full max-w-4xl border-white/5 bg-white/5 px-6 py-6 text-left md:px-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md text-sm text-slate-300">
              <p className="text-white">
                {t.quote}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/60">
                {t.expertise}
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-300">{stat.label}</p>
                  <p className="mt-1 text-xs text-white/50">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
