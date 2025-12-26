"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function ShieldPatent() {
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
          <span className="badge mb-6 inline-block">PROPRIÉTÉ INTELLECTUELLE</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Brevet FR2515560
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
                <p className="text-accent-purple">Shield Module - Anti-FalconOne Defense</p>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-text-muted text-sm">Déposé</span>
                  <p className="text-white">17 décembre 2025</p>
                </div>
                <div>
                  <span className="text-text-muted text-sm">Statut</span>
                  <p className="text-white">En cours d&apos;examen INPI</p>
                </div>
                <div>
                  <span className="text-text-muted text-sm">Protection</span>
                  <p className="text-white">20 ans (jusqu&apos;en 2045)</p>
                </div>
                <div>
                  <span className="text-text-muted text-sm">Titulaire</span>
                  <p className="text-white">IA-SOLUTION / Benjamin BARRÈRE</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm">
                  Premier brevet au monde couvrant la détection d&apos;IMSI catchers 
                  et d&apos;attaques géolocalisation dans un système d&apos;authentification.
                </p>
              </div>
            </div>

            {/* Claims */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Revendications principales</h4>
              <ol className="space-y-2 text-sm text-text-secondary list-decimal list-inside">
                <li>Système de détection d&apos;IMSI catchers par analyse multi-signaux</li>
                <li>Algorithme de détection de géolocalisation haute précision</li>
                <li>Protection contre attaques GPS spoofing</li>
                <li>Recommandations adaptatives selon niveau de risque détecté</li>
              </ol>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
