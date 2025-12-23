"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const roadmap = [
  {
    year: "2022-2023",
    title: "Recherche fondamentale",
    items: [
      "Étude des tests cognitifs validés (Stroop, N-Back, Trail Making)",
      "Analyse des patterns temporels humains vs IA",
      "Prototypage du Score Combiner",
    ],
    status: "completed",
  },
  {
    year: "2024",
    title: "Développement HCS-U7",
    items: [
      "Architecture Defense-in-Depth 7 couches",
      "Intégration Celestial Entropy Layer",
      "230+ tests unitaires et d'intégration",
      "Dépôt brevets INPI (FR2514274, FR2514546, FR2515560)",
    ],
    status: "completed",
  },
  {
    year: "2025",
    title: "Validation & Production",
    items: [
      "Conformité PSD2/SCA native",
      "API publique v1.0",
      "Premiers clients pilotes",
      "Finalisation thèse doctorale",
    ],
    status: "in_progress",
  },
  {
    year: "2026",
    title: "Expansion",
    items: [
      "Cryptographie post-quantique (NIST-PQC)",
      "SDK multi-plateforme",
      "Partenariats académiques internationaux",
      "Extension robotique & IoT",
    ],
    status: "planned",
  },
];

const statusColors = {
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
  in_progress: "bg-accent-purple/20 text-accent-purple border-accent-purple/30",
  planned: "bg-text-muted/20 text-text-muted border-text-muted/30",
};

const statusLabels = {
  completed: "Terminé",
  in_progress: "En cours",
  planned: "Planifié",
};

export function ResearchRoadmap() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">ROADMAP R&D</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Feuille de route
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Notre progression de la recherche fondamentale vers les applications industrielles.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple/50 via-accent-blue/50 to-transparent hidden lg:block" />

          <div className="space-y-8">
            {roadmap.map((phase, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="relative lg:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-accent-purple border-4 border-bg-primary hidden lg:block" />
                
                <div className="glass-card p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <span className="text-2xl font-mono font-bold text-accent-purple">
                      {phase.year}
                    </span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusColors[phase.status as keyof typeof statusColors]}`}>
                      {statusLabels[phase.status as keyof typeof statusLabels]}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {phase.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-accent-purple mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
