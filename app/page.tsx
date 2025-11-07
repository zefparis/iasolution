import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services";
import { ProjectsSection } from "@/components/projects";
import { PortfolioSection } from "@/components/portfolio";
import { AboutSection } from "@/components/about";
import { ProcessSection } from "@/components/process";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";
import Innovation from "@/components/innovation";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="flex flex-col gap-12 pb-20 pt-20 md:pt-28">
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <Innovation />
        <PortfolioSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
