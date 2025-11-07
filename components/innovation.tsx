"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Brain, Cpu, Zap, Wifi } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const innovationCards = [
  {
    title: "IAS Glass",
    description: "Lunettes IA autonomes. Vision augmentée, interaction vocale et analyse contextuelle en temps réel.",
    icon: Brain,
    gradient: "from-aurora-blue/20 to-aurora-pink/20",
  },
  {
    title: "Robotics & Embedded AI",
    description: "Robots de service, IA embarquée, edge computing. IAS intègre ROS2 et TensorFlow Lite pour créer des systèmes autonomes.",
    icon: Cpu,
    gradient: "from-aurora-violet/20 to-aurora-blue/20",
  },
  {
    title: "Automation & RPA",
    description: "Automatisation cognitive : agents IA capables d'interagir avec vos outils métiers, vos APIs et vos données.",
    icon: Zap,
    gradient: "from-aurora-pink/20 to-aurora-violet/20",
  },
  {
    title: "IoT & Smart Systems",
    description: "Connecter le monde physique et numérique : capteurs intelligents, monitoring, maintenance prédictive.",
    icon: Wifi,
    gradient: "from-emerald-400/20 to-aurora-blue/20",
  },
];

export default function Innovation() {
  const { language } = useLanguage();
  const t = translations[language].innovation;

  return (
    <section id="innovation" className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 opacity-30" />
        <motion.div
          className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-aurora-violet/30 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-gray-100 md:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{t.title}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg text-gray-100/90 md:text-xl"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="https://ias-glass.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-neon transition-all duration-300 hover:bg-emerald-500 hover:shadow-glow"
            >
              {t.ctaButton}
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Innovation Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {innovationCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="glass-card group flex h-full flex-col gap-5 p-6 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
            >
              {/* Icon Container */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-neon">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`} />
                <card.icon className="relative h-6 w-6 text-emerald-400" />
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-100">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-100/80">
                  {card.description}
                </p>
              </div>

              {/* Bottom border animation */}
              <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
