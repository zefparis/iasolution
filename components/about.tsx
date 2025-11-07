"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { getContent } from "@/lib/content-i18n";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language].about;
  const content = getContent(language);
  const about = content.about;

  return (
    <section id="a-propos" className="relative">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-16 sm:gap-10 sm:px-6 md:py-20 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={about.title}
          description={about.content}
          align="center"
        />
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card flex flex-col gap-4 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{t.approachTitle}</h3>
            <p className="text-sm text-slate-300">
              {t.approachText1}
            </p>
            <p className="text-sm text-slate-300">
              {t.approachText2}
            </p>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="glass-card flex flex-col gap-4 p-6"
          >
            <h3 className="text-base font-semibold text-white sm:text-lg">{t.highlightsTitle}</h3>
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
            <h3 className="text-lg font-semibold text-white">{t.leadershipTitle}</h3>
            <p className="text-sm text-slate-300">
              {t.leadershipText}
            </p>
            <ul className="flex flex-col gap-4">
              {about.team.map((member) => (
                <li key={member.name} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left">
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-aurora-blue/80">{member.role}</p>
                  <ul className="flex flex-col gap-2 text-xs text-slate-300 sm:gap-3 sm:text-sm">{member.bio}</ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card flex flex-col gap-4 p-6">
            <h3 className="text-lg font-semibold text-white">{t.certificationsTitle}</h3>
            <p className="text-sm text-slate-300 sm:text-base md:text-lg">{t.certificationsText}</p>
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
