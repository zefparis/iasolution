// Content for IA SOLUTION - Laboratoire de Recherche en IA Cognitive
// All text content externalized for easy translation and maintenance

import { patentsFrItems } from "@/lib/content-bilingual";

const patentNumbers = patentsFrItems.map((p) => p.number).join(", ");

function formatPatentList(numbers: string[]) {
  if (numbers.length <= 1) return numbers[0] ?? "";
  if (numbers.length === 2) return `${numbers[0]} & ${numbers[1]}`;
  return `${numbers.slice(0, -1).join(", ")} & ${numbers[numbers.length - 1]}`;
}

const patentNumbersDisplay = formatPatentList(patentsFrItems.map((p) => p.number));

export const siteConfig = {
  name: "IA SOLUTION",
  tagline: "Laboratoire de Recherche en IA Cognitive",
  url: "https://ia-solution.fr",
  email: "contact@ia-solution.fr",
  phone: "07 44 14 96 17",
  address: "IA-Solution, Ales, France",
  siret: "438 055 097",
  license: "CC BY-NC-SA 4.0",
};

export const navigation = {
  main: [
    { name: "Recherche", href: "/research" },
    { name: "HCS-U7", href: "/hcs-u7" },
    { name: "Technologie", href: "/technology" },
    { name: "Brevets", href: "/patents" },
  ],
  legal: [
    { name: "Mentions légales", href: "/legal" },
    { name: "Confidentialité", href: "/privacy" },
  ],
};

export const hero = {
  badge: "LABORATOIRE DE RECHERCHE EN IA COGNITIVE",
  title: "Nous explorons les frontières de l'intelligence artificielle",
  subtitle: "Biométrie cognitive · Cryptographie des croyances · IA générative · IA quantique",
  description: "IA SOLUTION développe des technologies de rupture à l'intersection de la cognition humaine, de la cryptographie avancée et de l'intelligence artificielle. Notre mission : créer des systèmes qui comprennent et protègent l'identité cognitive humaine.",
  cta1: "Découvrir nos recherches",
  cta1Href: "/research",
  cta2: "Explorer HCS-U7",
  cta2Href: "/hcs-u7",
};

// Research Axes Section
export const researchAxes = {
  label: "RECHERCHE",
  title: "Nos axes de recherche",
  description: "Travaux de recherche fondamentale et appliquée dans quatre domaines interconnectés. Chaque axe alimente les autres dans une approche systémique.",
  axes: [
    {
      id: "biometrie",
      icon: "Brain",
      title: "BIOMÉTRIE COGNITIVE",
      subtitle: "Identification de l'humain par ses patterns cognitifs uniques",
      description: "Recherche sur les marqueurs biologiques de la cognition humaine :",
      points: [
        "Effet Stroop (1935) — Interférence cognitive, latence incongruence",
        "N-Back (1958) — Mémoire de travail, capacité 7±2 éléments (Miller)",
        "Trail Making A/B (1938) — Flexibilité cognitive, switching cost",
        "Digit Span (1939) — Empan mnésique, rétention court terme",
        "Reaction Time (Donders 1868) — Variabilité temporelle 50-150ms",
        "RAN Vocal (1974) — Dénomination rapide, pauses, hésitations",
      ],
      algorithms: [
        "Score Combiner multi-signaux (pondération dynamique)",
        "Quick-Auth tokens (métriques comportementales temps réel)",
        "Rotating codes signés HMAC-SHA256 (anti-replay)",
      ],
      product: `HCS-U7 — ${patentsFrItems.length} brevets INPI (${patentNumbers})`,
      stats: "Précision : 98.9% | Détection IA : >99% | 383+ tests",
      gradient: "purple",
    },
    {
      id: "cryptographie",
      icon: "Star",
      title: "CRYPTOGRAPHIE DES CROYANCES",
      subtitle: "Numérisation et sécurisation des systèmes symboliques",
      description: "Recherche sur la formalisation mathématique des systèmes de croyances :",
      points: [
        "Fusion Western + BaZi — Opérateurs affines déterministes",
        "Swiss Ephemeris — Calculs astronomiques haute précision",
        "Celestial Entropy Layer — Entropie basée positions planétaires temps réel",
        "Format U7 — Structure 7 segments déterministe (QSIG, B3, Merkle)",
      ],
      algorithms: [
        "Nonces imprédictibles via positions Soleil/Lune/Planètes",
        "Signatures quantiques simulées (QSIG)",
        "Analyse biométrique B3 (binding cryptographique)",
      ],
      product: "Brevet : FR2514546 — Celestial Entropy Layer",
      stats: "Applications : Authentification, randomness generation, identity binding",
      gradient: "pink",
    },
    {
      id: "resistance-ia",
      icon: "Shield",
      title: "RÉSISTANCE À L'IA GÉNÉRATIVE",
      subtitle: "Contre-mesures aux modèles de langage et vision",
      description: "Recherche sur la détection et le blocage des IA génératives :",
      points: [
        "Analyse patterns temporels — IA répond <30ms, humain 50-150ms",
        "Détection régularité — IA >80% constante, humain variable",
        "Effet fatigue — Humain ralentit 20-50ms après 2min, IA stable",
        "Interférence Stroop — Humain +50ms items incongruents, IA instantanée",
      ],
      algorithms: [
        "GPT-4V (OpenAI) : détection >99%",
        "Claude 3 (Anthropic) : détection >99%",
        "Gemini Pro (Google) : détection >99%",
        "Bots automatisés : détection >99.6%",
      ],
      product: "Architecture Defense-in-Depth : 7 couches de protection empilées",
      stats: "Honeypots actifs (/.env, /admin, /wp-login) · DDoS L7 · PoW adaptatif",
      gradient: "blue",
    },
    {
      id: "post-quantum",
      icon: "Atom",
      title: "CRYPTOGRAPHIE POST-QUANTIQUE",
      subtitle: "Préparation à l'ère quantique",
      description: "Recherche exploratoire sur la sécurité post-quantique :",
      points: [
        "NIST-PQC — Intégration standards post-quantiques",
        "Lattice-based cryptography — Résistance Shor's algorithm",
        "Harvest Now, Decrypt Later — Protection données sensibles long terme",
        "QSIG — Signatures quantiques simulées (transition progressive)",
      ],
      algorithms: [
        "QSIG ready dans le format U7",
        "Merkle trees pour signatures résistantes",
        "HSM Integration (AWS KMS, Google KMS)",
        "Secret Rotation automatique",
      ],
      product: "Statut : Recherche active — Production-ready 2026",
      stats: "",
      gradient: "cyan",
    },
  ],
};

