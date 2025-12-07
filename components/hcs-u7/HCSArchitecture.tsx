"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { architecture } from "@/lib/content";

export function HCSArchitecture() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">ARCHITECTURE</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Defense-in-Depth
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            7 couches de protection empilées. Chaque couche renforce les autres.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="ascii-diagram overflow-x-auto">
            <pre className="text-[9px] sm:text-[10px] lg:text-xs leading-tight">
              {architecture.diagram}
            </pre>
          </div>
        </motion.div>

        {/* 5 Signals Fusion */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Fusion de 5 signaux
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "HCS Score", desc: "Tests cognitifs", color: "purple" },
              { name: "Device Risk", desc: "Bot/Emulator/VM", color: "blue" },
              { name: "Network Risk", desc: "VPN/Tor/Datacenter", color: "cyan" },
              { name: "Behavior", desc: "Keystroke/Mouse", color: "pink" },
              { name: "Trust Graph", desc: "Relations user/device", color: "indigo" },
            ].map((signal, idx) => (
              <div key={idx} className="glass-card p-4 text-center">
                <div className={`text-sm font-semibold text-accent-${signal.color} mb-1`}>
                  {signal.name}
                </div>
                <div className="text-xs text-text-muted">
                  {signal.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <span>↓</span>
              <span className="px-4 py-2 rounded-lg bg-accent-purple/20 text-accent-purple font-medium">
                Score Combiner + SCA PSD2
              </span>
              <span>↓</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            {[
              { label: "ALLOW", color: "green" },
              { label: "CHALLENGE", color: "yellow" },
              { label: "DENY", color: "red" },
            ].map((decision, idx) => (
              <div key={idx} className={`px-6 py-3 rounded-lg bg-${decision.color}-500/20 text-${decision.color}-400 font-mono font-medium text-sm`}>
                {decision.label}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
