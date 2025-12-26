import { Metadata } from "next";
import dynamic from "next/dynamic";
import { 
  Header, 
  Footer,
  SectionArchitecture,
  SectionU7Format,
  SectionTechStack 
} from "@/components/sections";
import { TechnologyHero, SectionPostQuantum } from "@/components/technology";

const CognitiveTestsFlow = dynamic(
  () => import("@/components/animations/CognitiveTestsFlow"),
  { ssr: false }
);

const PostQuantumCryptoVisual = dynamic(
  () => import("@/components/animations/PostQuantumCryptoVisual"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Technologie | IA Solution",
  description: "Stack technique HCS-U7 v8.4 : Fastify 5, TypeScript, PostgreSQL, Redis, architecture Defense-in-Depth 10 couches, Post-Quantum Crypto (ML-DSA-65, ML-KEM-768).",
};

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main>
        <TechnologyHero />
        <SectionPostQuantum />
        
        {/* Post-Quantum Crypto Visual */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-purple-900/50">
          <div className="container mx-auto px-4">
            <PostQuantumCryptoVisual 
              mode="combined"
              autoPlay={true}
              showComparison={true}
              interactive={true}
            />
          </div>
        </section>
        
        {/* Cognitive Tests Flow Animation */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
          <div className="container mx-auto px-4">
            <CognitiveTestsFlow 
              mode="auto"
              autoPlay={true}
              showCode={true}
              speed={1.5}
            />
          </div>
        </section>

        <SectionArchitecture />
        <SectionU7Format />
        <SectionTechStack />
      </main>
      <Footer />
    </>
  );
}
