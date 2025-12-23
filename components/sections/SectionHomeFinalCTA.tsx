"use client";

import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Container } from "@/components/ui";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function SectionHomeFinalCTA() {
  const { content } = useLanguage();
  const section = content.homeFinalCTA;

  return (
    <section className="section relative overflow-hidden bg-bg-secondary">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.05] to-bg-secondary" />
      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-h2-mobile lg:text-h2 font-bold text-text-primary mb-4">
            {section.title}
          </h2>
          <p className="text-base lg:text-lg text-text-secondary mb-10">
            {section.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </motion.div>
      </Container>
    </section>
  );
}
