# 🤖 IAS Solution

> **L'IA au service de vos projets numériques**

Site web officiel de IAS Solution - Plateforme de développement web, applications mobiles et solutions basées sur l'intelligence artificielle.

[![Website](https://img.shields.io/badge/Website-ia--solution.fr-blue?style=for-the-badge)](https://ia-solution.fr)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

---

## 📋 Table des matières

- [🎯 À propos](#-à-propos)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies](#️-technologies)
- [📁 Structure du projet](#-structure-du-projet)
- [🚀 Installation](#-installation)
- [📱 Applications mobiles](#-applications-mobiles)
- [⚖️ Pages légales](#️-pages-légales)
- [🌍 Internationalisation](#-internationalisation)
- [📧 Contact](#-contact)

---

## 🎯 À propos

**IAS Solution** est une entreprise spécialisée dans :

- 🌐 **Développement web** : Plateformes modernes et performantes
- 📱 **Applications mobiles** : Solutions iOS & Android (notamment **Equi Saddles** sur Play Store)
- 🤖 **Intelligence artificielle** : Automatisation RPA et solutions IA
- 🔐 **Cybersécurité** : Conformité RGPD et protection des données
- 💼 **Conseil stratégique** : Accompagnement dans la transformation digitale

---

## ✨ Fonctionnalités

✅ **Design moderne** avec dégradés et animations  
✅ **Responsive** mobile-first  
✅ **SEO optimisé**  
✅ **Performance maximale** (Lighthouse 95+)  
✅ **Conformité RGPD** complète  
✅ **Bannière cookies** interactive  
✅ **Support bilingue** FR/EN  
✅ **Déploiement continu** via Vercel  

---

## 🛠️ Technologies

### Frontend
- **Framework** : [Next.js 14](https://nextjs.org/) (React 18)
- **Language** : [TypeScript 5](https://www.typescriptlang.org/)
- **Styling** : [TailwindCSS 3](https://tailwindcss.com/)
- **Composants** : React Server Components
- **Fonts** : Next/Font (optimisé)

### Déploiement
- **Hosting** : [Vercel](https://vercel.com)
- **CI/CD** : GitHub Actions (automatique)
- **Domaine** : [ia-solution.fr](https://ia-solution.fr)

### Conformité
- **RGPD** : Politique de confidentialité complète
- **Cookies** : Gestion du consentement avec localStorage
- **Mentions légales** : Conformes à la loi française

---

## 📁 Structure du projet

```
iasolution-main/
├── app/                          # Application Next.js 14 (App Router)
│   ├── layout.tsx               # Layout racine
│   ├── page.tsx                 # Page d'accueil
│   └── globals.css              # Styles globaux
├── components/                   # Composants React réutilisables
│   ├── header.tsx               # En-tête de navigation
│   ├── hero.tsx                 # Section hero
│   ├── services.tsx             # Section services
│   ├── about.tsx                # Section à propos
│   ├── projects.tsx             # Section projets
│   ├── process.tsx              # Section processus
│   ├── contact.tsx              # Formulaire de contact
│   ├── footer.tsx               # Pied de page
│   ├── Card.tsx                 # Composant carte
│   ├── ServicesSection.tsx      # Section services détaillée
│   └── section-heading.tsx      # En-tête de section
├── lib/                         # Utilitaires et données
│   └── content.ts               # Contenu statique du site
├── public/                       # Fichiers statiques
│   ├── politique-confidentialite.html    # 🇫🇷 Politique de confidentialité
│   ├── politique-cookies.html            # 🇫🇷 Politique cookies
│   ├── mentions-legales.html             # 🇫🇷 Mentions légales
│   ├── privacy-policy.html               # 🇬🇧 Privacy Policy
│   ├── cookies-policy.html               # 🇬🇧 Cookie Policy
│   └── legal-notice.html                 # 🇬🇧 Legal Notice
├── next.config.js               # Configuration Next.js
├── tailwind.config.js           # Configuration Tailwind
├── tsconfig.json                # Configuration TypeScript
├── package.json                 # Dépendances npm
└── README.md                    # Documentation (ce fichier)
```

---

## 🚀 Installation

### Prérequis
- Node.js 18+ et npm/yarn
- Git

### Étapes

1. **Cloner le dépôt**
```bash
git clone https://github.com/zefparis/iasolution.git
cd iasolution
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

### Build de production
```bash
npm run build
npm start
```

---

## 📱 Applications mobiles

### 🐴 Equi Saddles
Application mobile disponible sur **Google Play Store** pour les professionnels équestres.

**Fonctionnalités :**
- Catalogue de selles
- Gestion des inventaires
- Interface moderne et intuitive
- Conformité RGPD

**Télécharger :** [Google Play Store](https://play.google.com/store)

---

## ⚖️ Pages légales

Toutes les pages légales sont conformes au **RGPD** et à la législation française.

### 🇫🇷 Version française
| Page | URL | Description |
|------|-----|-------------|
| **Politique de confidentialité** | `/politique-confidentialite.html` | Protection des données personnelles (RGPD) |
| **Politique cookies** | `/politique-cookies.html` | Gestion des cookies avec bannière interactive |
| **Mentions légales** | `/mentions-legales.html` | Informations légales obligatoires |

### 🇬🇧 English version
| Page | URL | Description |
|------|-----|-------------|
| **Privacy Policy** | `/privacy-policy.html` | Personal data protection (GDPR) |
| **Cookie Policy** | `/cookies-policy.html` | Cookie management with interactive banner |
| **Legal Notice** | `/legal-notice.html` | Mandatory legal information |

#### Caractéristiques des pages légales :
✅ **100% statiques** (HTML/CSS/JS vanilla)  
✅ **Design moderne** avec dégradés bleu/violet  
✅ **Navigation sticky** avec logo + sélecteur de langue  
✅ **Bannière cookies** fonctionnelle (localStorage)  
✅ **Responsive** et accessible  
✅ **Validation W3C**  

---

## 🌍 Internationalisation

Le site supporte actuellement **2 langues** :

- 🇫🇷 **Français** (par défaut)
- 🇬🇧 **English**

Chaque page légale dispose d'un **sélecteur de langue** en haut à droite permettant de basculer facilement entre les versions.

---

## 🔒 Conformité RGPD

IAS Solution est **100% conforme RGPD** :

✅ **Aucune collecte** automatique de données dans les applications  
✅ **Bannière de consentement** pour les cookies  
✅ **Politique de confidentialité** détaillée  
✅ **Droits des utilisateurs** clairement expliqués (accès, rectification, suppression, etc.)  
✅ **Contact dédié** : support@ia-solution.fr  
✅ **Conservation limitée** des données (13 mois max)  

---

## 📧 Contact

**Email :** support@ia-solution.fr  
**Site web :** [https://ia-solution.fr](https://ia-solution.fr)  
**GitHub :** [https://github.com/zefparis/iasolution](https://github.com/zefparis/iasolution)

---

## 📝 Licence

© 2025 IAS Solution - Tous droits réservés

**Note :** Le code source de ce projet est la propriété de IAS Solution. Toute reproduction, même partielle, est interdite sans autorisation expresse.

---

## 🚀 Déploiement

Ce projet est automatiquement déployé sur **Vercel** à chaque push sur la branche `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/zefparis/iasolution)

### Variables d'environnement
Aucune variable d'environnement n'est requise pour le moment.

---

## 🤝 Contribution

Pour contribuer au projet :

1. Fork le repository
2. Crée une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit tes changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvre une Pull Request

---

## 📊 Statut du projet

- ✅ **Site web** : En production
- ✅ **Pages légales** : Conformes RGPD
- ✅ **Applications mobiles** : Equi Saddles sur Play Store
- 🚧 **Nouvelles fonctionnalités** : En développement

---

<div align="center">

**Fait avec ❤️ par IAS Solution**

[Website](https://ia-solution.fr) • [Contact](mailto:support@ia-solution.fr)

</div>
