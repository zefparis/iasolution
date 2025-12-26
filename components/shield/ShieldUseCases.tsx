"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const useCases = [
  {
    icon: "🛡️",
    title: "Défense & Sécurité",
    description: "Executives en zone hostile, agents terrain, communications sensibles en environnements non-sécurisés.",
    gradient: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
  },
  {
    icon: "📰",
    title: "Journalisme",
    description: "Reporters en zone de conflit, protection sources, communications sécurisées avec rédactions.",
    gradient: "from-green-500/20 to-green-600/10",
    border: "border-green-500/30",
  },
  {
    icon: "🏛️",
    title: "Gouvernement",
    description: "Diplomates, missions internationales, communications gouvernementales sensibles.",
    gradient: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/30",
  },
  {
    icon: "💳",
    title: "Fintech",
    description: "Mobile banking en pays à risque, transactions haute valeur, protection contre IMSI catchers.",
    gradient: "from-orange-500/20 to-orange-600/10",
    border: "border-orange-500/30",
  },
];

export function ShieldUseCases() {
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
          <span className="badge mb-6 inline-block">CAS D&apos;USAGE</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Cas d&apos;usage critiques
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Protection des utilisateurs à haut risque contre les menaces réseau state-level
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className={`glass-card p-6 bg-gradient-to-br ${useCase.gradient} border ${useCase.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
              <p className="text-text-secondary">{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
