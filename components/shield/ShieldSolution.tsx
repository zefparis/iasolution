"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const imsiDetection = [
  "Analyse LAC suspicieux (fake base stations)",
  "Détection signaux anormaux (>-40 dBm = trop fort)",
  "Monitoring handover rate (>5/min = suspicious)",
  "Détection encryption downgrade (A5/3 → A5/0)",
];

const geoDetection = [
  "Impossible travel (>900 km/h entre 2 positions)",
  "Precision tracking (3+ positions <10m accuracy)",
  "GPS spoofing (coordonnées rondes, accuracy impossible)",
];

export function ShieldSolution() {
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
          <span className="badge mb-6 inline-block">LA SOLUTION</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Notre réponse : HCS-Shield (Layer 10)
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Détection multi-signaux des menaces réseau en temps réel
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* IMSI Catcher Detection */}
          <motion.div
            variants={staggerItem}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📡 Détection IMSI Catcher
            </h3>
            <ul className="space-y-3">
              {imsiDetection.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5">✓</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border-l-4 border-yellow-500">
              <p className="text-sm text-yellow-400 font-medium">
                → Recommande airplane mode si risque critique (≥70 points)
              </p>
            </div>
          </motion.div>

          {/* Geolocation Attack Detection */}
          <motion.div
            variants={staggerItem}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📍 Détection Geolocation Attack
            </h3>
            <ul className="space-y-3">
              {geoDetection.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5">✓</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-red-500/10 border-l-4 border-red-500">
              <p className="text-sm text-red-400 font-medium">
                → Alerte utilisateur + audit log si détection
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
