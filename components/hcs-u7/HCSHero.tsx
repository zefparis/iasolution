"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { heroSequence } from "@/lib/animations";
import { Container } from "@/components/ui";
import { patentsFrItems } from "@/lib/content-bilingual";

export function HCSHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
      
      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-1/4 left-1/4" />
      <div className="glow-orb glow-orb-blue w-[400px] h-[400px] bottom-1/4 right-1/4" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              variants={heroSequence.badge}
              initial="hidden"
              animate="visible"
            >
              <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em]">
                PRODUIT PHARE
              </span>
            </motion.div>

            <motion.h1
              variants={heroSequence.title}
              initial="hidden"
              animate="visible"
              className="mt-6 text-5xl lg:text-6xl font-semibold text-white"
            >
              HCS-U7
            </motion.h1>
            
            <motion.p
              variants={heroSequence.subtitle}
              initial="hidden"
              animate="visible"
              className="mt-2 text-xl text-accent-purple font-medium"
            >
              Human Cognitive Signature
            </motion.p>

            <motion.p
              variants={heroSequence.description}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg text-text-secondary leading-relaxed"
            >
              Le premier système d&apos;authentification biométrique cognitive résistant aux intelligences artificielles génératives. 
              Issu de 3 ans de recherche en neurosciences cognitives et cryptographie.
            </motion.p>

            <motion.div
              variants={heroSequence.cta}
              initial="hidden"
              animate="visible"
              className="mt-8"
            >
              <Link
                href={"/demo" as LinkProps<string>["href"]}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo text-white font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300"
              >
                Demander une démo HCS-U7
              </Link>
            </motion.div>
          </div>

          {/* Right - Stats */}
          <motion.div
            variants={heroSequence.cta}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "98.9%", label: "Précision" },
              { value: ">99%", label: "Détection IA" },
              { value: String(patentsFrItems.length), label: "Brevets INPI" },
              { value: "230+", label: "Tests" },
              { value: "<50ms", label: "Latence P95" },
              { value: "7", label: "Couches sécurité" },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-6 text-center">
                <div className="text-3xl font-mono font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
