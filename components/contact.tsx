"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
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
          eyebrow="Contact"
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
              <h3 className="text-lg font-semibold text-white">Canaux directs</h3>
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
              <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">Réseaux</h4>
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
                Nom et prénom
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                  placeholder="Votre nom"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                Email professionnel
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                  placeholder="vous@entreprise.fr"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Sujet
              <input
                type="text"
                name="subject"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                placeholder="Parlez-nous de votre projet"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Message
              <textarea
                name="message"
                rows={5}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                placeholder="Décrivez vos besoins, vos objectifs et vos contraintes."
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight shadow-neon transition hover:bg-slate-100"
            >
              Envoyer le message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
