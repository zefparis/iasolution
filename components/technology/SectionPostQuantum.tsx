"use client";

import { motion } from "framer-motion";
import { Shield, Key, Zap, Lock } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const algoIcons = [
  { icon: Key, color: "from-purple-500/20 to-violet-500/20", iconColor: "text-purple-400" },
  { icon: Lock, color: "from-cyan-500/20 to-blue-500/20", iconColor: "text-cyan-400" },
];

export function SectionPostQuantum() {
  const { content } = useLanguage();
  const pq = content.technologyPage.postQuantum;

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent" />
      
      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">{pq.badge}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {pq.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {pq.subtitle}
          </p>
        </motion.div>

        {/* Algorithms Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {pq.algorithms.map((algo, idx) => {
            const Icon = algoIcons[idx].icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${algoIcons[idx].color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${algoIcons[idx].iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{algo.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-text-muted">
                        {algo.alias}
                      </span>
                    </div>
                    <p className="text-sm text-accent-purple mb-2">{algo.purpose}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2 py-1 rounded bg-green-500/20 text-green-400">
                        NIST {algo.nistLevel}
                      </span>
                      <span className="px-2 py-1 rounded bg-white/10 text-text-muted font-mono">
                        {algo.keySizes}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features & Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent-purple" />
              {pq.featuresTitle}
            </h3>
            <div className="space-y-3">
              {pq.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-text-secondary">
                    <span className="text-white">{feature.label}</span>
                    <span className="text-text-muted"> ({feature.desc})</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Performance */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              {pq.performanceTitle}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {pq.performance.map((perf, idx) => (
                <div key={idx} className="text-center p-3 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-xl font-mono font-bold text-white">{perf.value}</div>
                  <div className="text-sm text-text-secondary">{perf.metric}</div>
                  <div className="text-xs text-text-muted">{perf.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Architecture Diagram */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12"
        >
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">{pq.architectureTitle}</h3>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-text-secondary">{`Signature Code HCS-U7:
├─ QSIG v3 (ML-DSA-65)     ← Post-Quantum
└─ B3 (BLAKE3)             ← Classique (Grover-resistant)

Encryption Shield v3:
├─ ML-KEM-768              ← Post-Quantum (encapsulation)
└─ AES-256-GCM             ← Classique (encryption)`}</pre>
            </div>
            <p className="text-sm text-text-muted mt-4">
              {pq.longTermProtection}
            </p>
          </div>
        </motion.div>

        {/* Competitive Advantage */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 border border-accent-purple/30">
            <p className="text-text-secondary">
              {pq.advantage}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
