"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function ServicesSection() {
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
          eyebrow="Services"
          title="Des solutions technologiques sur-mesure"
          description="Nous associons design, développement et intelligence artificielle pour créer des expériences digitales performantes et élégantes."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="glass-card group flex h-full flex-col gap-4 p-6 transition-transform duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ translateY: -6 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-neon">
                <service.icon className="h-5 w-5 text-aurora-blue" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-slate-300">{service.description}</p>
              </div>
              <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
