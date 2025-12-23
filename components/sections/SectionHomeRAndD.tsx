"use client";

import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";
import { Beaker } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Container, AnimatedSection } from "@/components/ui";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function SectionHomeRAndD() {
  const { content } = useLanguage();
  const section = content.homeRAndD;

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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 bg-bg-card border border-border-subtle rounded-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center flex-shrink-0">
                <Beaker className="w-6 h-6 text-accent-purple" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{section.cardTitle}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{section.cardDescription}</p>

                <div className="mt-6">
                  <Link
                    href={section.ctaHref as LinkProps<string>["href"]}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white font-medium hover:bg-white/[0.06] hover:border-accent-purple/30 transition-all duration-300"
                  >
                    {section.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
