"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="a-propos" className="relative">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 md:px-6">
        <SectionHeading
          eyebrow="Agence"
          title={about.title}
          description={about.content}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card flex flex-col gap-4 p-6"
          >
            <h3 className="text-lg font-semibold text-white">Notre approche</h3>
            <p className="text-sm text-slate-300">
              Nous intégrons design, développement et IA dans un processus agile et transparent. Chaque mission est pensée comme un partenariat long terme avec un objectif : transformer vos ambitions digitales en résultats concrets.
            </p>
            <p className="text-sm text-slate-300">
              Notre équipe pluridisciplinaire collabore étroitement avec vos parties prenantes pour concevoir des expériences premium, fiables et évolutives.
            </p>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="glass-card flex flex-col gap-4 p-6"
          >
            <h3 className="text-lg font-semibold text-white">Ce qui nous distingue</h3>
            {about.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-aurora-blue" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="glass-card flex flex-col gap-4 p-6">
            <h3 className="text-lg font-semibold text-white">Leadership</h3>
            <p className="text-sm text-slate-300">
              Une équipe senior qui combine stratégie, engineering et cybersécurité pour piloter vos programmes les plus sensibles.
            </p>
            <ul className="flex flex-col gap-4">
              {about.team.map((member) => (
                <li key={member.name} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left">
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-aurora-blue/80">{member.role}</p>
                  <p className="mt-2 text-sm text-slate-300">{member.bio}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card flex flex-col gap-4 p-6">
            <h3 className="text-lg font-semibold text-white">Certifications & partenaires</h3>
            <p className="text-sm text-slate-300">
              Nous travaillons main dans la main avec les leaders cloud et IA pour garantir la conformité et la performance de vos solutions.
            </p>
            <ul className="grid gap-3">
              {about.certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-midnight/40 px-4 py-2 text-sm text-white/80"
                >
                  <span>{cert.name}</span>
                  <span className="text-xs uppercase tracking-[0.28em] text-white/50">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
