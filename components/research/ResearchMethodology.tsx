"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, FlaskConical, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Target, Lightbulb, FlaskConical, CheckCircle];

export function ResearchMethodology() {
  const { content } = useLanguage();
  const methodology = content.researchMethodology;

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
          <span className="badge mb-6 inline-block">{methodology.badge}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {methodology.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {methodology.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {methodology.steps.map((step, idx) => {
            const Icon = icons[idx];
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
