'use client';

import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/contexts/LanguageContext';
import { Satellite, Radio, Cable, Eye } from 'lucide-react';

const iconMap = {
  SatelliteOff: Satellite,
  Radio,
  Cable,
  Eye,
};

export default function SectionProblemTactical() {
  const { content, language } = useLanguage();
  const { problem } = content.hcsShield;

  return (
    <section className="py-20 bg-gray-900/50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {problem.title[language]}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {problem.subtitle[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problem.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-red-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title[language]}</h3>
                    <p className="text-gray-400">{item.description[language]}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
