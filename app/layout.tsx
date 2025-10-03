import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const siteTitle = "IA-Solution — Agence tech & IA";
const siteDescription =
  "IA-Solution accompagne les entreprises avec des sites web modernes, des applications personnalisées, l'automatisation intelligente et l'intégration d'IA.";
const siteUrl = "https://www.ia-solution.fr";
const siteImage = "/og-cover.jpg"; // mettre ton image OG dans /public

// ✅ SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "IA-Solution",
    "agence web",
    "agence IA",
    "développement Next.js",
    "applications web",
    "automatisation",
    "intelligence artificielle",
    "design UI",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "IA-Solution",
    locale: "fr_FR",
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: "IA-Solution — Agence tech & IA",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
  },
  alternates: {
    canonical: siteUrl,
  },
};

// ✅ Viewport (themeColor déplacé ici)
export const viewport: Viewport = {
  themeColor: "#0f172a", // cohérence mobile (bg-midnight)
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className="dark">
      <body className={`${font.variable} bg-midnight text-white`}>
        {children}
      </body>
    </html>
  );
}
