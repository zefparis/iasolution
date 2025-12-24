"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const layers = [
  { level: "L9", name: "DDoS Protection", desc: "Cloudflare 100+ Gbps · Rate Limiting L7", icon: "🌐", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/30" },
  { level: "L8", name: "WAF Multi-Encoding", desc: "OWASP Top 10 · SQLi · XSS · ML Bot Detection", icon: "🔥", color: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/30" },
  { level: "L7", name: "Honeypots Actifs", desc: "122 endpoints · /.env · /admin · Auto-ban 30d", icon: "🍯", color: "from-amber-500/20 to-amber-600/10", border: "border-amber-500/30" },
  { level: "L6", name: "Post-Quantum Crypto", desc: "ML-DSA-65 (Dilithium) · ML-KEM-768 (Kyber)", icon: "🔮", color: "from-cyan-500/20 to-cyan-600/10", border: "border-cyan-500/30" },
  { level: "L5", name: "Hieroglyphic Shield", desc: "AES-256-GCM · scrypt KDF · Kyber Hybrid", icon: "🔐", color: "from-emerald-500/20 to-emerald-600/10", border: "border-emerald-500/30" },
  { level: "L4", name: "Proof-of-Work Adaptatif", desc: "Argon2id/SHA256 · Difficulté dynamique", icon: "⚡", color: "from-yellow-500/20 to-yellow-600/10", border: "border-yellow-500/30" },
  { level: "L3", name: "Anti-Replay Defense", desc: "Redis-atomic · Multi-instance safe · TTL 5min", icon: "🛡️", color: "from-red-500/20 to-red-600/10", border: "border-red-500/30" },
  { level: "L2", name: "Cognitive Firewall", desc: "9 Signaux Fusion · Trust Graph · SCA PSD2", icon: "🧠", color: "from-purple-500/20 to-purple-600/10", border: "border-purple-500/30" },
  { level: "L1", name: "Biométrie Cognitive", desc: "7 Tests Validés · AUC-ROC 0.994 · 98.9%", icon: "🎯", color: "from-pink-500/20 to-pink-600/10", border: "border-pink-500/30" },
];

const signals = [
  { name: "HCS Score", desc: "Tests cognitifs", icon: "🧠" },
  { name: "Device Risk", desc: "Bot/Emulator/VM", icon: "📱" },
  { name: "Network Risk", desc: "VPN/Tor/Datacenter", icon: "🌐" },
  { name: "Behavior", desc: "Keystroke/Mouse", icon: "⌨️" },
  { name: "Trust Graph", desc: "Relations user/device", icon: "🔗" },
];

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
            34 modules de sécurité · 9 couches empilées · 699 tests · Post-Quantum Ready
          </p>
        </motion.div>

        {/* 7 Layers Visual */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto space-y-3"
        >
          {/* Header */}
          <motion.div 
            variants={staggerItem}
            className="text-center p-4 rounded-xl bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-purple/20 border border-accent-purple/30"
          >
            <div className="text-lg font-bold text-white">🛡️ HCS-U7 COGNITIVE FIREWALL</div>
            <div className="text-sm text-text-secondary">Fastify 5 · TypeScript · 699 Tests · Post-Quantum Ready</div>
          </motion.div>

          {/* Layers */}
          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${layer.color} border ${layer.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-2xl">{layer.icon}</span>
              </div>
              <div className="flex-shrink-0 w-10">
                <span className="text-xs font-bold text-white/60 bg-white/10 px-2 py-1 rounded">{layer.level}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white truncate">{layer.name}</div>
                <div className="text-xs text-text-secondary truncate">{layer.desc}</div>
              </div>
            </motion.div>
          ))}

          {/* Arrow */}
          <div className="flex justify-center py-2">
            <div className="text-2xl text-accent-purple animate-bounce">▼</div>
          </div>

          {/* Decisions */}
          <motion.div 
            variants={staggerItem}
            className="grid grid-cols-3 gap-3"
          >
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-center">
              <div className="text-2xl mb-1">✅</div>
              <div className="text-sm font-bold text-emerald-400">ALLOW</div>
              <div className="text-xs text-text-muted">exempt</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-500/20 border border-amber-500/30 text-center">
              <div className="text-2xl mb-1">⚠️</div>
              <div className="text-sm font-bold text-amber-400">CHALLENGE</div>
              <div className="text-xs text-text-muted">step-up</div>
            </div>
            <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-center">
              <div className="text-2xl mb-1">🚫</div>
              <div className="text-sm font-bold text-red-400">DENY</div>
              <div className="text-xs text-text-muted">block</div>
            </div>
          </motion.div>
        </motion.div>

        {/* 5 Signals Fusion */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Fusion de 5 signaux
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {signals.map((signal, idx) => (
              <motion.div 
                key={idx} 
                variants={staggerItem}
                className="glass-card p-4 text-center hover:border-accent-purple/50 transition-colors"
              >
                <div className="text-2xl mb-2">{signal.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">
                  {signal.name}
                </div>
                <div className="text-xs text-text-muted">
                  {signal.desc}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <span className="text-xl">↓</span>
              <span className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-purple/30 to-accent-blue/30 border border-accent-purple/40 text-white font-medium">
                Score Combiner + SCA PSD2
              </span>
              <span className="text-xl">↓</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
