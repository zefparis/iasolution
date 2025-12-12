"use client";

import { Header, Footer } from "@/components/sections";
import { Container, AnimatedSection } from "@/components/ui";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MobilePage() {
  const { content, language } = useLanguage();
  const mobile = content.mobileApp;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg-primary pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 via-transparent to-transparent" />
          <Container>
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                {mobile.badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {mobile.title}
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                {mobile.subtitle}
              </p>
              <p className="text-text-secondary max-w-3xl mx-auto leading-relaxed">
                {mobile.description}
              </p>
            </AnimatedSection>
          </Container>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobile.features.map((feature: { icon: string; title: string; description: string }, index: number) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="h-full p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white/[0.01]">
          <Container>
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {language === 'fr' ? 'Cas d\'Usage' : 'Use Cases'}
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mobile.useCases.map((useCase: { icon: string; title: string; description: string }, index: number) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="h-full p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-accent-purple/30 transition-all duration-300 text-center">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20">
          <Container>
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {mobile.techStack.title}
              </h2>
            </AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-4">
                {mobile.techStack.items.map((item: { label: string; value: string }, index: number) => (
                  <AnimatedSection key={index} delay={index * 0.05}>
                    <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.08]">
                      <div className="text-xs text-text-muted mb-1">
                        {typeof item.label === 'string' ? item.label : item.label}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {item.value}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Competitive Comparison */}
        <section className="py-20 bg-white/[0.01]">
          <Container>
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {mobile.competitors.title}
              </h2>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left py-4 px-4 text-text-secondary font-medium">Feature</th>
                      <th className="text-center py-4 px-4 text-emerald-400 font-medium">HCS-U7</th>
                      <th className="text-center py-4 px-4 text-text-muted font-medium">Competitors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mobile.competitors.comparison.map((row: { feature: string; hcsu7: string; competitors: string }, index: number) => (
                      <tr key={index} className="border-b border-white/[0.05]">
                        <td className="py-4 px-4 text-text-secondary">
                          {typeof row.feature === 'string' ? row.feature : row.feature}
                        </td>
                        <td className="py-4 px-4 text-center text-white font-medium">
                          {typeof row.hcsu7 === 'string' ? row.hcsu7 : row.hcsu7}
                        </td>
                        <td className="py-4 px-4 text-center text-text-muted">
                          {typeof row.competitors === 'string' ? row.competitors : row.competitors}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>

        {/* Status Banner */}
        <section className="py-12">
          <Container>
            <AnimatedSection>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-accent-purple/10 to-blue-500/10 border border-blue-500/20">
                <div className="text-4xl mb-4">🚀</div>
                <p className="text-lg text-white font-medium mb-2">
                  {language === 'fr' ? 'Roadmap' : 'Roadmap'}
                </p>
                <p className="text-text-secondary">
                  {mobile.status}
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
