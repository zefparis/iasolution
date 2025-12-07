"use client";

import { motion } from "framer-motion";
import { heroSequence } from "@/lib/animations";
import { Container } from "@/components/ui";

export function PatentsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
      
      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-1/4 left-1/3" />
      <div className="glow-orb glow-orb-pink w-[300px] h-[300px] bottom-1/4 right-1/4" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={heroSequence.badge}
            initial="hidden"
            animate="visible"
          >
            <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em]">
              PROPRIÉTÉ INTELLECTUELLE
            </span>
          </motion.div>

          <motion.h1
            variants={heroSequence.title}
            initial="hidden"
            animate="visible"
            className="mt-8 text-h1-mobile lg:text-h1 font-semibold glow-text"
          >
            Brevets INPI
          </motion.h1>

          <motion.p
            variants={heroSequence.description}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            2 brevets déposés à l'Institut National de la Propriété Industrielle. 
            Protection de 20 ans sur nos innovations en authentification cognitive et cryptographie.
          </motion.p>

          {/* Patent numbers */}
          <motion.div
            variants={heroSequence.cta}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <div className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <span className="font-mono text-xl font-bold text-accent-purple">FR2514274</span>
              <p className="text-xs text-text-muted mt-1">30/11/2025</p>
            </div>
            <div className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <span className="font-mono text-xl font-bold text-accent-purple">FR2514546</span>
              <p className="text-xs text-text-muted mt-1">04/12/2025</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
