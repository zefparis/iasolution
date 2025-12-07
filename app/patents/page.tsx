import { Metadata } from "next";
import { Header, Footer, SectionPatents } from "@/components/sections";
import { PatentsHero, PatentsTimeline, PatentsApplications } from "@/components/patents";

export const metadata: Metadata = {
  title: "Brevets INPI | IA Solution",
  description: "2 brevets déposés à l'INPI : FR2514274 (authentification cognitive) et FR2514546 (Celestial Entropy Layer). Protection 20 ans.",
};

export default function PatentsPage() {
  return (
    <>
      <Header />
      <main>
        <PatentsHero />
        <SectionPatents />
        <PatentsTimeline />
        <PatentsApplications />
      </main>
      <Footer />
    </>
  );
}
