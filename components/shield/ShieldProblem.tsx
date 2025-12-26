"use client";

import { motion } from "framer-motion";
import { Radio, MapPin, Signal, Volume2 } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const threats = [
  {
    icon: Radio,
    title: "IMSI catchers",
    subtitle: "Stingray, FalconOne",
    description: "Interception des communications mobiles via fausses stations de base",
  },
  {
    icon: MapPin,
    title: "Géolocalisation haute précision",
    subtitle: "Tracking <10m",
    description: "Suivi de position avec une précision inférieure à 10 mètres",
  },
  {
    icon: Signal,
    title: "Network downgrade attacks",
    subtitle: "5G → 2G forcé",
    description: "Forçage vers des protocoles moins sécurisés pour faciliter l'interception",
  },
  {
    icon: Volume2,
    title: "VoLTE interception",
    subtitle: "Écoute voix chiffrée",
    description: "Interception des communications voix sur LTE",
  },
];

export function ShieldProblem() {
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
          <span className="badge mb-6 inline-block">LE PROBLÈME</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Le problème non-résolu
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Les gouvernements, journalistes et executives sont ciblés par des menaces réseau state-level
          </p>
        </motion.div>

        {/* Threats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {threats.map((threat, idx) => {
            const Icon = threat.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6 border-l-4 border-l-red-500/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-white">{threat.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">
                        {threat.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">{threat.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Warning Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass-card p-6 border-l-4 border-l-red-500 bg-red-500/5"
        >
          <p className="text-lg font-semibold text-red-400 mb-2">
            ❌ Aucune solution d&apos;authentification classique ne protège contre ces menaces.
          </p>
          <p className="text-text-secondary">
            2FA, biométrie faciale, behavioral analytics → Tous contournables quand le réseau mobile est compromis.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
