"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingCart, Landmark, Plug, Lock, Bot } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const useCases = [
  {
    icon: Building2,
    title: "Banques & Fintech",
    description: "Conformité PSD2/SCA native. Exemptions intelligentes Art. 11 (TRA) et Art. 18 (comportemental). Réduction fraude sans friction.",
    features: ["PSD2 RTS compliant", "Exemptions TRA", "3D Secure 2.0"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Protection anti-fraude à l'inscription et au paiement. Réduction des chargebacks. Expérience utilisateur fluide.",
    features: ["Account takeover protection", "Payment fraud prevention", "Bot mitigation"],
  },
  {
    icon: Landmark,
    title: "Gouvernement",
    description: "Portails haute sécurité pour services publics. Compatible FranceConnect, Impôts, Ameli, CAF.",
    features: ["eIDAS compliant", "RGPD by design", "Audit trail complet"],
  },
  {
    icon: Plug,
    title: "Infrastructures SCADA",
    description: "Authentification opérateurs systèmes critiques. Énergie, eau, transport, télécoms.",
    features: ["Zero Trust Architecture", "MFA cognitif", "Alertes temps réel"],
  },
  {
    icon: Lock,
    title: "APIs & Plateformes",
    description: "Protection endpoints contre scraping, bots, credential stuffing. Rate limiting intelligent.",
    features: ["API Gateway integration", "Webhook support", "SDK multi-langage"],
  },
  {
    icon: Bot,
    title: "Robotique & IoT",
    description: "Identification vocale propriétaire robot domestique. Authentification continue pour devices connectés.",
    features: ["Voice biometrics", "Continuous auth", "Edge computing ready"],
  },
];

export function HCSUseCases() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">CAS D&apos;USAGE</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Applications
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            HCS-U7 protège les points d&apos;entrée critiques dans tous les secteurs.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent-purple" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature, featureIdx) => (
                    <span 
                      key={featureIdx}
                      className="text-xs px-2 py-1 rounded-md bg-white/[0.05] text-text-muted"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
