"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const gradients = [
  { gradient: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/30" },
  { gradient: "from-green-500/20 to-green-600/10", border: "border-green-500/30" },
  { gradient: "from-purple-500/20 to-purple-600/10", border: "border-purple-500/30" },
  { gradient: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/30" },
];

export function ShieldUseCases() {
  const { content } = useLanguage();
  const useCasesContent = content.shieldPage.useCases;

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
          <span className="badge mb-6 inline-block">{useCasesContent.badge}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {useCasesContent.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {useCasesContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {useCasesContent.cases.map((useCase, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className={`glass-card p-6 bg-gradient-to-br ${gradients[idx].gradient} border ${gradients[idx].border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
              <p className="text-text-secondary">{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
