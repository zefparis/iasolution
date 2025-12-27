'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import dynamic from 'next/dynamic';

// Dynamic imports for demos
const BotVsHumanComparison = dynamic(() => import('@/components/animations/BotVsHumanComparison').then(mod => ({ default: mod.BotVsHumanComparison })), { ssr: false });
const DefenseLayersAnimation = dynamic(() => import('@/components/animations/DefenseLayersAnimation').then(mod => ({ default: mod.DefenseLayersAnimation })), { ssr: false });
const CognitiveTestsFlow = dynamic(() => import('@/components/animations/CognitiveTestsFlow').then(mod => ({ default: mod.CognitiveTestsFlow })), { ssr: false });
const PostQuantumCryptoVisual = dynamic(() => import('@/components/animations/PostQuantumCryptoVisual').then(mod => ({ default: mod.PostQuantumCryptoVisual })), { ssr: false });
const ShieldLiveDemo = dynamic(() => import('@/components/animations/ShieldLiveDemo').then(mod => ({ default: mod.ShieldLiveDemo })), { ssr: false });

const content = {
  fr: {
    demos: [
      {
        id: 'bot-vs-human',
        title: '🤖 Bot vs Humain',
        description: 'Découvrez comment HCS-U7 détecte les bots grâce aux patterns cognitifs impossibles à reproduire',
        category: 'HCS-U7',
        component: 'BotVsHumanComparison',
      },
      {
        id: 'defense-layers',
        title: '🛡️ 10 Couches de Défense',
        description: 'Visualisez les 10 couches de sécurité qui analysent chaque requête en temps réel',
        category: 'HCS-U7',
        component: 'DefenseLayersAnimation',
      },
      {
        id: 'cognitive-tests',
        title: '🧠 Tests Cognitifs',
        description: 'Parcourez les 6 tests cognitifs qui génèrent votre code HCS-U7 unique',
        category: 'HCS-U7',
        component: 'CognitiveTestsFlow',
      },
      {
        id: 'post-quantum',
        title: '🔐 Cryptographie Post-Quantique',
        description: 'Testez notre système de signature résistant aux ordinateurs quantiques',
        category: 'Technology',
        component: 'PostQuantumCryptoVisual',
      },
      {
        id: 'shield-module',
        title: '⚡ Shield Module',
        description: 'Simulez des attaques réseau et observez la détection en temps réel',
        category: 'Shield',
        component: 'ShieldLiveDemo',
      },
    ],
  },
  en: {
    demos: [
      {
        id: 'bot-vs-human',
        title: '🤖 Bot vs Human',
        description: 'Discover how HCS-U7 detects bots through impossible-to-reproduce cognitive patterns',
        category: 'HCS-U7',
        component: 'BotVsHumanComparison',
      },
      {
        id: 'defense-layers',
        title: '🛡️ 10 Defense Layers',
        description: 'Visualize the 10 security layers that analyze each request in real-time',
        category: 'HCS-U7',
        component: 'DefenseLayersAnimation',
      },
      {
        id: 'cognitive-tests',
        title: '🧠 Cognitive Tests',
        description: 'Go through the 6 cognitive tests that generate your unique HCS-U7 code',
        category: 'HCS-U7',
        component: 'CognitiveTestsFlow',
      },
      {
        id: 'post-quantum',
        title: '🔐 Post-Quantum Cryptography',
        description: 'Test our signature system resistant to quantum computers',
        category: 'Technology',
        component: 'PostQuantumCryptoVisual',
      },
      {
        id: 'shield-module',
        title: '⚡ Shield Module',
        description: 'Simulate network attacks and observe real-time detection',
        category: 'Shield',
        component: 'ShieldLiveDemo',
      },
    ],
  },
};

export default function DemosList() {
  const { language } = useLanguage();
  const lang = language as 'fr' | 'en';
  const t = content[lang];
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const renderDemo = (componentName: string) => {
    switch (componentName) {
      case 'BotVsHumanComparison':
        return <BotVsHumanComparison autoPlay={false} loop={false} />;
      case 'DefenseLayersAnimation':
        return <DefenseLayersAnimation autoPlay={false} speed={1.5} />;
      case 'CognitiveTestsFlow':
        return <CognitiveTestsFlow mode="auto" autoPlay={false} speed={1.5} />;
      case 'PostQuantumCryptoVisual':
        return <PostQuantumCryptoVisual mode="combined" autoPlay={false} />;
      case 'ShieldLiveDemo':
        return <ShieldLiveDemo mode="combined" showExplanations={true} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
      <div className="container mx-auto px-4">
        {/* Demos Grid */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {t.demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden"
            >
              {/* Demo Header */}
              <button
                onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
                className="w-full p-6 text-left hover:bg-gray-800/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {demo.category}
                      </span>
                    </div>
                    <p className="text-gray-400">{demo.description}</p>
                  </div>
                  <div className="text-cyan-400 text-2xl">
                    {activeDemo === demo.id ? '−' : '+'}
                  </div>
                </div>
              </button>

              {/* Demo Content */}
              {activeDemo === demo.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-800"
                >
                  <div className="p-6">
                    {renderDemo(demo.component)}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
