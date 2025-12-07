"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Container, AnimatedSection } from "@/components/ui";

export function SectionSolution() {
  const { content } = useLanguage();
  const solution = content.solution;

  return (
    <section className="section bg-bg-secondary">
      <Container className="text-center max-w-4xl">
        <AnimatedSection>
          <h2 className="text-h2-mobile lg:text-h2 font-bold text-text-primary mb-8">
            {solution.title}
          </h2>
          <p className="text-2xl lg:text-3xl font-bold text-text-primary mb-8 whitespace-pre-line">
            {solution.headline}
          </p>
          <p className="text-base lg:text-lg text-text-secondary leading-relaxed whitespace-pre-line">
            {solution.content}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
