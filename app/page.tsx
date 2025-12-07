import {
  Header,
  Footer,
  Hero,
  SectionResearchAxes,
  SectionProductHCS,
  SectionArchitecture,
  SectionU7Format,
  SectionTechStack,
  SectionPatents,
  SectionFounder,
  SectionPublications,
  SectionCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionResearchAxes />
        <SectionProductHCS />
        <SectionArchitecture />
        <SectionU7Format />
        <SectionTechStack />
        <SectionPatents />
        <SectionFounder />
        <SectionPublications />
        <SectionCTA />
      </main>
      <Footer />
    </>
  );
}
