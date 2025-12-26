import { Metadata } from "next";
import { 
  Header, 
  Footer,
  SectionArchitecture,
  SectionU7Format,
  SectionTechStack 
} from "@/components/sections";
import { TechnologyHero, SectionPostQuantum } from "@/components/technology";

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
        <SectionArchitecture />
        <SectionU7Format />
        <SectionTechStack />
      </main>
      <Footer />
    </>
  );
}
