import { Metadata } from "next";
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
