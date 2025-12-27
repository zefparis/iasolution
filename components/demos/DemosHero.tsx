'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  fr: {
    badge: 'DÉMOS INTERACTIVES',
    title: 'Testez nos Technologies en Direct',
    subtitle: 'Explorez nos innovations en IA cognitive et cybersécurité à travers des démonstrations interactives',
  },
  en: {
    badge: 'INTERACTIVE DEMOS',
    title: 'Test Our Technologies Live',
    subtitle: 'Explore our innovations in cognitive AI and cybersecurity through interactive demonstrations',
  },
};

export default function DemosHero() {
  const { language } = useLanguage();
  const lang = language as 'fr' | 'en';
  const t = content[lang];

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] mb-6">
              {t.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <Sparkles className="inline-block mr-3 text-cyan-400" size={48} />
            {t.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
