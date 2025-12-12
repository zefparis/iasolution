"use client";

import { Header, Footer } from "@/components/sections";
import { Container, AnimatedSection } from "@/components/ui";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InfrastructurePage() {
  const { content } = useLanguage();
  const infra = content.infrastructure;
  const defenseInDepth = content.defenseInDepth;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg-primary pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent" />
          <Container>
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                🌍 Global Infrastructure
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {infra.title}
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                {infra.subtitle}
              </p>
            </AnimatedSection>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-white/[0.08]">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {infra.stats.items.map((stat: { value: string; label: string }, index: number) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <Container>
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {infra.stats.title}
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infra.features.map((feature: { icon: string; title: string; description: string }, index: number) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="h-full p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 group">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
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

        {/* Defense-in-Depth Section */}
        <section className="py-20 bg-white/[0.01]">
          <Container>
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {defenseInDepth.title}
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                {defenseInDepth.subtitle}
              </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto space-y-4">
              {defenseInDepth.layers.map((layer: { level: string; name: string; description: string; modules: string[] }, index: number) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-accent-purple/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-accent-purple">{layer.level}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {layer.name}
                        </h3>
                        <p className="text-text-secondary text-sm mb-3">
                          {layer.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {layer.modules.map((module: string, modIndex: number) => (
                            <span
                              key={modIndex}
                              className="px-2 py-1 text-xs rounded-full bg-white/[0.05] text-text-secondary border border-white/[0.08]"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-8">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                {defenseInDepth.totalModules}
              </span>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
