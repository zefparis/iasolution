"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { buttonHover } from "@/lib/animations";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  size?: "default" | "large";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg";

  const variants = {
    primary:
      "bg-accent-blue text-white hover:bg-accent-blue-light disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "bg-transparent text-text-primary border border-border-subtle hover:border-border-hover hover:bg-bg-card",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <Link href={href as LinkProps<string>["href"]} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
