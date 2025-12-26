import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header, Footer } from '@/components/sections';
import { ShieldHero } from '@/components/shield/ShieldHero';
import { ShieldProblem } from '@/components/shield/ShieldProblem';
import { ShieldSolution } from '@/components/shield/ShieldSolution';
import { ShieldUseCases } from '@/components/shield/ShieldUseCases';
import { ShieldTechnical } from '@/components/shield/ShieldTechnical';
import { ShieldPatent } from '@/components/shield/ShieldPatent';
import { ShieldCTA } from '@/components/shield/ShieldCTA';

const ShieldLiveDemo = dynamic(
  () => import('@/components/animations/ShieldLiveDemo'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Shield Module - Anti-FalconOne Defense | IA-SOLUTION',
  description: 'Protection contre les attaques réseau state-level : IMSI catchers, géolocalisation haute précision, GPS spoofing. Brevet FR2515560.',
};

export default function ShieldPage() {
  return (
    <>
      <Header />
      <main>
        <ShieldHero />
        <ShieldProblem />
        <ShieldSolution />
        
        {/* Interactive Live Demo Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] mb-6">
                INTERACTIVE DEMO
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Testez le Shield Module en Direct
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Ajustez les paramètres réseau et observez comment le Shield Module détecte 
                les attaques de niveau étatique en temps réel.
              </p>
            </div>

            <ShieldLiveDemo 
              mode="combined"
              showExplanations={true}
            />
          </div>
        </section>

        <ShieldUseCases />
        <ShieldTechnical />
        <ShieldPatent />
        <ShieldCTA />
      </main>
      <Footer />
    </>
  );
}
