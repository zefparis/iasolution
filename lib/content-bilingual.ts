// Bilingual content for IA SOLUTION - HCS-U7
// French (fr) and English (en) translations

export type Language = "fr" | "en";

export const siteConfigBilingual = {
  name: "IA SOLUTION",
  url: "https://ia-solution.fr",
  email: "contact@ia-solution.fr",
  phone: "07 44 14 96 17",
  address: "2 rue du Sabotier, 30350 Saint-Bénézet, France",
  siret: "438 055 097",
  license: "CC BY-NC-SA 4.0",
};

export function getContentByLanguage(lang: Language) {
  return content[lang];
}

const content = {
  fr: {
    // Site config
    tagline: "Laboratoire de Recherche en IA Cognitive",
    
    // Navigation
    navigation: {
      main: [
        { name: "Recherche", href: "/research" },
        { name: "HCS-U7", href: "/hcs-u7" },
        { name: "Infrastructure", href: "/infrastructure" },
        { name: "Mobile", href: "/mobile", badge: "🆕" },
        { name: "Technologie", href: "/technology" },
        { name: "Brevets", href: "/patents" },
      ],
      legal: [
        { name: "Mentions légales", href: "/legal" },
        { name: "Confidentialité", href: "/privacy" },
      ],
    },

    // Hero Section
    hero: {
      badge: "LABORATOIRE DE RECHERCHE EN IA COGNITIVE",
      title: "Nous explorons les frontières de l'intelligence artificielle",
      subtitle: "Biométrie cognitive · Cryptographie des croyances · IA générative · IA quantique",
      description: "IA SOLUTION développe des technologies de rupture à l'intersection de la cognition humaine, de la cryptographie avancée et de l'intelligence artificielle. Notre mission : créer des systèmes qui comprennent et protègent l'identité cognitive humaine.",
      cta1: "Découvrir nos recherches",
      cta1Href: "/research",
      cta2: "Explorer HCS-U7",
      cta2Href: "/hcs-u7",
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
      title: "Cas d'usage",
      subtitle: "HCS-U7 protège les points d'entrée critiques contre les bots et IA génératives",
      cases: [
        { icon: "Building2", title: "Banque & Fintech", description: "Authentification forte PSD2/SCA, protection des virements, détection fraude en temps réel." },
        { icon: "ShoppingCart", title: "E-commerce", description: "Protection checkout, anti-scalping, détection comptes frauduleux et abus promotions." },
        { icon: "Landmark", title: "Gouvernement", description: "Sécurisation services publics, protection identité numérique, conformité eIDAS." },
        { icon: "Plug", title: "API & SaaS", description: "Protection endpoints sensibles, rate limiting intelligent, détection abus automatisés." },
        { icon: "Lock", title: "Infrastructure critique", description: "Accès systèmes SCADA/ICS, authentification opérateurs, audit trail complet." },
        { icon: "Bot", title: "Anti-bot avancé", description: "Remplacement CAPTCHA, protection formulaires, détection scraping et credential stuffing." },
      ],
    },

    // Performance Section
    performance: {
      title: "Performances Validées",
      subtitle: "Infrastructure Battle-Tested — 518 attaques bloquées, 0 breach",
      metrics: [
        { value: "99.9", suffix: "/100", label: "Score Sécurité", sublabel: "Defense-in-Depth (7 couches)", badge: "🏆 Enterprise-Grade" },
        { value: 383, suffix: "+", label: "Tests", sublabel: "Unitaires + E2E + Load (k6)", badge: "✅ High Coverage" },
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
          product: "HCS-U7 — 2 brevets INPI",
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
          subtitle: "Préparation à l'ère quantique",
          description: "Recherche exploratoire sur la sécurité post-quantique :",
          points: ["NIST-PQC", "Lattice-based crypto", "QSIG"],
          algorithms: ["QSIG ready", "Merkle trees", "HSM Integration"],
          product: "Production-ready 2026",
          stats: "",
          gradient: "cyan",
        },
      ],
    },

    // Product HCS
    productHCS: {
      label: "PRODUIT",
      title: "HCS-U7",
      subtitle: "Human Cognitive Signature",
      headline: "Le premier système d'authentification biométrique cognitive résistant aux intelligences artificielles génératives.",
      description: [
        "Issu de 3 ans de recherche en neurosciences cognitives et en cryptographie.",
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
        { value: "2", suffix: "", label: "Brevets INPI" },
        { value: "230", suffix: "+", label: "Tests" },
      ],
    },

    // Architecture
    architecture: {
      label: "ARCHITECTURE",
      title: "Defense-in-Depth",
      subtitle: "Pare-feu Cognitif Multi-Signaux — Niveau Sécurité 99.9/100",
      diagram: `┌─────────────────────────────────────────────────────────────────────────────┐
│  HCS-U7 COGNITIVE FIREWALL                                                  │
│  Backend Fastify 5 · TypeScript · 230+ Tests                                │
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
        { icon: "Code", title: "Backend", description: "Fastify 5, TypeScript, Zod validation, 230+ tests Vitest." },
        { icon: "Database", title: "Persistence", description: "PostgreSQL, Prisma ORM, Redis cache, rate limiting distribué." },
        { icon: "Lock", title: "Cryptographie", description: "HMAC-SHA256, bcrypt, JWT, Celestial Entropy, NIST-PQC ready." },
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
        { icon: "BarChart", type: "BENCHMARKS & VALIDATION", title: "Résultats validés", chapters: ["Précision : 98.9%", "Détection IA : >99%", "Latence P95 : <50ms", "Tests : 230+"], status: "", cta: "Rapport complet" },
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
      subtitle: "2 brevets déposés à l'INPI — Protection 20 ans",
      items: [
        { number: "FR2514274", date: "Déposé le 30/11/2025", title: "Système d'authentification biométrique cognitive multi-couches résistant aux IA génératives", claims: 10, figures: 1 },
        { number: "FR2514546", date: "Déposé le 04/12/2025", title: "Système de sécurité cognitive multi-signaux intégrant biométrie, pare-feu comportemental, entropie astronomique et moteur SCA adaptatif", claims: 15, figures: 3 },
      ],
      disclaimer: "Conformément à l'article L. 612-10 du Code de la propriété intellectuelle, le Ministre chargé de la Défense a été habilité à prendre connaissance des demandes à titre confidentiel.",
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
      subtitle: "7 couches de sécurité enterprise-grade",
      layers: [
        {
          level: "L7",
          name: "Protection DDoS",
          description: "Rate limiting adaptatif L7, détection de patterns d'attaque, Cloudflare 100+ Gbps",
          modules: ["DDoS Protection L7", "Rate Limiting Distribué", "Cloudflare Edge"]
        },
        {
          level: "L6",
          name: "WAF Multi-Encoding",
          description: "Détection SQLi, XSS, Path Traversal, LDAP Injection avec décodage multi-passes",
          modules: ["WAF OWASP Top 10", "Bot Detection ML", "Credential Stuffing"]
        },
        {
          level: "L5",
          name: "Honeypots Actifs",
          description: "Endpoints leurres (/.env, /admin, /wp-login) et champs invisibles, ban 24h automatique",
          modules: ["Honeypots Endpoints", "Hidden Fields", "Auto-ban 24h"]
        },
        {
          level: "L4",
          name: "Hieroglyphic Shield",
          description: "Protection transparente AES-256-GCM des codes HCS-U7 (wrap/unwrap 30-40ms)",
          modules: ["AES-256-GCM", "scrypt KDF", "Auto wrap/unwrap"]
        },
        {
          level: "L3",
          name: "Proof-of-Work Adaptatif",
          description: "Challenge computationnel Argon2id/SHA256 pour clients suspects, difficulté ajustable",
          modules: ["Argon2id Challenge", "Difficulté Adaptative", "Cache Redis"]
        },
        {
          level: "L2",
          name: "Cognitive Firewall",
          description: "Fusion 5 signaux : HCS Core, Device Risk, Network Risk, Behavior Anomaly, Trust Graph",
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
        "Inventeur des brevets FR2514274 et FR2514546.",
      ],
      location: "Alès, Occitanie, France",
    },

    // Footer
    footer: {
      tagline: "Laboratoire de Recherche en IA Cognitive",
      madeIn: "Made in France 🇫🇷",
      copyright: `© ${new Date().getFullYear()} IA SOLUTION · SIRET ${siteConfigBilingual.siret} · Tous droits réservés`,
      patentsLine: "Brevets FR2514274 & FR2514546 déposés INPI · CC BY-NC-SA 4.0",
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
          location: "Saint-Bénézet, France",
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
    tagline: "Cognitive AI Research Laboratory",
    
    // Navigation
    navigation: {
      main: [
        { name: "Research", href: "/research" },
        { name: "HCS-U7", href: "/hcs-u7" },
        { name: "Infrastructure", href: "/infrastructure" },
        { name: "Mobile", href: "/mobile", badge: "🆕" },
        { name: "Technology", href: "/technology" },
        { name: "Patents", href: "/patents" },
      ],
      legal: [
        { name: "Legal Notice", href: "/legal" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },

    // Hero Section
    hero: {
      badge: "COGNITIVE AI RESEARCH LABORATORY",
      title: "We explore the frontiers of artificial intelligence",
      subtitle: "Cognitive biometrics · Belief cryptography · Generative AI · Quantum AI",
      description: "IA SOLUTION develops breakthrough technologies at the intersection of human cognition, advanced cryptography, and artificial intelligence. Our mission: create systems that understand and protect human cognitive identity.",
      cta1: "Discover our research",
      cta1Href: "/research",
      cta2: "Explore HCS-U7",
      cta2Href: "/hcs-u7",
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
      title: "Use Cases",
      subtitle: "HCS-U7 protects critical entry points against bots and generative AI",
      cases: [
        { icon: "Building2", title: "Banking & Fintech", description: "Strong PSD2/SCA authentication, wire transfer protection, real-time fraud detection." },
        { icon: "ShoppingCart", title: "E-commerce", description: "Checkout protection, anti-scalping, fraudulent account and promotion abuse detection." },
        { icon: "Landmark", title: "Government", description: "Public service security, digital identity protection, eIDAS compliance." },
        { icon: "Plug", title: "API & SaaS", description: "Sensitive endpoint protection, intelligent rate limiting, automated abuse detection." },
        { icon: "Lock", title: "Critical Infrastructure", description: "SCADA/ICS system access, operator authentication, complete audit trail." },
        { icon: "Bot", title: "Advanced Anti-bot", description: "CAPTCHA replacement, form protection, scraping and credential stuffing detection." },
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
          product: "HCS-U7 — 2 INPI patents",
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
          subtitle: "Preparing for the quantum era",
          description: "Exploratory research on post-quantum security:",
          points: ["NIST-PQC", "Lattice-based crypto", "QSIG"],
          algorithms: ["QSIG ready", "Merkle trees", "HSM Integration"],
          product: "Production-ready 2026",
          stats: "",
          gradient: "cyan",
        },
      ],
    },

    // Product HCS
    productHCS: {
      label: "PRODUCT",
      title: "HCS-U7",
      subtitle: "Human Cognitive Signature",
      headline: "The first cognitive biometric authentication system resistant to generative artificial intelligence.",
      description: [
        "Result of 3 years of research in cognitive neuroscience and cryptography.",
        "6 scientifically validated cognitive tests since the 1930s.",
        "7-layer Defense-in-Depth architecture.",
        "Native PSD2/SCA compliance.",
      ],
      cta1: "Technical documentation",
      cta1Href: "/technology",
      cta2: "Request a demo",
      cta2Href: "/contact",
      stats: [
        { value: "98.9", suffix: "%", label: "Accuracy" },
        { value: ">99", suffix: "%", label: "AI Detection" },
        { value: "2", suffix: "", label: "INPI Patents" },
        { value: "230", suffix: "+", label: "Tests" },
      ],
    },

    // Architecture
    architecture: {
      label: "ARCHITECTURE",
      title: "Defense-in-Depth",
      subtitle: "Multi-Signal Cognitive Firewall — Security Level 99.9/100",
      diagram: `┌─────────────────────────────────────────────────────────────────────────────┐
│  HCS-U7 COGNITIVE FIREWALL                                                  │
│  Backend Fastify 5 · TypeScript · 230+ Tests                                │
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
        { icon: "Code", title: "Backend", description: "Fastify 5, TypeScript, Zod validation, 230+ Vitest tests." },
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
        { icon: "BarChart", type: "BENCHMARKS & VALIDATION", title: "Validated results", chapters: ["Accuracy: 98.9%", "AI Detection: >99%", "P95 Latency: <50ms", "Tests: 230+"], status: "", cta: "Full report" },
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
      subtitle: "2 patents filed with INPI — 20-year protection",
      items: [
        { number: "FR2514274", date: "Filed on 11/30/2025", title: "Multi-layer cognitive biometric authentication system resistant to generative AI", claims: 10, figures: 1 },
        { number: "FR2514546", date: "Filed on 12/04/2025", title: "Multi-signal cognitive security system integrating biometrics, behavioral firewall, astronomical entropy and adaptive SCA engine", claims: 15, figures: 3 },
      ],
      disclaimer: "In accordance with Article L. 612-10 of the Intellectual Property Code, the Minister of Defense has been authorized to review applications confidentially.",
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
      subtitle: "7 layers of enterprise-grade security",
      layers: [
        {
          level: "L7",
          name: "DDoS Protection",
          description: "Adaptive L7 rate limiting, attack pattern detection, Cloudflare 100+ Gbps",
          modules: ["L7 DDoS Protection", "Distributed Rate Limiting", "Cloudflare Edge"]
        },
        {
          level: "L6",
          name: "Multi-Encoding WAF",
          description: "SQLi, XSS, Path Traversal, LDAP Injection detection with multi-pass decoding",
          modules: ["OWASP Top 10 WAF", "ML Bot Detection", "Credential Stuffing"]
        },
        {
          level: "L5",
          name: "Active Honeypots",
          description: "Decoy endpoints (/.env, /admin, /wp-login) and invisible fields, automatic 24h ban",
          modules: ["Honeypots Endpoints", "Hidden Fields", "Auto-ban 24h"]
        },
        {
          level: "L4",
          name: "Hieroglyphic Shield",
          description: "Transparent AES-256-GCM protection of HCS-U7 codes (wrap/unwrap 30-40ms)",
          modules: ["AES-256-GCM", "scrypt KDF", "Auto wrap/unwrap"]
        },
        {
          level: "L3",
          name: "Adaptive Proof-of-Work",
          description: "Argon2id/SHA256 computational challenge for suspicious clients, adjustable difficulty",
          modules: ["Argon2id Challenge", "Adaptive Difficulty", "Redis Cache"]
        },
        {
          level: "L2",
          name: "Cognitive Firewall",
          description: "5-signal fusion: HCS Core, Device Risk, Network Risk, Behavior Anomaly, Trust Graph",
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
        "Inventor of patents FR2514274 and FR2514546.",
      ],
      location: "Alès, Occitanie, France",
    },

    // Footer
    footer: {
      tagline: "Cognitive AI Research Laboratory",
      madeIn: "Made in France 🇫🇷",
      copyright: `© ${new Date().getFullYear()} IA SOLUTION · SIRET ${siteConfigBilingual.siret} · All rights reserved`,
      patentsLine: "Patents FR2514274 & FR2514546 filed with INPI · CC BY-NC-SA 4.0",
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
          location: "Saint-Bénézet, France",
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
