"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { hero } from "@/lib/content";
import { heroSequence } from "@/lib/animations";
import { Container, Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
      
      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="glow-orb glow-orb-blue w-[400px] h-[400px] bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />
      <div className="glow-orb glow-orb-pink w-[300px] h-[300px] top-1/2 right-1/3" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={heroSequence.badge}
            initial="hidden"
            animate="visible"
          >
            <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em]">
              {hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={heroSequence.title}
            initial="hidden"
            animate="visible"
            className="mt-8 text-hero-mobile lg:text-hero font-semibold glow-text"
          >
            {hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroSequence.subtitle}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg lg:text-xl text-text-secondary font-medium tracking-wide"
          >
            {hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={heroSequence.description}
            initial="hidden"
            animate="visible"
            className="mt-8 text-body text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            {hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroSequence.cta}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={hero.cta1Href as LinkProps<string>["href"]}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo text-white font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              {hero.cta1}
            </Link>
            <Link
              href={hero.cta2Href as LinkProps<string>["href"]}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white font-medium hover:bg-white/[0.06] hover:border-accent-purple/30 transition-all duration-300"
            >
              {hero.cta2}
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
