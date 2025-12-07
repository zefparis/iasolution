import { Metadata } from "next";
import { 
  Header, 
  Footer,
  SectionArchitecture,
  SectionU7Format,
  SectionTechStack 
} from "@/components/sections";
import { TechnologyHero } from "@/components/technology";

export const metadata: Metadata = {
  title: "Technologie | IA Solution",
  description: "Stack technique HCS-U7 : Fastify 5, TypeScript, PostgreSQL, Redis, architecture Defense-in-Depth, Celestial Entropy Layer.",
};

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main>
        <TechnologyHero />
        <SectionArchitecture />
        <SectionU7Format />
        <SectionTechStack />
      </main>
      <Footer />
    </>
  );
}
