"use client";

import { motion } from "framer-motion";
import { problem } from "@/lib/content";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { Container, AnimatedSection } from "@/components/ui";

export function SectionProblem() {
  return (
    <section className="section bg-bg-primary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text */}
          <AnimatedSection>
            <h2 className="text-h2-mobile lg:text-h2 font-bold text-text-primary mb-6">
              {problem.title}
            </h2>
            <div className="space-y-4 text-text-secondary">
              {problem.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base lg:text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: paragraph.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-text-primary">$1</strong>'
                    ),
                  }}
                />
              ))}
            </div>
            <p className="mt-6 text-sm text-text-muted">{problem.source}</p>
          </AnimatedSection>

          {/* Right Column - Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {problem.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="p-6 bg-bg-card border border-border-subtle rounded-card"
              >
                <div className="font-mono text-4xl lg:text-5xl font-medium text-text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-text-secondary mb-1">{stat.label}</p>
                <p className="text-xs text-text-muted">{stat.source}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
