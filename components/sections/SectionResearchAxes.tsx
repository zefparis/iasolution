"use client";

import { motion } from "framer-motion";
import { Brain, Star, Shield, Atom } from "lucide-react";
import { researchAxes } from "@/lib/content";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Star,
  Shield,
  Atom,
};

const gradientMap: Record<string, string> = {
  purple: "from-accent-purple/20 to-accent-indigo/20",
  pink: "from-accent-pink/20 to-rose-500/20",
  blue: "from-accent-blue/20 to-accent-cyan/20",
  cyan: "from-accent-cyan/20 to-teal-500/20",
};

const iconColorMap: Record<string, string> = {
  purple: "text-accent-purple",
  pink: "text-accent-pink",
  blue: "text-accent-blue",
  cyan: "text-accent-cyan",
};

export function SectionResearchAxes() {
  return (
    <section className="section relative">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <span className="badge mb-6 inline-block">{researchAxes.label}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {researchAxes.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {researchAxes.description}
          </p>
        </motion.div>

        {/* Research Axes Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {researchAxes.axes.map((axis) => {
            const Icon = iconMap[axis.icon];
            const gradient = gradientMap[axis.gradient];
            const iconColor = iconColorMap[axis.gradient];

            return (
              <motion.div
                key={axis.id}
                variants={staggerItem}
                className="glass-card p-8 group"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">
                  {axis.title}
                </h3>
                <p className="text-text-secondary text-sm mb-6">
                  {axis.subtitle}
                </p>

                {/* Description */}
                <p className="text-text-muted text-sm mb-4">
                  {axis.description}
                </p>

                {/* Points */}
                <ul className="space-y-2 mb-6">
                  {axis.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className={`${iconColor} mt-1.5`}>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Algorithms */}
                <div className="border-t border-white/[0.08] pt-4 mb-4">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-3">
                    Algorithmes développés :
                  </p>
                  <ul className="space-y-1.5">
                    {axis.algorithms.map((algo, idx) => (
                      <li key={idx} className="text-sm text-accent-purple flex items-start gap-2">
                        <span className="text-accent-purple">→</span>
                        <span className="text-text-secondary">{algo}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Product & Stats */}
                <div className="bg-white/[0.02] rounded-lg p-4 border border-white/[0.05]">
                  <p className="text-sm font-medium text-white mb-1">
                    {axis.product}
                  </p>
                  {axis.stats && (
                    <p className="text-xs text-text-muted font-mono">
                      {axis.stats}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
