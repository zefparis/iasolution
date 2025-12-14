'use client';

import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/contexts/LanguageContext';
import { Plane, CreditCard, ShoppingCart, Gamepad2 } from 'lucide-react';

export default function SectionIndustries() {
  const { language } = useLanguage();

  const industries = [
    {
      icon: Plane,
      name: language === 'fr' ? 'Défense & Militaire' : 'Defense & Military',
      description: language === 'fr'
        ? 'Opérations spéciales, drones tactiques, environnements GPS-denied'
        : 'Special operations, tactical drones, GPS-denied environments',
      products: ['HCS-SHIELD', 'HCS-U7 SCA'],
      color: 'emerald',
      gradient: 'from-emerald-500/10 to-teal-500/10',
      borderHover: 'hover:border-emerald-500/50',
    },
    {
      icon: CreditCard,
      name: 'Fintech & Banking',
      description: language === 'fr'
        ? 'Conformité PSD2, prévention fraude, authentification transactions'
        : 'PSD2 compliance, fraud prevention, transaction authentication',
      products: ['HCS-U7 Backend', 'SCA Engine'],
      color: 'purple',
      gradient: 'from-purple-500/10 to-indigo-500/10',
      borderHover: 'hover:border-purple-500/50',
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce',
      description: language === 'fr'
        ? 'Protection bots, prévention takeover, sécurité checkout'
        : 'Bot protection, account takeover prevention, checkout security',
      products: ['HCS-U7 API', 'Cognitive Firewall'],
      color: 'blue',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderHover: 'hover:border-blue-500/50',
    },
    {
      icon: Gamepad2,
      name: 'Gaming & Gambling',
      description: language === 'fr'
        ? 'Anti-cheat, détection bots, fair play enforcement'
        : 'Anti-cheat, bot detection, fair play enforcement',
      products: ['HCS-U7 Real-Time', 'Behavioral Analysis'],
      color: 'orange',
      gradient: 'from-orange-500/10 to-red-500/10',
      borderHover: 'hover:border-orange-500/50',
    },
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'fr' ? 'Industries Servies' : 'Industries We Serve'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Du champ de bataille au checkout, notre technologie de sécurité cognitive protège les opérations critiques dans tous les secteurs.'
              : 'From battlefield to checkout, our cognitive security technology protects critical operations across verticals.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${industry.gradient} rounded-xl p-6 border border-gray-700 ${industry.borderHover} transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  industry.color === 'emerald' ? 'bg-emerald-500/20' :
                  industry.color === 'purple' ? 'bg-purple-500/20' :
                  industry.color === 'blue' ? 'bg-blue-500/20' :
                  'bg-orange-500/20'
                }`}>
                  <Icon className={
                    industry.color === 'emerald' ? 'text-emerald-400' :
                    industry.color === 'purple' ? 'text-purple-400' :
                    industry.color === 'blue' ? 'text-blue-400' :
                    'text-orange-400'
                  } size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>

                <p className="text-gray-400 text-sm mb-4">
                  {industry.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-gray-700">
                  {industry.products.map((product, i) => (
                    <div key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        industry.color === 'emerald' ? 'bg-emerald-400' :
                        industry.color === 'purple' ? 'bg-purple-400' :
                        industry.color === 'blue' ? 'bg-blue-400' :
                        'bg-orange-400'
                      }`} />
                      {product}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
