import { Code2, Cpu, Grid, MessageSquare, Rocket, Sparkles } from "lucide-react";
import type { Route } from "next";

export const heroContent = {
  title: "L'IA au service de vos projets numériques",
  subtitle:
    "Notre équipe conçoit des plateformes web, applications et copilotes IA qui accélèrent votre acquisition, automatisent vos opérations et sécurisent vos données.",
  highlights: [
    "LLM, copilotes métiers et IA générative clé en main",
    "Automatisation & RPA : jusqu'à 40% de tâches manuelles éliminées",
    "Cybersécurité proactive et conformité RGPD intégrée",
    "Conseil stratégique pour industrialiser vos innovations digitales",
  ],
  ctaPrimary: "Travaillons ensemble",
  ctaSecondary: "Découvrez nos services",
};

export const services = [
  {
    icon: Code2,
    title: "Sites web & mobiles nouvelle génération",
    description:
      "Création de plateformes vitrines et e-commerce performantes, optimisées Core Web Vitals, accessibles et prêtes pour l'international.",
    benefit: "Accélérez votre acquisition avec des interfaces premium et un SEO technique solide.",
    outcomes: ["UX/UI premium", "Performance Core Web Vitals A", "SEO ready"],
  },
  {
    icon: Grid,
    title: "Applications web sur-mesure",
    description:
      "Développement d'applications métiers, dashboards temps réel et portails internes sur une architecture évolutive et sécurisée.",
    benefit: "Industrialisez vos processus avec une plateforme adaptée à votre organisation et à vos contraintes SI.",
    outcomes: ["Architecture évolutive", "Sécurité renforcée", "Scalabilité cloud"],
  },
  {
    icon: Rocket,
    title: "Automatisation intelligente",
    description:
      "Bots RPA, intégrations API et orchestrations no-code/low-code pour éliminer les tâches répétitives et fiabiliser vos données.",
    benefit: "Réduisez vos tâches manuelles jusqu'à 40% et focalisez vos équipes sur la valeur.",
    outcomes: ["Workflows optimisés", "Intégrations CRM/ERP", "Reporting consolidé"],
  },
  {
    icon: Sparkles,
    title: "Intégration d'IA",
    description:
      "Copilotes métiers, assistants conversationnels, computer vision et analyse de données propulsés par l'IA générative.",
    benefit: "Déployez des expériences intelligentes et mesurables en quelques semaines.",
  },
  {
    icon: Cpu,
    title: "Conseil & stratégie numérique",
    description:
      "Définition de votre feuille de route digitale, gouvernance data et cadrage budgétaire pour des investissements pérennes.",
    benefit: "Sécurisez vos décisions avec une vision stratégique et pilotée par la donnée.",
  },
  {
    icon: MessageSquare,
    title: "Support premium",
    description:
      "Run technique, amélioration continue et coaching des équipes pour pérenniser vos produits.",
    benefit: "Bénéficiez d'un partenaire long terme avec SLA et reporting transparents.",
  },
];

type Project = {
  name: string;
  description: string;
  tags: string[];
  kpi: string;
  result: string;
  stack: string[];
  testimonial: string;
  href?: Route;
};

