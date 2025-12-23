"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Container, AnimatedSection } from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export function SectionHomeDeployment() {
  const { content } = useLanguage();
  const section = content.homeDeployment;

  return (
    <section className="section bg-bg-primary">
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
          {section.steps.map((step: { title: string; description: string }, index: number) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 bg-bg-card border border-border-subtle rounded-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center font-mono text-sm text-text-primary">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
