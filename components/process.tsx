"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { getContent } from "@/lib/content-i18n";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection() {
  const { language } = useLanguage();
  const t = translations[language].process;
  const content = getContent(language);
  const processSteps = content.processSteps;

  return (
    <section id="process" className="relative">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 sm:gap-10 sm:px-6 md:gap-12 md:py-20 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          align="center"
        />
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="absolute left-6 top-4 bottom-4 hidden w-px bg-gradient-to-b from-aurora-blue/0 via-aurora-blue/40 to-aurora-pink/0 md:block" />
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="glass-card group relative flex flex-col gap-3 rounded-3xl border-white/5 p-4 pl-10 sm:gap-4 sm:p-6 sm:pl-12 md:pl-20"
            >
              <div className="md:absolute md:-left-12 md:top-6 md:flex md:h-10 md:w-10 md:items-center md:justify-center">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-midnight/70 shadow-neon">
                  <div className="absolute inset-0 rounded-full bg-aurora-blue/0 blur-md transition group-hover:bg-aurora-pink/40" />
                  <span className="relative text-sm font-semibold text-white/90">{index + 1}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{step.title}</h3>
                  <p className="text-xs text-slate-300 sm:text-sm">{step.description}</p>
                </div>
                <ul className="flex flex-wrap gap-1.5 text-[10px] text-slate-400 sm:gap-2 sm:text-xs">
                  {step.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="rounded-full border border-white/10 bg-midnight/40 px-3 py-1"
                    >
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
