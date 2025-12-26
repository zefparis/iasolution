"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export function ShieldCTA() {
  const { content } = useLanguage();
  const cta = content.shieldPage.cta;

  return (
    <section className="section relative overflow-hidden">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="glass-card p-12 text-center bg-gradient-to-r from-accent-purple/10 via-accent-blue/10 to-accent-purple/10 border-accent-purple/30">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {cta.title}
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              {cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                {cta.primaryCta}
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 border border-white/20 transition"
              >
                {cta.secondaryCta}
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
