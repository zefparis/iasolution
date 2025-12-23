"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, FlaskConical, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { patentsFrItems } from "@/lib/content-bilingual";

const methodology = [
  {
    icon: Target,
    title: "Identification du problème",
    description: "Analyse des limitations des systèmes d'authentification actuels face aux IA génératives. Étude des taux de contournement CAPTCHA (94% - ETH Zurich 2024).",
  },
  {
    icon: Lightbulb,
    title: "Hypothèse de recherche",
    description: "Les contraintes cognitives biologiques (temps de réaction, interférence, mémoire de travail) sont des marqueurs fiables de l'humanité que l'IA ne peut pas simuler.",
  },
  {
    icon: FlaskConical,
    title: "Expérimentation",
    description: "Développement et validation de 6 tests cognitifs issus des neurosciences. Collecte de données sur 10,000+ sessions. Entraînement de modèles ML de détection.",
  },
  {
    icon: CheckCircle,
    title: "Validation",
    description: `Précision de 98.9%, détection IA >99%, latence P95 <50ms. 230+ tests unitaires et d'intégration. ${patentsFrItems.length} brevets INPI déposés.`,
  },
];

export function ResearchMethodology() {
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
          <span className="badge mb-6 inline-block">MÉTHODOLOGIE</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Approche scientifique
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Notre recherche suit une méthodologie rigoureuse, de l&apos;identification du problème à la validation des résultats.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {methodology.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6 relative"
              >
                {/* Step number */}
                <div className="absolute top-4 right-4 text-4xl font-mono font-bold text-white/[0.05]">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-purple" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