// HCS-U7 Product Section
export const productHCS = {
  label: "PRODUIT",
  title: "HCS-U7",
  subtitle: "Human Cognitive Signature",
  headline: "Le premier système d'authentification biométrique cognitive résistant aux intelligences artificielles génératives.",
  description: [
    "Issu de 3 ans de recherche en neurosciences cognitives et en cryptographie, HCS-U7 mesure des contraintes biologiques fondamentales que l'IA ne peut pas simuler.",
    "6 tests cognitifs validés scientifiquement depuis les années 1930.",
    "Architecture Defense-in-Depth à 7 couches.",
    "Conformité native PSD2/SCA.",
  ],
  cta1: "Documentation technique",
  cta1Href: "/technology",
  cta2: "Demander une démo",
  cta2Href: "/contact",
  stats: [
    { value: "98.9", suffix: "%", label: "Précision" },
    { value: ">99", suffix: "%", label: "Détection IA" },
    { value: String(patentsFrItems.length), suffix: "", label: "Brevets INPI" },
    { value: "383", suffix: "+", label: "Tests" },
  ],
};

// Architecture Section
export const architecture = {
  label: "ARCHITECTURE",
  title: "Defense-in-Depth",
  subtitle: "Pare-feu Cognitif Multi-Signaux — Niveau Sécurité 99.9/100",
  diagram: `
    ╔══════════════════════════════════════════════════════════════════════════════╗
    ║  🛡️  HCS-U7 COGNITIVE FIREWALL — Defense-in-Depth (34 Modules)              ║
    ║      Fastify 5 · TypeScript · 383+ Tests · 518 Attacks Blocked              ║
    ╠══════════════════════════════════════════════════════════════════════════════╣
    ║                                                                              ║
    ║   L7 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║   ┃  🌐 DDoS Protection — Cloudflare 100+ Gbps · Rate Limiting L7          ┃   ║
    ║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║                                     ▼                                        ║
    ║   L6 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║   ┃  🔥 WAF Multi-Encoding — OWASP Top 10 · SQLi · XSS · ML Bot Detection  ┃   ║
    ║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║                                     ▼                                        ║
    ║   L5 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║   ┃  🍯 Honeypots Actifs — /.env · /admin · /wp-login · Auto-ban 24h       ┃   ║
    ║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║                                     ▼                                        ║
    ║   L4 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║   ┃  🔐 Hieroglyphic Shield — AES-256-GCM · scrypt KDF · 30-40ms wrap      ┃   ║
    ║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║                                     ▼                                        ║
    ║   L3 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║   ┃  ⚡ Proof-of-Work Adaptatif — Argon2id/SHA256 · Difficulté dynamique   ┃   ║
    ║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║                                     ▼                                        ║
    ║   L2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║   ┃  🧠 Cognitive Firewall — 5 Signaux Fusion · Trust Graph · SCA PSD2     ┃   ║
    ║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║                                     ▼                                        ║
    ║   L1 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║   ┃  🎯 Biométrie Cognitive — 6 Tests Validés · AUC-ROC 0.994 · 98.9%      ┃   ║
    ║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
    ║                                     ▼                                        ║
    ║         ┌──────────────┬──────────────────┬──────────────┐                   ║
    ║         │   ✅ ALLOW   │   ⚠️ CHALLENGE   │   🚫 DENY    │                   ║
    ║         │   (exempt)   │    (step-up)     │   (block)    │                   ║
    ║         └──────────────┴──────────────────┴──────────────┘                   ║
    ╚══════════════════════════════════════════════════════════════════════════════╝`,
  modules: [
    {
      icon: "Lock",
      phase: "PHASE 1",
      title: "Auth & Secrets",
      points: [
        "Secret Rotation automatique",
        "HSM Integration AWS/Google KMS",
        "API Key MFA Actions critiques",
      ],
    },
    {
      icon: "Shield",
      phase: "PHASE 2",
      title: "Protection Avancée",
      points: [
        "Proof of Work Argon2id/SHA256",
        "DDoS Protection L7 Rate limiting adapt.",
        "Credential Stuffing Leak detection",
        "Honeypots actifs /.env /admin /wp-",
      ],
    },
    {
      icon: "Key",
      phase: "PHASE 3",
      title: "Chiffrement",
      points: [
        "Encryption at Rest AES-256-GCM",
        "Request Integrity Signatures HMAC",
        "TLS 1.3 strict Certificate pinning",
      ],
    },
    {
      icon: "Activity",
      phase: "PHASE 4",
      title: "Monitoring & Audit",
      points: [
        "SIEM Integration Export logs standard",
        "Audit Log immuable Actions admin",
        "IP Reputation VPN/Proxy/Tor detect",
        "Geo-velocity Impossible travel",
      ],
    },
    {
      icon: "Star",
      phase: "EXCLUSIVITÉ",
      title: "Celestial Entropy",
      points: [
        "Couche d'entropie unique basée sur les positions astronomiques temps réel",
        "☀️ Soleil · 🌙 Lune · 🪐 Planètes (Swiss Eph)",
      ],
    },
    {
      icon: "Zap",
      phase: "PERFORMANCE",
      title: "Stack Technique",
      points: [
        "Fastify 5 · TypeScript strict",
        "Zod validation · PostgreSQL + Prisma",
        "Redis cache · 383+ tests Vitest",
        "Latence P95 <50ms",
      ],
    },
  ],
  endpoints: [
    { method: "POST", path: "/api/verify-human", desc: "Vérification basique (legacy)" },
    { method: "POST", path: "/api/adaptive-verify", desc: "Décision adaptative multi-signaux" },
    { method: "POST", path: "/api/quick-auth", desc: "Token comportemental court terme" },
    { method: "POST", path: "/api/issue-rotating-code", desc: "Émission code rotatif signé" },
    { method: "POST", path: "/api/verify-rotating", desc: "Vérification anti-replay" },
    { method: "POST", path: "/api/sca/evaluate", desc: "Évaluation transaction (Art.11/18)" },
    { method: "GET", path: "/api/sca/config", desc: "Configuration tenant" },
    { method: "PATCH", path: "/api/sca/config", desc: "Mise à jour seuils TRA" },
    { method: "GET", path: "/api/sca/decisions", desc: "Historique audit" },
    { method: "GET", path: "/health", desc: "Santé service" },
  ],
};

