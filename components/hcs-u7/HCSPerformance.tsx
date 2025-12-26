"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const metrics = [
  { value: "98.9%", label: "Précision globale", sublabel: "Accuracy" },
  { value: "99.6%", label: "True Negative Rate", sublabel: "Vrais négatifs" },
  { value: "2.2%", label: "False Positive Rate", sublabel: "Faux positifs" },
  { value: "0.994", label: "AUC-ROC", sublabel: "Area Under Curve" },
  { value: ">99%", label: "Détection GPT-4V", sublabel: "OpenAI" },
  { value: ">99%", label: "Détection Claude 3", sublabel: "Anthropic" },
  { value: ">99%", label: "Détection Gemini", sublabel: "Google" },
  { value: ">99.6%", label: "Détection Bots", sublabel: "Automatisés" },
  { value: "<50ms", label: "Latence P95", sublabel: "95th percentile" },
  { value: "699", label: "Tests", sublabel: "Vitest" },
  { value: "99.9/100", label: "Score Sécurité", sublabel: "Defense-in-Depth" },
  { value: "10", label: "Couches", sublabel: "Protection v8.4" },
];

export function HCSPerformance() {
  return (
    <section className="section relative">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">PERFORMANCES</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Résultats validés
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Métriques obtenues dans le cadre de travaux de recherche doctorale sur 10,000+ sessions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="glass-card p-6 text-center group hover:border-accent-purple/30"
            >
              <div className="text-2xl lg:text-3xl font-mono font-bold text-white group-hover:text-accent-purple transition-colors">
                {metric.value}
              </div>
              <div className="text-sm text-text-secondary mt-2">
                {metric.label}
              </div>
              <div className="text-xs text-text-muted mt-1">
                {metric.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Source */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-sm text-text-muted mt-8"
        >
          Référence : ETH Zurich (2024) — CAPTCHA bypass rate 94% par IA générative
        </motion.p>
      </Container>
    </section>
  );
}
