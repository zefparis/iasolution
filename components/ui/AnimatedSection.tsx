"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  variants = fadeUp,
  delay = 0,
}: AnimatedSectionProps) {
  const customVariants: Variants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        ...(typeof variants.visible === "object" && "transition" in variants.visible
          ? variants.visible.transition
          : {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
