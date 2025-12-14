'use client';

import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target } from 'lucide-react';

export default function SectionUseCasesShield() {
  const { content, language } = useLanguage();
  const { useCases } = content.hcsShield;

  return (
    <section className="py-20 bg-gray-900/50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {useCases.title[language]}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {useCases.subtitle[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{useCase.flag}</span>
                <div>
                  <div className="font-bold text-lg">{useCase.country[language]}</div>
                  <div className="text-emerald-400 text-sm">{useCase.title[language]}</div>
                </div>
              </div>

              <p className="text-gray-400 mb-4">
                {useCase.description[language]}
              </p>

              <div className="space-y-2 pt-4 border-t border-gray-700">
                {useCase.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Target className="text-emerald-400 flex-shrink-0" size={16} />
                    <span className="text-gray-400">{metric[language]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
