"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, viewportOnce } from "@/lib/animations";

const technicalDetails = `Detection Signals:
├── IMSI Catcher
│   ├── Suspicious LAC (0 or 1): +40 risk points
│   ├── Unknown Cell ID: +25 risk points
│   ├── Signal Anomalies (>-40 dBm): +20 risk points
│   ├── Frequent Handovers (>5/60s): +10 risk points
│   └── Encryption Downgrade: +30 risk points
│
└── Geolocation
    ├── Impossible Travel (>900 km/h): +50 risk points
    ├── Precision Tracking (<10m x3): +30 risk points
    └── GPS Spoofing: +40 risk points

Decision Thresholds:
├── ≥70: DANGEROUS → ENABLE_AIRPLANE_MODE
├── ≥40: SUSPICIOUS → AVOID_SENSITIVE_OPS
└── <40: SAFE → CONTINUE_NORMAL`;

export function ShieldTechnical() {
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
          <span className="badge mb-6 inline-block">TECHNIQUE</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Détails techniques
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Algorithme de scoring multi-signaux avec seuils de décision adaptatifs
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-6 bg-gray-900/50">
            <pre className="font-mono text-sm text-text-secondary overflow-x-auto whitespace-pre">
              {technicalDetails}
            </pre>
          </div>
        </motion.div>

        {/* Risk Level Legend */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="glass-card p-4 border-l-4 border-l-red-500">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-400 font-bold">≥70</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">DANGEROUS</span>
            </div>
            <p className="text-sm text-text-secondary">Activer le mode avion immédiatement</p>
          </div>
          <div className="glass-card p-4 border-l-4 border-l-yellow-500">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400 font-bold">≥40</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">SUSPICIOUS</span>
            </div>
            <p className="text-sm text-text-secondary">Éviter les opérations sensibles</p>
          </div>
          <div className="glass-card p-4 border-l-4 border-l-green-500">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-400 font-bold">&lt;40</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">SAFE</span>
            </div>
            <p className="text-sm text-text-secondary">Continuer normalement</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
