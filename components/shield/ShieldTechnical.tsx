"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const technicalDetails = `Detection Signals:
├── IMSI Catcher
│   ├── Suspicious LAC (0 or 1): +40 risk points
│   ├── Unknown Cell ID: +25 risk points
│   ├── Signal Anomalies (>-40 dBm): +20 risk points
│   ├── Frequent Handovers (>5/60s): +10 risk points
│   └── Encryption Downgrade: +30 risk points
│
└── Geolocation
    ├── Impossible Travel (>900 km/h): +50 risk points
    ├── Precision Tracking (<10m x3): +30 risk points
    └── GPS Spoofing: +40 risk points

Decision Thresholds:
├── ≥70: DANGEROUS → ENABLE_AIRPLANE_MODE
├── ≥40: SUSPICIOUS → AVOID_SENSITIVE_OPS
└── <40: SAFE → CONTINUE_NORMAL`;

export function ShieldTechnical() {
  const { content } = useLanguage();
  const technical = content.shieldPage.technical;

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">{technical.badge}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {technical.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {technical.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-6 bg-gray-900/50">
            <pre className="font-mono text-sm text-text-secondary overflow-x-auto whitespace-pre">
              {technicalDetails}
            </pre>
          </div>
        </motion.div>

        {/* Risk Level Legend */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {technical.levels.map((level, idx) => {
            const colors = [
              { border: "border-l-red-500", text: "text-red-400", bg: "bg-red-500/20" },
              { border: "border-l-yellow-500", text: "text-yellow-400", bg: "bg-yellow-500/20" },
              { border: "border-l-green-500", text: "text-green-400", bg: "bg-green-500/20" },
            ];
            return (
              <div key={idx} className={`glass-card p-4 border-l-4 ${colors[idx].border}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`${colors[idx].text} font-bold`}>{level.threshold}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${colors[idx].bg} ${colors[idx].text}`}>{level.level}</span>
                </div>
                <p className="text-sm text-text-secondary">{level.action}</p>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
