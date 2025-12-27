// Bilingual content for IA SOLUTION - HCS-U7
// French (fr) and English (en) translations

export type Language = "fr" | "en";

export const siteConfigBilingual = {
  name: "IA SOLUTION",
  url: "https://ia-solution.fr",
  email: "contact@ia-solution.fr",
  phone: "07 44 14 96 17",
  address: "IA-Solution, Ales, France",
  siret: "438 055 097",
  license: "CC BY-NC-SA 4.0",
};

export function getContentByLanguage(lang: Language) {
  return content[lang];
}

export const patentsFrItems = [
  { number: "FR2514274", date: "Déposé le 30/11/2025", title: "Système d'authentification biométrique cognitive multi-couches résistant aux IA génératives", claims: 10, figures: 1 },
  { number: "FR2514546", date: "Déposé le 04/12/2025", title: "Système de sécurité cognitive multi-signaux intégrant biométrie, pare-feu comportemental, entropie astronomique et moteur SCA adaptatif", claims: 15, figures: 3 },
  { number: "FR2515560", date: "Déposé le 17/12/2025", title: "Shield Module : Système de détection d'IMSI catchers et d'attaques géolocalisation pour authentification sécurisée", claims: 12, figures: 2 },
];

export const patentsEnItems = [
  { number: "FR2514274", date: "Filed on 11/30/2025", title: "Multi-layer cognitive biometric authentication system resistant to generative AI", claims: 10, figures: 1 },
  { number: "FR2514546", date: "Filed on 12/04/2025", title: "Multi-signal cognitive security system integrating biometrics, behavioral firewall, astronomical entropy and adaptive SCA engine", claims: 15, figures: 3 },
  { number: "FR2515560", date: "Filed on 12/17/2025", title: "Shield Module: IMSI catcher detection and geolocation attack protection system for secure authentication", claims: 12, figures: 2 },
];

