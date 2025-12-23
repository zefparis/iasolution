"use client";

import { motion } from "framer-motion";
import { heroSequence } from "@/lib/animations";
import { Container } from "@/components/ui";
import { useLanguage } from "@/contexts/LanguageContext";

function getShortDateLabel(dateLabel: string) {
  const match = dateLabel.match(/\d{2}\/\d{2}\/\d{4}/);
  return match?.[0] ?? dateLabel;
}

export function PatentsHero() {
  const { language, content } = useLanguage();
  const patents = content.patents;
  const patentsCount = patents.items.length;

  return (
    <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
      
      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-1/4 left-1/3" />
      <div className="glow-orb glow-orb-pink w-[300px] h-[300px] bottom-1/4 right-1/4" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={heroSequence.badge}
            initial="hidden"
            animate="visible"
          >
            <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em]">
              {language === "fr" ? "PROPRIÉTÉ INTELLECTUELLE" : "INTELLECTUAL PROPERTY"}
            </span>
          </motion.div>

          <motion.h1
            variants={heroSequence.title}
            initial="hidden"
            animate="visible"
            className="mt-8 text-h1-mobile lg:text-h1 font-semibold glow-text"
          >
            {language === "fr" ? "Brevets INPI" : "INPI Patents"}
          </motion.h1>

          <motion.p
            variants={heroSequence.description}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            {language === "fr"
              ? `${patentsCount} brevets déposés à l'Institut National de la Propriété Industrielle. Protection de 20 ans sur nos innovations en authentification cognitive et cryptographie.`
              : `${patentsCount} patents filed with the French National Institute of Industrial Property (INPI). 20-year protection for our innovations in cognitive authentication and cryptography.`}
          </motion.p>

          {/* Patent numbers */}
          <motion.div
            variants={heroSequence.cta}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {patents.items.map((patent) => (
              <div
                key={patent.number}
                className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08]"
              >
                <span className="font-mono text-xl font-bold text-accent-purple">
                  {patent.number}
                </span>
                <p className="text-xs text-text-muted mt-1">
                  {getShortDateLabel(patent.date)}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
