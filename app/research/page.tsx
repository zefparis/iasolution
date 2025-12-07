import { Metadata } from "next";
import {
  Header,
  Footer,
  SectionResearchAxes,
} from "@/components/sections";
import { ResearchHero, ResearchMethodology, ResearchRoadmap } from "@/components/research";

export const metadata: Metadata = {
  title: "Recherche | IA Solution",
  description: "Nos axes de recherche : biométrie cognitive, cryptographie des croyances, résistance à l'IA générative, cryptographie post-quantique.",
};

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main>
        <ResearchHero />
        <SectionResearchAxes />
        <ResearchMethodology />
        <ResearchRoadmap />
      </main>
      <Footer />
    </>
  );
}
