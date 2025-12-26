"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export function HCSPerformance() {
  const { content } = useLanguage();
  const perf = content.hcsU7Page.performance;

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
          <span className="badge mb-6 inline-block">{perf.badge}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {perf.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {perf.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {perf.metrics.map((metric, idx) => (
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
          {perf.source}
        </motion.p>
      </Container>
    </section>
  );
}
