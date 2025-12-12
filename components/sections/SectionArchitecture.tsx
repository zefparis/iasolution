"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Key, Activity, Star, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Lock,
  Shield,
  Key,
  Activity,
  Star,
  Zap,
};

const layers = [
  { level: "L7", name: "DDoS Protection", desc: "Cloudflare 100+ Gbps · Rate Limiting L7", icon: "🌐", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/30" },
  { level: "L6", name: "WAF Multi-Encoding", desc: "OWASP Top 10 · SQLi · XSS · ML Bot Detection", icon: "🔥", color: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/30" },
  { level: "L5", name: "Honeypots Actifs", desc: "/.env · /admin · /wp-login · Auto-ban 24h", icon: "🍯", color: "from-amber-500/20 to-amber-600/10", border: "border-amber-500/30" },
  { level: "L4", name: "Hieroglyphic Shield", desc: "AES-256-GCM · scrypt KDF · 30-40ms wrap", icon: "🔐", color: "from-emerald-500/20 to-emerald-600/10", border: "border-emerald-500/30" },
  { level: "L3", name: "Proof-of-Work Adaptatif", desc: "Argon2id/SHA256 · Difficulté dynamique", icon: "⚡", color: "from-yellow-500/20 to-yellow-600/10", border: "border-yellow-500/30" },
  { level: "L2", name: "Cognitive Firewall", desc: "5 Signaux Fusion · Trust Graph · SCA PSD2", icon: "🧠", color: "from-purple-500/20 to-purple-600/10", border: "border-purple-500/30" },
  { level: "L1", name: "Biométrie Cognitive", desc: "6 Tests Validés · AUC-ROC 0.994 · 98.9%", icon: "🎯", color: "from-pink-500/20 to-pink-600/10", border: "border-pink-500/30" },
];

export function SectionArchitecture() {
  const { content } = useLanguage();
  const architecture = content.architecture;

  return (
    <section className="section relative">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">{architecture.label}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {architecture.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            34 modules de sécurité · 7 couches empilées · 518 attaques bloquées
          </p>
        </motion.div>

        {/* Visual Defense Layers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto space-y-3 mb-16"
        >
          {/* Header */}
          <motion.div 
            variants={staggerItem}
            className="text-center p-4 rounded-xl bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-purple/20 border border-accent-purple/30"
          >
            <div className="text-lg font-bold text-white">🛡️ HCS-U7 COGNITIVE FIREWALL</div>
            <div className="text-sm text-text-secondary">Fastify 5 · TypeScript · 383+ Tests · Battle-Tested</div>
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

        {/* Security Modules Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {architecture.modules.map((module, idx) => {
            const Icon = iconMap[module.icon];
            const isSpecial = module.phase === "EXCLUSIVITÉ" || module.phase === "PERFORMANCE";

            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className={`glass-card p-6 ${isSpecial ? "border-accent-purple/30" : ""}`}
              >
                {/* Phase Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isSpecial 
                      ? "bg-gradient-to-br from-accent-purple/30 to-accent-pink/30" 
                      : "bg-white/[0.05]"
                  }`}>
                    <Icon className={`w-5 h-5 ${isSpecial ? "text-accent-purple" : "text-text-secondary"}`} />
                  </div>
                  <div>
                    <span className={`text-xs font-medium uppercase tracking-wider ${
                      isSpecial ? "text-accent-purple" : "text-text-muted"
                    }`}>
                      {module.phase}
                    </span>
                    <h3 className="text-white font-medium">{module.title}</h3>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-2">
                  {module.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-accent-purple mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* API Endpoints */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Endpoints API
          </h3>
          <div className="code-block">
            <div className="space-y-2">
              {architecture.endpoints.map((endpoint, idx) => (
                <div key={idx} className="flex items-start gap-4 text-sm">
                  <span className={`font-mono font-medium w-14 ${
                    endpoint.method === "POST" ? "text-green-400" :
                    endpoint.method === "GET" ? "text-blue-400" :
                    endpoint.method === "PATCH" ? "text-yellow-400" : "text-text-secondary"
                  }`}>
                    {endpoint.method}
                  </span>
                  <span className="font-mono text-accent-purple flex-shrink-0">
                    {endpoint.path}
                  </span>
                  <span className="text-text-muted">
                    // {endpoint.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
