import {
  Header,
  Footer,
  Hero,
  SectionProductHCS,
  SectionPatents,
  SectionUseCases,
  SectionHomeProblems,
  SectionHomeBenefits,
  SectionHomeDeployment,
  SectionHomeInnovUp,
  SectionHomeRAndD,
  SectionHomeFinalCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionHomeProblems />
        <SectionProductHCS />
        <SectionHomeBenefits />
        <SectionUseCases />
        <SectionHomeDeployment />
        <SectionHomeInnovUp />
        <SectionPatents />
        <SectionHomeRAndD />
        <SectionHomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
