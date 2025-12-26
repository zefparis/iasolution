"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export function ShieldSolution() {
  const { content } = useLanguage();
  const solution = content.shieldPage.solution;

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
          <span className="badge mb-6 inline-block">{solution.badge}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {solution.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {solution.subtitle}
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
              📡 {solution.imsiTitle}
            </h3>
            <ul className="space-y-3">
              {solution.imsiItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5">✓</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border-l-4 border-yellow-500">
              <p className="text-sm text-yellow-400 font-medium">
                → {solution.imsiWarning}
              </p>
            </div>
          </motion.div>

          {/* Geolocation Attack Detection */}
          <motion.div
            variants={staggerItem}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📍 {solution.geoTitle}
            </h3>
            <ul className="space-y-3">
              {solution.geoItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5">✓</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-red-500/10 border-l-4 border-red-500">
              <p className="text-sm text-red-400 font-medium">
                → {solution.geoWarning}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
