'use client';

import { Header, Footer } from "@/components/sections";
import { Container } from "@/components/ui";
import { useLanguage } from '@/contexts/LanguageContext';
import { legalPage } from '@/lib/content';

const content = {
  fr: {
    badge: 'LÉGAL',
    title: 'Mentions légales',
  },
  en: {
    badge: 'LEGAL',
    title: 'Legal Notice',
  },
};

export default function LegalPage() {
  const { language } = useLanguage();
  const lang = language as 'fr' | 'en';
  const t = content[lang];
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
          
          <Container className="relative z-10 max-w-3xl">
            <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] mb-6">
              {t.badge}
            </span>
            <h1 className="text-h1-mobile lg:text-h1 font-semibold glow-text mb-8">
              {t.title}
            </h1>
            <div
              className="prose prose-invert prose-sm max-w-none
                prose-headings:text-white prose-headings:font-semibold
                prose-p:text-text-secondary prose-p:leading-relaxed
                prose-a:text-accent-purple prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4"
              dangerouslySetInnerHTML={{
                __html: legalPage.content
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/## (.*)/g, "</p><h2>$1</h2><p>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>'),
              }}
            />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
