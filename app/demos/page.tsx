import { Footer } from '@/components/footer';
import DemosHero from '@/components/demos/DemosHero';
import DemosList from '@/components/demos/DemosList';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Démos Interactives | IA SOLUTION',
  description: 'Testez nos technologies en direct : Bot vs Human, Defense Layers, Cognitive Tests, Post-Quantum Crypto, Shield Module',
};

export default function DemosPage() {
  return (
    <>
      {/* Back to Home Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 text-white rounded-lg transition-all shadow-lg hover:shadow-cyan-500/20"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Accueil</span>
        </Link>
      </div>

      <main>
        <DemosHero />
        <DemosList />
      </main>
      <Footer />
    </>
  );
}
