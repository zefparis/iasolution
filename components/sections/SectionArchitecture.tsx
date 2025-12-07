"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Key, Activity, Star, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Lock,
  Shield,
  Key,
  Activity,
  Star,
  Zap,
};

export function SectionArchitecture() {
  const { content } = useLanguage();
  const architecture = content.architecture;

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
          <span className="badge mb-6 inline-block">{architecture.label}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {architecture.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {architecture.subtitle}
          </p>
        </motion.div>

        {/* ASCII Diagram */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <div className="ascii-diagram overflow-x-auto max-w-full">
            <pre className="text-[10px] sm:text-xs lg:text-sm leading-tight">
              {architecture.diagram}
            </pre>
          </div>
        </motion.div>

        {/* Security Modules Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {architecture.modules.map((module, idx) => {
            const Icon = iconMap[module.icon];
            const isSpecial = module.phase === "EXCLUSIVITÉ" || module.phase === "PERFORMANCE";

            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className={`glass-card p-6 ${isSpecial ? "border-accent-purple/30" : ""}`}
              >
                {/* Phase Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isSpecial 
                      ? "bg-gradient-to-br from-accent-purple/30 to-accent-pink/30" 
                      : "bg-white/[0.05]"
                  }`}>
                    <Icon className={`w-5 h-5 ${isSpecial ? "text-accent-purple" : "text-text-secondary"}`} />
                  </div>
                  <div>
                    <span className={`text-xs font-medium uppercase tracking-wider ${
                      isSpecial ? "text-accent-purple" : "text-text-muted"
                    }`}>
                      {module.phase}
                    </span>
                    <h3 className="text-white font-medium">{module.title}</h3>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-2">
                  {module.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-accent-purple mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* API Endpoints */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Endpoints API
          </h3>
          <div className="code-block">
            <div className="space-y-2">
              {architecture.endpoints.map((endpoint, idx) => (
                <div key={idx} className="flex items-start gap-4 text-sm">
                  <span className={`font-mono font-medium w-14 ${
                    endpoint.method === "POST" ? "text-green-400" :
                    endpoint.method === "GET" ? "text-blue-400" :
                    endpoint.method === "PATCH" ? "text-yellow-400" : "text-text-secondary"
                  }`}>
                    {endpoint.method}
                  </span>
                  <span className="font-mono text-accent-purple flex-shrink-0">
                    {endpoint.path}
                  </span>
                  <span className="text-text-muted">
                    // {endpoint.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
