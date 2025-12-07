"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const plans = [
  {
    name: "Starter",
    price: "Sur devis",
    description: "Pour les startups et PME",
    features: [
      "Jusqu'à 10,000 vérifications/mois",
      "API REST",
      "Dashboard analytics",
      "Support email",
      "SLA 99.5%",
    ],
    cta: "Demander un devis",
    highlighted: false,
  },
  {
    name: "Business",
    price: "Sur devis",
    description: "Pour les entreprises en croissance",
    features: [
      "Jusqu'à 100,000 vérifications/mois",
      "API REST + Webhooks",
      "Dashboard analytics avancé",
      "Support prioritaire",
      "SLA 99.9%",
      "Conformité PSD2/SCA",
      "Custom rules engine",
    ],
    cta: "Demander un devis",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    description: "Pour les grandes organisations",
    features: [
      "Vérifications illimitées",
      "API REST + Webhooks + SDK",
      "Dashboard white-label",
      "Support dédié 24/7",
      "SLA 99.99%",
      "Conformité PSD2/SCA + RGPD",
      "Custom ML models",
      "On-premise deployment",
      "Audit & Pentest inclus",
    ],
    cta: "Contacter les ventes",
    highlighted: false,
  },
];

export function HCSPricing() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.03] to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">TARIFS</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Plans & Tarification
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Tarification adaptée à votre volume. Tous les plans incluent l'accès à l'ensemble des tests cognitifs.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className={`glass-card p-8 relative ${
                plan.highlighted ? "border-accent-purple/50 scale-105" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-accent-purple text-white text-xs font-medium">
                    Populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-2xl font-mono font-bold text-accent-purple mb-2">
                  {plan.price}
                </div>
                <p className="text-sm text-text-muted">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={"/contact" as LinkProps<string>["href"]}
                className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-accent-purple to-accent-indigo text-white hover:shadow-lg hover:shadow-accent-purple/25"
                    : "bg-white/[0.03] border border-white/[0.08] text-white hover:bg-white/[0.06] hover:border-accent-purple/30"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-sm text-text-muted mt-8"
        >
          Licence : CC BY-NC-SA 4.0 + Commercial disponible
        </motion.p>
      </Container>
    </section>
  );
}
