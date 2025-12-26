import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header, Footer } from "@/components/sections";
import { 
  HCSHero, 
  HCSCognitiveTests, 
  HCSArchitecture, 
  HCSPerformance,
  HCSUseCases,
  HCSAPI,
  HCSPricing 
} from "@/components/hcs-u7";
import { patentsFrItems } from "@/lib/content-bilingual";

const DefenseLayersAnimation = dynamic(
  () => import("@/components/animations/DefenseLayersAnimation"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "HCS-U7 — Human Cognitive Signature | IA Solution",
  description: `Le premier système d'authentification biométrique cognitive résistant aux IA génératives. 98.9% précision, >99% détection IA, ${patentsFrItems.length} brevets INPI.`,
};

export default function HCSU7Page() {
  return (
    <>
      <Header />
      <main>
        <HCSHero />
        <HCSCognitiveTests />
        
        {/* Defense Layers Animation Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] mb-6">
                DEFENSE IN DEPTH
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                10 Couches de Défense en Action
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Visualisez comment chaque requête traverse 10 couches de sécurité indépendantes 
                avant d&apos;être authentifiée. Cliquez sur Play pour voir la magie opérer.
              </p>
            </div>

            <DefenseLayersAnimation 
              autoPlay={false}
              speed={1}
              showControls={true}
            />
          </div>
        </section>

        <HCSArchitecture />
        <HCSPerformance />
        <HCSUseCases />
        <HCSAPI />
        <HCSPricing />
      </main>
      <Footer />
    </>
  );
}
