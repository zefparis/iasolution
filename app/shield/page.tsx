import { Metadata } from 'next';
import { Header, Footer } from '@/components/sections';
import { ShieldHero } from '@/components/shield/ShieldHero';
import { ShieldProblem } from '@/components/shield/ShieldProblem';
import { ShieldSolution } from '@/components/shield/ShieldSolution';
import { ShieldUseCases } from '@/components/shield/ShieldUseCases';
import { ShieldTechnical } from '@/components/shield/ShieldTechnical';
import { ShieldPatent } from '@/components/shield/ShieldPatent';
import { ShieldCTA } from '@/components/shield/ShieldCTA';
import { ShieldDemoSection } from '@/components/shield/ShieldDemoSection';

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
        
        <ShieldDemoSection />

        <ShieldUseCases />
        <ShieldTechnical />
        <ShieldPatent />
        <ShieldCTA />
      </main>
      <Footer />
    </>
  );
}