// U7 Format Specification
export const u7Format = {
  label: "SPECIFICATION",
  title: "Format HCS-U7",
  subtitle: "Structure identitaire déterministe à 7 segments",
  example: "HCS-U7|V:8.0|ALG:QS|E:E|MOD:c25f0m75|COG:F42C22V9S10Cr16|...",
  segments: [
    { segment: "HCS-U7", description: "Protocol identifier" },
    { segment: "V:x.x", description: "Version (semantic)" },
    { segment: "ALG:QS", description: "Algorithm (QS = Quantum-Safe)" },
    { segment: "E:E", description: "Encoding (E = Extended)" },
    { segment: "MOD:...", description: "Modality flags (cognitive/form ratio)" },
    { segment: "COG:...", description: "Cognitive axes (F/C/V/S/Cr normalized vectors)" },
    { segment: "QSIG:...", description: "Quantum-safe signature (post-quantum ready)" },
    { segment: "B3:...", description: "Biometric binding hash (identity anchor)" },
  ],
  properties: [
    "Déterministe — même input → même output (testable)",
    "Vérifiable — signature cryptographique intégrée",
    "Extensible — segments additionnels possibles",
    "Post-quantum — NIST-PQC ready (QSIG)",
  ],
  algorithms: [
    {
      name: "QSIG",
      title: "Quantum-Safe Signature",
      description: "Signature résistante aux ordinateurs quantiques. Préparation NIST-PQC standards. Lattice-based crypto.",
    },
    {
      name: "B3",
      title: "Biometric Binding",
      description: "Liaison cryptographique entre identité et métriques biométriques cognitives mesurées. HMAC-SHA256 binding.",
    },
    {
      name: "MERKLE",
      title: "Tree Signatures",
      description: "Authentification par arbre de hachage pour signatures résistantes et vérifiables. One-time signatures.",
    },
  ],
  fusion: {
    title: "AFFINE FUSION OPERATORS",
    description: "Le système fusionne deux traditions symboliques via des opérateurs mathématiques déterministes :",
    mappings: [
      { western: "Sun sign", bazi: "Day Master", result: "Primary Element" },
      { western: "Moon sign", bazi: "Hour Branch", result: "Emotional Mode" },
      { western: "Ascendant", bazi: "Month Branch", result: "Social Mask" },
      { western: "Aspects", bazi: "Clashes/Combinations", result: "Tension Vectors" },
    ],
    notes: [
      "Swiss Ephemeris pour calculs astronomiques haute précision",
      "Opérateurs affines pour combinaison déterministe",
      "Output : vecteurs normalisés dans l'espace cognitif",
    ],
  },
};

