"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function PortfolioSection() {
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

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Nos créations numériques"
          description="Une sélection de projets développés par notre équipe. Chaque solution reflète notre expertise en design, développement et intelligence artificielle."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className="glass-card group flex h-full flex-col gap-6 p-6 transition-transform duration-300"
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
                <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-gradient">
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
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
              <Link
                href={project.link.url}
                target={project.link.url.startsWith("http") ? "_blank" : undefined}
                rel={project.link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-auto flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-aurora-blue/50 hover:bg-aurora-blue/10 hover:text-aurora-blue hover:shadow-glow"
              >
                {project.link.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-gradient-to-r from-aurora-blue via-aurora-pink to-aurora-violet opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
