'use client';

import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

export default function SectionSecurity7Layers() {
  const { content, language } = useLanguage();
  const { security } = content.hcsShield;

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {security.title[language]}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {security.subtitle[language]}
          </p>
        </div>

        <div className="space-y-6">
          {security.layers.map((layer, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-400">
                    {layer.number}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{layer.name[language]}</h3>
                    <code className="text-sm text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                      {layer.tech}
                    </code>
                  </div>
                  <p className="text-gray-400">{layer.description[language]}</p>
                </div>

                <div className="flex-shrink-0">
                  <Check className="text-emerald-400" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