// Tech Stack Section
export const techStack = {
  label: "TECHNOLOGIES",
  title: "Notre stack technologique",
  subtitle: "Une architecture moderne, sécurisée et performante.",
  stacks: [
    {
      icon: "Code",
      title: "Backend",
      description: "Fastify 5, TypeScript, Zod validation, 383+ tests Vitest.",
    },
    {
      icon: "Database",
      title: "Persistence",
      description: "PostgreSQL, Prisma ORM, Redis cache, rate limiting distribué.",
    },
    {
      icon: "Lock",
      title: "Cryptographie",
      description: "HMAC-SHA256, bcrypt, JWT, Celestial Entropy, NIST-PQC ready.",
    },
    {
      icon: "Shield",
      title: "Sécurité Enterprise",
      description: "WAF multi-encodings, DDoS L7, Honeypots, Credential Stuffing.",
    },
    {
      icon: "Brain",
      title: "Moteur Cognitif",
      description: "6 tests neurosciences, Score Combiner adaptatif, Quick-Auth tokens.",
    },
    {
      icon: "Star",
      title: "Innovation",
      description: "Celestial Entropy Layer — Entropie astronomique temps réel.",
    },
  ],
};

// Publications Section
export const publications = {
  label: "PUBLICATIONS",
  title: "Travaux de recherche",
  subtitle: "Contributions académiques et documentation technique",
  items: [
    {
      icon: "FileText",
      type: "THÈSE DOCTORALE",
      title: "Authentification cognitive et différenciation humain/IA",
      chapters: [
        "Introduction générale",
        "Celestial Entropy Layer",
        "Tests cognitifs validés",
        "Architecture Defense-in-Depth",
      ],
      status: "En finalisation",
      cta: "Aperçu",
    },
    {
      icon: "Book",
      type: "DOCUMENTATION TECHNIQUE",
      title: "HCS-U7 Specs & Patent Corpus",
      chapters: [
        "Core specification (v3.2 hardened)",
        "Format U7 (7 segments)",
        "Algorithmes (QSIG, B3, Merkle)",
        "Fusion Western + BaZi",
        "Protocol multi-agent",
        "Test vectors & examples",
      ],
      status: "Classification : Propriétaire",
      cta: "Documentation",
    },
    {
      icon: "Microscope",
      type: "RÉFÉRENCES SCIENTIFIQUES",
      title: "Tests cognitifs fondamentaux",
      chapters: [
        "Stroop, J.R. (1935) — Interference",
        "Kirchner (1958) — N-Back task",
        "Reitan (1958) — Trail Making",
        "Wechsler (1939) — Digit Span",
        "Donders (1868) — Reaction time",
        "Denckla & Rudel (1974) — RAN",
        "ETH Zurich (2024) — CAPTCHA bypass 94%",
      ],
      status: "",
      cta: "Bibliographie",
    },
    {
      icon: "BarChart",
      type: "BENCHMARKS & VALIDATION",
      title: "Résultats validés",
      chapters: [
        "Précision globale : 98.9%",
        "True Negative Rate : 99.6%",
        "False Positive Rate : 2.2%",
        "AUC-ROC : 0.994",
        "Détection GPT-4V : >99%",
        "Détection Claude 3 : >99%",
        "Latence P95 : <50ms",
        "Tests unitaires : 230+",
      ],
      status: "",
      cta: "Rapport complet",
    },
  ],
};

