"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projets" className="relative">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="Réalisations"
          title="Des projets qui allient design et performance"
          description="Aperçu de collaborations menées avec des clients ambitieux. Nous concevons des expériences robustes, évolutives et centrées utilisateur."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="glass-card group relative flex h-full flex-col gap-4 overflow-hidden p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ translateY: -6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue/0 via-aurora-pink/5 to-aurora-violet/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-sm text-slate-300">{project.description}</p>
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
              </div>
              <div className="relative mt-auto flex items-center justify-between pt-4 text-xs text-slate-400">
                <span>Étude de cas à venir</span>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-aurora-blue transition group-hover:text-aurora-pink"
                >
                  Voir le projet
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
