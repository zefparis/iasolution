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

export const metadata: Metadata = {
  title: "HCS-U7 — Human Cognitive Signature | IA Solution",
  description: "Le premier système d'authentification biométrique cognitive résistant aux IA génératives. 98.9% précision, >99% détection IA, 2 brevets INPI.",
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