// CTA Section
export const ctaSection = {
  label: "COLLABORATION",
  title: "Travaillons ensemble",
  subtitle: "Partenariats de recherche, licences technologiques, projets d'intégration — discutons de votre besoin.",
  options: [
    {
      icon: "Microscope",
      title: "Recherche",
      points: ["Collaboration R&D", "Projets conjoints", "Co-publication"],
    },
    {
      icon: "Building",
      title: "Enterprise",
      points: ["Licence commerciale", "Intégration API", "Support dédié"],
    },
    {
      icon: "GraduationCap",
      title: "Académique",
      points: ["Accès recherche", "Données anonymisées", "Co-supervision thèse"],
    },
  ],
  cta1: "Nous contacter",
  cta1Href: "/contact",
  cta2: "Demander une démo HCS-U7",
  cta2Href: "/contact",
};

export const patents = {
  label: "BREVETS",
  title: "Propriété Intellectuelle",
  subtitle: `${patentsFrItems.length} brevets déposés à l'INPI — Protection 20 ans`,
  items: [
    {
      number: "FR2514274",
      date: "Déposé le 30/11/2025",
      title: "Système d'authentification biométrique cognitive multi-couches résistant aux intelligences artificielles génératives",
      claims: 10,
      figures: 1,
    },
    {
      number: "FR2514546",
      date: "Déposé le 04/12/2025",
      title: "Système de sécurité cognitive multi-signaux intégrant biométrie, pare-feu comportemental, entropie astronomique et moteur SCA adaptatif",
      claims: 15,
      figures: 3,
    },
    {
      number: "FR2515560",
      date: "Déposé le 17/12/2025",
      title: "Demande de brevet — Détails en cours de publication",
      claims: 0,
      figures: 0,
    },
  ],
  disclaimer: "Conformément à l'article L. 612-10 du Code de la propriété intellectuelle, le Ministre chargé de la Défense a été habilité à prendre connaissance des demandes à titre confidentiel.",
};

export const founder = {
  label: "FONDATEUR",
  name: "Benjamin BARRERE",
  role: "Fondateur & Directeur de Recherche",
  bio: [
    "15+ années d'expérience en développement logiciel, cybersécurité, intelligence artificielle et systèmes symboliques computationnels.",
    "Thèse doctorale en cours sur l'authentification cognitive et la différenciation humain/IA.",
    `Inventeur des brevets ${patentNumbers}.`,
  ],
  location: "Alès, Occitanie, France",
};

export const footer = {
  tagline: "Laboratoire de Recherche en IA Cognitive",
  madeIn: "Made in France",
  copyright: `© ${new Date().getFullYear()} IA SOLUTION · SIRET ${siteConfig.siret} · Tous droits réservés`,
  patentsLine: `Brevets ${patentNumbersDisplay} déposés INPI · CC BY-NC-SA 4.0`,
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
      email: siteConfig.email,
      phone: siteConfig.phone,
      location: "Ales, France",
    },
  },
};

// Solution Section
export const solution = {
  title: "Notre solution : HCS-U7",
  headline: "Mesurer ce que l'IA ne peut pas simuler :\nles contraintes neurobiologiques du cerveau humain.",
  content: `HCS-U7 exploite 6 tests cognitifs validés scientifiquement depuis les années 1930. Chaque test mesure une limitation fondamentale du cerveau humain — temps de réaction, interférence cognitive, capacité de mémoire de travail — que l'IA ne peut pas reproduire authentiquement.

Le résultat : une précision de 98.9% avec un taux de détection des IA génératives supérieur à 99%.`,
};

