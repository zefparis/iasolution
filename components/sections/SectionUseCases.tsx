"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingCart, Landmark, Plug, Lock, Bot } from "lucide-react";
import { useCases } from "@/lib/content";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { Container, AnimatedSection } from "@/components/ui";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  ShoppingCart,
  Landmark,
  Plug,
  Lock,
  Bot,
};

export function SectionUseCases() {
  return (
    <section className="section bg-bg-primary">
      <Container>
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 className="text-h2-mobile lg:text-h2 font-bold text-text-primary mb-4">
            {useCases.title}
          </h2>
          <p className="text-base lg:text-lg text-text-secondary max-w-2xl mx-auto">
            {useCases.subtitle}
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.cases.map((useCase, index) => {
            const Icon = iconMap[useCase.icon];
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="p-6 bg-bg-card border border-border-subtle rounded-card hover:border-border-hover transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && <Icon className="w-6 h-6 text-accent-blue" />}
                  <h3 className="text-lg font-semibold text-text-primary">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
