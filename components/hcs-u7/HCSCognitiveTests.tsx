"use client";

import { motion } from "framer-motion";
import { Brain, RefreshCw, Shuffle, Hash, Zap, Mic } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const cognitiveTests = [
  {
    icon: Brain,
    name: "Test de Stroop",
    year: "1935",
    author: "John Ridley Stroop",
    principle: "L'interférence cognitive se produit quand le cerveau doit traiter des informations conflictuelles. Lire le mot 'ROUGE' écrit en bleu crée un délai mesurable.",
    humanBehavior: "Ralentissement de 100-200ms sur les items incongruents",
    aiBehavior: "Temps de réponse constant, pas d'effet d'interférence",
    detection: "Analyse de la variance temporelle et du pattern d'erreurs",
  },
  {
    icon: RefreshCw,
    name: "N-Back",
    year: "1958",
    author: "Wayne Kirchner",
    principle: "La mémoire de travail humaine est limitée à 7±2 éléments (Miller, 1956). Au-delà, les performances chutent de manière prévisible.",
    humanBehavior: "Dégradation progressive au-delà de 3-back",
    aiBehavior: "Performance constante quelle que soit la charge",
    detection: "Courbe de dégradation caractéristique",
  },
  {
    icon: Shuffle,
    name: "Trail Making A/B",
    year: "1938",
    author: "US Army",
    principle: "Le switching cognitif entre deux tâches (lettres/chiffres) a un coût temporel incompressible chez l'humain.",
    humanBehavior: "Coût de switching de 200-500ms",
    aiBehavior: "Pas de coût de switching mesurable",
    detection: "Ratio temps partie B / partie A",
  },
  {
    icon: Hash,
    name: "Digit Span",
    year: "1939",
    author: "David Wechsler",
    principle: "L'empan mnésique mesure la capacité de rétention à court terme. Limitée biologiquement chez l'humain.",
    humanBehavior: "Capacité moyenne de 7±2 chiffres",
    aiBehavior: "Capacité illimitée",
    detection: "Point de rupture de la performance",
  },
  {
    icon: Zap,
    name: "Reaction Time",
    year: "1868",
    author: "Franciscus Donders",
    principle: "Le temps de réaction humain a une variabilité naturelle due aux processus neuronaux. L'IA répond de manière trop régulière.",
    humanBehavior: "Variabilité de 50-150ms, effet de fatigue",
    aiBehavior: "Temps <30ms, régularité >80%",
    detection: "Coefficient de variation temporelle",
  },
  {
    icon: Mic,
    name: "RAN Vocal",
    year: "1974",
    author: "Denckla & Rudel",
    principle: "La dénomination rapide automatisée révèle les patterns de parole uniques : pauses, hésitations, rythme.",
    humanBehavior: "Pauses naturelles, variations de débit",
    aiBehavior: "Fluidité artificielle, timing régulier",
    detection: "Analyse spectrale et temporelle",
  },
];

export function HCSCognitiveTests() {
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
          <span className="badge mb-6 inline-block">TESTS COGNITIFS</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            6 tests validés scientifiquement
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Chaque test exploite une limitation fondamentale du cerveau humain que l'IA ne peut pas simuler authentiquement.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {cognitiveTests.map((test, idx) => {
            const Icon = test.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {test.name}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {test.author}, {test.year}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {test.principle}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-medium text-green-400 uppercase tracking-wider w-20 flex-shrink-0">Humain</span>
                    <span className="text-sm text-text-secondary">{test.humanBehavior}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-medium text-red-400 uppercase tracking-wider w-20 flex-shrink-0">IA</span>
                    <span className="text-sm text-text-secondary">{test.aiBehavior}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-medium text-accent-purple uppercase tracking-wider w-20 flex-shrink-0">Détection</span>
                    <span className="text-sm text-text-secondary">{test.detection}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
