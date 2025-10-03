import { Code2, Cpu, Grid, MessageSquare, Rocket, Sparkles } from "lucide-react";
import type { Route } from "next";

export const heroContent = {
  title: "L'IA au service de vos projets numériques",
  subtitle:
    "IA-Solution conçoit des expériences digitales sur-mesure qui boostent votre croissance, votre efficacité et votre image de marque.",
  highlights: [
    "Design premium orienté conversion",
    "Pilier IA intégrée à vos workflows",
    "Support stratégique à chaque étape",
  ],
  ctaPrimary: "Travaillons ensemble",
  ctaSecondary: "Découvrez nos services",
};

export const services = [
  {
    icon: Code2,
    title: "Sites web nouvelle génération",
    description:
      "Création de sites vitrines et e-commerce performants avec Next.js, React et TailwindCSS, optimisés pour le SEO, l'accessibilité et la conversion.",
    outcomes: ["UX/UI premium", "Performance Core Web Vitals A", "SEO ready"],
  },
  {
    icon: Grid,
    title: "Applications web sur-mesure",
    description:
      "Développement d'applications métiers robustes, dashboards temps réel et plateformes digitales adaptées à vos enjeux spécifiques.",
    outcomes: ["Architecture évolutive", "Sécurité renforcée", "Scalabilité cloud"],
  },
  {
    icon: Rocket,
    title: "Automatisation intelligente",
    description:
      "Bots, scripts, API et intégrations no-code/low-code pour fluidifier vos workflows et gagner jusqu'à 40% de productivité.",
    outcomes: ["Workflows optimisés", "Intégrations CRM/ERP", "Reporting consolidé"],
  },
  {
    icon: Sparkles,
    title: "Intégration d'IA",
    description:
      "Assistant conversationnel, analyse de données, computer vision et IA générative pour accélérer votre prise de décision.",
  },
  {
    icon: Cpu,
    title: "Conseil & stratégie numérique",
    description:
      "Accompagnement global pour définir votre feuille de route digitale, sécuriser vos investissements et scaler sereinement.",
  },
  {
    icon: MessageSquare,
    title: "Support premium",
    description:
      "Équipe disponible et réactive, cycles courts et transparents, approche orientée résultats mesurables.",
  },
];

type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: Route;
};

export const projects: Project[] = [
  {
    name: "Projet Nova — Plateforme SaaS", // placeholder
    description:
      "Dashboard analytique temps réel pour une startup fintech. Architecture serverless, automatisations et IA prédictive.",
    tags: ["Next.js", "TypeScript", "AWS", "Machine Learning"],
  },
  {
    name: "Aura Retail — Expérience e-commerce",
    description:
      "Refonte immersive d'une boutique en ligne haut de gamme avec personnalisation par IA et intégration CRM.",
    tags: ["React", "Tailwind", "Shopify", "Personalisation IA"],
  },
  {
    name: "PulseOps — Automatisation IT",
    description:
      "Suite d'automations et d'alerting pour une ESN européenne. Gain de 40% de productivité sur les opérations.",
    tags: ["Node.js", "API", "Zapier", "RPA"],
  },
];

export const about = {
  title: "Nous sommes IA-Solution",
  content:
    "Agence tech basée en France, nous concevons des expériences digitales élégantes, performantes et centrées sur l'utilisateur. Notre approche mêle design, développement et intelligence artificielle pour propulser vos produits et services au niveau supérieur.",
  highlights: [
    "Équipe pluridisciplinaire (design, dev, data, IA)",
    "Processus agile et transparent",
    "Livrables premium, orientés business",
  ],
};

export const contact = {
  title: "Prêts à accélérer votre transformation digitale ?",
  description:
    "Partagez-nous votre vision, nous concevrons ensemble des solutions puissantes et évolutives.",
  email: "contact@ia-solution.fr",
  phone: "07 58 06 05 56",
  socials: [
    { name: "Site", url: "https://ia-solution.fr", handle: "ia-solution.fr" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ia-cyber", handle: "ia-cyber" },
    { name: "GitHub", url: "https://github.com/zefparis", handle: "zefparis" },
  ],
};
