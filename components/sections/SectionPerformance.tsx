"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { performance as perfContent } from "@/lib/content";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { Container, AnimatedSection } from "@/components/ui";

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono text-4xl lg:text-5xl font-medium text-text-primary">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

export function SectionPerformance() {
  return (
    <section className="section bg-bg-secondary">
      <Container>
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 className="text-h2-mobile lg:text-h2 font-bold text-text-primary mb-4">
            {perfContent.title}
          </h2>
          <p className="text-base lg:text-lg text-text-secondary max-w-2xl mx-auto">
            {perfContent.subtitle}
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {perfContent.metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 lg:p-8 bg-bg-card border border-border-subtle rounded-card text-center"
            >
              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                prefix={metric.prefix || ""}
                decimals={metric.value % 1 !== 0 ? 1 : 0}
              />
              <p className="mt-3 text-sm font-medium text-text-primary">
                {metric.label}
              </p>
              {metric.sublabel && (
                <p className="text-xs text-text-muted">{metric.sublabel}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
