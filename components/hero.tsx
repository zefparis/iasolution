"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { heroContent } from "@/lib/content";

const headlineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  {
    value: "40+",
    label: "Projets livrés",
    description: "SaaS, e-commerce, plateformes internes",
  },
  {
    value: "95%",
    label: "Clients satisfaits",
    description: "Process agile et accompagnement continu",
  },
  {
    value: "-35%",
    label: "Temps de cycle",
    description: "Automatisation et IA intégrée",
  },
];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] items-center justify-center pt-28">
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

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-12 text-center">
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
            className="text-balance text-4xl font-semibold leading-tight md:text-6xl"
          >
            <span className="text-gradient">{heroContent.title}</span>
          </motion.h1>
          <motion.p
            variants={headlineVariants}
            className="max-w-2xl text-pretty text-base text-slate-300 md:text-lg"
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.ul
            variants={headlineVariants}
            className="flex flex-col gap-3 text-sm text-slate-300 md:flex-row md:gap-6"
          >
            {heroContent.highlights.map((item) => (
              <li key={item} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
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
          className="flex flex-col items-center gap-3 md:flex-row"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight shadow-neon transition hover:bg-slate-100"
          >
            {heroContent.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-lg transition hover:border-white/30 hover:text-white"
          >
            {heroContent.ctaSecondary}
          </Link>
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
                « Nous aidons les organisations ambitieuses à concevoir des produits numériques qui inspirent confiance et délivrent des résultats mesurables. »
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/60">
                Expertise full-stack · IA · Automatisation · Design system
              </p>
            </div>
            <div className="grid w-full gap-4 md:grid-cols-3">
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
