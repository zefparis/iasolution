"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { Microscope, Building, GraduationCap } from "lucide-react";
import { ctaSection } from "@/lib/content";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Microscope,
  Building,
  GraduationCap,
};

export function SectionCTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.05] to-bg-primary" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">{ctaSection.label}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {ctaSection.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {ctaSection.subtitle}
          </p>
        </motion.div>

        {/* Options Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {ctaSection.options.map((option, idx) => {
            const Icon = iconMap[option.icon];

            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent-purple" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {option.title}
                </h3>
                <ul className="space-y-2">
                  {option.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="text-sm text-text-secondary">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={ctaSection.cta1Href as LinkProps<string>["href"]}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo text-white font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            {ctaSection.cta1}
          </Link>
          <Link
            href={ctaSection.cta2Href as LinkProps<string>["href"]}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white font-medium hover:bg-white/[0.06] hover:border-accent-purple/30 transition-all duration-300"
          >
            {ctaSection.cta2}
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
