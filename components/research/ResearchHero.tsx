"use client";

import { motion } from "framer-motion";
import { heroSequence } from "@/lib/animations";
import { Container } from "@/components/ui";
import { useLanguage } from "@/contexts/LanguageContext";

export function ResearchHero() {
  const { content } = useLanguage();
  const research = content.researchAxes;

  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
      
      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-1/4 left-1/4" />
      <div className="glow-orb glow-orb-blue w-[300px] h-[300px] bottom-1/4 right-1/3" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={heroSequence.badge}
            initial="hidden"
            animate="visible"
          >
            <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em]">
              {research.label}
            </span>
          </motion.div>

          <motion.h1
            variants={heroSequence.title}
            initial="hidden"
            animate="visible"
            className="mt-8 text-h1-mobile lg:text-h1 font-semibold glow-text"
          >
            {research.title}
          </motion.h1>

          <motion.p
            variants={heroSequence.description}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            {research.description}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
