import { Code, Zap, BrainCircuit } from "lucide-react";
import Card from "./Card";

export default function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
      <Card
        title="Développement web moderne"
        description="Sites et applications performants, scalables et optimisés SEO."
        icon={Code}
      />
      <Card
        title="Automatisation intelligente"
        description="Réduisez vos tâches manuelles et gagnez du temps avec nos solutions RPA."
        icon={Zap}
        kpi="-40% tâches manuelles"
      />
      <Card
        title="Intégration IA"
        description="Chatbots, copilotes internes, analyse de données et computer vision."
        icon={BrainCircuit}
        stack="OpenAI, Python, Next.js"
      />
    </section>
  );
}
