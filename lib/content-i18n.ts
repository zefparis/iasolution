import { Code2, Cpu, Grid, MessageSquare, Rocket, Sparkles, Brain, Zap, Wifi } from "lucide-react";
import type { Route } from "next";

const iconMap = {
  Code2,
  Grid,
  Rocket,
  Sparkles,
  Cpu,
  MessageSquare,
  Brain,
  Zap,
  Wifi,
};

export function getContent(lang: "fr" | "en") {
  const content = {
    fr: {
      heroContent: {
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
      },

      services: [
        {
          icon: Code2,
          title: "Sites web & mobiles nouvelle génération",
          description:
            "Création de plateformes vitrines et e-commerce performantes, optimisées Core Web Vitals, accessibles et prêtes pour l'international.",
          benefit: "Accélérez votre acquisition avec des interfaces premium et un SEO technique solide.",
        },
        {
          icon: Grid,
          title: "Applications web sur-mesure",
          description:
            "Développement d'applications métiers, dashboards temps réel et portails internes sur une architecture évolutive et sécurisée.",
          benefit: "Industrialisez vos processus avec une plateforme adaptée à votre organisation et à vos contraintes SI.",
        },
        {
          icon: Rocket,
          title: "Automatisation intelligente",
          description:
            "Bots RPA, intégrations API et orchestrations no-code/low-code pour éliminer les tâches répétitives et fiabiliser vos données.",
          benefit: "Réduisez vos tâches manuelles jusqu'à 40% et focalisez vos équipes sur la valeur.",
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
      ],

      projects: [
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
        {
          name: "IAS Glass — Vision augmentée autonome",
          description:
            "Développement d'un prototype de lunettes IA autonomes intégrant vision par ordinateur, traitement local et interaction vocale. Le système embarque un modèle IA spécialisé pour l'analyse contextuelle en temps réel — sans connexion cloud.",
          tags: ["Computer Vision", "Edge AI", "Embedded Systems"],
          kpi: "+100% autonomie cognitive embarquée",
          result:
            "Lunettes IA autonomes avec vision augmentée, interaction vocale et analyse contextuelle en temps réel sans dépendance cloud.",
          stack: ["Computer Vision", "Edge AI", "Embedded Systems", "ROS2", "TensorFlow Lite", "WebRTC"],
          testimonial:
            "« Une symbiose parfaite entre design industriel et intelligence embarquée. » — CTO, IAS Solution",
          href: "https://ias-glass.vercel.app/" as Route,
        },
      ],

      innovationCards: [
        {
          title: "IAS Glass",
          description: "Lunettes IA autonomes. Vision augmentée, interaction vocale et analyse contextuelle en temps réel.",
          icon: Brain,
          gradient: "from-aurora-blue/20 to-aurora-pink/20",
        },
        {
          title: "Robotics & Embedded AI",
          description: "Robots de service, IA embarquée, edge computing. IAS intègre ROS2 et TensorFlow Lite pour créer des systèmes autonomes.",
          icon: Cpu,
          gradient: "from-aurora-violet/20 to-aurora-blue/20",
        },
        {
          title: "Automation & RPA",
          description: "Automatisation cognitive : agents IA capables d'interagir avec vos outils métiers, vos APIs et vos données.",
          icon: Zap,
          gradient: "from-aurora-pink/20 to-aurora-violet/20",
        },
        {
          title: "IoT & Smart Systems",
          description: "Connecter le monde physique et numérique : capteurs intelligents, monitoring, maintenance prédictive.",
          icon: Wifi,
          gradient: "from-emerald-400/20 to-aurora-blue/20",
        },
      ],

      about: {
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
      },

      processSteps: [
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
      ],

      portfolioProjects: [
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
      ],

      contact: {
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
      },
    },

    en: {
      heroContent: {
        title: "AI powering your digital projects",
        subtitle:
          "Our team designs web platforms, applications, and AI copilots that accelerate your acquisition, automate your operations, and secure your data.",
        highlights: [
          "LLM, business copilots and turnkey generative AI",
          "Automation & RPA: up to 40% manual tasks eliminated",
          "Proactive cybersecurity and integrated GDPR compliance",
          "Strategic consulting to industrialize your digital innovations",
        ],
        ctaPrimary: "Let's work together",
        ctaSecondary: "Discover our services",
      },

      services: [
        {
          icon: Code2,
          title: "Next-generation websites & mobile apps",
          description:
            "Creation of high-performing showcase and e-commerce platforms, Core Web Vitals optimized, accessible, and ready for international markets.",
          benefit: "Accelerate your acquisition with premium interfaces and solid technical SEO.",
        },
        {
          icon: Grid,
          title: "Custom web applications",
          description:
            "Development of business applications, real-time dashboards, and internal portals on a scalable and secure architecture.",
          benefit: "Industrialize your processes with a platform adapted to your organization and IT constraints.",
        },
        {
          icon: Rocket,
          title: "Intelligent automation",
          description:
            "RPA bots, API integrations, and no-code/low-code orchestrations to eliminate repetitive tasks and ensure data reliability.",
          benefit: "Reduce your manual tasks by up to 40% and focus your teams on value.",
        },
        {
          icon: Sparkles,
          title: "AI Integration",
          description:
            "Business copilots, conversational assistants, computer vision, and data analysis powered by generative AI.",
          benefit: "Deploy intelligent and measurable experiences in a few weeks.",
        },
        {
          icon: Cpu,
          title: "Consulting & digital strategy",
          description:
            "Definition of your digital roadmap, data governance, and budget planning for sustainable investments.",
          benefit: "Secure your decisions with a strategic and data-driven vision.",
        },
        {
          icon: MessageSquare,
          title: "Premium support",
          description:
            "Technical run, continuous improvement, and team coaching to sustain your products.",
          benefit: "Benefit from a long-term partner with transparent SLA and reporting.",
        },
      ],

      projects: [
        {
          name: "HR Automation — Nexus Group",
          description:
            "Deployment of an HR automation hub to orchestrate onboarding, contract management, and real-time reporting.",
          tags: ["Automation", "RPA", "Generative AI"],
          kpi: "-40% manual tasks in 8 weeks",
          result:
            "Orchestrated RPA bots, assisted document generation, and AI copilot for People teams.",
          stack: ["Python", "Zapier", "OpenAI", "Slack API", "Notion"],
          testimonial:
            "« Our HR department saved one man-month per quarter while improving employee experience. » — HR Director, Nexus Group",
        },
        {
          name: "Aura Retail — E-commerce experience",
          description:
            "Immersive redesign of a premium online store with AI personalization and CRM integration.",
          tags: ["E-commerce", "Personalization", "Data"],
          kpi: "+28% conversion over 3 months",
          result:
            "Personalized customer journey based on data profiles, CRM automation, and AI recommendations.",
          stack: ["Next.js", "Shopify", "Segment", "OpenAI", "Tailwind"],
          testimonial:
            "« A smooth and premium experience that finally reflects our positioning. » — CEO, Aura Retail",
        },
        {
          name: "PulseOps — IT Automation",
          description:
            "Suite of automations and alerting for a European IT services company. 40% productivity gain on operations.",
          tags: ["Ops", "Monitoring", "Automation"],
          kpi: "-35% incident resolution time",
          result:
            "Centralized alerts, automated playbooks, and AI copilot for root cause analysis.",
          stack: ["Node.js", "Temporal", "Grafana", "Azure", "LangChain"],
          testimonial:
            "« Support teams intervene faster and automatically document each incident. » — CTO, PulseOps",
        },
        {
          name: "IAS Glass — Autonomous augmented vision",
          description:
            "Development of an autonomous AI glasses prototype integrating computer vision, local processing, and voice interaction. The system embeds a specialized AI model for real-time contextual analysis — without cloud connection.",
          tags: ["Computer Vision", "Edge AI", "Embedded Systems"],
          kpi: "+100% embedded cognitive autonomy",
          result:
            "Autonomous AI glasses with augmented vision, voice interaction, and real-time contextual analysis without cloud dependency.",
          stack: ["Computer Vision", "Edge AI", "Embedded Systems", "ROS2", "TensorFlow Lite", "WebRTC"],
          testimonial:
            "« A perfect symbiosis between industrial design and embedded intelligence. » — CTO, IAS Solution",
          href: "https://ias-glass.vercel.app/" as Route,
        },
      ],

      innovationCards: [
        {
          title: "IAS Glass",
          description: "Autonomous AI glasses. Augmented vision, voice interaction, and real-time contextual analysis.",
          icon: Brain,
          gradient: "from-aurora-blue/20 to-aurora-pink/20",
        },
        {
          title: "Robotics & Embedded AI",
          description: "Service robots, embedded AI, edge computing. IAS integrates ROS2 and TensorFlow Lite to create autonomous systems.",
          icon: Cpu,
          gradient: "from-aurora-violet/20 to-aurora-blue/20",
        },
        {
          title: "Automation & RPA",
          description: "Cognitive automation: AI agents capable of interacting with your business tools, APIs, and data.",
          icon: Zap,
          gradient: "from-aurora-pink/20 to-aurora-violet/20",
        },
        {
          title: "IoT & Smart Systems",
          description: "Connecting the physical and digital world: smart sensors, monitoring, predictive maintenance.",
          icon: Wifi,
          gradient: "from-emerald-400/20 to-aurora-blue/20",
        },
      ],

      about: {
        title: "We are IA-Solution",
        content:
          "Tech agency based in France, we design elegant, high-performing, and user-centric digital experiences. Our approach combines design, development, and artificial intelligence to propel your products and services to the next level.",
        highlights: [
          "Multidisciplinary team (design, dev, data, AI)",
          "Agile and transparent process",
          "Premium, business-oriented deliverables",
        ],
        team: [
          {
            name: "Zéphyr Paris",
            role: "CEO & AI Architect",
            bio: "15 years of experience in digital transformation, specialist in LLM and business copilots for large accounts.",
          },
          {
            name: "Camille Morel",
            role: "Head of Delivery",
            bio: "Leads agile/lean programs, ensures software quality and business alignment.",
          },
          {
            name: "Yanis Haddad",
            role: "Lead Security Engineer",
            bio: "Expert in cloud & AI cybersecurity, GDPR/ISO compliance, and data architecture protection.",
          },
        ],
        certifications: [
          { name: "AWS Select Partner", issuer: "Amazon Web Services" },
          { name: "Azure Solutions Architect Expert", issuer: "Microsoft" },
          { name: "OpenAI Implementation Partner", issuer: "OpenAI" },
          { name: "Google Cloud Professional Data Engineer", issuer: "Google" },
        ],
      },

      processSteps: [
        {
          title: "Audit & Vision",
          description: "Immersive workshops, data analysis, and mapping of business issues to establish your roadmap.",
          deliverables: ["Co-design sessions", "Prioritized roadmap", "Security assessment"],
        },
        {
          title: "Prototyping & UX",
          description: "Design system, interactive prototypes, and AI proof of concept to validate business value.",
          deliverables: ["Wireframes & UI kit", "Functional POC", "User testing"],
        },
        {
          title: "Custom development",
          description: "Short iterations, CI/CD, and automated QA to deliver robust and scalable platforms.",
          deliverables: ["Agile sprints", "DevOps pipeline", "Technical documentation"],
        },
        {
          title: "Testing & Security",
          description: "Functional testing, pentests, and GDPR reviews to ensure performance and compliance.",
          deliverables: ["Test plans", "Security reports", "Remediation plan"],
        },
        {
          title: "Deployment & Support",
          description: "Change management, real-time monitoring, and premium support to accelerate adoption.",
          deliverables: ["Playbooks", "Team training", "KPI tracking"],
        },
      ],

      portfolioProjects: [
        {
          name: "Equi Saddles",
          description:
            "Native Android application for horse riding, distributed on the Play Store. High-performing TWA/PWA solution with optimized user experience.",
          stack: ["Android", "TWA", "PWA", "JavaScript", "Firebase"],
          category: "Mobile Application",
          link: {
            label: "View on Play Store",
            url: "https://play.google.com/store/apps/details?id=com.equisaddles.app",
          },
        },
        {
          name: "IAS Solution",
          description:
            "Modern and high-performing corporate website, designed with Next.js 14 and TailwindCSS. Elegant design with smooth animations and SEO optimized.",
          stack: ["Next.js 14", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"],
          category: "Corporate Website",
          link: {
            label: "Visit website",
            url: "https://ia-solution.fr",
          },
        },
        {
          name: "AI Automation Bot",
          description:
            "Intelligent RPA solution combining process automation and GPT API to orchestrate complex workflows and eliminate repetitive tasks.",
          stack: ["Python", "OpenAI API", "RPA", "Automation", "LangChain"],
          category: "Artificial Intelligence",
          link: {
            label: "Learn more",
            url: "#contact",
          },
        },
      ],

      contact: {
        title: "Ready to accelerate your digital transformation?",
        description:
          "Share your vision, we'll design powerful and scalable solutions together.",
        email: "contact@ia-solution.fr",
        phone: "07 58 06 05 56",
        socials: [
          { name: "Website", url: "https://ia-solution.fr", handle: "ia-solution.fr" },
          { name: "LinkedIn", url: "https://www.linkedin.com/in/ia-cyber", handle: "ia-cyber" },
          { name: "GitHub", url: "https://github.com/zefparis", handle: "zefparis" },
        ],
        externalCta: {
          label: "Book an exploratory call",
          href: "https://cal.com/ia-solution/30min",
          description: "15 minutes to frame your needs and roadmap.",
        },
      },
    },
  };

  return content[lang];
}
