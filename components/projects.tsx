"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { getContent } from "@/lib/content-i18n";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const content = getContent(language);
  const projects = content.projects;

  return (
    <section id="projets" className="relative">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="glass-card group relative flex h-full flex-col gap-5 overflow-hidden p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ translateY: -6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue/0 via-aurora-pink/5 to-aurora-violet/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <span className="rounded-full border border-aurora-blue/30 bg-aurora-blue/10 px-3 py-1 text-xs font-medium text-aurora-blue">
                    {project.kpi}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{project.description}</p>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                  {project.result}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-midnight/40 px-3 py-1 text-xs text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <blockquote className="relative rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm italic text-slate-200">
                {project.testimonial}
              </blockquote>
              <div className="relative mt-auto flex items-center justify-between pt-2 text-xs text-slate-400">
                <span>{t.caseStudy}</span>
                {project.href ? (
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1 text-aurora-blue transition group-hover:text-aurora-pink"
                  >
                    {t.viewProject}
                    <span aria-hidden>→</span>
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    {t.viewProject}
                    <span aria-hidden>→</span>
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
