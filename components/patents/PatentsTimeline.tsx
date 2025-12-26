"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const timeline = [
  { date: "Nov 2025", event: "Dépôt brevet FR2514274 — Authentification cognitive", status: "completed" },
  { date: "Déc 2025", event: "Dépôt brevet FR2514546 — Celestial Entropy Layer", status: "completed" },
  { date: "Déc 2025", event: "Dépôt brevet FR2515560 — Shield Module (Anti-FalconOne Defense)", status: "completed" },
  { date: "2026", event: "Examen INPI (prévu)", status: "pending" },
  { date: "2026-2027", event: "Publication officielle (prévu)", status: "pending" },
  { date: "2045", event: "Expiration protection (20 ans)", status: "future" },
];

export function PatentsTimeline() {
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
          <span className="badge mb-6 inline-block">CALENDRIER</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Timeline INPI
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-blue to-transparent" />

            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 top-4 w-4 h-4 rounded-full border-4 border-bg-primary ${
                    item.status === "completed" ? "bg-green-500" :
                    item.status === "pending" ? "bg-accent-purple" : "bg-text-muted"
                  }`} />
                  
                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-accent-purple font-medium">
                        {item.date}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === "completed" ? "bg-green-500/20 text-green-400" :
                        item.status === "pending" ? "bg-accent-purple/20 text-accent-purple" : 
                        "bg-text-muted/20 text-text-muted"
                      }`}>
                        {item.status === "completed" ? "Fait" : item.status === "pending" ? "À venir" : "Futur"}
                      </span>
                    </div>
                    <p className="text-text-secondary">
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
