import dynamic from "next/dynamic";
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

const BotVsHumanComparison = dynamic(
  () => import("@/components/animations/BotVsHumanComparison"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionHomeProblems />
        <SectionProductHCS />
        
        {/* Bot vs Human Comparison Animation */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
          <div className="container mx-auto px-4">
            <BotVsHumanComparison 
              autoPlay={true}
              loop={false}
              speed={1}
              showLabels={true}
            />
          </div>
        </section>

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
