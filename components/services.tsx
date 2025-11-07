"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { SectionHeading } from "@/components/section-heading";

export function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-aurora-blue/20 via-aurora-pink/20 to-aurora-violet/20 blur-3xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="glass-card group flex h-full flex-col gap-5 p-6 transition-transform duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ translateY: -6 }}
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-neon">
                <div className="absolute inset-0 rounded-2xl bg-aurora-blue/0 blur-xl transition group-hover:bg-aurora-blue/30" />
                <service.icon className="relative h-5 w-5 text-aurora-blue" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-slate-300">{service.description}</p>
              </div>
              {service.benefit && (
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition group-hover:border-white/20 group-hover:text-white">
                  {service.benefit}
                </div>
              )}
              <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
