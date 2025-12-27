"use client";

import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';

const ShieldLiveDemo = dynamic(
  () => import('@/components/animations/ShieldLiveDemo'),
  { ssr: false }
);

const content = {
  fr: {
    badge: 'DÉMO INTERACTIVE',
    title: 'Testez le Shield Module en Direct',
    description: 'Ajustez les paramètres réseau et observez comment le Shield Module détecte les attaques de niveau étatique en temps réel.',
  },
  en: {
    badge: 'INTERACTIVE DEMO',
    title: 'Test the Shield Module Live',
    description: 'Adjust network parameters and watch how the Shield Module detects state-level attacks in real-time.',
  },
};

export function ShieldDemoSection() {
  const { language } = useLanguage();
  const lang = (language as 'fr' | 'en') || 'fr';
  const t = content[lang];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] mb-6">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <ShieldLiveDemo 
          mode="combined"
          showExplanations={true}
        />
      </div>
    </section>
  );
}