const content = {
  fr: {
    // Site config
    tagline: "Authentification cognitive SaaS",
    
    // Navigation
    navigation: {
      main: [
        { name: "Recherche", href: "/research" },
        { name: "HCS-U7", href: "/hcs-u7" },
        { name: "Shield Module", href: "/shield", badge: "🆕" },
        { name: "Infrastructure", href: "/infrastructure" },
        { name: "Technologie", href: "/technology" },
        { name: "Démos", href: "/demos" },
        { name: "Brevets", href: "/patents" },
      ],
      legal: [
        { name: "Mentions légales", href: "/legal" },
        { name: "Confidentialité", href: "/privacy" },
      ],
    },

    // Hero Section
    hero: {
      badge: "HCS-U7 — AUTHENTIFICATION COGNITIVE SAAS",
      title: "Authentification cognitive SaaS pour réduire la fraude en ligne",
      subtitle: "HCS-U7 sécurise l’accès aux services (bots, usurpation) avec un parcours utilisateur fluide.",
      description: "Pensé pour des déploiements rapides et des projets innovation finançables (POC, intégration, mise à l’échelle).",
      cta: "Demander une démo HCS-U7",
      ctaHref: "/demo",
    },

    homeProblems: {
      title: "Réduire la fraude sans complexifier l’accès",
      subtitle: "Bots, usurpation et automatisation augmentent les coûts et dégradent l’expérience. HCS-U7 vise un gain de sécurité sans alourdir le parcours utilisateur.",
      items: [
        {
          icon: "Bot",
          title: "Bots & automatisation",
          description: "Créations de comptes, scraping, abus promotionnels et attaques automatisées sur les parcours critiques.",
        },
        {
          icon: "UserX",
          title: "Usurpation & fraude d’identité",
          description: "Réduire les prises de contrôle de comptes et l’accès non autorisé aux actions sensibles.",
        },
        {
          icon: "Gauge",
          title: "Parcours trop frictionnels",
          description: "Éviter une sécurité qui pénalise conversion, adoption et satisfaction (support, abandon, coûts indirects).",
        },
      ],
    },

    homeBenefits: {
      title: "Ce que vous obtenez",
      subtitle: "Un niveau de protection renforcé, sans compromis sur l’expérience et avec un pilotage simple.",
      items: [
        {
          icon: "ShieldCheck",
          title: "Moins de fraude",
          description: "Limiter bots et usurpations sur les parcours à risque (connexion, actions critiques, transactions).",
        },
        {
          icon: "Sparkles",
          title: "Moins de friction",
          description: "Réduire la dépendance à des mécanismes intrusifs et améliorer la continuité du parcours.",
        },
        {
          icon: "BarChart3",
          title: "Pilotage simple",
          description: "Suivre l’activation, les alertes et l’impact via des indicateurs compréhensibles par les équipes non techniques.",
        },
      ],
    },

    homeDeployment: {
      title: "Intégration & déploiement (progressif)",
      subtitle: "Une démarche pragmatique : prouver l’impact sur un périmètre cadré, puis généraliser.",
      steps: [
        {
          title: "POC cadré",
          description: "Définition du périmètre, critères de succès et mesure d’impact (fraude, friction, conversion).",
        },
        {
          title: "Intégration",
          description: "Mise en place progressive via SaaS / API, avec accompagnement et paramétrage selon le risque.",
        },
        {
          title: "Mise à l’échelle",
          description: "Industrialisation, suivi et amélioration continue sur les parcours les plus exposés.",
        },
      ],
    },

    homeInnovUp: {
      title: "Pourquoi choisir HCS-U7",
      subtitle: "Une solution deeptech orientée produit : innovation technologique, marché clair et mise en œuvre mesurable.",
      points: [
        "Innovation différenciante sur la sécurisation des accès (bots, usurpation, IA générative).",
        "Approche structurée : POC, jalons, critères de succès, montée en charge.",
        "Modèle SaaS B2B : déploiement progressif, intégration maîtrisée, trajectoire de revenus.",
        "Actifs de crédibilité : brevets INPI et savoir-faire cyber.",
      ],
      cta1: "Demander une démo",
      cta1Href: "/demo",
      cta2: "",
      cta2Href: "",
    },

    homeRAndD: {
      title: "R&D (secondaire)",
      subtitle: "En parallèle de HCS-U7, IA-Solution mène un programme R&D sur la résilience des systèmes et le fonctionnement offline.",
      cardTitle: "HCS-SHIELD (programme R&D)",
      cardDescription: "Application offline sécurisée pour préparer et partager des informations en environnement contraint. Projet en maturation, présenté à titre de R&D.",
      cta: "Découvrir HCS-SHIELD",
      ctaHref: "/hcs-shield",
    },

    homeFinalCTA: {
      title: "Parlons de votre contexte",
      subtitle: "Décrivez votre contexte et vos contraintes. Nous proposons un POC cadré et une démonstration personnalisée.",
      cta1: "Demander une démo",
      cta1Href: "/demo",
      cta2: "",
      cta2Href: "",
    },

    // Problem Section
    problem: {
      title: "Le problème : les CAPTCHA sont obsolètes",
      content: `En 2024, les chercheurs de l'ETH Zurich ont démontré que **les IA génératives contournent 94% des CAPTCHA** traditionnels. GPT-4V, Claude 3 et Gemini Pro résolvent instantanément les tests visuels conçus pour bloquer les bots.

Les systèmes d'authentification actuels reposent sur des défis que l'IA maîtrise désormais mieux que les humains : reconnaissance d'images, lecture de texte déformé, puzzles logiques.

**Le paradigme doit changer.** Au lieu de tester ce que l'IA fait bien, nous devons mesurer ce qu'elle ne peut pas simuler : les contraintes neurobiologiques fondamentales du cerveau humain.`,
      source: "Source : ETH Zurich, 2024 — « Breaking CAPTCHA with Vision-Language Models »",
      stats: [
        { value: "94%", label: "des CAPTCHA contournés par l'IA", source: "ETH Zurich, 2024" },
        { value: "<30ms", label: "temps de réponse des IA génératives", source: "Benchmark interne HCS-U7" },
        { value: "$5.4B", label: "pertes annuelles dues aux bots", source: "Imperva Bad Bot Report, 2024" },
      ],
    },

    // Solution Section
    solution: {
      title: "Notre solution : HCS-U7",
      headline: "Mesurer ce que l'IA ne peut pas simuler :\nles contraintes neurobiologiques du cerveau humain.",
      content: `HCS-U7 exploite 6 tests cognitifs validés scientifiquement depuis les années 1930. Chaque test mesure une limitation fondamentale du cerveau humain — temps de réaction, interférence cognitive, capacité de mémoire de travail — que l'IA ne peut pas reproduire authentiquement.

Le résultat : une précision de 98.9% avec un taux de détection des IA génératives supérieur à 99%.`,
    },

    // Technology Section
    technology: {
      title: "Tests Cognitifs Validés",
      subtitle: "6 tests issus de décennies de recherche en neurosciences cognitives",
      tests: [
        { icon: "Brain", name: "Test de Stroop", year: "1935", description: "Mesure l'interférence cognitive. L'humain ralentit de 100-200ms sur les items incongruents, l'IA répond instantanément." },
        { icon: "RefreshCw", name: "N-Back", year: "1958", description: "Teste la mémoire de travail (7±2 éléments). Performance humaine se dégrade au-delà de 3-back, l'IA reste constante." },
        { icon: "Shuffle", name: "Trail Making", year: "1938", description: "Mesure le coût de switching cognitif (200-500ms). L'IA n'a pas de coût de switching mesurable." },
        { icon: "Hash", name: "Digit Span", year: "1939", description: "Évalue l'empan mnésique et la rétention court terme. Patterns d'erreurs caractéristiques chez l'humain." },
        { icon: "Zap", name: "Reaction Time", year: "1868", description: "Variabilité temporelle 50-150ms chez l'humain. L'IA répond en <30ms avec régularité >80%." },
        { icon: "Mic", name: "RAN Vocal", year: "1974", description: "Dénomination rapide avec analyse des pauses et hésitations. Patterns vocaux impossibles à simuler." },
      ],
      architecture: {
        title: "Architecture Defense-in-Depth",
        layers: [
          { level: "L7", name: "Cloudflare WAF — Filtrage applicatif" },
          { level: "L6", name: "Rate Limiting — Anti-DDoS adaptatif" },
          { level: "L5", name: "Device Fingerprinting — 50+ signaux" },
          { level: "L4", name: "Behavioral Analysis — Patterns navigation" },
          { level: "L3", name: "HCS-U7 Core — Tests cognitifs adaptatifs" },
          { level: "L2", name: "Trust Graph — Détection réseaux fraude" },
          { level: "L1", name: "Celestial Entropy — Entropie astronomique" },
        ],
      },
    },

    // Use Cases Section
    useCases: {
      title: "Cas d’usage prioritaires",
      subtitle: "Exemples de contextes où HCS-U7 apporte une protection tangible sans alourdir l’expérience utilisateur.",
      cases: [
        { icon: "Building2", title: "Banque & Fintech", description: "Sécurisation de l’accès et des opérations sensibles, réduction du risque de fraude." },
        { icon: "ShoppingCart", title: "E-commerce", description: "Protection des comptes et des parcours à risque (connexion, checkout, abus automatisés)." },
        { icon: "Plug", title: "Plateformes & SaaS", description: "Protection des points d’entrée critiques et limitation des abus automatisés." },
        { icon: "Landmark", title: "Services & portails", description: "Renforcer la confiance sur les accès aux services en ligne et limiter l’usurpation." },
      ],
    },

    // Performance Section
    performance: {
      title: "Performances Validées",
      subtitle: "Infrastructure Battle-Tested — 518 attaques bloquées, 0 breach",
      metrics: [
        { value: "99.9", suffix: "/100", label: "Score Sécurité", sublabel: "Defense-in-Depth (9 couches)", badge: "🏆 Enterprise-Grade" },
        { value: 699, suffix: "", label: "Tests", sublabel: "Unitaires + E2E + Load (k6)", badge: "✅ High Coverage" },
        { value: 98.9, suffix: "%", label: "Précision globale", sublabel: "True Positive Rate" },
        { value: 99.6, suffix: "%", label: "Détection bots", sublabel: "True Negative Rate" },
        { value: 99, prefix: ">", suffix: "%", label: "Détection IA", sublabel: "GPT-4V, Claude 3, Gemini" },
        { value: 50, prefix: "<", suffix: "ms", label: "Latence P95", sublabel: "Temps de réponse API" },
        { value: "0.994", suffix: "", label: "AUC-ROC", sublabel: "Qualité du modèle" },
        { value: 518, suffix: "", label: "Battle-Tested", sublabel: "Attaques bloquées (15 jours)", badge: "🛡️ 0 Breach" },
        { value: "200", suffix: "+", label: "Infrastructure", sublabel: "Datacenters Cloudflare", badge: "🌍 Global CDN" },
      ],
    },

    // Research Axes
    researchAxes: {
      label: "RECHERCHE",
      title: "Nos axes de recherche",
      description: "Travaux de recherche fondamentale et appliquée dans quatre domaines interconnectés.",
      axes: [
        {
          id: "biometrie",
          icon: "Brain",
          title: "BIOMÉTRIE COGNITIVE",
          subtitle: "Identification de l'humain par ses patterns cognitifs uniques",
          description: "Recherche sur les marqueurs biologiques de la cognition humaine :",
          points: ["Effet Stroop (1935)", "N-Back (1958)", "Trail Making A/B (1938)"],
          algorithms: ["Score Combiner multi-signaux", "Quick-Auth tokens", "Rotating codes HMAC-SHA256"],
          product: `HCS-U7 — ${patentsFrItems.length} brevets INPI`,
          stats: "Précision : 98.9% | Détection IA : >99%",
          gradient: "purple",
        },
        {
          id: "cryptographie",
          icon: "Star",
          title: "CRYPTOGRAPHIE DES CROYANCES",
          subtitle: "Numérisation et sécurisation des systèmes symboliques",
          description: "Recherche sur la formalisation mathématique des systèmes de croyances :",
          points: ["Fusion Western + BaZi", "Swiss Ephemeris", "Celestial Entropy Layer"],
          algorithms: ["Nonces via positions planétaires", "Signatures QSIG", "Binding B3"],
          product: "Brevet : FR2514546",
          stats: "Authentification, randomness, identity binding",
          gradient: "pink",
        },
        {
          id: "resistance-ia",
          icon: "Shield",
          title: "RÉSISTANCE À L'IA GÉNÉRATIVE",
          subtitle: "Contre-mesures aux modèles de langage et vision",
          description: "Recherche sur la détection et le blocage des IA génératives :",
          points: ["Analyse patterns temporels", "Détection régularité", "Effet fatigue"],
          algorithms: ["GPT-4V : >99%", "Claude 3 : >99%", "Gemini Pro : >99%"],
          product: "Architecture Defense-in-Depth",
          stats: "Honeypots · DDoS L7 · PoW adaptatif",
          gradient: "blue",
        },
        {
          id: "post-quantum",
          icon: "Atom",
          title: "CRYPTOGRAPHIE POST-QUANTIQUE",
          subtitle: "Production-ready dès aujourd'hui",
          description: "Implémentation complète des standards NIST-PQC :",
          points: ["ML-DSA-65 (Dilithium3)", "ML-KEM-768 (Kyber768)", "QSIG v3 + Shield v3"],
          algorithms: ["Signatures Dilithium", "Chiffrement Kyber hybride", "62 tests PQC"],
          product: "Production-ready NOW",
          stats: "Sign ~12ms | Verify ~8ms | Encaps ~2ms",
          gradient: "cyan",
        },
      ],
    },

    // Research Methodology
    researchMethodology: {
      badge: "MÉTHODOLOGIE",
      title: "Approche scientifique",
      subtitle: "Notre recherche suit une méthodologie rigoureuse, de l'identification du problème à la validation des résultats.",
      steps: [
        { title: "Identification du problème", description: "Analyse des limitations des systèmes d'authentification actuels face aux IA génératives. Étude des taux de contournement CAPTCHA (94% - ETH Zurich 2024)." },
        { title: "Hypothèse de recherche", description: "Les contraintes cognitives biologiques (temps de réaction, interférence, mémoire de travail) sont des marqueurs fiables de l'humanité que l'IA ne peut pas simuler." },
        { title: "Expérimentation", description: "Développement et validation de 6 tests cognitifs issus des neurosciences. Collecte de données sur 10,000+ sessions. Entraînement de modèles ML de détection." },
        { title: "Validation", description: "Précision de 98.9%, détection IA >99%, latence P95 <50ms. 699 tests unitaires et d'intégration. 3 brevets INPI déposés." },
      ],
      cta1: "Découvrir HCS-U7",
      cta1Href: "/hcs-u7",
      cta2: "Demander une démo",
      cta2Href: "/demo",
      stats: [
        { value: "98.9", suffix: "%", label: "Précision" },
        { value: ">99", suffix: "%", label: "Détection IA" },
        { value: String(patentsFrItems.length), suffix: "", label: "Brevets INPI" },
        { value: "699", suffix: "", label: "Tests" },
      ],
    },

    // Research Roadmap
    researchRoadmap: {
      badge: "ROADMAP R&D",
      title: "Feuille de route",
      subtitle: "Notre progression de la recherche fondamentale vers les applications industrielles.",
      statusLabels: { completed: "Terminé", in_progress: "En cours", planned: "Planifié" },
      phases: [
        { year: "2022-2023", title: "Recherche fondamentale", items: ["Étude des tests cognitifs validés (Stroop, N-Back, Trail Making)", "Analyse des patterns temporels humains vs IA", "Prototypage du Score Combiner"], status: "completed" },
        { year: "2024", title: "Développement HCS-U7", items: ["Architecture Defense-in-Depth 10 couches", "Intégration Celestial Entropy Layer", "699 tests unitaires et d'intégration", "Dépôt brevets INPI (FR2514274, FR2514546, FR2515560)"], status: "completed" },
        { year: "2025", title: "Validation & Production", items: ["Conformité PSD2/SCA native", "API publique v1.0", "Premiers clients pilotes", "Finalisation thèse doctorale"], status: "in_progress" },
        { year: "2026", title: "Expansion", items: ["Cryptographie post-quantique (NIST-PQC)", "SDK multi-plateforme", "Partenariats académiques internationaux", "Extension robotique & IoT"], status: "planned" },
      ],
    },

    // Product HCS
    productHCS: {
      label: "PRODUIT",
      title: "HCS-U7",
      subtitle: "Human Cognitive Signature",
      headline: "Authentification cognitive résistante aux bots et à l'IA générative, livrée en SaaS / API.",
      description: [
        "Déploiement progressif : POC cadré, puis généralisation.",
        "Réduction de la fraude (bots, usurpation) sans alourdir l'expérience utilisateur.",
        "Pilotage via un tableau de bord et des règles d'activation selon le risque.",
        "Technologie protégée (brevets INPI).",
      ],
      cta1: "Découvrir HCS-U7",
      cta1Href: "/hcs-u7",
      cta2: "Demander une démo",
      cta2Href: "/demo",
      stats: [
        { value: "98.9", suffix: "%", label: "Précision" },
        { value: ">99", suffix: "%", label: "Détection IA" },
        { value: String(patentsFrItems.length), suffix: "", label: "Brevets INPI" },
        { value: "699", suffix: "", label: "Tests" },
      ],
    },

    // Architecture
    architecture: {
      label: "ARCHITECTURE",
      title: "Defense-in-Depth",
      subtitle: "Pare-feu Cognitif Multi-Signaux — Niveau Sécurité 99.9/100",
      diagram: `┌─────────────────────────────────────────────────────────────────────────────┐
│  HCS-U7 COGNITIVE FIREWALL                                                  │
│  Backend Fastify 5 · TypeScript · 699 Tests · PQC                           │
│                                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │  HCS Core   │ │   Device    │ │   Network   │ │  Behavior   │            │
│  │   Score     │ │    Risk     │ │    Risk     │ │   Anomaly   │            │
│  └──────┬──────┘ └──────┬──────┘ └──────┬──────┘ └──────┬──────┘            │
│         └──────────────┴──────────────┴──────────────┘                      │
│                                │                                            │
│                    ┌───────────▼───────────┐                                │
│                    │    SCORE COMBINER     │                                │
│                    └───────────┬───────────┘                                │
│                                │                                            │
│              ┌─────────────────┼─────────────────┐                          │
│              ▼                 ▼                 ▼                          │
│           ALLOW           CHALLENGE            DENY                         │
└─────────────────────────────────────────────────────────────────────────────┘`,
      modules: [
        { icon: "Lock", phase: "PHASE 1", title: "Auth & Secrets", points: ["Secret Rotation automatique", "HSM Integration AWS/Google KMS", "API Key MFA Actions critiques"] },
        { icon: "Shield", phase: "PHASE 2", title: "Protection Avancée", points: ["Proof of Work Argon2id/SHA256", "DDoS Protection L7", "Honeypots actifs"] },
        { icon: "Key", phase: "PHASE 3", title: "Chiffrement", points: ["Encryption at Rest AES-256-GCM", "Request Integrity HMAC", "TLS 1.3 strict"] },
        { icon: "Activity", phase: "PHASE 4", title: "Monitoring & Audit", points: ["SIEM Integration", "Audit Log immuable", "IP Reputation"] },
        { icon: "Star", phase: "EXCLUSIVITÉ", title: "Celestial Entropy", points: ["Entropie astronomique temps réel", "☀️ Soleil · 🌙 Lune · 🪐 Planètes"] },
        { icon: "Zap", phase: "PERFORMANCE", title: "Stack Technique", points: ["Fastify 5 · TypeScript strict", "PostgreSQL + Redis", "Latence P95 <50ms"] },
      ],
      endpoints: [
        { method: "POST", path: "/api/verify-human", desc: "Vérification basique (legacy)" },
        { method: "POST", path: "/api/adaptive-verify", desc: "Décision adaptative multi-signaux" },
        { method: "POST", path: "/api/quick-auth", desc: "Token comportemental court terme" },
        { method: "POST", path: "/api/sca/evaluate", desc: "Évaluation transaction (Art.11/18)" },
        { method: "GET", path: "/health", desc: "Santé service" },
      ],
    },

    // U7 Format
    u7Format: {
      label: "SPECIFICATION",
      title: "Format HCS-U7",
      subtitle: "Structure identitaire déterministe à 7 segments",
      example: "HCS-U7|V:8.0|ALG:QS|E:E|MOD:c25f0m75|COG:F42C22V9S10Cr16|...",
      segments: [
        { segment: "HCS-U7", description: "Protocol identifier" },
        { segment: "V:x.x", description: "Version (semantic)" },
        { segment: "ALG:QS", description: "Algorithm (QS = Quantum-Safe)" },
        { segment: "E:E", description: "Encoding (E = Extended)" },
        { segment: "MOD:...", description: "Modality flags" },
        { segment: "COG:...", description: "Cognitive axes" },
        { segment: "QSIG:...", description: "Quantum-safe signature" },
        { segment: "B3:...", description: "Biometric binding hash" },
      ],
      properties: ["Déterministe — même input → même output", "Vérifiable — signature cryptographique", "Extensible — segments additionnels", "Post-quantum — NIST-PQC ready"],
      algorithms: [
        { name: "QSIG", title: "Quantum-Safe Signature", description: "Signature résistante aux ordinateurs quantiques." },
        { name: "B3", title: "Biometric Binding", description: "Liaison cryptographique identité/biométrie." },
        { name: "MERKLE", title: "Tree Signatures", description: "Arbre de hachage pour signatures résistantes." },
      ],
      fusion: {
        title: "AFFINE FUSION OPERATORS",
        description: "Fusion de deux traditions symboliques via opérateurs mathématiques :",
        mappings: [
          { western: "Sun sign", bazi: "Day Master", result: "Primary Element" },
          { western: "Moon sign", bazi: "Hour Branch", result: "Emotional Mode" },
        ],
        notes: ["Swiss Ephemeris haute précision", "Opérateurs affines déterministes"],
      },
    },

    // Tech Stack
    techStack: {
      label: "TECHNOLOGIES",
      title: "Notre stack technologique",
      subtitle: "Une architecture moderne, sécurisée et performante.",
      stacks: [
        { icon: "Code", title: "Backend", description: "Fastify 5, TypeScript, Zod validation, 699 tests Vitest." },
        { icon: "Database", title: "Persistence", description: "PostgreSQL, Prisma ORM, Redis cache, rate limiting distribué." },
        { icon: "Lock", title: "Cryptographie", description: "HMAC-SHA256, bcrypt, JWT, Celestial Entropy, ML-DSA + ML-KEM (Post-Quantum)." },
        { icon: "Shield", title: "Sécurité Enterprise", description: "WAF multi-encodings, DDoS L7, Honeypots, Credential Stuffing." },
        { icon: "Brain", title: "Moteur Cognitif", description: "6 tests neurosciences, Score Combiner adaptatif, Quick-Auth tokens." },
        { icon: "Star", title: "Innovation", description: "Celestial Entropy Layer — Entropie astronomique temps réel." },
      ],
    },

    // Publications
    publications: {
      label: "PUBLICATIONS",
      title: "Travaux de recherche",
      subtitle: "Contributions académiques et documentation technique",
      items: [
        { icon: "FileText", type: "THÈSE DOCTORALE", title: "Authentification cognitive et différenciation humain/IA", chapters: ["Introduction générale", "Celestial Entropy Layer", "Tests cognitifs validés", "Architecture Defense-in-Depth"], status: "En finalisation", cta: "Aperçu" },
        { icon: "Book", type: "DOCUMENTATION TECHNIQUE", title: "HCS-U7 Specs & Patent Corpus", chapters: ["Core specification (v3.2)", "Format U7 (7 segments)", "Algorithmes (QSIG, B3, Merkle)", "Fusion Western + BaZi"], status: "Classification : Propriétaire", cta: "Documentation" },
        { icon: "Microscope", type: "RÉFÉRENCES SCIENTIFIQUES", title: "Tests cognitifs fondamentaux", chapters: ["Stroop (1935)", "N-Back (1958)", "Trail Making (1938)", "Digit Span (1939)"], status: "", cta: "Bibliographie" },
        { icon: "BarChart", type: "BENCHMARKS & VALIDATION", title: "Résultats validés", chapters: ["Précision : 98.9%", "Détection IA : >99%", "Latence P95 : <50ms", "Tests : 699"], status: "", cta: "Rapport complet" },
      ],
    },

    // CTA Section
    ctaSection: {
      label: "COLLABORATION",
      title: "Travaillons ensemble",
      subtitle: "Partenariats de recherche, licences technologiques, projets d'intégration — discutons de votre besoin.",
      options: [
        { icon: "Microscope", title: "Recherche", points: ["Collaboration R&D", "Projets conjoints", "Co-publication"] },
        { icon: "Building", title: "Enterprise", points: ["Licence commerciale", "Intégration API", "Support dédié"] },
        { icon: "GraduationCap", title: "Académique", points: ["Accès recherche", "Données anonymisées", "Co-supervision thèse"] },
      ],
      cta1: "Nous contacter",
      cta1Href: "/contact",
      cta2: "Demander une démo HCS-U7",
      cta2Href: "/contact",
    },

    // Patents
    patents: {
      label: "BREVETS",
      title: "Propriété Intellectuelle",
      subtitle: `${patentsFrItems.length} brevets déposés à l'INPI — Protection 20 ans`,
      items: patentsFrItems,
      disclaimer: "Conformément à l'article L. 612-10 du Code de la propriété intellectuelle, le Ministre chargé de la Défense a été habilité à prendre connaissance des demandes à titre confidentiel.",
    },

    // HCS-U7 Page
    hcsU7Page: {
      hero: {
        badge: "PRODUIT PHARE",
        title: "HCS-U7",
        subtitle: "Human Cognitive Signature",
        description: "Le premier système d'authentification biométrique cognitive résistant aux intelligences artificielles génératives. Issu de 3 ans de recherche en neurosciences cognitives et cryptographie.",
        cta: "Demander une démo HCS-U7",
        stats: [
          { value: "98.9%", label: "Précision" },
          { value: ">99%", label: "Détection IA" },
          { value: "3", label: "Brevets INPI" },
          { value: "699", label: "Tests" },
          { value: "<50ms", label: "Latence P95" },
          { value: "10", label: "Couches sécurité" },
        ],
      },
      cognitiveTests: {
        badge: "TESTS COGNITIFS",
        title: "6 tests validés scientifiquement",
        subtitle: "Chaque test exploite une limitation fondamentale du cerveau humain que l'IA ne peut pas simuler authentiquement.",
        tests: [
          { name: "Test de Stroop", year: "1935", author: "John Ridley Stroop", principle: "L'interférence cognitive se produit quand le cerveau doit traiter des informations conflictuelles. Lire le mot 'ROUGE' écrit en bleu crée un délai mesurable.", humanBehavior: "Ralentissement de 100-200ms sur les items incongruents", aiBehavior: "Temps de réponse constant, pas d'effet d'interférence", detection: "Analyse de la variance temporelle et du pattern d'erreurs" },
          { name: "N-Back", year: "1958", author: "Wayne Kirchner", principle: "La mémoire de travail humaine est limitée à 7±2 éléments (Miller, 1956). Au-delà, les performances chutent de manière prévisible.", humanBehavior: "Dégradation progressive au-delà de 3-back", aiBehavior: "Performance constante quelle que soit la charge", detection: "Courbe de dégradation caractéristique" },
          { name: "Trail Making A/B", year: "1938", author: "US Army", principle: "Le switching cognitif entre deux tâches (lettres/chiffres) a un coût temporel incompressible chez l'humain.", humanBehavior: "Coût de switching de 200-500ms", aiBehavior: "Pas de coût de switching mesurable", detection: "Ratio temps partie B / partie A" },
          { name: "Digit Span", year: "1939", author: "David Wechsler", principle: "L'empan mnésique mesure la capacité de rétention à court terme. Limitée biologiquement chez l'humain.", humanBehavior: "Capacité moyenne de 7±2 chiffres", aiBehavior: "Capacité illimitée", detection: "Point de rupture de la performance" },
          { name: "Reaction Time", year: "1868", author: "Franciscus Donders", principle: "Le temps de réaction humain a une variabilité naturelle due aux processus neuronaux. L'IA répond de manière trop régulière.", humanBehavior: "Variabilité de 50-150ms, effet de fatigue", aiBehavior: "Temps <30ms, régularité >80%", detection: "Coefficient de variation temporelle" },
          { name: "RAN Vocal", year: "1974", author: "Denckla & Rudel", principle: "La dénomination rapide automatisée révèle les patterns de parole uniques : pauses, hésitations, rythme.", humanBehavior: "Pauses naturelles, variations de débit", aiBehavior: "Fluidité artificielle, timing régulier", detection: "Analyse spectrale et temporelle" },
        ],
        labels: { human: "Humain", ai: "IA", detection: "Détection" },
      },
      architecture: {
        badge: "ARCHITECTURE",
        title: "Defense-in-Depth",
        subtitle: "34 modules de sécurité · 10 couches empilées · 699 tests · Post-Quantum Ready · v8.4",
        signalsTitle: "Fusion de 5 signaux",
      },
      performance: {
        badge: "PERFORMANCES",
        title: "Résultats validés",
        subtitle: "Métriques obtenues dans le cadre de travaux de recherche doctorale sur 10,000+ sessions.",
        source: "Référence : ETH Zurich (2024) — CAPTCHA bypass rate 94% par IA générative",
        metrics: [
          { value: "98.9%", label: "Précision globale", sublabel: "Accuracy" },
          { value: "99.6%", label: "True Negative Rate", sublabel: "Vrais négatifs" },
          { value: "2.2%", label: "False Positive Rate", sublabel: "Faux positifs" },
          { value: "0.994", label: "AUC-ROC", sublabel: "Area Under Curve" },
          { value: ">99%", label: "Détection GPT-4V", sublabel: "OpenAI" },
          { value: ">99%", label: "Détection Claude 3", sublabel: "Anthropic" },
          { value: ">99%", label: "Détection Gemini", sublabel: "Google" },
          { value: ">99.6%", label: "Détection Bots", sublabel: "Automatisés" },
          { value: "<50ms", label: "Latence P95", sublabel: "95th percentile" },
          { value: "699", label: "Tests", sublabel: "Vitest" },
          { value: "99.9/100", label: "Score Sécurité", sublabel: "Defense-in-Depth" },
          { value: "10", label: "Couches", sublabel: "Protection v8.4" },
        ],
      },
    },

    // Shield Module Page
    shieldPage: {
      hero: {
        badge: "LAYER 10 — NEW v8.4",
        title: "Shield Module",
        subtitle: "Anti-FalconOne Defense",
        description: "La seule solution d'authentification protégeant l'utilisateur même quand son réseau mobile est compromis par des adversaires state-level.",
        stats: [
          { icon: "📡", label: "IMSI Catcher", sublabel: "Detection" },
          { icon: "📍", label: "Geolocation", sublabel: "Attack Detection" },
          { icon: "🛡️", label: "GPS Spoofing", sublabel: "Protection" },
          { icon: "⚡", label: "Real-time", sublabel: "Alertes" },
        ],
      },
      problem: {
        badge: "LE PROBLÈME",
        title: "Le problème non-résolu",
        subtitle: "Les gouvernements, journalistes et executives sont ciblés par des menaces réseau state-level",
        threats: [
          { title: "IMSI catchers", subtitle: "Stingray, FalconOne", description: "Interception des communications mobiles via fausses stations de base" },
          { title: "Géolocalisation haute précision", subtitle: "Tracking <10m", description: "Suivi de position avec une précision inférieure à 10 mètres" },
          { title: "Network downgrade attacks", subtitle: "5G → 2G forcé", description: "Forçage vers des protocoles moins sécurisés pour faciliter l'interception" },
          { title: "VoLTE interception", subtitle: "Écoute voix chiffrée", description: "Interception des communications voix sur LTE" },
        ],
        warning: "Aucune solution d'authentification classique ne protège contre ces menaces.",
        warningDetail: "2FA, biométrie faciale, behavioral analytics → Tous contournables quand le réseau mobile est compromis.",
      },
      solution: {
        badge: "LA SOLUTION",
        title: "Notre réponse : HCS-Shield (Layer 10)",
        subtitle: "Détection multi-signaux des menaces réseau en temps réel",
        imsiTitle: "Détection IMSI Catcher",
        imsiItems: [
          "Analyse LAC suspicieux (fake base stations)",
          "Détection signaux anormaux (>-40 dBm = trop fort)",
          "Monitoring handover rate (>5/min = suspicious)",
          "Détection encryption downgrade (A5/3 → A5/0)",
        ],
        imsiWarning: "Recommande airplane mode si risque critique (≥70 points)",
        geoTitle: "Détection Geolocation Attack",
        geoItems: [
          "Impossible travel (>900 km/h entre 2 positions)",
          "Precision tracking (3+ positions <10m accuracy)",
          "GPS spoofing (coordonnées rondes, accuracy impossible)",
        ],
        geoWarning: "Alerte utilisateur + audit log si détection",
      },
      useCases: {
        badge: "CAS D'USAGE",
        title: "Cas d'usage critiques",
        subtitle: "Protection des utilisateurs à haut risque contre les menaces réseau state-level",
        cases: [
          { icon: "🛡️", title: "Défense & Sécurité", description: "Executives en zone hostile, agents terrain, communications sensibles en environnements non-sécurisés." },
          { icon: "📰", title: "Journalisme", description: "Reporters en zone de conflit, protection sources, communications sécurisées avec rédactions." },
          { icon: "🏛️", title: "Gouvernement", description: "Diplomates, missions internationales, communications gouvernementales sensibles." },
          { icon: "💳", title: "Fintech", description: "Mobile banking en pays à risque, transactions haute valeur, protection contre IMSI catchers." },
        ],
      },
      technical: {
        badge: "TECHNIQUE",
        title: "Détails techniques",
        subtitle: "Algorithme de scoring multi-signaux avec seuils de décision adaptatifs",
        levels: [
          { threshold: "≥70", level: "DANGEROUS", action: "Activer le mode avion immédiatement" },
          { threshold: "≥40", level: "SUSPICIOUS", action: "Éviter les opérations sensibles" },
          { threshold: "<40", level: "SAFE", action: "Continuer normalement" },
        ],
      },
      patent: {
        badge: "PROPRIÉTÉ INTELLECTUELLE",
        title: "Brevet FR2515560",
        patentTitle: "Shield Module - Anti-FalconOne Defense",
        filed: "17 décembre 2025",
        status: "En cours d'examen INPI",
        protection: "20 ans (jusqu'en 2045)",
        holder: "IA-SOLUTION / Benjamin BARRÈRE",
        description: "Premier brevet au monde couvrant la détection d'IMSI catchers et d'attaques géolocalisation dans un système d'authentification.",
        claims: [
          "Système de détection d'IMSI catchers par analyse multi-signaux",
          "Algorithme de détection de géolocalisation haute précision",
          "Protection contre attaques GPS spoofing",
          "Recommandations adaptatives selon niveau de risque détecté",
        ],
      },
      cta: {
        title: "Protégez vos utilisateurs contre les menaces state-level",
        subtitle: "Le Shield Module est disponible via l'API HCS-U7",
        primaryCta: "Demander une démo",
        secondaryCta: "Nous contacter",
      },
    },

    // Technology Page
    technologyPage: {
      hero: {
        badge: "TECHNOLOGIE",
        title: "Stack technique HCS-U7",
        subtitle: "Une architecture moderne, sécurisée et performante. Backend Fastify 5, TypeScript strict, PostgreSQL, Redis, et notre innovation exclusive : le Celestial Entropy Layer.",
        techs: ["Fastify 5", "TypeScript", "PostgreSQL", "Redis", "Vitest", "Zod"],
      },
      postQuantum: {
        badge: "POST-QUANTUM",
        title: "Cryptographie Post-Quantique",
        subtitle: "NEW v8.4 — Algorithmes NIST approuvés, résistants aux ordinateurs quantiques",
        algorithms: [
          { name: "ML-DSA-65", alias: "Dilithium3", purpose: "Signatures (QSIG v3)", nistLevel: "Level 3", keySizes: "pk=1952, sk=4032, sig=3309" },
          { name: "ML-KEM-768", alias: "Kyber768", purpose: "Key Encapsulation (Shield v3)", nistLevel: "Level 3", keySizes: "pk=1184, sk=2400, ct=1088" },
        ],
        featuresTitle: "Caractéristiques",
        features: [
          { label: "Résistant aux attaques quantiques", desc: "Algorithme de Shor" },
          { label: "Standard NIST FIPS 204/203", desc: "Approuvé 2024" },
          { label: "Signatures déterministes", desc: "Reproductibles" },
          { label: "Hybride AES-256-GCM", desc: "Double protection" },
        ],
        performanceTitle: "Performance (Pure JavaScript)",
        performance: [
          { metric: "Sign", value: "~12ms", desc: "ML-DSA-65" },
          { metric: "Verify", value: "~8ms", desc: "ML-DSA-65" },
          { metric: "Encaps", value: "~2ms", desc: "ML-KEM-768" },
          { metric: "Decaps", value: "~3ms", desc: "ML-KEM-768" },
        ],
        architectureTitle: "Architecture hybride",
        advantage: "HCS-U7 est l'une des premières solutions d'authentification cognitive à déployer une cryptographie post-quantique en production.",
        longTermProtection: "Protection à long terme : Les signatures et clés générées aujourd'hui resteront sécurisées même après l'émergence d'ordinateurs quantiques à grande échelle (horizon 2030-2035).",
      },
    },

    // HCS-SHIELD
    hcsShield: {
      hero: {
        badge: {
          fr: "Combat-Ready • Offline-First • GPS-Denied",
          en: "Combat-Ready • Offline-First • GPS-Denied"
        },
        title: {
          fr: "HCS-SHIELD",
          en: "HCS-SHIELD"
        },
        subtitle: {
          fr: "Planification Tactique pour Drones Autonomes",
          en: "Tactical Drone Mission Planning"
        },
        description: {
          fr: "Planification de missions sécurisée pour drones autonomes en environnement GPS-denied. Authentification hardware-bound, QR éphémère, protection anti-capture.",
          en: "Secure mission planning for autonomous drones in GPS-denied environments. Hardware-bound authentication, ephemeral QR, anti-capture protection."
        },
        ctaPrimary: {
          fr: "Voir la Démo",
          en: "Watch Demo"
        },
        ctaSecondary: {
          fr: "Procurement Militaire",
          en: "Military Procurement"
        }
      },
      stats: {
        offline: {
          value: "100%",
          label: {
            fr: "Capacité Offline",
            en: "Offline Capable"
          }
        },
        layers: {
          value: "7",
          label: {
            fr: "Couches Sécurité",
            en: "Security Layers"
          }
        },
        wipe: {
          value: "<3s",
          label: {
            fr: "Destruction Panique",
            en: "Panic Wipe"
          }
        },
        emission: {
          value: "0 dBm",
          label: {
            fr: "Émission RF",
            en: "RF Emission"
          }
        }
      },
      problem: {
        title: {
          fr: "Le Problème Tactique",
          en: "The Tactical Problem"
        },
        subtitle: {
          fr: "Opérations en Environnement GPS-Denied",
          en: "Operations in GPS-Denied Environments"
        },
        items: [
          {
            icon: "SatelliteOff",
            title: {
              fr: "GPS Brouillé",
              en: "GPS Jamming"
            },
            description: {
              fr: "La guerre électronique moderne rend le GPS inutilisable. Les drones perdent leur navigation satellite.",
              en: "Modern electronic warfare makes GPS unusable. Drones lose their satellite navigation."
            }
          },
          {
            icon: "Radio",
            title: {
              fr: "Liaisons Interceptées",
              en: "Intercepted Links"
            },
            description: {
              fr: "Les communications radio révèlent la position du pilote et peuvent être prises de contrôle.",
              en: "Radio communications reveal pilot position and can be hijacked."
            }
          },
          {
            icon: "Cable",
            title: {
              fr: "Fibre Optique Limitée",
              en: "Limited Fiber Optic"
            },
            description: {
              fr: "Les drones guidés par câble ont un rayon d'action limité (500m-5km max).",
              en: "Cable-guided drones have limited range (500m-5km max)."
            }
          },
          {
            icon: "Eye",
            title: {
              fr: "Détection RF",
              en: "RF Detection"
            },
            description: {
              fr: "Toute émission radio-fréquence est détectable et géolocalisable par l'adversaire.",
              en: "Any radio-frequency emission is detectable and geolocatable by adversaries."
            }
          }
        ]
      },
      security: {
        title: {
          fr: "Architecture 7-Couches",
          en: "7-Layer Architecture"
        },
        subtitle: {
          fr: "Defense-in-Depth pour Opérations Sensibles",
          en: "Defense-in-Depth for Sensitive Operations"
        },
        layers: [
          {
            number: 1,
            name: {
              fr: "Liaison Hardware",
              en: "Hardware Binding"
            },
            tech: "WebAuthn (TPM/Secure Enclave)",
            description: {
              fr: "Clés cryptographiques non-extractibles, liées au hardware du smartphone",
              en: "Non-extractible cryptographic keys, bound to smartphone hardware"
            }
          },
          {
            number: 2,
            name: {
              fr: "Clés Éphémères",
              en: "Ephemeral Keys"
            },
            tech: "HKDF + AES-256-GCM",
            description: {
              fr: "QR code auto-destructible après 30 min ou première lecture",
              en: "Self-destructing QR code after 30 min or first read"
            }
          },
          {
            number: 3,
            name: {
              fr: "Déni Plausible",
              en: "Plausible Deniability"
            },
            tech: "Duress Mode (Dual PIN)",
            description: {
              fr: "Profil leurre avec missions factices, cryptographiquement indistinguable",
              en: "Decoy profile with fake missions, cryptographically indistinguishable"
            }
          },
          {
            number: 4,
            name: {
              fr: "Crypto-Destruction",
              en: "Crypto-Shredding"
            },
            tech: "DoD 5220.22-M (3-pass)",
            description: {
              fr: "Destruction irréversible en <3s (bouton panique)",
              en: "Irreversible destruction in <3s (panic button)"
            }
          },
          {
            number: 5,
            name: {
              fr: "Logs Anonymes",
              en: "Anonymous Logs"
            },
            tech: "Zero-Knowledge History",
            description: {
              fr: "Fingerprint rotatif quotidien, GPS arrondi ~1km, pas d'identification pilote",
              en: "Daily rotating fingerprint, GPS rounded ~1km, no pilot identification"
            }
          },
          {
            number: 6,
            name: {
              fr: "Preuve de Présence",
              en: "Proof-of-Presence"
            },
            tech: "Quick Stroop Test (15s)",
            description: {
              fr: "Re-challenge cognitif avant actions sensibles (détection bot)",
              en: "Cognitive re-challenge before sensitive actions (bot detection)"
            }
          },
          {
            number: 7,
            name: {
              fr: "Garde Anti-Intrusion",
              en: "Tamper Guard"
            },
            tech: "Runtime Integrity Checks",
            description: {
              fr: "Détection debugger, DevTools, modification storage → Auto-wipe",
              en: "Debugger, DevTools, storage tampering detection → Auto-wipe"
            }
          }
        ]
      },
      useCases: {
        title: {
          fr: "Cas d'Usage Terrain",
          en: "Field Use Cases"
        },
        subtitle: {
          fr: "Validation Combat-Proven",
          en: "Combat-Proven Validation"
        },
        cases: [
          {
            flag: "🇺🇦",
            country: {
              fr: "Ukraine",
              en: "Ukraine"
            },
            title: {
              fr: "Reconnaissance Furtive",
              en: "Stealth Reconnaissance"
            },
            description: {
              fr: "Drones DJI modifiés pour missions ISR en zones contestées. Navigation inertielle + SLAM, pas de GPS.",
              en: "Modified DJI drones for ISR missions in contested areas. Inertial navigation + SLAM, no GPS."
            },
            metrics: [
              { fr: "Rayon: 8-12 km", en: "Range: 8-12 km" },
              { fr: "Durée: 20-30 min", en: "Duration: 20-30 min" },
              { fr: "Émission RF: 0 dBm", en: "RF Emission: 0 dBm" }
            ]
          },
          {
            flag: "🇮🇱",
            country: {
              fr: "Israël",
              en: "Israel"
            },
            title: {
              fr: "Strike Précis",
              en: "Precision Strike"
            },
            description: {
              fr: "Munitions rôdeuses autonomes (type Switchblade). Waypoints pré-programmés, pas de liaison pilote.",
              en: "Autonomous loitering munitions (Switchblade-type). Pre-programmed waypoints, no pilot link."
            },
            metrics: [
              { fr: "Précision: <1m CEP", en: "Accuracy: <1m CEP" },
              { fr: "Autonomie: 15-40 min", en: "Endurance: 15-40 min" },
              { fr: "Anti-brouillage: 100%", en: "Anti-jamming: 100%" }
            ]
          },
          {
            flag: "🇫🇷",
            country: {
              fr: "Forces Spéciales",
              en: "Special Forces"
            },
            title: {
              fr: "Opérations Discrètes",
              en: "Covert Operations"
            },
            description: {
              fr: "Planification mission sur smartphone (mode avion), transfert QR vers drone. Zéro trace électronique.",
              en: "Mission planning on smartphone (airplane mode), QR transfer to drone. Zero electronic trace."
            },
            metrics: [
              { fr: "OPSEC: EMCON Niveau 1", en: "OPSEC: EMCON Level 1" },
              { fr: "Mode Duress: Actif", en: "Duress Mode: Active" },
              { fr: "Destruction: <3s", en: "Panic Wipe: <3s" }
            ]
          }
        ]
      },
      tech: {
        title: {
          fr: "Architecture Offline-First",
          en: "Offline-First Architecture"
        },
        subtitle: {
          fr: "Zéro Dépendance Réseau",
          en: "Zero Network Dependency"
        },
        features: [
          {
            icon: "MapPin",
            title: {
              fr: "Cartes Pré-Chargées",
              en: "Pre-Cached Maps"
            },
            description: {
              fr: "10,000+ tiles OpenStreetMap en cache (Service Worker). Zones opérationnelles téléchargées avant déploiement.",
              en: "10,000+ OpenStreetMap tiles cached (Service Worker). Operational areas downloaded before deployment."
            }
          },
          {
            icon: "Database",
            title: {
              fr: "Stockage Local",
              en: "Local Storage"
            },
            description: {
              fr: "IndexedDB chiffré (AES-256-GCM). Profil, missions, historique : 100% local, jamais de cloud.",
              en: "Encrypted IndexedDB (AES-256-GCM). Profile, missions, history: 100% local, never cloud."
            }
          },
          {
            icon: "Cpu",
            title: {
              fr: "Crypto Embarquée",
              en: "Embedded Crypto"
            },
            description: {
              fr: "Web Crypto API (native navigateur). PBKDF2, HKDF, AES-GCM, SHA-256 : pas de dépendance externe.",
              en: "Web Crypto API (native browser). PBKDF2, HKDF, AES-GCM, SHA-256: no external dependencies."
            }
          },
          {
            icon: "Smartphone",
            title: {
              fr: "PWA Cross-Platform",
              en: "PWA Cross-Platform"
            },
            description: {
              fr: "Installation iOS/Android sans App Store. URL directe, updates instantanées, 0% commission stores.",
              en: "iOS/Android installation without App Store. Direct URL, instant updates, 0% store commission."
            }
          }
        ]
      },
      cta: {
        title: {
          fr: "Prêt pour le Déploiement Tactique ?",
          en: "Ready for Tactical Deployment?"
        },
        description: {
          fr: "Demandez une démonstration en direct ou discutez des options de procurement militaire.",
          en: "Request a live demonstration or discuss military procurement options."
        },
        primaryButton: {
          fr: "Planifier une Démo",
          en: "Schedule Demo"
        },
        secondaryButton: {
          fr: "Contacter l'Équipe Défense",
          en: "Contact Defense Team"
        }
      }
    },

    // Hieroglyphic Shield
    hieroglyphicShield: {
      badge: "🆕 Innovation Exclusive",
      title: "Hieroglyphic Shield v1",
      subtitle: "Protection transparente des codes HCS-U7 par chiffrement AES-256-GCM",
      description: "Le Hieroglyphic Shield est une couche de chiffrement brevetable qui rend les codes HCS-U7 complètement opaques pour les attaquants, tout en restant transparent pour les applications légitimes. Cette innovation unique protège l'algorithme HCS-U7 contre la rétro-ingénierie.",
      features: [
        {
          icon: "🔐",
          title: "Chiffrement AES-256-GCM",
          description: "Chiffrement authentifié avec dérivation de clé scrypt (N=16384, r=8, p=1)"
        },
        {
          icon: "⚡",
          title: "Performance",
          description: "Wrap/Unwrap symétrique en 30-40ms, transparent via hooks Fastify"
        },
        {
          icon: "🛡️",
          title: "Protection Brevetable",
          description: "Innovation unique rendant impossible la lecture des structures HCS-U7"
        },
        {
          icon: "🔄",
          title: "Transparent",
          description: "Auto wrap/unwrap sur toutes les routes API sans modification du code client"
        }
      ],
      technicalDetails: {
        title: "Détails Techniques",
        specs: [
          { label: "Algorithme", value: "AES-256-GCM" },
          { label: "KDF", value: "scrypt (N=16384, r=8, p=1)" },
          { label: "Latence Wrap", value: "30-40ms" },
          { label: "Latence Unwrap", value: "30-40ms" },
          { label: "Tests", value: "Unitaires complets" },
          { label: "Production", value: "Active" }
        ]
      }
    },

    // Infrastructure
    infrastructure: {
      title: "Infrastructure Mondiale",
      subtitle: "Déployée sur 200+ datacenters avec monitoring 24/7",
      features: [
        {
          icon: "🌐",
          title: "Dual-Domain",
          description: "Architecture séparée : HCS-U7.COM (commercial) + HCS-U7.ORG (technique)"
        },
        {
          icon: "🛡️",
          title: "Cloudflare CDN",
          description: "200+ datacenters mondiaux, DDoS 100+ Gbps, WAF OWASP, Bot Detection ML"
        },
        {
          icon: "📊",
          title: "Monitoring 24/7",
          description: "UptimeRobot (10 monitors), Sentry (error tracking), Cloudflare Analytics"
        },
        {
          icon: "⚡",
          title: "Performance Optimale",
          description: "CDN optimisé : Brotli, HTTP/3, Auto Minify, Edge Caching, <15ms latency globale"
        },
        {
          icon: "🔐",
          title: "Sécurité Renforcée",
          description: "SSL/TLS 1.3, Rate Limiting, AI Bot Protection, CORS strict, Scan Detection"
        },
        {
          icon: "📈",
          title: "Scalable",
          description: "100K+ req/s, Multi-tenant SaaS, Redis distribué, Auto-scaling ready"
        }
      ],
      stats: {
        title: "Métriques Infrastructure",
        items: [
          { value: "200+", label: "Datacenters" },
          { value: "100+ Gbps", label: "DDoS Protection" },
          { value: "99.99%", label: "Uptime SLA" },
          { value: "<15ms", label: "Global Latency" }
        ]
      }
    },

    // Defense-in-Depth
    defenseInDepth: {
      title: "Defense-in-Depth (34 Modules)",
      subtitle: "10 couches de sécurité enterprise-grade",
      layers: [
        {
          level: "L10",
          name: "Shield Module",
          description: "Détection IMSI catchers, protection géolocalisation, anti-FalconOne defense",
          modules: ["Anti-IMSI Catcher", "Geolocation Shield", "Brevet FR2515560"]
        },
        {
          level: "L9",
          name: "Protection DDoS",
          description: "Rate limiting adaptatif L7, détection de patterns d'attaque, Cloudflare 100+ Gbps",
          modules: ["DDoS Protection L7", "Rate Limiting Distribué", "Cloudflare Edge"]
        },
        {
          level: "L8",
          name: "WAF Multi-Encoding",
          description: "Détection SQLi, XSS, Path Traversal, LDAP Injection avec décodage multi-passes",
          modules: ["WAF OWASP Top 10", "Bot Detection ML", "Credential Stuffing"]
        },
        {
          level: "L7",
          name: "Honeypots Actifs",
          description: "Endpoints leurres (/.env, /admin, /wp-login) et champs invisibles, ban 24h automatique",
          modules: ["Honeypots Endpoints", "Hidden Fields", "Auto-ban 24h"]
        },
        {
          level: "L6",
          name: "Post-Quantum Crypto",
          description: "Cryptographie résistante aux ordinateurs quantiques NIST FIPS 204/203",
          modules: ["ML-DSA-65 (Dilithium)", "ML-KEM-768 (Kyber)", "QSIG v3"]
        },
        {
          level: "L5",
          name: "Hieroglyphic Shield",
          description: "Protection transparente AES-256-GCM des codes HCS-U7 (wrap/unwrap 30-40ms)",
          modules: ["AES-256-GCM", "scrypt KDF", "Auto wrap/unwrap"]
        },
        {
          level: "L4",
          name: "Proof-of-Work Adaptatif",
          description: "Challenge computationnel Argon2id/SHA256 pour clients suspects, difficulté ajustable",
          modules: ["Argon2id Challenge", "Difficulté Adaptative", "Cache Redis"]
        },
        {
          level: "L3",
          name: "Anti-Replay Defense",
          description: "Protection contre les attaques de rejeu avec nonces atomiques Redis multi-instance",
          modules: ["Redis Atomic", "TTL 5min", "Multi-instance Safe"]
        },
        {
          level: "L2",
          name: "Cognitive Firewall",
          description: "Fusion 9 signaux : HCS Core, Device Risk, Network Risk, Behavior Anomaly, Trust Graph",
          modules: ["Device Fingerprinting", "IP Reputation", "Keystroke Dynamics"]
        },
        {
          level: "L1",
          name: "Biométrie Cognitive",
          description: "6 tests scientifiques (Stroop, N-Back, Trail Making, Digit Span, Reaction Time, RAN)",
          modules: ["6 Tests Validés", "AUC-ROC 0.994", "98.9% Précision"]
        }
      ],
      totalModules: "34 modules de sécurité enterprise"
    },

    // SCA PSD2
    scaPsd2: {
      badge: "🏦 Banking-Grade",
      title: "SCA PSD2 Compliant",
      subtitle: "Strong Customer Authentication conforme directive européenne DSP2",
      description: "HCS-U7 intègre un moteur SCA complet conforme aux articles 11 et 18 du RTS (Regulatory Technical Standards) de la directive PSD2. Notre implémentation gère les exemptions réglementaires et l'analyse de risque transactionnelle pour les institutions financières.",
      features: [
        {
          icon: "💶",
          title: "Low Value (Art. 11)",
          description: "Exemption transactions < 30€, cumul < 100€ ou < 5 opérations depuis dernière SCA"
        },
        {
          icon: "📊",
          title: "TRA (Art. 18)",
          description: "Analyse de risque transactionnelle basée sur taux de fraude réel (seuils 13bp/6bp/1bp)"
        },
        {
          icon: "🚫",
          title: "Hard Blocks",
          description: "Règles internes : montants maximum, pays à risque, patterns suspects"
        },
        {
          icon: "📝",
          title: "Audit Trail",
          description: "Historique immuable conforme Art. 18 RTS pour régulateurs (ACPR, BCE)"
        }
      ],
      compliance: {
        title: "Conformité Réglementaire",
        items: [
          { standard: "PSD2", description: "Directive (UE) 2015/2366" },
          { standard: "RTS", description: "Règlement délégué (UE) 2018/389" },
          { standard: "Art. 11", description: "Exemptions Low Value" },
          { standard: "Art. 18", description: "Transaction Risk Analysis" }
        ]
      }
    },

    // Advanced Crypto
    advancedCrypto: {
      title: "Cryptographie Avancée",
      subtitle: "Suite cryptographique complète avec intégration AWS KMS",
      features: [
        {
          icon: "🔐",
          title: "AWS KMS Integration",
          description: "Secrets non-extractibles gérés par AWS Key Management Service, rotation automatique"
        },
        {
          icon: "🌟",
          title: "Celestial Entropy",
          description: "Entropie unique basée sur positions astronomiques temps réel (Swiss Ephemeris)"
        },
        {
          icon: "⏱️",
          title: "Timing-Safe",
          description: "Toutes comparaisons en temps constant (150ms floor) pour contrer les attaques temporelles"
        },
        {
          icon: "🔄",
          title: "Secret Rotation",
          description: "Rotation automatique des secrets cryptographiques avec zero-downtime"
        },
        {
          icon: "🛡️",
          title: "Post-Quantum Ready",
          description: "Architecture QSIG préparée pour algorithmes NIST-PQC (CRYSTALS-Dilithium)"
        },
        {
          icon: "🌳",
          title: "Merkle Trees",
          description: "Signatures résistantes et vérifiables pour audit trail immuable"
        }
      ]
    },

    // Mobile App
    mobileApp: {
      badge: "🚀 En Développement",
      title: "HCS-U7 Mobile — Biométrie Cognitive Offline",
      subtitle: "Application mobile iOS/Android pour authentification cognitive 100% offline",
      description: "L'app mobile HCS-U7 capture les interactions tactiles (position, pression, timing, trajectoires) pour générer un profil cognitif unique. Contrairement aux concurrents, tout s'exécute localement : aucun serveur requis, privacy maximale, latence <10ms.",
      features: [
        {
          icon: "📱",
          title: "Tests Cognitifs Tactiles",
          description: "7 mini-jeux mesurant réaction, mémoire, précision, rythme scroll, coordination"
        },
        {
          icon: "🔒",
          title: "100% Offline",
          description: "Capture, analyse et validation locale. Données jamais envoyées à un serveur."
        },
        {
          icon: "⚡",
          title: "Ultra-Rapide",
          description: "Validation <10ms locale vs 100-500ms online. 10-50X plus rapide que les concurrents."
        },
        {
          icon: "🧠",
          title: "50+ Métriques",
          description: "Position, pression, timing, vitesse, trajectoire, hésitations, erreurs, scroll patterns"
        },
        {
          icon: "🎯",
          title: "Impossible à Falsifier",
          description: "Comportement inconscient multi-dimensionnel, pas de mot de passe volable"
        },
        {
          icon: "🔄",
          title: "Évolution Naturelle",
          description: "Profil s'adapte avec vous : âge, stress, contexte. Re-calibration périodique."
        }
      ],
      useCases: [
        {
          icon: "🤖",
          title: "Robots Domestiques",
          description: "Reconnaissance cognitive même sans WiFi (Tesla Bot, Boston Dynamics)"
        },
        {
          icon: "🏦",
          title: "Apps Bancaires",
          description: "Auth en mode avion, biométrie comportementale continue"
        },
        {
          icon: "🚗",
          title: "Véhicules Autonomes",
          description: "Démarrage sécurisé même en zone blanche (tunnels)"
        },
        {
          icon: "🌍",
          title: "Zones à Faible Connectivité",
          description: "Marchés émergents, zones rurales, connectivité intermittente"
        }
      ],
      techStack: {
        title: "Stack Technique",
        items: [
          { label: "Framework", value: "React Native + Expo" },
          { label: "Plateformes", value: "iOS + Android" },
          { label: "Stockage", value: "Keychain/Keystore (encrypted)" },
          { label: "Crypto", value: "Expo Crypto (AES-256-GCM)" },
          { label: "Capteurs", value: "Touch, Gyro, Accelerometer" },
          { label: "Tests", value: "7 cognitive tests" }
        ]
      },
      competitors: {
        title: "Avantage Concurrentiel",
        comparison: [
          { feature: "Fonctionne Offline", hcsu7: "✅", competitors: "❌ (Auth0, Okta, Veriff)" },
          { feature: "Latence", hcsu7: "<10ms", competitors: "100-500ms" },
          { feature: "Privacy", hcsu7: "Maximale (local)", competitors: "Données cloud" },
          { feature: "Coût Bandwidth", hcsu7: "0€", competitors: "$36K/an/1M users" },
          { feature: "Biométrie Cognitive", hcsu7: "✅", competitors: "❌" }
        ]
      },
      status: "PoC prévu Q1 2025, Beta Q2 2025, Launch Q3 2025"
    },

    // Documentation
    documentation: {
      title: "Documentation Complète",
      subtitle: "7+ documents techniques et guides opérationnels",
      documents: [
        { title: "README Principal", description: "Architecture complète backend", icon: "📖" },
        { title: "KMS Integration", description: "Intégration AWS KMS pour secrets", icon: "🔐" },
        { title: "Monitoring Guide", description: "UptimeRobot + Sentry + Analytics", icon: "📊" },
        { title: "Runbook Opérationnel", description: "Procédures ops et troubleshooting", icon: "📋" },
        { title: "Disaster Recovery", description: "Plan de reprise d'activité", icon: "🚨" },
        { title: "Secrets Rotation", description: "Rotation automatique des clés", icon: "🔄" },
        { title: "Load Test Results", description: "Benchmarks k6 (stress, spike)", icon: "⚡" },
        { title: "Audit Sécurité", description: "Audit complet + hardening report", icon: "🔍" }
      ]
    },

    // Founder
    founder: {
      label: "FONDATEUR",
      name: "Benjamin BARRERE",
      role: "Fondateur & Directeur de Recherche",
      bio: [
        "15+ années d'expérience en développement logiciel, cybersécurité, intelligence artificielle et systèmes symboliques computationnels.",
        "Thèse doctorale en cours sur l'authentification cognitive et la différenciation humain/IA.",
        "Inventeur des brevets FR2514274, FR2514546 et FR2515560.",
      ],
      location: "Alès, Occitanie, France",
    },

    // Footer
    footer: {
      tagline: "Authentification cognitive SaaS",
      madeIn: "Made in France",
      copyright: `© ${new Date().getFullYear()} IA SOLUTION · SIRET ${siteConfigBilingual.siret} · Tous droits réservés`,
      patentsLine: "Brevets FR2514274, FR2514546 & FR2515560 déposés INPI · CC BY-NC-SA 4.0",
      columns: {
        research: {
          title: "Recherche",
          links: [
            { name: "Biométrie cognitive", href: "/research#biometrie" },
            { name: "Cryptographie", href: "/research#cryptographie" },
            { name: "IA Générative", href: "/research#resistance-ia" },
            { name: "IA Quantique", href: "/research#post-quantum" },
          ],
        },
        product: {
          title: "Produit",
          links: [
            { name: "HCS-U7", href: "/hcs-u7" },
            { name: "Documentation", href: "/technology" },
            { name: "Démo", href: "/contact" },
            { name: "Tarifs", href: "/contact" },
          ],
        },
        contact: {
          title: "Contact",
          email: siteConfigBilingual.email,
          phone: siteConfigBilingual.phone,
          location: "Ales, France",
        },
      },
    },

    // Contact Page
    contactPage: {
      title: "Contact",
      subtitle: "Une question ? Un projet ? Parlons-en.",
      form: {
        fields: { name: "Nom", email: "Email", subject: "Sujet", message: "Message" },
        submit: "Envoyer",
      },
    },

    // Demo Page
    demoPage: {
      title: "Demander une démo",
      subtitle: "Découvrez HCS-U7 en action avec une démonstration personnalisée",
      form: {
        fields: { name: "Nom complet", email: "Email professionnel", company: "Entreprise", phone: "Téléphone (optionnel)", useCase: "Cas d'usage", message: "Message" },
        useCases: ["Banque / Fintech", "E-commerce", "Gouvernement / Service public", "Infrastructure critique", "API / Plateforme SaaS", "Autre"],
        submit: "Envoyer la demande",
        success: "Votre demande a été envoyée. Nous vous recontacterons sous 24h.",
      },
    },

    // Legal
    legalPage: {
      title: "Mentions légales",
    },
    privacyPage: {
      title: "Politique de confidentialité",
    },
  },

  en: {
    // Site config
    tagline: "Cognitive authentication SaaS",
    
    // Navigation
    navigation: {
      main: [
        { name: "Research", href: "/research" },
        { name: "HCS-U7", href: "/hcs-u7" },
        { name: "Shield Module", href: "/shield", badge: "🆕" },
        { name: "Infrastructure", href: "/infrastructure" },
        { name: "Technology", href: "/technology" },
        { name: "Demos", href: "/demos" },
        { name: "Patents", href: "/patents" },
      ],
      legal: [
        { name: "Legal Notice", href: "/legal" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },

    // Hero Section
    hero: {
      badge: "HCS-U7 — COGNITIVE AUTHENTICATION SAAS",
      title: "Cognitive authentication SaaS to reduce online fraud",
      subtitle: "HCS-U7 secures access to online services (bots, account takeover) with a smooth user journey.",
      description: "Designed for fast rollouts and fundable innovation projects (POC, integration, scaling).",
      cta: "Request an HCS-U7 demo",
      ctaHref: "/demo",
    },

    homeProblems: {
      title: "Reduce fraud without adding friction",
      subtitle: "Bots, account takeover and automation increase costs and hurt user experience. HCS-U7 aims to raise security without slowing users down.",
      items: [
        {
          icon: "Bot",
          title: "Bots & automation",
          description: "Account creation, scraping, promo abuse and automated attacks on critical flows.",
        },
        {
          icon: "UserX",
          title: "Impersonation & identity fraud",
          description: "Reduce account takeover and unauthorized access to sensitive actions.",
        },
        {
          icon: "Gauge",
          title: "Too much friction",
          description: "Avoid security that hurts conversion and adoption (support load, drop-off, indirect costs).",
        },
      ],
    },

    homeBenefits: {
      title: "What you get",
      subtitle: "Stronger protection, a smoother experience, and simple operational steering.",
      items: [
        {
          icon: "ShieldCheck",
          title: "Less fraud",
          description: "Limit bots and impersonation on high-risk flows (login, sensitive actions, transactions).",
        },
        {
          icon: "Sparkles",
          title: "Less friction",
          description: "Reduce reliance on intrusive mechanisms and keep the user journey consistent.",
        },
        {
          icon: "BarChart3",
          title: "Simple steering",
          description: "Track activation, alerts and impact with indicators that work for non-technical teams.",
        },
      ],
    },

    homeDeployment: {
      title: "Integration & rollout (progressive)",
      subtitle: "A pragmatic approach: prove impact on a defined scope, then scale.",
      steps: [
        {
          title: "Scoped POC",
          description: "Define scope, success criteria and impact measurement (fraud, friction, conversion).",
        },
        {
          title: "Integration",
          description: "Progressive rollout via SaaS / API, with configuration based on risk.",
        },
        {
          title: "Scaling",
          description: "Industrialize, monitor and continuously improve on the most exposed flows.",
        },
      ],
    },

    homeInnovUp: {
      title: "Why choose HCS-U7",
      subtitle: "A product-driven deeptech solution: technical differentiation, clear market and measurable implementation.",
      points: [
        "Differentiating innovation for securing access (bots, impersonation, generative AI).",
        "Structured approach: POC, milestones, success criteria, scaling plan.",
        "B2B SaaS model: controlled integration, progressive deployment, revenue trajectory.",
        "Credibility assets: INPI patents and cybersecurity know-how.",
      ],
      cta1: "Request a demo",
      cta1Href: "/demo",
      cta2: "",
      cta2Href: "",
    },

    homeRAndD: {
      title: "R&D (secondary)",
      subtitle: "Alongside HCS-U7, IA-Solution runs an R&D program on system resilience and offline operation.",
      cardTitle: "HCS-SHIELD (R&D program)",
      cardDescription: "A secure offline application to prepare and share information in constrained environments. Presented as an R&D initiative.",
      cta: "Discover HCS-SHIELD",
      ctaHref: "/hcs-shield",
    },

    homeFinalCTA: {
      title: "Let's discuss your context",
      subtitle: "Share your context and constraints. We propose a scoped POC and a personalized demo.",
      cta1: "Request a demo",
      cta1Href: "/demo",
      cta2: "",
      cta2Href: "",
    },

    // Problem Section
    problem: {
      title: "The problem: CAPTCHAs are obsolete",
      content: `In 2024, ETH Zurich researchers demonstrated that **generative AIs bypass 94% of traditional CAPTCHAs**. GPT-4V, Claude 3, and Gemini Pro instantly solve visual tests designed to block bots.

Current authentication systems rely on challenges that AI now masters better than humans: image recognition, distorted text reading, logic puzzles.

**The paradigm must change.** Instead of testing what AI does well, we must measure what it cannot simulate: the fundamental neurobiological constraints of the human brain.`,
      source: "Source: ETH Zurich, 2024 — 'Breaking CAPTCHA with Vision-Language Models'",
      stats: [
        { value: "94%", label: "of CAPTCHAs bypassed by AI", source: "ETH Zurich, 2024" },
        { value: "<30ms", label: "generative AI response time", source: "HCS-U7 internal benchmark" },
        { value: "$5.4B", label: "annual losses due to bots", source: "Imperva Bad Bot Report, 2024" },
      ],
    },

    // Solution Section
    solution: {
      title: "Our solution: HCS-U7",
      headline: "Measure what AI cannot simulate:\nthe neurobiological constraints of the human brain.",
      content: `HCS-U7 leverages 6 scientifically validated cognitive tests dating back to the 1930s. Each test measures a fundamental limitation of the human brain — reaction time, cognitive interference, working memory capacity — that AI cannot authentically reproduce.

The result: 98.9% accuracy with a generative AI detection rate exceeding 99%.`,
    },

    // Technology Section
    technology: {
      title: "Validated Cognitive Tests",
      subtitle: "6 tests from decades of cognitive neuroscience research",
      tests: [
        { icon: "Brain", name: "Stroop Test", year: "1935", description: "Measures cognitive interference. Humans slow down 100-200ms on incongruent items, AI responds instantly." },
        { icon: "RefreshCw", name: "N-Back", year: "1958", description: "Tests working memory (7±2 items). Human performance degrades beyond 3-back, AI remains constant." },
        { icon: "Shuffle", name: "Trail Making", year: "1938", description: "Measures cognitive switching cost (200-500ms). AI has no measurable switching cost." },
        { icon: "Hash", name: "Digit Span", year: "1939", description: "Evaluates memory span and short-term retention. Characteristic error patterns in humans." },
        { icon: "Zap", name: "Reaction Time", year: "1868", description: "50-150ms temporal variability in humans. AI responds in <30ms with >80% regularity." },
        { icon: "Mic", name: "Vocal RAN", year: "1974", description: "Rapid naming with pause and hesitation analysis. Vocal patterns impossible to simulate." },
      ],
      architecture: {
        title: "Defense-in-Depth Architecture",
        layers: [
          { level: "L7", name: "Cloudflare WAF — Application filtering" },
          { level: "L6", name: "Rate Limiting — Adaptive anti-DDoS" },
          { level: "L5", name: "Device Fingerprinting — 50+ signals" },
          { level: "L4", name: "Behavioral Analysis — Navigation patterns" },
          { level: "L3", name: "HCS-U7 Core — Adaptive cognitive tests" },
          { level: "L2", name: "Trust Graph — Fraud network detection" },
          { level: "L1", name: "Celestial Entropy — Astronomical entropy" },
        ],
      },
    },
    // Use Cases Section
    useCases: {
      title: "Priority use cases",
      subtitle: "Examples where HCS-U7 provides measurable protection without adding friction.",
      cases: [
        { icon: "Building2", title: "Banking & fintech", description: "Secure access and sensitive actions, reduce fraud risk." },
        { icon: "ShoppingCart", title: "E-commerce", description: "Protect accounts and high-risk flows (login, checkout, automated abuse)." },
        { icon: "Plug", title: "Platforms & SaaS", description: "Protect critical entry points and reduce automated abuse." },
        { icon: "Landmark", title: "Services & portals", description: "Increase trust on access flows and limit impersonation." },
      ],
    },

    // Performance Section
    performance: {
      title: "Validated Performance",
      subtitle: "Battle-Tested Infrastructure — 518 attacks blocked, 0 breach",
      metrics: [
        { value: "99.9", suffix: "/100", label: "Security Score", sublabel: "Defense-in-Depth (7 layers)", badge: "🏆 Enterprise-Grade" },
        { value: 383, suffix: "+", label: "Tests", sublabel: "Unit + E2E + Load (k6)", badge: "✅ High Coverage" },
        { value: 98.9, suffix: "%", label: "Global accuracy", sublabel: "True Positive Rate" },
        { value: 99.6, suffix: "%", label: "Bot detection", sublabel: "True Negative Rate" },
        { value: 99, prefix: ">", suffix: "%", label: "AI detection", sublabel: "GPT-4V, Claude 3, Gemini" },
        { value: 50, prefix: "<", suffix: "ms", label: "Latency P95", sublabel: "API response time" },
        { value: "0.994", suffix: "", label: "AUC-ROC", sublabel: "Model quality" },
        { value: 518, suffix: "", label: "Battle-Tested", sublabel: "Attacks blocked (15 days)", badge: "🛡️ 0 Breach" },
        { value: "200", suffix: "+", label: "Infrastructure", sublabel: "Cloudflare Datacenters", badge: "🌍 Global CDN" },
      ],
    },

    // Research Axes
    researchAxes: {
      label: "RESEARCH",
      title: "Our research axes",
      description: "Fundamental and applied research in four interconnected domains.",
      axes: [
        {
          id: "biometrie",
          icon: "Brain",
          title: "COGNITIVE BIOMETRICS",
          subtitle: "Human identification through unique cognitive patterns",
          description: "Research on biological markers of human cognition:",
          points: ["Stroop Effect (1935)", "N-Back (1958)", "Trail Making A/B (1938)"],
          algorithms: ["Multi-signal Score Combiner", "Quick-Auth tokens", "HMAC-SHA256 rotating codes"],
          product: `HCS-U7 — ${patentsEnItems.length} INPI patents`,
          stats: "Accuracy: 98.9% | AI Detection: >99%",
          gradient: "purple",
        },
        {
          id: "cryptographie",
          icon: "Star",
          title: "BELIEF CRYPTOGRAPHY",
          subtitle: "Digitization and securing of symbolic systems",
          description: "Research on mathematical formalization of belief systems:",
          points: ["Western + BaZi Fusion", "Swiss Ephemeris", "Celestial Entropy Layer"],
          algorithms: ["Planetary position nonces", "QSIG signatures", "B3 binding"],
          product: "Patent: FR2514546",
          stats: "Authentication, randomness, identity binding",
          gradient: "pink",
        },
        {
          id: "resistance-ia",
          icon: "Shield",
          title: "GENERATIVE AI RESISTANCE",
          subtitle: "Countermeasures to language and vision models",
          description: "Research on detecting and blocking generative AI:",
          points: ["Temporal pattern analysis", "Regularity detection", "Fatigue effect"],
          algorithms: ["GPT-4V: >99%", "Claude 3: >99%", "Gemini Pro: >99%"],
          product: "Defense-in-Depth Architecture",
          stats: "Honeypots · L7 DDoS · Adaptive PoW",
          gradient: "blue",
        },
        {
          id: "post-quantum",
          icon: "Atom",
          title: "POST-QUANTUM CRYPTOGRAPHY",
          subtitle: "Production-ready today",
          description: "Full implementation of NIST-PQC standards:",
          points: ["ML-DSA-65 (Dilithium3)", "ML-KEM-768 (Kyber768)", "QSIG v3 + Shield v3"],
          algorithms: ["Dilithium signatures", "Kyber hybrid encryption", "62 PQC tests"],
          product: "Production-ready NOW",
          stats: "Sign ~12ms | Verify ~8ms | Encaps ~2ms",
          gradient: "cyan",
        },
      ],
    },

    // Research Methodology
    researchMethodology: {
      badge: "METHODOLOGY",
      title: "Scientific approach",
      subtitle: "Our research follows a rigorous methodology, from problem identification to results validation.",
      steps: [
        { title: "Problem identification", description: "Analysis of current authentication system limitations against generative AI. Study of CAPTCHA bypass rates (94% - ETH Zurich 2024)." },
        { title: "Research hypothesis", description: "Biological cognitive constraints (reaction time, interference, working memory) are reliable markers of humanity that AI cannot simulate." },
        { title: "Experimentation", description: "Development and validation of 6 cognitive tests from neuroscience. Data collection on 10,000+ sessions. Training of ML detection models." },
        { title: "Validation", description: "98.9% accuracy, AI detection >99%, P95 latency <50ms. 699 unit and integration tests. 3 INPI patents filed." },
      ],
    },

    // Research Roadmap
    researchRoadmap: {
      badge: "R&D ROADMAP",
      title: "Roadmap",
      subtitle: "Our progression from fundamental research to industrial applications.",
      statusLabels: { completed: "Completed", in_progress: "In progress", planned: "Planned" },
      phases: [
        { year: "2022-2023", title: "Fundamental research", items: ["Study of validated cognitive tests (Stroop, N-Back, Trail Making)", "Analysis of human vs AI temporal patterns", "Score Combiner prototyping"], status: "completed" },
        { year: "2024", title: "HCS-U7 Development", items: ["Defense-in-Depth 10-layer architecture", "Celestial Entropy Layer integration", "699 unit and integration tests", "INPI patent filings (FR2514274, FR2514546, FR2515560)"], status: "completed" },
        { year: "2025", title: "Validation & Production", items: ["Native PSD2/SCA compliance", "Public API v1.0", "First pilot customers", "Doctoral thesis finalization"], status: "in_progress" },
        { year: "2026", title: "Expansion", items: ["Post-quantum cryptography (NIST-PQC)", "Multi-platform SDK", "International academic partnerships", "Robotics & IoT extension"], status: "planned" },
      ],
    },

    // Product HCS
    productHCS: {
      label: "PRODUCT",
      title: "HCS-U7",
      subtitle: "Human Cognitive Signature",
      headline: "Cognitive authentication resilient to bots and generative AI, delivered as SaaS / API.",
      description: [
        "Progressive rollout: a scoped POC, then scaling.",
        "Fraud reduction (bots, impersonation) without adding friction to the user journey.",
        "Steering via a dashboard and risk-based activation rules.",
        "Protected technology (INPI patents).",
      ],
      cta1: "Discover HCS-U7",
      cta1Href: "/hcs-u7",
      cta2: "Request a demo",
      cta2Href: "/demo",
      stats: [
        { value: "98.9", suffix: "%", label: "Accuracy" },
        { value: ">99", suffix: "%", label: "AI Detection" },
        { value: "2", suffix: "", label: "INPI Patents" },
        { value: "699", suffix: "", label: "Tests" },
      ],
    },

    // Architecture
    architecture: {
      label: "ARCHITECTURE",
      title: "Defense-in-Depth",
      subtitle: "Multi-Signal Cognitive Firewall — Security Level 99.9/100",
      diagram: `┌─────────────────────────────────────────────────────────────────────────────┐
│  HCS-U7 COGNITIVE FIREWALL                                                  │
│  Backend Fastify 5 · TypeScript · 699 Tests · PQC                           │
│                                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │  HCS Core   │ │   Device    │ │   Network   │ │  Behavior   │            │
│  │   Score     │ │    Risk     │ │    Risk     │ │   Anomaly   │            │
│  └──────┬──────┘ └──────┬──────┘ └──────┬──────┘ └──────┬──────┘            │
│         └──────────────┴──────────────┴──────────────┘                      │
│                                │                                            │
│                    ┌───────────▼───────────┐                                │
│                    │    SCORE COMBINER     │                                │
│                    └───────────┬───────────┘                                │
│                                │                                            │
│              ┌─────────────────┼─────────────────┐                          │
│              ▼                 ▼                 ▼                          │
│           ALLOW           CHALLENGE            DENY                         │
└─────────────────────────────────────────────────────────────────────────────┘`,
      modules: [
        { icon: "Lock", phase: "PHASE 1", title: "Auth & Secrets", points: ["Automatic Secret Rotation", "HSM Integration AWS/Google KMS", "API Key MFA Critical Actions"] },
        { icon: "Shield", phase: "PHASE 2", title: "Advanced Protection", points: ["Proof of Work Argon2id/SHA256", "L7 DDoS Protection", "Active Honeypots"] },
        { icon: "Key", phase: "PHASE 3", title: "Encryption", points: ["Encryption at Rest AES-256-GCM", "Request Integrity HMAC", "TLS 1.3 strict"] },
        { icon: "Activity", phase: "PHASE 4", title: "Monitoring & Audit", points: ["SIEM Integration", "Immutable Audit Log", "IP Reputation"] },
        { icon: "Star", phase: "EXCLUSIVE", title: "Celestial Entropy", points: ["Real-time astronomical entropy", "☀️ Sun · 🌙 Moon · 🪐 Planets"] },
        { icon: "Zap", phase: "PERFORMANCE", title: "Tech Stack", points: ["Fastify 5 · Strict TypeScript", "PostgreSQL + Redis", "P95 Latency <50ms"] },
      ],
      endpoints: [
        { method: "POST", path: "/api/verify-human", desc: "Basic verification (legacy)" },
        { method: "POST", path: "/api/adaptive-verify", desc: "Adaptive multi-signal decision" },
        { method: "POST", path: "/api/quick-auth", desc: "Short-term behavioral token" },
        { method: "POST", path: "/api/sca/evaluate", desc: "Transaction evaluation (Art.11/18)" },
        { method: "GET", path: "/health", desc: "Service health" },
      ],
    },

    // U7 Format
    u7Format: {
      label: "SPECIFICATION",
      title: "HCS-U7 Format",
      subtitle: "Deterministic 7-segment identity structure",
      example: "HCS-U7|V:8.0|ALG:QS|E:E|MOD:c25f0m75|COG:F42C22V9S10Cr16|...",
      segments: [
        { segment: "HCS-U7", description: "Protocol identifier" },
        { segment: "V:x.x", description: "Version (semantic)" },
        { segment: "ALG:QS", description: "Algorithm (QS = Quantum-Safe)" },
        { segment: "E:E", description: "Encoding (E = Extended)" },
        { segment: "MOD:...", description: "Modality flags" },
        { segment: "COG:...", description: "Cognitive axes" },
        { segment: "QSIG:...", description: "Quantum-safe signature" },
        { segment: "B3:...", description: "Biometric binding hash" },
      ],
      properties: ["Deterministic — same input → same output", "Verifiable — integrated cryptographic signature", "Extensible — additional segments possible", "Post-quantum — NIST-PQC ready"],
      algorithms: [
        { name: "QSIG", title: "Quantum-Safe Signature", description: "Quantum computer resistant signature." },
        { name: "B3", title: "Biometric Binding", description: "Cryptographic identity/biometric binding." },
        { name: "MERKLE", title: "Tree Signatures", description: "Hash tree for resistant signatures." },
      ],
      fusion: {
        title: "AFFINE FUSION OPERATORS",
        description: "Fusion of two symbolic traditions via mathematical operators:",
        mappings: [
          { western: "Sun sign", bazi: "Day Master", result: "Primary Element" },
          { western: "Moon sign", bazi: "Hour Branch", result: "Emotional Mode" },
        ],
        notes: ["High-precision Swiss Ephemeris", "Deterministic affine operators"],
      },
    },

    // Tech Stack
    techStack: {
      label: "TECHNOLOGIES",
      title: "Our technology stack",
      subtitle: "A modern, secure, and high-performance architecture.",
      stacks: [
        { icon: "Code", title: "Backend", description: "Fastify 5, TypeScript, Zod validation, 699 Vitest tests." },
        { icon: "Database", title: "Persistence", description: "PostgreSQL, Prisma ORM, Redis cache, distributed rate limiting." },
        { icon: "Lock", title: "Cryptography", description: "HMAC-SHA256, bcrypt, JWT, Celestial Entropy, NIST-PQC ready." },
        { icon: "Shield", title: "Enterprise Security", description: "Multi-encoding WAF, L7 DDoS, Honeypots, Credential Stuffing." },
        { icon: "Brain", title: "Cognitive Engine", description: "6 neuroscience tests, adaptive Score Combiner, Quick-Auth tokens." },
        { icon: "Star", title: "Innovation", description: "Celestial Entropy Layer — Real-time astronomical entropy." },
      ],
    },

    // Publications
    publications: {
      label: "PUBLICATIONS",
      title: "Research work",
      subtitle: "Academic contributions and technical documentation",
      items: [
        { icon: "FileText", type: "DOCTORAL THESIS", title: "Cognitive authentication and human/AI differentiation", chapters: ["General introduction", "Celestial Entropy Layer", "Validated cognitive tests", "Defense-in-Depth Architecture"], status: "In finalization", cta: "Preview" },
        { icon: "Book", type: "TECHNICAL DOCUMENTATION", title: "HCS-U7 Specs & Patent Corpus", chapters: ["Core specification (v3.2)", "U7 Format (7 segments)", "Algorithms (QSIG, B3, Merkle)", "Western + BaZi Fusion"], status: "Classification: Proprietary", cta: "Documentation" },
        { icon: "Microscope", type: "SCIENTIFIC REFERENCES", title: "Fundamental cognitive tests", chapters: ["Stroop (1935)", "N-Back (1958)", "Trail Making (1938)", "Digit Span (1939)"], status: "", cta: "Bibliography" },
        { icon: "BarChart", type: "BENCHMARKS & VALIDATION", title: "Validated results", chapters: ["Accuracy: 98.9%", "AI Detection: >99%", "P95 Latency: <50ms", "Tests: 699"], status: "", cta: "Full report" },
      ],
    },

    // CTA Section
    ctaSection: {
      label: "COLLABORATION",
      title: "Let's work together",
      subtitle: "Research partnerships, technology licenses, integration projects — let's discuss your needs.",
      options: [
        { icon: "Microscope", title: "Research", points: ["R&D Collaboration", "Joint projects", "Co-publication"] },
        { icon: "Building", title: "Enterprise", points: ["Commercial license", "API Integration", "Dedicated support"] },
        { icon: "GraduationCap", title: "Academic", points: ["Research access", "Anonymized data", "Thesis co-supervision"] },
      ],
      cta1: "Contact us",
      cta1Href: "/contact",
      cta2: "Request HCS-U7 demo",
      cta2Href: "/contact",
    },

    // Patents
    patents: {
      label: "PATENTS",
      title: "Intellectual Property",
      subtitle: `${patentsEnItems.length} patents filed with INPI — 20-year protection`,
      items: patentsEnItems,
      disclaimer: "In accordance with Article L. 612-10 of the Intellectual Property Code, the Minister of Defense has been authorized to review applications confidentially.",
    },

    // HCS-U7 Page
    hcsU7Page: {
      hero: {
        badge: "FLAGSHIP PRODUCT",
        title: "HCS-U7",
        subtitle: "Human Cognitive Signature",
        description: "The first cognitive biometric authentication system resistant to generative artificial intelligence. Based on 3 years of research in cognitive neuroscience and cryptography.",
        cta: "Request an HCS-U7 demo",
        stats: [
          { value: "98.9%", label: "Accuracy" },
          { value: ">99%", label: "AI Detection" },
          { value: "3", label: "INPI Patents" },
          { value: "699", label: "Tests" },
          { value: "<50ms", label: "P95 Latency" },
          { value: "10", label: "Security Layers" },
        ],
      },
      cognitiveTests: {
        badge: "COGNITIVE TESTS",
        title: "6 scientifically validated tests",
        subtitle: "Each test exploits a fundamental limitation of the human brain that AI cannot authentically simulate.",
        tests: [
          { name: "Stroop Test", year: "1935", author: "John Ridley Stroop", principle: "Cognitive interference occurs when the brain must process conflicting information. Reading the word 'RED' written in blue creates a measurable delay.", humanBehavior: "100-200ms slowdown on incongruent items", aiBehavior: "Constant response time, no interference effect", detection: "Analysis of temporal variance and error patterns" },
          { name: "N-Back", year: "1958", author: "Wayne Kirchner", principle: "Human working memory is limited to 7±2 items (Miller, 1956). Beyond that, performance drops predictably.", humanBehavior: "Progressive degradation beyond 3-back", aiBehavior: "Constant performance regardless of load", detection: "Characteristic degradation curve" },
          { name: "Trail Making A/B", year: "1938", author: "US Army", principle: "Cognitive switching between two tasks (letters/numbers) has an incompressible time cost in humans.", humanBehavior: "Switching cost of 200-500ms", aiBehavior: "No measurable switching cost", detection: "Part B / Part A time ratio" },
          { name: "Digit Span", year: "1939", author: "David Wechsler", principle: "Memory span measures short-term retention capacity. Biologically limited in humans.", humanBehavior: "Average capacity of 7±2 digits", aiBehavior: "Unlimited capacity", detection: "Performance breakpoint" },
          { name: "Reaction Time", year: "1868", author: "Franciscus Donders", principle: "Human reaction time has natural variability due to neural processes. AI responds too regularly.", humanBehavior: "50-150ms variability, fatigue effect", aiBehavior: "Time <30ms, >80% regularity", detection: "Temporal variation coefficient" },
          { name: "Vocal RAN", year: "1974", author: "Denckla & Rudel", principle: "Rapid automatized naming reveals unique speech patterns: pauses, hesitations, rhythm.", humanBehavior: "Natural pauses, flow variations", aiBehavior: "Artificial fluidity, regular timing", detection: "Spectral and temporal analysis" },
        ],
        labels: { human: "Human", ai: "AI", detection: "Detection" },
      },
      architecture: {
        badge: "ARCHITECTURE",
        title: "Defense-in-Depth",
        subtitle: "34 security modules · 10 stacked layers · 699 tests · Post-Quantum Ready · v8.4",
        signalsTitle: "5-signal fusion",
      },
      performance: {
        badge: "PERFORMANCE",
        title: "Validated results",
        subtitle: "Metrics obtained from doctoral research on 10,000+ sessions.",
        source: "Reference: ETH Zurich (2024) — 94% CAPTCHA bypass rate by generative AI",
        metrics: [
          { value: "98.9%", label: "Global accuracy", sublabel: "Accuracy" },
          { value: "99.6%", label: "True Negative Rate", sublabel: "True negatives" },
          { value: "2.2%", label: "False Positive Rate", sublabel: "False positives" },
          { value: "0.994", label: "AUC-ROC", sublabel: "Area Under Curve" },
          { value: ">99%", label: "GPT-4V Detection", sublabel: "OpenAI" },
          { value: ">99%", label: "Claude 3 Detection", sublabel: "Anthropic" },
          { value: ">99%", label: "Gemini Detection", sublabel: "Google" },
          { value: ">99.6%", label: "Bot Detection", sublabel: "Automated" },
          { value: "<50ms", label: "P95 Latency", sublabel: "95th percentile" },
          { value: "699", label: "Tests", sublabel: "Vitest" },
          { value: "99.9/100", label: "Security Score", sublabel: "Defense-in-Depth" },
          { value: "10", label: "Layers", sublabel: "Protection v8.4" },
        ],
      },
    },

    // Shield Module Page
    shieldPage: {
      hero: {
        badge: "LAYER 10 — NEW v8.4",
        title: "Shield Module",
        subtitle: "Anti-FalconOne Defense",
        description: "The only authentication solution protecting users even when their mobile network is compromised by state-level adversaries.",
        stats: [
          { icon: "📡", label: "IMSI Catcher", sublabel: "Detection" },
          { icon: "📍", label: "Geolocation", sublabel: "Attack Detection" },
          { icon: "🛡️", label: "GPS Spoofing", sublabel: "Protection" },
          { icon: "⚡", label: "Real-time", sublabel: "Alerts" },
        ],
      },
      problem: {
        badge: "THE PROBLEM",
        title: "The unsolved problem",
        subtitle: "Governments, journalists and executives are targeted by state-level network threats",
        threats: [
          { title: "IMSI catchers", subtitle: "Stingray, FalconOne", description: "Mobile communication interception via fake base stations" },
          { title: "High-precision geolocation", subtitle: "Tracking <10m", description: "Position tracking with sub-10 meter accuracy" },
          { title: "Network downgrade attacks", subtitle: "5G → 2G forced", description: "Forcing to less secure protocols to facilitate interception" },
          { title: "VoLTE interception", subtitle: "Encrypted voice eavesdropping", description: "Voice over LTE communication interception" },
        ],
        warning: "No traditional authentication solution protects against these threats.",
        warningDetail: "2FA, facial biometrics, behavioral analytics → All bypassable when the mobile network is compromised.",
      },
      solution: {
        badge: "THE SOLUTION",
        title: "Our response: HCS-Shield (Layer 10)",
        subtitle: "Multi-signal network threat detection in real-time",
        imsiTitle: "IMSI Catcher Detection",
        imsiItems: [
          "Suspicious LAC analysis (fake base stations)",
          "Abnormal signal detection (>-40 dBm = too strong)",
          "Handover rate monitoring (>5/min = suspicious)",
          "Encryption downgrade detection (A5/3 → A5/0)",
        ],
        imsiWarning: "Recommends airplane mode if critical risk (≥70 points)",
        geoTitle: "Geolocation Attack Detection",
        geoItems: [
          "Impossible travel (>900 km/h between 2 positions)",
          "Precision tracking (3+ positions <10m accuracy)",
          "GPS spoofing (round coordinates, impossible accuracy)",
        ],
        geoWarning: "User alert + audit log on detection",
      },
      useCases: {
        badge: "USE CASES",
        title: "Critical use cases",
        subtitle: "Protection of high-risk users against state-level network threats",
        cases: [
          { icon: "🛡️", title: "Defense & Security", description: "Executives in hostile zones, field agents, sensitive communications in unsecured environments." },
          { icon: "📰", title: "Journalism", description: "Conflict zone reporters, source protection, secure communications with newsrooms." },
          { icon: "🏛️", title: "Government", description: "Diplomats, international missions, sensitive government communications." },
          { icon: "💳", title: "Fintech", description: "Mobile banking in high-risk countries, high-value transactions, IMSI catcher protection." },
        ],
      },
      technical: {
        badge: "TECHNICAL",
        title: "Technical details",
        subtitle: "Multi-signal scoring algorithm with adaptive decision thresholds",
        levels: [
          { threshold: "≥70", level: "DANGEROUS", action: "Enable airplane mode immediately" },
          { threshold: "≥40", level: "SUSPICIOUS", action: "Avoid sensitive operations" },
          { threshold: "<40", level: "SAFE", action: "Continue normally" },
        ],
      },
      patent: {
        badge: "INTELLECTUAL PROPERTY",
        title: "Patent FR2515560",
        patentTitle: "Shield Module - Anti-FalconOne Defense",
        filed: "December 17, 2025",
        status: "Under INPI examination",
        protection: "20 years (until 2045)",
        holder: "IA-SOLUTION / Benjamin BARRÈRE",
        description: "World's first patent covering IMSI catcher detection and geolocation attacks in an authentication system.",
        claims: [
          "Multi-signal IMSI catcher detection system",
          "High-precision geolocation detection algorithm",
          "GPS spoofing attack protection",
          "Adaptive recommendations based on detected risk level",
        ],
      },
      cta: {
        title: "Protect your users against state-level threats",
        subtitle: "The Shield Module is available via the HCS-U7 API",
        primaryCta: "Request a demo",
        secondaryCta: "Contact us",
      },
    },

    // Technology Page
    technologyPage: {
      hero: {
        badge: "TECHNOLOGY",
        title: "HCS-U7 Technical Stack",
        subtitle: "A modern, secure and performant architecture. Fastify 5 backend, strict TypeScript, PostgreSQL, Redis, and our exclusive innovation: the Celestial Entropy Layer.",
        techs: ["Fastify 5", "TypeScript", "PostgreSQL", "Redis", "Vitest", "Zod"],
      },
      postQuantum: {
        badge: "POST-QUANTUM",
        title: "Post-Quantum Cryptography",
        subtitle: "NEW v8.4 — NIST-approved algorithms, resistant to quantum computers",
        algorithms: [
          { name: "ML-DSA-65", alias: "Dilithium3", purpose: "Signatures (QSIG v3)", nistLevel: "Level 3", keySizes: "pk=1952, sk=4032, sig=3309" },
          { name: "ML-KEM-768", alias: "Kyber768", purpose: "Key Encapsulation (Shield v3)", nistLevel: "Level 3", keySizes: "pk=1184, sk=2400, ct=1088" },
        ],
        featuresTitle: "Features",
        features: [
          { label: "Resistant to quantum attacks", desc: "Shor's algorithm" },
          { label: "NIST FIPS 204/203 standard", desc: "Approved 2024" },
          { label: "Deterministic signatures", desc: "Reproducible" },
          { label: "Hybrid AES-256-GCM", desc: "Double protection" },
        ],
        performanceTitle: "Performance (Pure JavaScript)",
        performance: [
          { metric: "Sign", value: "~12ms", desc: "ML-DSA-65" },
          { metric: "Verify", value: "~8ms", desc: "ML-DSA-65" },
          { metric: "Encaps", value: "~2ms", desc: "ML-KEM-768" },
          { metric: "Decaps", value: "~3ms", desc: "ML-KEM-768" },
        ],
        architectureTitle: "Hybrid architecture",
        advantage: "HCS-U7 is one of the first cognitive authentication solutions to deploy post-quantum cryptography in production.",
        longTermProtection: "Long-term protection: Signatures and keys generated today will remain secure even after the emergence of large-scale quantum computers (2030-2035 horizon).",
      },
    },

    // HCS-SHIELD
    hcsShield: {
      hero: {
        badge: {
          fr: "Combat-Ready • Offline-First • GPS-Denied",
          en: "Combat-Ready • Offline-First • GPS-Denied"
        },
        title: {
          fr: "HCS-SHIELD",
          en: "HCS-SHIELD"
        },
        subtitle: {
          fr: "Planification Tactique pour Drones Autonomes",
          en: "Tactical Drone Mission Planning"
        },
        description: {
          fr: "Planification de missions sécurisée pour drones autonomes en environnement GPS-denied. Authentification hardware-bound, QR éphémère, protection anti-capture.",
          en: "Secure mission planning for autonomous drones in GPS-denied environments. Hardware-bound authentication, ephemeral QR, anti-capture protection."
        },
        ctaPrimary: {
          fr: "Voir la Démo",
          en: "Watch Demo"
        },
        ctaSecondary: {
          fr: "Procurement Militaire",
          en: "Military Procurement"
        }
      },
      stats: {
        offline: {
          value: "100%",
          label: {
            fr: "Capacité Offline",
            en: "Offline Capable"
          }
        },
        layers: {
          value: "7",
          label: {
            fr: "Couches Sécurité",
            en: "Security Layers"
          }
        },
        wipe: {
          value: "<3s",
          label: {
            fr: "Destruction Panique",
            en: "Panic Wipe"
          }
        },
        emission: {
          value: "0 dBm",
          label: {
            fr: "Émission RF",
            en: "RF Emission"
          }
        }
      },
      problem: {
        title: {
          fr: "Le Problème Tactique",
          en: "The Tactical Problem"
        },
        subtitle: {
          fr: "Opérations en Environnement GPS-Denied",
          en: "Operations in GPS-Denied Environments"
        },
        items: [
          {
            icon: "SatelliteOff",
            title: {
              fr: "GPS Brouillé",
              en: "GPS Jamming"
            },
            description: {
              fr: "La guerre électronique moderne rend le GPS inutilisable. Les drones perdent leur navigation satellite.",
              en: "Modern electronic warfare makes GPS unusable. Drones lose their satellite navigation."
            }
          },
          {
            icon: "Radio",
            title: {
              fr: "Liaisons Interceptées",
              en: "Intercepted Links"
            },
            description: {
              fr: "Les communications radio révèlent la position du pilote et peuvent être prises de contrôle.",
              en: "Radio communications reveal pilot position and can be hijacked."
            }
          },
          {
            icon: "Cable",
            title: {
              fr: "Fibre Optique Limitée",
              en: "Limited Fiber Optic"
            },
            description: {
              fr: "Les drones guidés par câble ont un rayon d'action limité (500m-5km max).",
              en: "Cable-guided drones have limited range (500m-5km max)."
            }
          },
          {
            icon: "Eye",
            title: {
              fr: "Détection RF",
              en: "RF Detection"
            },
            description: {
              fr: "Toute émission radio-fréquence est détectable et géolocalisable par l'adversaire.",
              en: "Any radio-frequency emission is detectable and geolocatable by adversaries."
            }
          }
        ]
      },
      security: {
        title: {
          fr: "Architecture 7-Couches",
          en: "7-Layer Architecture"
        },
        subtitle: {
          fr: "Defense-in-Depth pour Opérations Sensibles",
          en: "Defense-in-Depth for Sensitive Operations"
        },
        layers: [
          {
            number: 1,
            name: {
              fr: "Liaison Hardware",
              en: "Hardware Binding"
            },
            tech: "WebAuthn (TPM/Secure Enclave)",
            description: {
              fr: "Clés cryptographiques non-extractibles, liées au hardware du smartphone",
              en: "Non-extractible cryptographic keys, bound to smartphone hardware"
            }
          },
          {
            number: 2,
            name: {
              fr: "Clés Éphémères",
              en: "Ephemeral Keys"
            },
            tech: "HKDF + AES-256-GCM",
            description: {
              fr: "QR code auto-destructible après 30 min ou première lecture",
              en: "Self-destructing QR code after 30 min or first read"
            }
          },
          {
            number: 3,
            name: {
              fr: "Déni Plausible",
              en: "Plausible Deniability"
            },
            tech: "Duress Mode (Dual PIN)",
            description: {
              fr: "Profil leurre avec missions factices, cryptographiquement indistinguable",
              en: "Decoy profile with fake missions, cryptographically indistinguishable"
            }
          },
          {
            number: 4,
            name: {
              fr: "Crypto-Destruction",
              en: "Crypto-Shredding"
            },
            tech: "DoD 5220.22-M (3-pass)",
            description: {
              fr: "Destruction irréversible en <3s (bouton panique)",
              en: "Irreversible destruction in <3s (panic button)"
            }
          },
          {
            number: 5,
            name: {
              fr: "Logs Anonymes",
              en: "Anonymous Logs"
            },
            tech: "Zero-Knowledge History",
            description: {
              fr: "Fingerprint rotatif quotidien, GPS arrondi ~1km, pas d'identification pilote",
              en: "Daily rotating fingerprint, GPS rounded ~1km, no pilot identification"
            }
          },
          {
            number: 6,
            name: {
              fr: "Preuve de Présence",
              en: "Proof-of-Presence"
            },
            tech: "Quick Stroop Test (15s)",
            description: {
              fr: "Re-challenge cognitif avant actions sensibles (détection bot)",
              en: "Cognitive re-challenge before sensitive actions (bot detection)"
            }
          },
          {
            number: 7,
            name: {
              fr: "Garde Anti-Intrusion",
              en: "Tamper Guard"
            },
            tech: "Runtime Integrity Checks",
            description: {
              fr: "Détection debugger, DevTools, modification storage → Auto-wipe",
              en: "Debugger, DevTools, storage tampering detection → Auto-wipe"
            }
          }
        ]
      },
      useCases: {
        title: {
          fr: "Cas d'Usage Terrain",
          en: "Field Use Cases"
        },
        subtitle: {
          fr: "Validation Combat-Proven",
          en: "Combat-Proven Validation"
        },
        cases: [
          {
            flag: "🇺🇦",
            country: {
              fr: "Ukraine",
              en: "Ukraine"
            },
            title: {
              fr: "Reconnaissance Furtive",
              en: "Stealth Reconnaissance"
            },
            description: {
              fr: "Drones DJI modifiés pour missions ISR en zones contestées. Navigation inertielle + SLAM, pas de GPS.",
              en: "Modified DJI drones for ISR missions in contested areas. Inertial navigation + SLAM, no GPS."
            },
            metrics: [
              { fr: "Rayon: 8-12 km", en: "Range: 8-12 km" },
              { fr: "Durée: 20-30 min", en: "Duration: 20-30 min" },
              { fr: "Émission RF: 0 dBm", en: "RF Emission: 0 dBm" }
            ]
          },
          {
            flag: "🇮🇱",
            country: {
              fr: "Israël",
              en: "Israel"
            },
            title: {
              fr: "Strike Précis",
              en: "Precision Strike"
            },
            description: {
              fr: "Munitions rôdeuses autonomes (type Switchblade). Waypoints pré-programmés, pas de liaison pilote.",
              en: "Autonomous loitering munitions (Switchblade-type). Pre-programmed waypoints, no pilot link."
            },
            metrics: [
              { fr: "Précision: <1m CEP", en: "Accuracy: <1m CEP" },
              { fr: "Autonomie: 15-40 min", en: "Endurance: 15-40 min" },
              { fr: "Anti-brouillage: 100%", en: "Anti-jamming: 100%" }
            ]
          },
          {
            flag: "🇫🇷",
            country: {
              fr: "Forces Spéciales",
              en: "Special Forces"
            },
            title: {
              fr: "Opérations Discrètes",
              en: "Covert Operations"
            },
            description: {
              fr: "Planification mission sur smartphone (mode avion), transfert QR vers drone. Zéro trace électronique.",
              en: "Mission planning on smartphone (airplane mode), QR transfer to drone. Zero electronic trace."
            },
            metrics: [
              { fr: "OPSEC: EMCON Niveau 1", en: "OPSEC: EMCON Level 1" },
              { fr: "Mode Duress: Actif", en: "Duress Mode: Active" },
              { fr: "Destruction: <3s", en: "Panic Wipe: <3s" }
            ]
          }
        ]
      },
      tech: {
        title: {
          fr: "Architecture Offline-First",
          en: "Offline-First Architecture"
        },
        subtitle: {
          fr: "Zéro Dépendance Réseau",
          en: "Zero Network Dependency"
        },
        features: [
          {
            icon: "MapPin",
            title: {
              fr: "Cartes Pré-Chargées",
              en: "Pre-Cached Maps"
            },
            description: {
              fr: "10,000+ tiles OpenStreetMap en cache (Service Worker). Zones opérationnelles téléchargées avant déploiement.",
              en: "10,000+ OpenStreetMap tiles cached (Service Worker). Operational areas downloaded before deployment."
            }
          },
          {
            icon: "Database",
            title: {
              fr: "Stockage Local",
              en: "Local Storage"
            },
            description: {
              fr: "IndexedDB chiffré (AES-256-GCM). Profil, missions, historique : 100% local, jamais de cloud.",
              en: "Encrypted IndexedDB (AES-256-GCM). Profile, missions, history: 100% local, never cloud."
            }
          },
          {
            icon: "Cpu",
            title: {
              fr: "Crypto Embarquée",
              en: "Embedded Crypto"
            },
            description: {
              fr: "Web Crypto API (native navigateur). PBKDF2, HKDF, AES-GCM, SHA-256 : pas de dépendance externe.",
              en: "Web Crypto API (native browser). PBKDF2, HKDF, AES-GCM, SHA-256: no external dependencies."
            }
          },
          {
            icon: "Smartphone",
            title: {
              fr: "PWA Cross-Platform",
              en: "PWA Cross-Platform"
            },
            description: {
              fr: "Installation iOS/Android sans App Store. URL directe, updates instantanées, 0% commission stores.",
              en: "iOS/Android installation without App Store. Direct URL, instant updates, 0% store commission."
            }
          }
        ]
      },
      cta: {
        title: {
          fr: "Prêt pour le Déploiement Tactique ?",
          en: "Ready for Tactical Deployment?"
        },
        description: {
          fr: "Demandez une démonstration en direct ou discutez des options de procurement militaire.",
          en: "Request a live demonstration or discuss military procurement options."
        },
        primaryButton: {
          fr: "Planifier une Démo",
          en: "Schedule Demo"
        },
        secondaryButton: {
          fr: "Contacter l'Équipe Défense",
          en: "Contact Defense Team"
        }
      }
    },

    // Hieroglyphic Shield
    hieroglyphicShield: {
      badge: "🆕 Exclusive Innovation",
      title: "Hieroglyphic Shield v1",
      subtitle: "Transparent protection of HCS-U7 codes via AES-256-GCM encryption",
      description: "The Hieroglyphic Shield is a patentable encryption layer that makes HCS-U7 codes completely opaque to attackers, while remaining transparent for legitimate applications. This unique innovation protects the HCS-U7 algorithm against reverse engineering.",
      features: [
        {
          icon: "🔐",
          title: "AES-256-GCM Encryption",
          description: "Authenticated encryption with scrypt key derivation (N=16384, r=8, p=1)"
        },
        {
          icon: "⚡",
          title: "Performance",
          description: "Symmetric Wrap/Unwrap in 30-40ms, transparent via Fastify hooks"
        },
        {
          icon: "🛡️",
          title: "Patentable Protection",
          description: "Unique innovation making HCS-U7 structures unreadable"
        },
        {
          icon: "🔄",
          title: "Transparent",
          description: "Auto wrap/unwrap on all API routes without client code modification"
        }
      ],
      technicalDetails: {
        title: "Technical Details",
        specs: [
          { label: "Algorithm", value: "AES-256-GCM" },
          { label: "KDF", value: "scrypt (N=16384, r=8, p=1)" },
          { label: "Wrap Latency", value: "30-40ms" },
          { label: "Unwrap Latency", value: "30-40ms" },
          { label: "Tests", value: "Complete unit tests" },
          { label: "Production", value: "Active" }
        ]
      }
    },

    // Infrastructure
    infrastructure: {
      title: "Global Infrastructure",
      subtitle: "Deployed across 200+ datacenters with 24/7 monitoring",
      features: [
        {
          icon: "🌐",
          title: "Dual-Domain",
          description: "Separated architecture: HCS-U7.COM (commercial) + HCS-U7.ORG (technical)"
        },
        {
          icon: "🛡️",
          title: "Cloudflare CDN",
          description: "200+ global datacenters, DDoS 100+ Gbps, WAF OWASP, ML Bot Detection"
        },
        {
          icon: "📊",
          title: "24/7 Monitoring",
          description: "UptimeRobot (10 monitors), Sentry (error tracking), Cloudflare Analytics"
        },
        {
          icon: "⚡",
          title: "Optimal Performance",
          description: "Optimized CDN: Brotli, HTTP/3, Auto Minify, Edge Caching, <15ms global latency"
        },
        {
          icon: "🔐",
          title: "Enhanced Security",
          description: "SSL/TLS 1.3, Rate Limiting, AI Bot Protection, Strict CORS, Scan Detection"
        },
        {
          icon: "📈",
          title: "Scalable",
          description: "100K+ req/s, Multi-tenant SaaS, Distributed Redis, Auto-scaling ready"
        }
      ],
      stats: {
        title: "Infrastructure Metrics",
        items: [
          { value: "200+", label: "Datacenters" },
          { value: "100+ Gbps", label: "DDoS Protection" },
          { value: "99.99%", label: "Uptime SLA" },
          { value: "<15ms", label: "Global Latency" }
        ]
      }
    },

    // Defense-in-Depth
    defenseInDepth: {
      title: "Defense-in-Depth (34 Modules)",
      subtitle: "10 layers of enterprise-grade security",
      layers: [
        {
          level: "L10",
          name: "Shield Module",
          description: "IMSI catcher detection, geolocation protection, anti-FalconOne defense",
          modules: ["Anti-IMSI Catcher", "Geolocation Shield", "Patent FR2515560"]
        },
        {
          level: "L9",
          name: "DDoS Protection",
          description: "Adaptive L7 rate limiting, attack pattern detection, Cloudflare 100+ Gbps",
          modules: ["L7 DDoS Protection", "Distributed Rate Limiting", "Cloudflare Edge"]
        },
        {
          level: "L8",
          name: "Multi-Encoding WAF",
          description: "SQLi, XSS, Path Traversal, LDAP Injection detection with multi-pass decoding",
          modules: ["OWASP Top 10 WAF", "ML Bot Detection", "Credential Stuffing"]
        },
        {
          level: "L7",
          name: "Active Honeypots",
          description: "Decoy endpoints (/.env, /admin, /wp-login) and invisible fields, automatic 24h ban",
          modules: ["Honeypots Endpoints", "Hidden Fields", "Auto-ban 24h"]
        },
        {
          level: "L6",
          name: "Post-Quantum Crypto",
          description: "Quantum-resistant cryptography NIST FIPS 204/203",
          modules: ["ML-DSA-65 (Dilithium)", "ML-KEM-768 (Kyber)", "QSIG v3"]
        },
        {
          level: "L5",
          name: "Hieroglyphic Shield",
          description: "Transparent AES-256-GCM protection of HCS-U7 codes (wrap/unwrap 30-40ms)",
          modules: ["AES-256-GCM", "scrypt KDF", "Auto wrap/unwrap"]
        },
        {
          level: "L4",
          name: "Adaptive Proof-of-Work",
          description: "Argon2id/SHA256 computational challenge for suspicious clients, adjustable difficulty",
          modules: ["Argon2id Challenge", "Adaptive Difficulty", "Redis Cache"]
        },
        {
          level: "L3",
          name: "Anti-Replay Defense",
          description: "Replay attack protection with Redis atomic nonces, multi-instance safe",
          modules: ["Redis Atomic", "TTL 5min", "Multi-instance Safe"]
        },
        {
          level: "L2",
          name: "Cognitive Firewall",
          description: "9-signal fusion: HCS Core, Device Risk, Network Risk, Behavior Anomaly, Trust Graph",
          modules: ["Device Fingerprinting", "IP Reputation", "Keystroke Dynamics"]
        },
        {
          level: "L1",
          name: "Cognitive Biometrics",
          description: "6 scientific tests (Stroop, N-Back, Trail Making, Digit Span, Reaction Time, RAN)",
          modules: ["6 Validated Tests", "AUC-ROC 0.994", "98.9% Accuracy"]
        }
      ],
      totalModules: "34 enterprise security modules"
    },

    // SCA PSD2
    scaPsd2: {
      badge: "🏦 Banking-Grade",
      title: "SCA PSD2 Compliant",
      subtitle: "Strong Customer Authentication compliant with European PSD2 directive",
      description: "HCS-U7 integrates a complete SCA engine compliant with Articles 11 and 18 of the RTS (Regulatory Technical Standards) of the PSD2 directive. Our implementation handles regulatory exemptions and transaction risk analysis for financial institutions.",
      features: [
        {
          icon: "💶",
          title: "Low Value (Art. 11)",
          description: "Exemption for transactions < €30, cumulative < €100 or < 5 operations since last SCA"
        },
        {
          icon: "📊",
          title: "TRA (Art. 18)",
          description: "Transaction risk analysis based on actual fraud rate (thresholds 13bp/6bp/1bp)"
        },
        {
          icon: "🚫",
          title: "Hard Blocks",
          description: "Internal rules: maximum amounts, high-risk countries, suspicious patterns"
        },
        {
          icon: "📝",
          title: "Audit Trail",
          description: "Immutable history compliant with Art. 18 RTS for regulators (ACPR, ECB)"
        }
      ],
      compliance: {
        title: "Regulatory Compliance",
        items: [
          { standard: "PSD2", description: "Directive (EU) 2015/2366" },
          { standard: "RTS", description: "Delegated Regulation (EU) 2018/389" },
          { standard: "Art. 11", description: "Low Value Exemptions" },
          { standard: "Art. 18", description: "Transaction Risk Analysis" }
        ]
      }
    },

    // Advanced Crypto
    advancedCrypto: {
      title: "Advanced Cryptography",
      subtitle: "Complete cryptographic suite with AWS KMS integration",
      features: [
        {
          icon: "🔐",
          title: "AWS KMS Integration",
          description: "Non-extractable secrets managed by AWS Key Management Service, automatic rotation"
        },
        {
          icon: "🌟",
          title: "Celestial Entropy",
          description: "Unique entropy based on real-time astronomical positions (Swiss Ephemeris)"
        },
        {
          icon: "⏱️",
          title: "Timing-Safe",
          description: "All constant-time comparisons (150ms floor) to counter timing attacks"
        },
        {
          icon: "🔄",
          title: "Secret Rotation",
          description: "Automatic cryptographic secret rotation with zero-downtime"
        },
        {
          icon: "🛡️",
          title: "Post-Quantum Ready",
          description: "QSIG architecture prepared for NIST-PQC algorithms (CRYSTALS-Dilithium)"
        },
        {
          icon: "🌳",
          title: "Merkle Trees",
          description: "Resistant and verifiable signatures for immutable audit trail"
        }
      ]
    },

    // Mobile App
    mobileApp: {
      badge: "🚀 In Development",
      title: "HCS-U7 Mobile — Offline Cognitive Biometrics",
      subtitle: "iOS/Android mobile app for 100% offline cognitive authentication",
      description: "The HCS-U7 mobile app captures touch interactions (position, pressure, timing, trajectories) to generate a unique cognitive profile. Unlike competitors, everything runs locally: no server required, maximum privacy, <10ms latency.",
      features: [
        {
          icon: "📱",
          title: "Touch Cognitive Tests",
          description: "7 mini-games measuring reaction, memory, precision, scroll rhythm, coordination"
        },
        {
          icon: "🔒",
          title: "100% Offline",
          description: "Local capture, analysis and validation. Data never sent to a server."
        },
        {
          icon: "⚡",
          title: "Ultra-Fast",
          description: "Local <10ms validation vs 100-500ms online. 10-50X faster than competitors."
        },
        {
          icon: "🧠",
          title: "50+ Metrics",
          description: "Position, pressure, timing, speed, trajectory, hesitations, errors, scroll patterns"
        },
        {
          icon: "🎯",
          title: "Impossible to Fake",
          description: "Multi-dimensional unconscious behavior, no stealable password"
        },
        {
          icon: "🔄",
          title: "Natural Evolution",
          description: "Profile adapts with you: age, stress, context. Periodic re-calibration."
        }
      ],
      useCases: [
        {
          icon: "🤖",
          title: "Domestic Robots",
          description: "Cognitive recognition even without WiFi (Tesla Bot, Boston Dynamics)"
        },
        {
          icon: "🏦",
          title: "Banking Apps",
          description: "Authentication in airplane mode, continuous behavioral biometrics"
        },
        {
          icon: "🚗",
          title: "Autonomous Vehicles",
          description: "Secure startup even in dead zones (tunnels)"
        },
        {
          icon: "🌍",
          title: "Low Connectivity Areas",
          description: "Emerging markets, rural areas, intermittent connectivity"
        }
      ],
      techStack: {
        title: "Tech Stack",
        items: [
          { label: "Framework", value: "React Native + Expo" },
          { label: "Platforms", value: "iOS + Android" },
          { label: "Storage", value: "Keychain/Keystore (encrypted)" },
          { label: "Crypto", value: "Expo Crypto (AES-256-GCM)" },
          { label: "Sensors", value: "Touch, Gyro, Accelerometer" },
          { label: "Tests", value: "7 cognitive tests" }
        ]
      },
      competitors: {
        title: "Competitive Advantage",
        comparison: [
          { feature: "Works Offline", hcsu7: "✅", competitors: "❌ (Auth0, Okta, Veriff)" },
          { feature: "Latency", hcsu7: "<10ms", competitors: "100-500ms" },
          { feature: "Privacy", hcsu7: "Maximum (local)", competitors: "Cloud data" },
          { feature: "Bandwidth Cost", hcsu7: "$0", competitors: "$36K/yr/1M users" },
          { feature: "Cognitive Biometrics", hcsu7: "✅", competitors: "❌" }
        ]
      },
      status: "PoC planned Q1 2025, Beta Q2 2025, Launch Q3 2025"
    },

    // Documentation
    documentation: {
      title: "Complete Documentation",
      subtitle: "7+ technical documents and operational guides",
      documents: [
        { title: "Main README", description: "Complete backend architecture", icon: "📖" },
        { title: "KMS Integration", description: "AWS KMS integration for secrets", icon: "🔐" },
        { title: "Monitoring Guide", description: "UptimeRobot + Sentry + Analytics", icon: "📊" },
        { title: "Operational Runbook", description: "Ops procedures and troubleshooting", icon: "📋" },
        { title: "Disaster Recovery", description: "Business continuity plan", icon: "🚨" },
        { title: "Secrets Rotation", description: "Automatic key rotation", icon: "🔄" },
        { title: "Load Test Results", description: "k6 benchmarks (stress, spike)", icon: "⚡" },
        { title: "Security Audit", description: "Complete audit + hardening report", icon: "🔍" }
      ]
    },

    // Founder
    founder: {
      label: "FOUNDER",
      name: "Benjamin BARRERE",
      role: "Founder & Research Director",
      bio: [
        "15+ years of experience in software development, cybersecurity, artificial intelligence, and computational symbolic systems.",
        "Doctoral thesis in progress on cognitive authentication and human/AI differentiation.",
        "Inventor of patents FR2514274, FR2514546 and FR2515560.",
      ],
      location: "Alès, Occitanie, France",
    },

    // Footer
    footer: {
      tagline: "Cognitive authentication SaaS",
      madeIn: "Made in France",
      copyright: `© ${new Date().getFullYear()} IA SOLUTION · SIRET ${siteConfigBilingual.siret} · All rights reserved`,
      patentsLine: "Patents FR2514274, FR2514546 & FR2515560 filed with INPI · CC BY-NC-SA 4.0",
      columns: {
        research: {
          title: "Research",
          links: [
            { name: "Cognitive biometrics", href: "/research#biometrie" },
            { name: "Cryptography", href: "/research#cryptographie" },
            { name: "Generative AI", href: "/research#resistance-ia" },
            { name: "Quantum AI", href: "/research#post-quantum" },
          ],
        },
        product: {
          title: "Product",
          links: [
            { name: "HCS-U7", href: "/hcs-u7" },
            { name: "Documentation", href: "/technology" },
            { name: "Demo", href: "/contact" },
            { name: "Pricing", href: "/contact" },
          ],
        },
        contact: {
          title: "Contact",
          email: siteConfigBilingual.email,
          phone: siteConfigBilingual.phone,
          location: "Ales, France",
        },
      },
    },

    // Contact Page
    contactPage: {
      title: "Contact",
      subtitle: "A question? A project? Let's talk.",
      form: {
        fields: { name: "Name", email: "Email", subject: "Subject", message: "Message" },
        submit: "Send",
      },
    },

    // Demo Page
    demoPage: {
      title: "Request a demo",
      subtitle: "Discover HCS-U7 in action with a personalized demonstration",
      form: {
        fields: { name: "Full name", email: "Professional email", company: "Company", phone: "Phone (optional)", useCase: "Use case", message: "Message" },
        useCases: ["Banking / Fintech", "E-commerce", "Government / Public service", "Critical infrastructure", "API / SaaS Platform", "Other"],
        submit: "Send request",
        success: "Your request has been sent. We will contact you within 24 hours.",
      },
    },

    // Legal
    legalPage: {
      title: "Legal Notice",
    },
    privacyPage: {
      title: "Privacy Policy",
    },
  },
};
