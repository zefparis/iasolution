"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { productHCS } from "@/lib/content";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export function SectionProductHCS() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.03] to-transparent" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <span className="badge mb-6 inline-block">{productHCS.label}</span>
            
            <h2 className="text-h1-mobile lg:text-h1 font-semibold text-white mb-2">
              {productHCS.title}
            </h2>
            <p className="text-xl text-accent-purple font-medium mb-6">
              {productHCS.subtitle}
            </p>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              {productHCS.headline}
            </p>

            <ul className="space-y-3 mb-10">
              {productHCS.description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-accent-purple mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={productHCS.cta1Href as LinkProps<string>["href"]}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-accent-purple to-accent-indigo text-white font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300"
              >
                {productHCS.cta1}
              </Link>
              <Link
                href={productHCS.cta2Href as LinkProps<string>["href"]}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white font-medium hover:bg-white/[0.06] hover:border-accent-purple/30 transition-all duration-300"
              >
                {productHCS.cta2}
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {productHCS.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="glass-card p-6 text-center"
                >
                  <div className="text-3xl lg:text-4xl font-mono font-bold text-white mb-2">
                    {stat.value}
                    <span className="text-accent-purple">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
