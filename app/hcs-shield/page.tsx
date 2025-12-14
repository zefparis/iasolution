'use client';

import { Container } from '@/components/ui/Container';
import { Plane, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionProblemTactical from '@/components/sections/SectionProblemTactical';
import SectionSecurity7Layers from '@/components/sections/SectionSecurity7Layers';
import SectionUseCasesShield from '@/components/sections/SectionUseCasesShield';
import SectionTechOffline from '@/components/sections/SectionTechOffline';

export default function HCSShieldPage() {
  const { content, language } = useLanguage();
  const { hero, stats, cta } = content.hcsShield;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
              <Plane size={20} />
              <span className="font-semibold text-sm">{hero.badge[language]}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {hero.title[language]}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                {hero.subtitle[language]}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              {hero.description[language]}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition"
              >
                <Plane size={20} />
                {hero.ctaPrimary[language]}
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 border border-gray-700 transition"
              >
                <ShieldCheck size={20} />
                {hero.ctaSecondary[language]}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-y border-gray-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">{stats.offline.value}</div>
              <div className="text-gray-400 text-sm">{stats.offline.label[language]}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">{stats.layers.value}</div>
              <div className="text-gray-400 text-sm">{stats.layers.label[language]}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">&lt;3s</div>
              <div className="text-gray-400 text-sm">{stats.wipe.label[language]}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">{stats.emission.value}</div>
              <div className="text-gray-400 text-sm">{stats.emission.label[language]}</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <SectionProblemTactical />

      {/* Security Section */}
      <SectionSecurity7Layers />

      {/* Use Cases Section */}
      <SectionUseCasesShield />

      {/* Tech Section */}
      <SectionTechOffline />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 border-y border-emerald-500/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              {cta.title[language]}
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {cta.description[language]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                {cta.primaryButton[language]}
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                {cta.secondaryButton[language]}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
