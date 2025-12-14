'use client';

import { useState } from 'react';
import { ShieldCheck, Plane, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui';

export default function HeroTabs() {
  const [activeTab, setActiveTab] = useState<'hcs-u7' | 'hcs-shield'>('hcs-u7');
  const { language } = useLanguage();

  return (
    <section className="pt-32 pb-20">
      <Container>
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('hcs-u7')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'hcs-u7'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-white/[0.03] border border-white/[0.08] text-text-secondary hover:text-white hover:border-white/[0.15]'
            }`}
          >
            <ShieldCheck className="inline mr-2" size={20} />
            HCS-U7
          </button>
          <button
            onClick={() => setActiveTab('hcs-shield')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'hcs-shield'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/50'
                : 'bg-white/[0.03] border border-white/[0.08] text-text-secondary hover:text-white hover:border-white/[0.15]'
            }`}
          >
            <Plane className="inline mr-2" size={20} />
            HCS-SHIELD
          </button>
        </div>

        {/* Content HCS-U7 */}
        {activeTab === 'hcs-u7' && (
          <div className="text-center max-w-4xl mx-auto animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
              {language === 'fr' ? 'Authentification Cognitive' : 'Cognitive Authentication'}
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {language === 'fr' 
                ? 'Authentification biométrique résistante aux IA génératives. 6 tests cognitifs, taux de détection des bots de 99.6%.'
                : 'Biometric authentication resistant to generative AI. 6 cognitive tests, 99.6% bot detection rate.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/hcs-u7"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.03] border border-white/[0.08] text-white rounded-lg font-semibold hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-300"
              >
                {language === 'fr' ? 'Demander une démo' : 'Request Demo'}
              </Link>
            </div>
          </div>
        )}

        {/* Content HCS-SHIELD */}
        {activeTab === 'hcs-shield' && (
          <div className="text-center max-w-4xl mx-auto animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              {language === 'fr' ? 'Planification Tactique' : 'Tactical Mission Planning'}
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {language === 'fr' 
                ? 'PWA sécurisée pour opérateurs de drones. Authentification hardware-bound, QR éphémère, capacité 100% offline.'
                : 'Secure PWA for drone operators. Hardware-bound auth, ephemeral QR, 100% offline capability.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/hcs-shield"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
              >
                {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.03] border border-white/[0.08] text-white rounded-lg font-semibold hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-300"
              >
                {language === 'fr' ? 'Demander une démo' : 'Request Demo'}
              </Link>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