export const projects: Project[] = [
  {
    name: "Automatisation RH — Groupe Nexus",
    description:
      "Déploiement d'un hub d'automatisation RH pour orchestrer onboarding, gestion des contrats et reporting en temps réel.",
    tags: ["Automatisation", "RPA", "IA générative"],
    kpi: "-40% de tâches manuelles en 8 semaines",
    result:
      "Bots RPA orchestrés, génération assistée de documents et copilote IA pour les équipes People.",
    stack: ["Python", "Zapier", "OpenAI", "Slack API", "Notion"],
    testimonial:
      "« Notre service RH a gagné un mois-homme par trimestre tout en améliorant l'expérience collaborateur. » — Directrice RH, Groupe Nexus",
  },
  {
    name: "Aura Retail — Expérience e-commerce",
    description:
      "Refonte immersive d'une boutique en ligne haut de gamme avec personnalisation par IA et intégration CRM.",
    tags: ["E-commerce", "Personnalisation", "Data"],
    kpi: "+28% de conversion sur 3 mois",
    result:
      "Parcours client personnalisé en fonction des profils data, automation CRM et recommandations IA.",
    stack: ["Next.js", "Shopify", "Segment", "OpenAI", "Tailwind"],
    testimonial:
      "« Une expérience fluide et premium qui reflète enfin notre positionnement. » — CEO, Aura Retail",
  },
  {
    name: "PulseOps — Automatisation IT",
    description:
      "Suite d'automations et d'alerting pour une ESN européenne. Gain de 40% de productivité sur les opérations.",
    tags: ["Ops", "Monitoring", "Automation"],
    kpi: "-35% de temps de résolution d'incident",
    result:
      "Centralisation des alertes, playbooks automatisés et copilote IA pour analyses racines.",
    stack: ["Node.js", "Temporal", "Grafana", "Azure", "LangChain"],
    testimonial:
      "« Les équipes support interviennent plus vite et documentent automatiquement chaque incident. » — CTO, PulseOps",
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
  team: [
    {
      name: "Zéphyr Paris",
      role: "CEO & IA Architect",
      bio: "15 ans d'expérience en transformation digitale, spécialiste LLM et copilotes métiers pour grands comptes.",
    },
    {
      name: "Camille Morel",
      role: "Head of Delivery",
      bio: "Pilote les programmes agile/lean, garantit la qualité logicielle et l'alignement business.",
    },
    {
      name: "Yanis Haddad",
      role: "Lead Security Engineer",
      bio: "Expert cybersécurité cloud & IA, conformité RGPD/ISO et protection des architectures data.",
    },
  ],
  certifications: [
    { name: "AWS Select Partner", issuer: "Amazon Web Services" },
    { name: "Azure Solutions Architect Expert", issuer: "Microsoft" },
    { name: "OpenAI Implementation Partner", issuer: "OpenAI" },
    { name: "Google Cloud Professional Data Engineer", issuer: "Google" },
  ],
};

export const processSteps = [
  {
    title: "Audit & Vision",
    description: "Workshops immersifs, analyse data et cartographie des enjeux métier pour établir votre feuille de route.",
    deliverables: ["Sessions co-design", "Roadmap priorisée", "Assessment sécurité"],
  },
  {
    title: "Prototypage & UX",
    description: "Design system, prototypes interactifs et proof of concept IA pour valider la valeur business.",
    deliverables: ["Wireframes & UI kit", "POC fonctionnel", "Tests utilisateurs"],
  },
  {
    title: "Développement sur-mesure",
    description: "Itérations courtes, CI/CD et QA automatisée pour livrer des plateformes robustes et scalables.",
    deliverables: ["Sprints agiles", "Pipeline DevOps", "Documentation technique"],
  },
  {
    title: "Tests & Sécurisation",
    description: "Tests fonctionnels, pentests et revues RGPD pour garantir performance et conformité.",
    deliverables: ["Plans de test", "Rapports de sécurité", "Plan de remédiation"],
  },
  {
    title: "Déploiement & Support",
    description: "Accompagnement au changement, monitoring temps réel et support premium pour accélérer l'adoption.",
    deliverables: ["Playbooks", "Formation équipes", "Suivi KPI"],
  },
];

type PortfolioProject = {
  name: string;
  description: string;
  stack: string[];
  category: string;
  link: {
    label: string;
    url: Route;
  };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Equi Saddles",
    description:
      "Application Android native pour l'équitation, distribuée sur le Play Store. Solution TWA/PWA performante avec expérience utilisateur optimisée.",
    stack: ["Android", "TWA", "PWA", "JavaScript", "Firebase"],
    category: "Application Mobile",
    link: {
      label: "Voir sur Play Store",
      url: "https://play.google.com/store/apps/details?id=com.equisaddles.app",
    },
  },
  {
    name: "IAS Solution",
    description:
      "Site corporate moderne et performant, conçu avec Next.js 14 et TailwindCSS. Design élégant avec animations fluides et optimisé pour le SEO.",
    stack: ["Next.js 14", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"],
    category: "Site Web Corporate",
    link: {
      label: "Visiter le site",
      url: "https://ia-solution.fr",
    },
  },
  {
    name: "Bot d'automatisation IA",
    description:
      "Solution RPA intelligente combinant automatisation des processus et API GPT pour orchestrer des workflows complexes et éliminer les tâches répétitives.",
    stack: ["Python", "OpenAI API", "RPA", "Automation", "LangChain"],
    category: "Intelligence Artificielle",
    link: {
      label: "En savoir plus",
      url: "#contact",
    },
  },
];

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
  externalCta: {
    label: "Réserver un appel exploratoire",
    href: "https://cal.com/ia-solution/30min",
    description: "15 minutes pour cadrer votre besoin et votre feuille de route.",
  },
};
