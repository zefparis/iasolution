"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Container, AnimatedSection } from "@/components/ui";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function SectionHomeInnovUp() {
  const { content } = useLanguage();
  const section = content.homeInnovUp;

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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 bg-bg-card border border-border-subtle rounded-card">
            <ul className="space-y-3">
              {section.points.map((point: string, index: number) => (
                <li key={index} className="text-sm text-text-secondary flex items-start gap-3">
                  <span className="text-accent-purple mt-1">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={section.cta1Href as LinkProps<string>["href"]}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo text-white font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {section.cta1}
              </Link>
              <Link
                href={section.cta2Href as LinkProps<string>["href"]}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white font-medium hover:bg-white/[0.06] hover:border-accent-purple/30 transition-all duration-300"
              >
                {section.cta2}
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
