"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Container, AnimatedSection } from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Sparkles,
  BarChart3,
};

export function SectionHomeBenefits() {
  const { content } = useLanguage();
  const section = content.homeBenefits;

  return (
    <section className="section bg-bg-secondary">
      <Container>
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 className="text-h2-mobile lg:text-h2 font-bold text-text-primary mb-4">
            {section.title}
          </h2>
          <p className="text-base lg:text-lg text-text-secondary max-w-3xl mx-auto">
            {section.subtitle}
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {section.items.map((item: { icon: string; title: string; description: string }, index: number) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="p-6 bg-bg-card border border-border-subtle rounded-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && <Icon className="w-6 h-6 text-accent-blue" />}
                  <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
