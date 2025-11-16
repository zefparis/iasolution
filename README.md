# IAS Solution

**Corporate Website & Digital Solutions Platform**

Official website of IAS Solution - Enterprise-grade web development, mobile applications, and artificial intelligence solutions.

[![Website](https://img.shields.io/badge/Website-ia--solution.fr-0052CC?style=flat-square)](https://ia-solution.fr)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Production-000000?style=flat-square&logo=vercel)](https://vercel.com)

---

## Table of Contents

- [Overview](#overview)
- [Core Services](#core-services)
- [Technical Stack](#technical-stack)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Mobile Applications](#mobile-applications)
- [Legal Compliance](#legal-compliance)
- [Internationalization](#internationalization)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Overview

IAS Solution provides comprehensive digital transformation services with a focus on modern web technologies, mobile development, and artificial intelligence integration. Our platform demonstrates enterprise-level architecture and GDPR-compliant solutions.

### Key Features

- Modern, responsive design with advanced animations
- Mobile-first architecture
- SEO optimization
- High performance (Lighthouse score 95+)
- Full GDPR compliance
- Bilingual support (French/English)
- Continuous deployment pipeline

---

## Core Services

**IAS Solution** specializes in:

- **Web Development**: Modern, high-performance platforms built with cutting-edge technologies
- **Mobile Applications**: Native and cross-platform solutions for iOS & Android (including Equi Saddles on Play Store)
- **Artificial Intelligence**: RPA automation and custom AI solutions
- **Cybersecurity**: GDPR compliance consulting and data protection strategies
- **Strategic Consulting**: Digital transformation advisory services

---

## Technical Stack

### Frontend Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) with React 18
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS 3](https://tailwindcss.com/)
- **Components**: React Server Components
- **Font Optimization**: Next/Font

### Infrastructure & Deployment

- **Hosting Provider**: [Vercel](https://vercel.com)
- **CI/CD Pipeline**: Automated GitHub Actions
- **Domain**: [ia-solution.fr](https://ia-solution.fr)
- **SSL/TLS**: Automatic certificate management

### Compliance & Security

- **GDPR**: Comprehensive privacy policy implementation
- **Cookie Management**: Consent-based system with localStorage
- **Legal Documentation**: French and European regulatory compliance

---

## Project Structure

```
iasolution/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/                   # Reusable React components
│   ├── header.tsx               # Navigation header
│   ├── hero.tsx                 # Hero section
│   ├── services.tsx             # Services section
│   ├── about.tsx                # About section
│   ├── projects.tsx             # Projects section
│   ├── process.tsx              # Process section
│   ├── contact.tsx              # Contact form
│   ├── footer.tsx               # Footer component
│   ├── Card.tsx                 # Card component
│   ├── ServicesSection.tsx      # Detailed services section
│   └── section-heading.tsx      # Section heading component
├── lib/                         # Utilities and data
│   └── content.ts               # Static content
├── public/                      # Static assets
│   ├── politique-confidentialite.html    # French Privacy Policy
│   ├── politique-cookies.html            # French Cookie Policy
│   ├── mentions-legales.html             # French Legal Notice
│   ├── privacy-policy.html               # English Privacy Policy
│   ├── cookies-policy.html               # English Cookie Policy
│   └── legal-notice.html                 # English Legal Notice
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # npm dependencies
└── README.md                    # Project documentation
```

---

## Development Setup

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or yarn 1.22.x
- Git

### Installation Steps

**1. Clone the repository**

```bash
git clone https://github.com/zefparis/iasolution.git
cd iasolution
```

**2. Install dependencies**

```bash
npm install
# or using yarn
yarn install
```

**3. Start development server**

```bash
npm run dev
# or using yarn
yarn dev
```

**4. Access the application**

Open your browser and navigate to:
```
http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

---

## Mobile Applications

### Equi Saddles

Enterprise mobile application available on Google Play Store, designed for equestrian industry professionals.

**Core Features:**

- Comprehensive saddle catalog
- Inventory management system
- Modern, intuitive user interface
- Full GDPR compliance
- Real-time synchronization

**Availability:** [Google Play Store](https://play.google.com/store)

**Platform:** Android (iOS version in development)

---

## Legal Compliance

All legal pages are fully compliant with **GDPR** and French/European legislation.

### French Version

| Document | URL | Description |
|----------|-----|-------------|
| Privacy Policy | `/politique-confidentialite.html` | Personal data protection (GDPR) |
| Cookie Policy | `/politique-cookies.html` | Cookie consent management |
| Legal Notice | `/mentions-legales.html` | Mandatory legal information |

### English Version

| Document | URL | Description |
|----------|-----|-------------|
| Privacy Policy | `/privacy-policy.html` | Personal data protection (GDPR) |
| Cookie Policy | `/cookies-policy.html` | Cookie consent management |
| Legal Notice | `/legal-notice.html` | Mandatory legal information |

### Technical Implementation

- Static HTML/CSS/JavaScript pages
- Modern design with gradient styling
- Sticky navigation with language selector
- Functional cookie consent banner using localStorage
- Fully responsive and accessible
- W3C validated markup  

---

## Internationalization

The platform currently supports **2 languages**:

- **French** (default)
- **English**

Each legal page includes a language selector in the top-right corner for seamless switching between versions.

### Implementation Details

- Language preference stored in localStorage
- Automatic language detection based on browser settings
- Full content translation for all legal documents
- URL-based language routing

---

## Deployment

The application is automatically deployed to **Vercel** with continuous integration on every push to the `main` branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/zefparis/iasolution)

### Deployment Configuration

- **Platform**: Vercel
- **Branch**: `main` (production)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Environment Variables**: None required

### CI/CD Pipeline

- Automated testing on pull requests
- Preview deployments for feature branches
- Automatic production deployment on merge to main
- Built-in performance monitoring

---

## GDPR Compliance Details

IAS Solution maintains **full GDPR compliance** across all platforms:

- No automatic data collection in applications
- Explicit cookie consent management
- Comprehensive privacy policy documentation
- Clear user rights explanation (access, rectification, deletion, portability)
- Dedicated data protection contact: support@ia-solution.fr
- Limited data retention period (maximum 13 months)
- Regular compliance audits
- Documented data processing procedures

---

## Contributing

We welcome contributions to improve the platform. Please follow these guidelines:

**1. Fork the repository**

**2. Create a feature branch**
```bash
git checkout -b feature/your-feature-name
```

**3. Commit your changes**
```bash
git commit -m "Add: detailed description of your changes"
```

**4. Push to your branch**
```bash
git push origin feature/your-feature-name
```

**5. Open a Pull Request**

Provide a clear description of your changes and any related issue numbers.

### Code Standards

- Follow TypeScript best practices
- Maintain existing code style
- Add appropriate tests
- Update documentation as needed

---

## Project Status

| Component | Status |
|-----------|--------|
| Website | Production |
| Legal Pages | GDPR Compliant |
| Mobile Apps | Equi Saddles on Play Store |
| New Features | In Development |

---

## Contact

**Email**: support@ia-solution.fr  
**Website**: [https://ia-solution.fr](https://ia-solution.fr)  
**GitHub**: [https://github.com/zefparis/iasolution](https://github.com/zefparis/iasolution)

---

## License

© 2025 IAS Solution. All rights reserved.

The source code of this project is proprietary to IAS Solution. Any reproduction, in whole or in part, is prohibited without express written authorization.

---

<div align="center">

**IAS Solution** | [Website](https://ia-solution.fr) • [Contact](mailto:support@ia-solution.fr) • [GitHub](https://github.com/zefparis/iasolution)

</div>
