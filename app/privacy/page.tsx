import { Metadata } from "next";
import { Header, Footer } from "@/components/sections";
import { Container } from "@/components/ui";
import { privacyPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité | IA Solution",
  description: "Politique de confidentialité et protection des données personnelles d'IA Solution.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
          
          <Container className="relative z-10 max-w-3xl">
            <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] mb-6">
              CONFIDENTIALITÉ
            </span>
            <h1 className="text-h1-mobile lg:text-h1 font-semibold glow-text mb-8">
              {privacyPage.title}
            </h1>
            <div
              className="prose prose-invert prose-sm max-w-none
                prose-headings:text-white prose-headings:font-semibold
                prose-p:text-text-secondary prose-p:leading-relaxed
                prose-li:text-text-secondary
                prose-a:text-accent-purple prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4"
              dangerouslySetInnerHTML={{
                __html: privacyPage.content
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/## (.*)/g, "</p><h2>$1</h2><p>")
                  .replace(/- (.*)/g, "<li>$1</li>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
