'use client';

import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Database, Cpu, Smartphone } from 'lucide-react';

const iconMap = {
  MapPin,
  Database,
  Cpu,
  Smartphone,
};

export default function SectionTechOffline() {
  const { content, language } = useLanguage();
  const { tech } = content.hcsShield;

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {tech.title[language]}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {tech.subtitle[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tech.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-teal-500/50 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-teal-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title[language]}</h3>
                    <p className="text-gray-400">{feature.description[language]}</p>
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
