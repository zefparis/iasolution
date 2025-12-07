"use client";

import { motion } from "framer-motion";
import { MapPin, User } from "lucide-react";
import { founder } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui";

export function SectionFounder() {
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
          <span className="badge mb-6 inline-block">{founder.label}</span>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-purple/30 to-accent-indigo/30 flex items-center justify-center border border-white/[0.1]">
                  <User className="w-12 h-12 text-accent-purple" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {founder.name}
                </h3>
                <p className="text-accent-purple font-medium mb-6">
                  {founder.role}
                </p>

                <div className="space-y-3 mb-6">
                  {founder.bio.map((line, index) => (
                    <p key={index} className="text-text-secondary leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2 text-text-muted">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{founder.location}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
