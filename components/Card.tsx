"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  kpi?: string;
  stack?: string;
}

export default function Card({ title, description, icon: Icon, kpi, stack }: CardProps) {
  return (
    <motion.div
      className="glass-card p-6 md:p-8 flex flex-col gap-4 hover:neon-border transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Icone si présente */}
      {Icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-glass">
          <Icon className="w-6 h-6 text-gradient" />
        </div>
      )}

      {/* Titre */}
      <h3 className="text-xl font-semibold text-gradient">{title}</h3>

      {/* Description */}
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>

      {/* Infos additionnelles */}
      {kpi && (
        <span className="text-sm font-medium text-sky-400">
          {kpi}
        </span>
      )}
      {stack && (
        <span className="text-xs text-slate-400 italic">
          Stack : {stack}
        </span>
      )}
    </motion.div>
  );
}
