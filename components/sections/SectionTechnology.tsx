"use client";

import { motion } from "framer-motion";
import { Brain, RefreshCw, Shuffle, Hash, Zap, Mic } from "lucide-react";
import { technology } from "@/lib/content";
import { staggerContainer, staggerItem, layerStagger, layerItem, viewportOnce } from "@/lib/animations";
import { Container, AnimatedSection } from "@/components/ui";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  RefreshCw,
  Shuffle,
  Hash,
  Zap,
  Mic,
};

export function SectionTechnology() {
  return (
    <section className="section bg-bg-primary">
      <Container>
        {/* Header */}
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 className="text-h2-mobile lg:text-h2 font-bold text-text-primary mb-4">
            {technology.title}
          </h2>
          <p className="text-base lg:text-lg text-text-secondary max-w-2xl mx-auto">
            {technology.subtitle}
          </p>
        </AnimatedSection>

        {/* Tests Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {technology.tests.map((test, index) => {
            const Icon = iconMap[test.icon];
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="p-6 bg-bg-card border border-border-subtle rounded-card hover:border-border-hover transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && <Icon className="w-6 h-6 text-accent-blue" />}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {test.name}
                    </h3>
                    <span className="text-sm font-mono text-text-muted">
                      {test.year}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {test.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Architecture */}
        <AnimatedSection className="mt-16">
          <h3 className="text-h3-mobile lg:text-h3 font-bold text-text-primary text-center mb-8">
            {technology.architecture.title}
          </h3>
          <motion.div
            variants={layerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mx-auto space-y-2"
          >
            {technology.architecture.layers.map((layer, index) => (
              <motion.div
                key={index}
                variants={layerItem}
                className="flex items-center gap-4 p-4 bg-bg-card border border-border-subtle rounded-lg"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-bg-secondary rounded font-mono text-sm text-accent-blue">
                  {layer.level}
                </span>
                <span className="font-mono text-sm text-text-primary">
                  {layer.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
