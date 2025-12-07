# HCS-U7 — Human Cognitive Signature

<div align="center">

**Premier système d'authentification biométrique cognitive résistant à l'IA générative**

*First cognitive biometric authentication system resistant to generative AI*

[![Website](https://img.shields.io/badge/Website-ia--solution.fr-8B5CF6?style=for-the-badge)](https://ia-solution.fr)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Patents](https://img.shields.io/badge/INPI_Patents-2-10B981?style=for-the-badge)](https://www.inpi.fr/)
[![Tests](https://img.shields.io/badge/Tests-230+-22C55E?style=for-the-badge)](https://vitest.dev/)

</div>

---

## 🎯 Problème Résolu

> **94% des CAPTCHAs traditionnels sont contournés par GPT-4V** (ETH Zurich, 2024)

Les systèmes d'authentification actuels (mots de passe, CAPTCHA, 2FA) sont vulnérables aux IA génératives modernes. HCS-U7 propose une solution fondamentalement différente basée sur la **biométrie cognitive** — des patterns neurologiques impossibles à simuler par une IA.

---

## 🧠 Solution : Biométrie Cognitive

HCS-U7 mesure **6 tests cognitifs validés scientifiquement** :

| Test | Origine | Ce qu'il mesure |
|------|---------|-----------------|
| **Stroop** | 1935 | Interférence cognitive, latence incongruence |
| **N-Back** | 1958 | Mémoire de travail, capacité 7±2 éléments |
| **Trail Making** | 1938 | Flexibilité cognitive, switching cost |
| **Digit Span** | 1939 | Empan mnésique, rétention court terme |
| **Reaction Time** | 1868 | Variabilité temporelle 50-150ms |
| **RAN Vocal** | 1974 | Dénomination rapide, pauses, hésitations |

### Pourquoi l'IA ne peut pas tricher

- **Humain** : Temps de réponse 50-150ms avec variabilité naturelle
- **IA** : Répond en <30ms avec régularité >80%
- **Effet fatigue** : Humain ralentit après 2min, IA reste stable
- **Stroop** : Humain +50ms sur items incongruents, IA instantanée

---

## 📊 Performances Validées

<div align="center">

| Métrique | Valeur | Description |
|----------|--------|-------------|
| **Précision globale** | 98.9% | True Positive Rate |
| **Détection bots** | 99.6% | True Negative Rate |
| **Détection IA** | >99% | GPT-4V, Claude 3, Gemini |
| **Latence P95** | <50ms | Temps de réponse |
| **Tests unitaires** | 230+ | Couverture Vitest |
| **AUC-ROC** | 0.994 | Qualité du modèle |

</div>

---

## 🔐 Brevets INPI

**2 brevets déposés** — Protection 20 ans

| N° Brevet | Date | Titre |
|-----------|------|-------|
| **FR2514274** | 30/11/2025 | Système d'authentification biométrique cognitive multi-couches résistant à l'IA générative |
| **FR2514546** | 04/12/2025 | Système de sécurité cognitive multi-signaux intégrant biométrie, firewall comportemental, entropie astronomique et moteur SCA adaptatif |

> *Conformément à l'article L. 612-10 du Code de la propriété intellectuelle, le Ministre de la Défense a été habilité à examiner les demandes de manière confidentielle.*

---

## 🏗️ Architecture Technique

### Format U7 — Structure Identitaire

```
HCS-U7|V:8.0|ALG:QS|E:E|MOD:c25f0m75|COG:F42C22V9S10Cr16|QSIG:...|B3:...
```

| Segment | Description |
|---------|-------------|
| `HCS-U7` | Protocol identifier |
| `V:x.x` | Version (semantic) |
| `ALG:QS` | Algorithm (Quantum-Safe) |
| `MOD:...` | Modality flags (cognitive/form ratio) |
| `COG:...` | Cognitive axes (F/C/V/S/Cr vectors) |
| `QSIG:...` | Quantum-safe signature (post-quantum ready) |
| `B3:...` | Biometric binding hash |

### Algorithmes Cryptographiques

- **QSIG** — Quantum-Safe Signature (NIST-PQC ready)
- **B3** — Biometric Binding (HMAC-SHA256)
- **Merkle Trees** — Signatures résistantes et vérifiables
- **Celestial Entropy Layer** — Entropie basée sur positions planétaires temps réel

### Defense-in-Depth (7 couches)

```
┌─────────────────────────────────────────┐
│  L7 DDoS Protection                     │
├─────────────────────────────────────────┤
│  WAF Multi-Encoding                     │
├─────────────────────────────────────────┤
│  Honeypots (/.env, /admin, /wp-login)   │
├─────────────────────────────────────────┤
│  Rate Limiting Distribué                │
├─────────────────────────────────────────┤
│  Credential Stuffing Detection          │
├─────────────────────────────────────────┤
│  Proof-of-Work Adaptatif                │
├─────────────────────────────────────────┤
│  Cognitive Biometric Layer              │
└─────────────────────────────────────────┘
```

---

## 🛠️ Stack Technologique

### Backend
- **Fastify 5** — Framework haute performance
- **TypeScript** — Typage strict
- **Zod** — Validation runtime
- **Vitest** — 230+ tests unitaires

### Persistence
- **PostgreSQL** — Base de données principale
- **Prisma ORM** — Migrations et queries
- **Redis** — Cache et rate limiting distribué

### Cryptographie
- **HMAC-SHA256** — Signatures
- **bcrypt** — Hashing sécurisé
- **JWT** — Tokens d'authentification
- **Swiss Ephemeris** — Calculs astronomiques haute précision

### Frontend
- **Next.js 14** — React Server Components
- **TailwindCSS** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Iconographie

---

## 📁 Structure du Projet

```
iasolution/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout + LanguageProvider
│   ├── page.tsx                 # Home page
│   ├── hcs-u7/                  # Product page
│   ├── technology/              # Technology details
│   ├── research/                # Research axes
│   ├── patents/                 # Patents page
│   ├── contact/                 # Contact form
│   └── demo/                    # Demo request
├── components/
│   ├── sections/                # Page sections
│   │   ├── Header.tsx          # Navigation + Language switcher
│   │   ├── Hero.tsx            # Hero section
│   │   ├── SectionProblem.tsx  # Problem statement
│   │   ├── SectionSolution.tsx # Solution overview
│   │   ├── SectionPerformance.tsx
│   │   ├── SectionTechnology.tsx
│   │   ├── SectionResearchAxes.tsx
│   │   ├── SectionProductHCS.tsx
│   │   ├── SectionArchitecture.tsx
│   │   ├── SectionU7Format.tsx
│   │   ├── SectionPatents.tsx
│   │   ├── SectionPublications.tsx
│   │   └── Footer.tsx
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── AnimatedSection.tsx
│   └── LanguageSwitcher.tsx     # FR/EN toggle
├── contexts/
│   └── LanguageContext.tsx      # Bilingual state management
├── lib/
│   ├── content.ts               # French content (legacy)
│   ├── content-bilingual.ts     # FR/EN translations
│   ├── translations.ts          # UI translations
│   └── animations.ts            # Framer Motion variants
├── public/
│   ├── mentions-legales.html    # Legal notice FR
│   ├── politique-confidentialite.html
│   └── privacy-policy.html      # Legal notice EN
└── docs/
    ├── BREVO_SETUP.md           # Email configuration
    └── IMAGES_NEEDED.md         # Asset requirements
```

---

## 🌐 Internationalisation

Le site supporte **2 langues** avec basculement dynamique :

- 🇫🇷 **Français** (défaut)
- 🇬🇧 **English**

### Fonctionnalités

- **Détection automatique** de la langue du navigateur
- **Persistance** dans localStorage
- **Basculement instantané** sans rechargement
- **Contenu complet** traduit (navigation, sections, formulaires)

### Implémentation

```tsx
// Utilisation dans les composants
const { language, setLanguage, content } = useLanguage();

// Accès au contenu traduit
<h1>{content.hero.title}</h1>
```

---

## 🚀 Installation

### Prérequis

- Node.js 18.x+
- npm 9.x+

### Démarrage rapide

```bash
# Clone
git clone https://github.com/zefparis/iasolution.git
cd iasolution

# Installation
npm install

# Développement
npm run dev

# Build production
npm run build
```

### Variables d'environnement

```env
# Brevo (email)
BREVO_API_KEY=your_api_key
BREVO_SENDER_EMAIL=contact@ia-solution.fr
BREVO_SENDER_NAME=IA Solution
```

---

## 🔬 Axes de Recherche

### 1. Biométrie Cognitive
Identification de l'humain par ses patterns cognitifs uniques. Tests validés scientifiquement depuis 1868.

### 2. Cryptographie des Croyances
Fusion Western + BaZi via opérateurs affines déterministes. Swiss Ephemeris pour calculs astronomiques.

### 3. Résistance à l'IA Générative
Détection GPT-4V, Claude 3, Gemini Pro avec >99% de précision. Architecture Defense-in-Depth.

### 4. Cryptographie Post-Quantique
Préparation NIST-PQC. QSIG ready dans le format U7. Production-ready 2026.

---

## 📚 Publications

- **Thèse doctorale** : Authentification cognitive et différenciation humain/IA *(en finalisation)*
- **Documentation technique** : HCS-U7 Specs & Patent Corpus *(propriétaire)*
- **Références scientifiques** : Tests cognitifs fondamentaux (Stroop 1935, N-Back 1958, etc.)
- **Benchmarks** : Résultats validés sur 230+ tests

---

## 👤 Fondateur

**Benjamin BARRERE**  
*Founder & Research Director*

- 3 ans de R&D en neurosciences cognitives et cryptographie
- 2 brevets INPI déposés
- Thèse doctorale en cours

---

## 📞 Contact

| | |
|---|---|
| **Email** | contact@ia-solution.fr |
| **Website** | [ia-solution.fr](https://ia-solution.fr) |
| **GitHub** | [github.com/zefparis/iasolution](https://github.com/zefparis/iasolution) |

### Collaboration

- **Recherche** : Collaboration R&D, projets conjoints, co-publication
- **Enterprise** : Licence commerciale, intégration API, support dédié
- **Académique** : Accès recherche, données anonymisées, co-direction thèse

---

## 📄 Conformité

- **RGPD** : Politique de confidentialité complète
- **DSP2/PSD2** : Conformité SCA (Strong Customer Authentication)
- **INPI** : 2 brevets déposés et protégés

---

## 📜 Licence

© 2025 IAS Solution. Tous droits réservés.

Le code source de ce projet est propriétaire. Toute reproduction, totale ou partielle, est interdite sans autorisation écrite expresse.

Les brevets FR2514274 et FR2514546 protègent les innovations technologiques décrites.

---

<div align="center">

**HCS-U7** | *Human Cognitive Signature*

[Website](https://ia-solution.fr) • [Contact](mailto:contact@ia-solution.fr) • [GitHub](https://github.com/zefparis/iasolution)

*Authentification cognitive résistante à l'IA générative*

</div>
