"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export function ShieldPatent() {
  const { content, language } = useLanguage();
  const patent = content.shieldPage.patent;

  return (
    <section className="section relative">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">{patent.badge}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {patent.title}
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 border-l-4 border-l-accent-purple">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-accent-purple" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">FR2515560</h3>
                <p className="text-accent-purple">{patent.patentTitle}</p>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-text-muted text-sm">{language === "fr" ? "Déposé" : "Filed"}</span>
                  <p className="text-white">{patent.filed}</p>
                </div>
                <div>
                  <span className="text-text-muted text-sm">{language === "fr" ? "Statut" : "Status"}</span>
                  <p className="text-white">{patent.status}</p>
                </div>
                <div>
                  <span className="text-text-muted text-sm">Protection</span>
                  <p className="text-white">{patent.protection}</p>
                </div>
                <div>
                  <span className="text-text-muted text-sm">{language === "fr" ? "Titulaire" : "Holder"}</span>
                  <p className="text-white">{patent.holder}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm">{patent.description}</p>
              </div>
            </div>

            {/* Claims */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">
                {language === "fr" ? "Revendications principales" : "Main claims"}
              </h4>
              <ol className="space-y-2 text-sm text-text-secondary list-decimal list-inside">
                {patent.claims.map((claim, idx) => (
                  <li key={idx}>{claim}</li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
