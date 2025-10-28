import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services";
import { ProjectsSection } from "@/components/projects";
import { PortfolioSection } from "@/components/portfolio";
import { AboutSection } from "@/components/about";
import { ProcessSection } from "@/components/process";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <main className="flex flex-col gap-12 pb-20 pt-20 md:pt-28">
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <PortfolioSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
