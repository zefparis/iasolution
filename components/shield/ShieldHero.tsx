"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { heroSequence } from "@/lib/animations";
import { Container } from "@/components/ui";

export function ShieldHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
      
      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-1/4 left-1/4" />
      <div className="glow-orb glow-orb-blue w-[400px] h-[400px] bottom-1/4 right-1/4" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={heroSequence.badge}
            initial="hidden"
            animate="visible"
          >
            <span className="badge-gradient inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em]">
              <Shield className="w-4 h-4" />
              LAYER 10 — NEW v8.4
            </span>
          </motion.div>

          <motion.h1
            variants={heroSequence.title}
            initial="hidden"
            animate="visible"
            className="mt-8 text-h1-mobile lg:text-h1 font-semibold glow-text"
          >
            Shield Module
          </motion.h1>

          <motion.p
            variants={heroSequence.description}
            initial="hidden"
            animate="visible"
            className="mt-4 text-2xl text-accent-purple font-medium"
          >
            Anti-FalconOne Defense
          </motion.p>

          <motion.p
            variants={heroSequence.description}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            La seule solution d&apos;authentification protégeant l&apos;utilisateur 
            même quand son réseau mobile est compromis par des adversaires state-level.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={heroSequence.cta}
            initial="hidden"
            animate="visible"
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-accent-purple">📡</div>
              <div className="text-sm text-text-secondary mt-1">IMSI Catcher</div>
              <div className="text-xs text-text-muted">Detection</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-accent-purple">📍</div>
              <div className="text-sm text-text-secondary mt-1">Geolocation</div>
              <div className="text-xs text-text-muted">Attack Detection</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-accent-purple">🛡️</div>
              <div className="text-sm text-text-secondary mt-1">GPS Spoofing</div>
              <div className="text-xs text-text-muted">Protection</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-accent-purple">⚡</div>
              <div className="text-sm text-text-secondary mt-1">Real-time</div>
              <div className="text-xs text-text-muted">Alerts</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
