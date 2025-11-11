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
      <main className="flex flex-col gap-4 pb-12 sm:gap-6 sm:pb-16 md:gap-8 md:pb-20">
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
