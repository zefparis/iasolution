"use client";

import { motion } from "framer-motion";
import { u7Format } from "@/lib/content";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export function SectionU7Format() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">{u7Format.label}</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            {u7Format.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {u7Format.subtitle}
          </p>
        </motion.div>

        {/* Format Specification Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <div className="ascii-diagram">
            <div className="text-accent-purple font-semibold mb-4">
              HCS-U7 IDENTITY FORMAT — v3.2 Hardened
            </div>
            <div className="text-accent-cyan mb-6 break-all">
              Exemple : {u7Format.example}
            </div>
            
            {/* Segments Table */}
            <div className="border border-white/[0.1] rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 bg-white/[0.03] border-b border-white/[0.1]">
                <div className="px-4 py-2 text-xs font-medium text-text-muted uppercase tracking-wider">
                  Segment
                </div>
                <div className="px-4 py-2 text-xs font-medium text-text-muted uppercase tracking-wider">
                  Description
                </div>
              </div>
              {u7Format.segments.map((seg, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-2 ${idx !== u7Format.segments.length - 1 ? "border-b border-white/[0.05]" : ""}`}
                >
                  <div className="px-4 py-2 font-mono text-accent-purple text-sm">
                    {seg.segment}
                  </div>
                  <div className="px-4 py-2 text-text-secondary text-sm">
                    {seg.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Properties */}
            <div className="mt-6 pt-4 border-t border-white/[0.1]">
              <div className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">
                Propriétés :
              </div>
              <ul className="space-y-1">
                {u7Format.properties.map((prop, idx) => (
                  <li key={idx} className="text-sm text-text-secondary">
                    • {prop}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Algorithms Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {u7Format.algorithms.map((algo, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="glass-card p-6"
            >
              <div className="text-2xl font-mono font-bold text-accent-purple mb-2">
                {algo.name}
              </div>
              <h3 className="text-white font-medium mb-3">
                {algo.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {algo.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Fusion Operators */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="ascii-diagram">
            <div className="text-accent-pink font-semibold mb-4">
              {u7Format.fusion.title}
            </div>
            <p className="text-text-secondary text-sm mb-6">
              {u7Format.fusion.description}
            </p>

            {/* Mapping Table */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-xs font-medium text-text-muted uppercase tracking-wider text-center">
                Western Astrology
              </div>
              <div className="text-xs font-medium text-text-muted uppercase tracking-wider text-center">
                BaZi (Four Pillars)
              </div>
              <div className="text-xs font-medium text-text-muted uppercase tracking-wider text-center">
                Fusion Result
              </div>
            </div>
            {u7Format.fusion.mappings.map((mapping, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-4 py-2 border-t border-white/[0.05]">
                <div className="text-sm text-text-secondary text-center">
                  {mapping.western}
                </div>
                <div className="text-sm text-text-secondary text-center">
                  {mapping.bazi}
                </div>
                <div className="text-sm text-accent-purple text-center font-medium">
                  {mapping.result}
                </div>
              </div>
            ))}

            {/* Notes */}
            <div className="mt-6 pt-4 border-t border-white/[0.1]">
              <ul className="space-y-1">
                {u7Format.fusion.notes.map((note, idx) => (
                  <li key={idx} className="text-sm text-text-secondary">
                    → {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
