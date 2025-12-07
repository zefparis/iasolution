"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui";

export function SectionPatents() {
  const { content } = useLanguage();
  const patents = content.patents;

  return (
    <section className="section relative">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">{patents.label}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {patents.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {patents.subtitle}
          </p>
        </motion.div>

        {/* Patents Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
        >
          {patents.items.map((patent, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="glass-card p-8 group"
            >
              {/* Patent Number */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <span className="font-mono text-2xl font-bold text-white">
                    {patent.number}
                  </span>
                  <p className="text-sm text-text-muted">{patent.date}</p>
                </div>
              </div>

              {/* Title */}
              <p className="text-text-secondary leading-relaxed mb-6">
                {patent.title}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-6 text-sm text-text-muted">
                  <span>{patent.claims} revendications</span>
                  <span>{patent.figures} figure{patent.figures > 1 ? "s" : ""}</span>
                </div>
                <button className="flex items-center gap-2 text-sm text-accent-purple hover:text-accent-pink transition-colors group-hover:gap-3">
                  Voir les détails
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-sm text-text-muted text-center max-w-3xl mx-auto italic border-t border-white/[0.08] pt-8">
            {patents.disclaimer}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
