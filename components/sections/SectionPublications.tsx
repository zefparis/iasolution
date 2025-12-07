"use client";

import { motion } from "framer-motion";
import { FileText, Book, Microscope, BarChart, ArrowRight } from "lucide-react";
import { publications } from "@/lib/content";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Book,
  Microscope,
  BarChart,
};

export function SectionPublications() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">{publications.label}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {publications.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {publications.subtitle}
          </p>
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {publications.items.map((item, idx) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6 group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-accent-purple uppercase tracking-wider">
                      {item.type}
                    </span>
                    <h3 className="text-white font-medium mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Chapters */}
                <ul className="space-y-1.5 mb-4">
                  {item.chapters.map((chapter, chapterIdx) => (
                    <li key={chapterIdx} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-text-muted">•</span>
                      <span>{chapter}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  {item.status && (
                    <span className="text-xs text-text-muted">
                      {item.status}
                    </span>
                  )}
                  <button className="flex items-center gap-2 text-sm text-accent-purple hover:text-accent-pink transition-colors ml-auto group-hover:gap-3">
                    {item.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
