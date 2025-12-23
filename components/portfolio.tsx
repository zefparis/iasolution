"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { getContent } from "@/lib/content-i18n";
import { SectionHeading } from "@/components/section-heading";

export function PortfolioSection() {
  const { language } = useLanguage();
  const t = translations[language].portfolio;
  const content = getContent(language);
  const portfolioProjects = content.portfolioProjects;

  return (
    <section id="portfolio" className="relative">
      {/* Gradient background effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-96 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-aurora-blue/10 via-aurora-violet/10 to-aurora-pink/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 sm:gap-10 sm:px-6 md:gap-12 md:py-20 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          align="center"
        />

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className="glass-card group relative flex h-full flex-col gap-4 overflow-hidden p-4 transition-all duration-300 sm:gap-5 sm:p-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ translateY: -8, scale: 1.02 }}
            >
              {/* Category badge */}
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-aurora-violet/30 bg-aurora-violet/10 px-3 py-1.5 text-xs font-medium text-aurora-violet">
                  {project.category}
                </span>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-aurora-blue/50 group-hover:bg-aurora-blue/10">
                  <div className="absolute inset-0 rounded-xl bg-aurora-blue/0 blur-lg transition-all duration-300 group-hover:bg-aurora-blue/40" />
                  <ExternalLink className="relative h-4 w-4 text-white/70 transition-colors group-hover:text-aurora-blue" />
                </div>
              </div>

              {/* Project content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-white sm:text-xl">{project.name}</h3>
                <p className="text-xs text-slate-300 sm:text-sm">{project.description}</p>
              </div>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-midnight/60 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-midnight/80 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link button */}
              <a
                href={project.link.url}
                target={project.link.url.startsWith("http") ? "_blank" : undefined}
                rel={project.link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-auto flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-aurora-blue/50 hover:bg-aurora-blue/10 hover:text-aurora-blue hover:shadow-glow"
              >
                {project.link.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-gradient-to-r from-aurora-blue via-aurora-pink to-aurora-violet opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
