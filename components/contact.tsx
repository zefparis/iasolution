"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/content";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    console.info("Formulaire contact soumis", data);
    form.reset();
  };

  return (
    <section id="contact" className="relative">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 md:px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={contact.title}
          description={contact.description}
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card flex flex-col gap-6 p-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{t.directChannels}</h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
                <a href={`mailto:${contact.email}`} className="transition hover:text-white">
                  {contact.email}
                </a>
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="transition hover:text-white">
                  {contact.phone}
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">{t.networks}</h4>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm text-slate-300">
                {contact.socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-white/20 hover:text-white"
                    >
                      <span>{social.name}</span>
                      <span className="text-white/60">{social.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {contact.externalCta && (
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-sm font-semibold text-white">
                  {contact.externalCta.description}
                </p>
                <a
                  href={contact.externalCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-violet px-5 py-2.5 text-sm font-semibold text-white shadow-neon transition hover:from-aurora-pink hover:to-aurora-violet"
                >
                  {contact.externalCta.label}
                  <span aria-hidden>→</span>
                </a>
              </div>
            )}
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="glass-card flex flex-col gap-4 p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                {t.formName}
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                  placeholder={t.formNamePlaceholder}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                {t.formEmail}
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                  placeholder={t.formEmailPlaceholder}
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              {t.formSubject}
              <input
                type="text"
                name="subject"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                placeholder={t.formSubjectPlaceholder}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              {t.formMessage}
              <textarea
                name="message"
                rows={5}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                placeholder={t.formMessagePlaceholder}
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight shadow-neon transition hover:bg-slate-100"
            >
              {t.formSubmit}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
