"use client";

import { motion } from "framer-motion";
import { Shield, Key, Zap, Lock } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const algorithms = [
  {
    name: "ML-DSA-65",
    alias: "Dilithium3",
    purpose: "Signatures (QSIG v3)",
    nistLevel: "Level 3",
    keySizes: "pk=1952, sk=4032, sig=3309",
    icon: Key,
    color: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
  },
  {
    name: "ML-KEM-768",
    alias: "Kyber768",
    purpose: "Key Encapsulation (Shield v3)",
    nistLevel: "Level 3",
    keySizes: "pk=1184, sk=2400, ct=1088",
    icon: Lock,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
];

const features = [
  { label: "Résistant aux attaques quantiques", desc: "Algorithme de Shor" },
  { label: "Standard NIST FIPS 204/203", desc: "Approuvé 2024" },
  { label: "Signatures déterministes", desc: "Reproductibles" },
  { label: "Hybride AES-256-GCM", desc: "Double protection" },
];

const performance = [
  { metric: "Sign", value: "~12ms", desc: "ML-DSA-65" },
  { metric: "Verify", value: "~8ms", desc: "ML-DSA-65" },
  { metric: "Encaps", value: "~2ms", desc: "ML-KEM-768" },
  { metric: "Decaps", value: "~3ms", desc: "ML-KEM-768" },
];

export function SectionPostQuantum() {
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
          <span className="badge mb-6 inline-block">POST-QUANTUM</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Cryptographie Post-Quantique
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            <span className="text-accent-purple font-semibold">NEW v8.4</span> — Algorithmes NIST approuvés, résistants aux ordinateurs quantiques
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
          {algorithms.map((algo, idx) => {
            const Icon = algo.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${algo.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${algo.iconColor}`} />
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
              Caractéristiques
            </h3>
            <div className="space-y-3">
              {features.map((feature, idx) => (
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
              Performance (Pure JavaScript)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {performance.map((perf, idx) => (
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
            <h3 className="text-lg font-semibold text-white mb-4">Architecture hybride</h3>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-text-secondary">{`Signature Code HCS-U7:
├─ QSIG v3 (ML-DSA-65)     ← Post-Quantum
└─ B3 (BLAKE3)             ← Classique (Grover-resistant)

Encryption Shield v3:
├─ ML-KEM-768              ← Post-Quantum (encapsulation)
└─ AES-256-GCM             ← Classique (encryption)`}</pre>
            </div>
            <p className="text-sm text-text-muted mt-4">
              <span className="text-accent-purple font-semibold">Protection à long terme</span> : Les signatures et clés générées aujourd&apos;hui 
              resteront sécurisées même après l&apos;émergence d&apos;ordinateurs quantiques à grande échelle (horizon 2030-2035).
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
              HCS-U7 est l&apos;une des <span className="text-white font-semibold">premières solutions d&apos;authentification cognitive</span> à déployer une cryptographie post-quantique en production.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
