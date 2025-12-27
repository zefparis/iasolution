# IA-SOLUTION — Cognitive Security Technologies

<div align="center">

**Authentification cognitive SaaS — HCS-U7 v8.4**

*Cognitive authentication SaaS*

[![Website](https://img.shields.io/badge/Website-ia--solution.fr-8B5CF6?style=for-the-badge)](https://ia-solution.fr)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Patents](https://img.shields.io/badge/INPI_Patents-3-10B981?style=for-the-badge)](https://www.inpi.fr/)
[![Security](https://img.shields.io/badge/Security-10_Layers-EF4444?style=for-the-badge)]()
[![PQC](https://img.shields.io/badge/Post--Quantum-Ready-06B6D4?style=for-the-badge)]()

</div>

---

## 🚀 Product Portfolio

### 🛡️ HCS-U7 v8.4 — Cognitive Authentication Engine

**Core Platform:** Cognitive authentication designed to reduce online fraud (bots, impersonation) with a smooth user journey.

**Key Features:**
- 🧠 6 cognitive tests + multi-signal scoring
- 🏗️ **10-layer Defense-in-Depth architecture** (NEW v8.4)
- 🔐 **Post-Quantum Crypto** : ML-DSA-65 (Dilithium) + ML-KEM-768 (Kyber) — NIST FIPS 204/203
- 🛡️ **Shield Module** : Anti-FalconOne Defense (IMSI catcher, geolocation attacks)
- ⚡ 500+ RPS sustained, <50ms P95 latency

**Production Metrics (Dec 2025):**
- 518+ attacks blocked (zero-day, SQLi, XSS, DDoS)
- 0 breaches (100% success rate)
- 99.9/100 security score
- 699 automated tests (94% coverage)

**Markets:**
- Fintech & Banking (fraud prevention, SCA)
- E-commerce (bot protection, checkout security)
- Defense & Government (secure communications)
- Journalism (source protection)

**Deployment:** API Backend + Admin Dashboard  
**Revenue Model:** SaaS (€99-€2499/month)

📂 [View Backend Repository →](https://github.com/zefparis/hcs-u7-backend)  
🌐 [Live Demo →](https://hcs-u7.com)

---

### 🛡️ Shield Module — Anti-FalconOne Defense (NEW v8.4)

**Layer 10:** Protection against state-level network attacks.

**Key Features:**
- 📡 IMSI Catcher Detection (fake base stations, signal anomalies, encryption downgrade)
- 📍 Geolocation Attack Detection (impossible travel, precision tracking, GPS spoofing)
- ⚡ Real-time risk scoring with adaptive recommendations

**Use Cases:**
- Defense & Security (hostile zone communications)
- Journalism (conflict zone reporters)
- Government (diplomats, international missions)
- Fintech (mobile banking in high-risk countries)

🔗 [Learn more →](https://ia-solution.fr/shield)

---

### 🚁 HCS-SHIELD — Secure Offline App (R&D)

**R&D Application:** Secure offline planning and information sharing in constrained environments.

**Key Features (high-level):**
- Offline-first UX
- Secure sharing workflows
- Authentication and device security primitives

**Markets (examples):**
- Critical infrastructure
- Field operations
- Enterprise offline workflows

**Deployment:** Progressive Web App (iOS/Android)  
**Revenue Model:** Device Licenses (€79-€499/device/year)

📂 [View Mobile Repository →](https://github.com/zefparis/hcs-shield-mobile)  
🎥 [Watch Demo Video →](https://ia-solution.fr/hcs-shield#demo)

---

### 🔐 Patent Coverage (3 Brevets INPI)

**All products protected by:**
- **FR2514274** (Nov 2025) — Multi-layer cognitive biometric authentication resistant to generative AI
- **FR2514546** (Dec 2025) — Multi-signal cognitive security system with behavioral firewall, astronomical entropy, and adaptive SCA engine
- **FR2515560** (Dec 2025) — **Shield Module** : IMSI catcher detection and geolocation attack protection system

**Protection:** 20 years (until 2045)  
**Licensing:** Available for commercial use ([contact@ia-solution.fr](mailto:contact@ia-solution.fr))

---

## 🏗️ Website Architecture

This repository contains the main **IA-SOLUTION corporate website** (Next.js 14 App Router).

**Important:** This repository does **not** contain the HCS-U7 backend implementation. Backend features, endpoints, tests and compliance claims must be verified in the dedicated backend repository.

**Stack:**
- Next.js 14.2 (App Router + React Server Components)
- TypeScript 5
- TailwindCSS 4
- Framer Motion (animations)
- Lucide React (icons)
- **Bilingual (FR/EN)** with custom i18n system (`useLanguage` hook + `content-bilingual.ts`)

**Key Pages:**
- `/` — Homepage (Hero + Product Tabs + Industries)
- `/hcs-u7` — HCS-U7 Product Page (10-layer architecture)
- `/shield` — Shield Module (Anti-FalconOne Defense) 🆕
- `/technology` — Technical Deep-Dive + Post-Quantum Crypto
- `/demos` — Interactive Demos (All technologies) 🆕
- `/infrastructure` — Infrastructure & Deployment
- `/research` — Research Axes
- `/patents` — Patent Details (3 brevets INPI)
- `/contact` — Contact Form (Brevo integration)
- `/privacy` — Privacy Policy
- `/legal` — Legal Notice

**Deployment:** [https://ia-solution.fr](https://ia-solution.fr)

---

## 📊 Technical Metrics (v8.4)

| Metric | Value |
|--------|-------|
| **Security Layers** | 10 (Defense-in-Depth) |
| **Attacks Blocked** | 518+ (zero-day, SQLi, XSS, DDoS) |
| **Breaches** | 0 (100% success rate) |
| **Security Score** | 99.9/100 |
| **Automated Tests** | 699 (94% coverage) |
| **Performance** | 500+ RPS, <50ms P95 |
| **Post-Quantum** | ML-DSA-65 + ML-KEM-768 |
| **Patents** | 3 (INPI certified) |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/zefparis/iasolution.git
cd iasolution

# Install
npm install

# Dev
npm run dev

# Build
npm run build

# Start production
npm start
```

**Environment Variables:**
```env
# Brevo (email)
BREVO_API_KEY=your_api_key
BREVO_SENDER_EMAIL=contact@ia-solution.fr
BREVO_SENDER_NAME=IA Solution
```

---

## 📫 Contact

**IA-SOLUTION**  
Benjamin BARRÈRE, CTO & Founder

- **Email:** contact@ia-solution.fr
- **Phone:** 07 44 14 96 17
- **Address:** IA-Solution, Ales, France
- **SIRET:** 438 055 097

**Patents:** FR2514274 | FR2514546 | FR2515560 (INPI Certified)

---

## 📄 License

© 2025 IA Solution. All rights reserved.

Proprietary software. Patents FR2514274, FR2514546 & FR2515560 protect innovations.  
Commercial licensing: contact@ia-solution.fr
- **INPI** : 3 brevets déposés et protégés

---

## 📜 Licence

© 2025 IAS Solution. Tous droits réservés.

Le code source de ce projet est propriétaire. Toute reproduction, totale ou partielle, est interdite sans autorisation écrite expresse.

Les brevets FR2514274, FR2514546 et FR2515560 protègent les innovations technologiques décrites.

---

<div align="center">

**HCS-U7 v8.4** | *Human Cognitive Signature*

[Website](https://ia-solution.fr) • [Demos](https://ia-solution.fr/demos) • [Shield Module](https://ia-solution.fr/shield) • [Contact](mailto:contact@ia-solution.fr)

*Authentification cognitive résistante à l'IA générative — Post-Quantum Ready*

</div>