// Technology Section (cognitive tests)
export const technology = {
  title: "Tests Cognitifs Validés",
  subtitle: "6 tests issus de décennies de recherche en neurosciences cognitives",
  tests: [
    {
      icon: "Brain",
      name: "Test de Stroop",
      year: "1935",
      description: "Mesure l'interférence cognitive. L'humain ralentit de 100-200ms sur les items incongruents, l'IA répond instantanément.",
    },
    {
      icon: "RefreshCw",
      name: "N-Back",
      year: "1958",
      description: "Teste la mémoire de travail (7±2 éléments). Performance humaine se dégrade au-delà de 3-back, l'IA reste constante.",
    },
    {
      icon: "Shuffle",
      name: "Trail Making",
      year: "1938",
      description: "Mesure le coût de switching cognitif (200-500ms). L'IA n'a pas de coût de switching mesurable.",
    },
    {
      icon: "Hash",
      name: "Digit Span",
      year: "1939",
      description: "Évalue l'empan mnésique et la rétention court terme. Patterns d'erreurs caractéristiques chez l'humain.",
    },
    {
      icon: "Zap",
      name: "Reaction Time",
      year: "1868",
      description: "Variabilité temporelle 50-150ms chez l'humain. L'IA répond en <30ms avec régularité >80%.",
    },
    {
      icon: "Mic",
      name: "RAN Vocal",
      year: "1974",
      description: "Dénomination rapide avec analyse des pauses et hésitations. Patterns vocaux impossibles à simuler.",
    },
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
};

// Use Cases Section
export const useCases = {
  title: "Cas d'usage",
  subtitle: "HCS-U7 protège les points d'entrée critiques contre les bots et IA génératives",
  cases: [
    {
      icon: "Building2",
      title: "Banque & Fintech",
      description: "Authentification forte PSD2/SCA, protection des virements, détection fraude en temps réel.",
    },
    {
      icon: "ShoppingCart",
      title: "E-commerce",
      description: "Protection checkout, anti-scalping, détection comptes frauduleux et abus promotions.",
    },
    {
      icon: "Landmark",
      title: "Gouvernement",
      description: "Sécurisation services publics, protection identité numérique, conformité eIDAS.",
    },
    {
      icon: "Plug",
      title: "API & SaaS",
      description: "Protection endpoints sensibles, rate limiting intelligent, détection abus automatisés.",
    },
    {
      icon: "Lock",
      title: "Infrastructure critique",
      description: "Accès systèmes SCADA/ICS, authentification opérateurs, audit trail complet.",
    },
    {
      icon: "Bot",
      title: "Anti-bot avancé",
      description: "Remplacement CAPTCHA, protection formulaires, détection scraping et credential stuffing.",
    },
  ],
};

// Problem Section
export const problem = {
  title: "Le problème : les CAPTCHA sont obsolètes",
  content: `En 2024, les chercheurs de l'ETH Zurich ont démontré que **les IA génératives contournent 94% des CAPTCHA** traditionnels. GPT-4V, Claude 3 et Gemini Pro résolvent instantanément les tests visuels conçus pour bloquer les bots.

Les systèmes d'authentification actuels reposent sur des défis que l'IA maîtrise désormais mieux que les humains : reconnaissance d'images, lecture de texte déformé, puzzles logiques.

**Le paradigme doit changer.** Au lieu de tester ce que l'IA fait bien, nous devons mesurer ce qu'elle ne peut pas simuler : les contraintes neurobiologiques fondamentales du cerveau humain.`,
  source: "Source : ETH Zurich, 2024 — « Breaking CAPTCHA with Vision-Language Models »",
  stats: [
    {
      value: "94%",
      label: "des CAPTCHA contournés par l'IA",
      source: "ETH Zurich, 2024",
    },
    {
      value: "<30ms",
      label: "temps de réponse des IA génératives",
      source: "Benchmark interne HCS-U7",
    },
    {
      value: "$5.4B",
      label: "pertes annuelles dues aux bots",
      source: "Imperva Bad Bot Report, 2024",
    },
  ],
};

// Performance Section
export const performance = {
  title: "Performance & Résultats",
  subtitle: "Métriques validées sur 383+ tests unitaires et benchmarks réels",
  metrics: [
    { value: 98.9, suffix: "%", label: "Précision globale", sublabel: "True Positive Rate" },
    { value: 99.6, suffix: "%", label: "Détection bots", sublabel: "True Negative Rate" },
    { value: 99, prefix: ">", suffix: "%", label: "Détection IA", sublabel: "GPT-4V, Claude 3, Gemini" },
    { value: 50, prefix: "<", suffix: "ms", label: "Latence P95", sublabel: "Temps de réponse" },
    { value: 383, suffix: "+", label: "Tests unitaires", sublabel: "Vitest coverage" },
    { value: patentsFrItems.length, suffix: "", label: "Brevets INPI", sublabel: patentNumbers },
  ],
};

// SEO Metadata
export const seo = {
  title: "HCS-U7 — Authentification Cognitive Anti-IA | IA Solution",
  description: `Première solution mondiale d'authentification biométrique cognitive résistante aux IA génératives. ${patentsFrItems.length} brevets INPI. 98.9% précision. Made in France.`,
  keywords: "authentification cognitive, anti-IA, CAPTCHA, biométrie, brevets INPI, PSD2, cybersécurité, HCS-U7",
  ogImage: "/og-image.png",
};

// Technology page detailed content
export const technologyPage = {
  hero: {
    title: "Technologie HCS-U7",
    subtitle: "Une approche scientifique de l'authentification humaine",
  },
  cognitiveTests: {
    title: "Tests Cognitifs",
    description: "Chaque test exploite une limitation fondamentale du cerveau humain que l'IA ne peut pas simuler authentiquement.",
    tests: [
      {
        name: "Test de Stroop",
        year: 1935,
        author: "John Ridley Stroop",
        principle: "L'interférence cognitive se produit quand le cerveau doit traiter des informations conflictuelles. Lire le mot 'ROUGE' écrit en bleu crée un délai mesurable.",
        humanBehavior: "Ralentissement de 100-200ms sur les items incongruents",
        aiBehavior: "Temps de réponse constant, pas d'effet d'interférence",
        detection: "Analyse de la variance temporelle et du pattern d'erreurs",
      },
      {
        name: "N-Back",
        year: 1958,
        author: "Wayne Kirchner",
        principle: "La mémoire de travail humaine est limitée à 7±2 éléments (Miller, 1956). Au-delà, les performances chutent de manière prévisible.",
        humanBehavior: "Dégradation progressive au-delà de 3-back",
        aiBehavior: "Performance constante quelle que soit la charge",
        detection: "Courbe de dégradation caractéristique",
      },
      {
        name: "Trail Making",
        year: 1938,
        author: "US Army",
        principle: "Le switching cognitif entre deux tâches (lettres/chiffres) a un coût temporel incompressible chez l'humain.",
        humanBehavior: "Coût de switching de 200-500ms",
        aiBehavior: "Pas de coût de switching mesurable",
        detection: "Ratio temps partie B / partie A",
      },
    ],
  },
  architecture: {
    title: "Architecture Multi-Couches",
    description: "Defense-in-depth : chaque couche renforce les autres",
    layers: [
      {
        name: "Cloudflare WAF",
        description: "Filtrage des requêtes malveillantes au niveau applicatif",
      },
      {
        name: "Rate Limiting",
        description: "Protection contre les attaques par force brute et DDoS",
      },
      {
        name: "Device Fingerprinting",
        description: "Identification unique des appareils via 50+ signaux",
      },
      {
        name: "Behavioral Analysis",
        description: "Analyse des patterns de navigation et d'interaction",
      },
      {
        name: "HCS-U7 Core",
        description: "Tests cognitifs adaptatifs avec scoring ML",
      },
      {
        name: "Trust Graph",
        description: "Détection des réseaux de fraude par analyse de graphe",
      },
      {
        name: "Celestial Entropy",
        description: "Entropie cryptographique via positions astronomiques",
      },
    ],
  },
  psd2: {
    title: "Conformité PSD2/SCA",
    description: "HCS-U7 est conçu pour la conformité réglementaire européenne",
    exemptions: [
      {
        article: "Article 11",
        title: "Exemption TRA",
        description: "Transaction Risk Analysis permet d'exempter les transactions à faible risque",
      },
      {
        article: "Article 18",
        title: "Exemption comportementale",
        description: "L'analyse comportementale peut remplacer l'authentification forte",
      },
    ],
  },
};

// Patents page content
export const patentsPage = {
  hero: {
    title: "Brevets INPI",
    subtitle: "Protection de la propriété intellectuelle",
  },
  patents: [
    {
      number: "FR2514274",
      depositDate: "30 novembre 2025",
      title: "Système d'authentification biométrique cognitive multi-couches résistant aux intelligences artificielles génératives",
      abstract: "L'invention concerne un système et un procédé d'authentification biométrique cognitive exploitant les contraintes neurobiologiques fondamentales du cerveau humain pour différencier un utilisateur humain d'une intelligence artificielle générative.",
      claims: [
        "Système d'authentification comprenant une batterie de tests cognitifs adaptatifs",
        "Procédé de scoring multi-factoriel combinant temps de réaction, patterns d'erreurs et variabilité",
        "Architecture defense-in-depth avec 7 couches de protection",
        "Module d'analyse comportementale en temps réel",
        "Système de détection des réseaux de fraude par graphe",
      ],
      figures: 1,
      status: "En cours d'examen",
    },
    {
      number: "FR2514546",
      depositDate: "4 décembre 2025",
      title: "Système de génération d'entropie cryptographique par calculs astronomiques en temps réel (Celestial Entropy Layer)",
      abstract: "L'invention concerne un système de génération d'entropie cryptographique exploitant les positions et mouvements des corps célestes calculés en temps réel pour produire des nombres aléatoires de haute qualité.",
      claims: [
        "Système de calcul des éphémérides astronomiques en temps réel",
        "Procédé de génération d'entropie par combinaison de positions planétaires",
        "Module de vérification de l'entropie par tests statistiques NIST",
        "Architecture de signature post-quantique QSIG/B3",
        "Système de synchronisation temporelle par pulsars",
      ],
      figures: 3,
      status: "En cours d'examen",
    },
    {
      number: "FR2515560",
      depositDate: "17 décembre 2025",
      title: "Demande de brevet — Détails en cours de publication",
      abstract: "Demande de brevet déposée à l'INPI. Détails en cours de publication.",
      claims: [],
      figures: 0,
      status: "En cours d'examen",
    },
  ],
  timeline: [
    { date: "Novembre 2025", event: "Dépôt brevet FR2514274" },
    { date: "Décembre 2025", event: "Dépôt brevet FR2514546" },
    { date: "Décembre 2025", event: "Dépôt brevet FR2515560" },
    { date: "2026", event: "Examen INPI (prévu)" },
    { date: "2026-2027", event: "Publication (prévu)" },
  ],
  applications: {
    title: "Applications couvertes (Revendication 14)",
    items: [
      "Authentification bancaire et financière",
      "Protection des services gouvernementaux",
      "Sécurisation des infrastructures critiques",
      "E-commerce et marketplaces",
      "APIs et services cloud",
      "Robotique et IoT",
    ],
  },
};

// Demo page content
export const demoPage = {
  title: "Demander une démo",
  subtitle: "Découvrez HCS-U7 en action avec une démonstration personnalisée",
  form: {
    fields: {
      name: "Nom complet",
      email: "Email professionnel",
      company: "Entreprise",
      phone: "Téléphone (optionnel)",
      useCase: "Cas d'usage",
      message: "Message",
    },
    useCases: [
      "Banque / Fintech",
      "E-commerce",
      "Gouvernement / Service public",
      "Infrastructure critique",
      "API / Plateforme SaaS",
      "Autre",
    ],
    submit: "Envoyer la demande",
    success: "Votre demande a été envoyée. Nous vous recontacterons sous 24h.",
  },
};

// Contact page content
export const contactPage = {
  title: "Contact",
  subtitle: "Une question ? Un projet ? Parlons-en.",
  info: {
    email: siteConfig.email,
    phone: siteConfig.phone,
    address: siteConfig.address,
  },
  form: {
    fields: {
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
    },
    submit: "Envoyer",
  },
};

// Legal pages
export const legalPage = {
  title: "Mentions légales",
  content: `
## Éditeur du site

**IA SOLUTION**
Ales, France

SIRET : 438 055 097
Email : contact@ia-solution.fr
Téléphone : 07 44 14 96 17

## Directeur de la publication

Benjamin Barrere

## Hébergement

Vercel Inc.
440 N Barranca Ave #4133
Covina, CA 91723
United States

## Propriété intellectuelle

L'ensemble du contenu de ce site (textes, images, logos, architecture) est protégé par le droit d'auteur et le droit des marques.

Les brevets FR2514274 et FR2514546 sont déposés à l'INPI.

Le brevet FR2515560 est également déposé à l'INPI.

Toute reproduction, même partielle, est interdite sans autorisation préalable.

## Données personnelles

Voir notre [politique de confidentialité](/privacy).
`,
};

export const privacyPage = {
  title: "Politique de confidentialité",
  content: `
## Collecte des données

Nous collectons uniquement les données nécessaires au traitement de vos demandes :
- Nom et prénom
- Adresse email
- Numéro de téléphone (optionnel)
- Nom de l'entreprise
- Message

## Utilisation des données

Vos données sont utilisées exclusivement pour :
- Répondre à vos demandes de contact
- Vous envoyer des informations sur nos services (avec votre consentement)
- Améliorer notre site et nos services

## Conservation des données

Vos données sont conservées pendant 3 ans à compter de votre dernier contact.

## Vos droits

Conformément au RGPD, vous disposez des droits suivants :
- Droit d'accès
- Droit de rectification
- Droit à l'effacement
- Droit à la portabilité
- Droit d'opposition

Pour exercer ces droits : contact@ia-solution.fr

## Cookies

Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.
Aucun cookie de tracking ou publicitaire n'est utilisé.

## Contact DPO

Pour toute question relative à vos données personnelles :
contact@ia-solution.fr
`,
};
