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
      title: "Performance & Résultats",
      subtitle: "Métriques validées sur 230+ tests unitaires et benchmarks réels",
      metrics: [
        { value: 98.9, suffix: "%", label: "Précision globale", sublabel: "True Positive Rate" },
        { value: 99.6, suffix: "%", label: "Détection bots", sublabel: "True Negative Rate" },
        { value: 99, prefix: ">", suffix: "%", label: "Détection IA", sublabel: "GPT-4V, Claude 3, Gemini" },
        { value: 50, prefix: "<", suffix: "ms", label: "Latence P95", sublabel: "Temps de réponse" },
        { value: 230, suffix: "+", label: "Tests unitaires", sublabel: "Vitest coverage" },
        { value: 2, suffix: "", label: "Brevets INPI", sublabel: "FR2514274, FR2514546" },
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
      title: "Performance & Results",
      subtitle: "Metrics validated on 230+ unit tests and real benchmarks",
      metrics: [
        { value: 98.9, suffix: "%", label: "Overall accuracy", sublabel: "True Positive Rate" },
        { value: 99.6, suffix: "%", label: "Bot detection", sublabel: "True Negative Rate" },
        { value: 99, prefix: ">", suffix: "%", label: "AI detection", sublabel: "GPT-4V, Claude 3, Gemini" },
        { value: 50, prefix: "<", suffix: "ms", label: "P95 Latency", sublabel: "Response time" },
        { value: 230, suffix: "+", label: "Unit tests", sublabel: "Vitest coverage" },
        { value: 2, suffix: "", label: "INPI Patents", sublabel: "FR2514274, FR2514546" },
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
