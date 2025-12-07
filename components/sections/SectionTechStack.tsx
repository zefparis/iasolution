"use client";

import { motion } from "framer-motion";
import { Code, Database, Lock, Shield, Brain, Star } from "lucide-react";
import { techStack } from "@/lib/content";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Database,
  Lock,
  Shield,
  Brain,
  Star,
};

const colorMap: Record<string, { bg: string; icon: string }> = {
  Code: { bg: "from-blue-500/20 to-cyan-500/20", icon: "text-blue-400" },
  Database: { bg: "from-green-500/20 to-emerald-500/20", icon: "text-green-400" },
  Lock: { bg: "from-yellow-500/20 to-orange-500/20", icon: "text-yellow-400" },
  Shield: { bg: "from-red-500/20 to-rose-500/20", icon: "text-red-400" },
  Brain: { bg: "from-purple-500/20 to-violet-500/20", icon: "text-purple-400" },
  Star: { bg: "from-pink-500/20 to-fuchsia-500/20", icon: "text-pink-400" },
};

export function SectionTechStack() {
  return (
    <section className="section relative">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">{techStack.label}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {techStack.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {techStack.subtitle}
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techStack.stacks.map((stack, idx) => {
            const Icon = iconMap[stack.icon];
            const colors = colorMap[stack.icon];

            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6 group"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stack.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {stack.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
