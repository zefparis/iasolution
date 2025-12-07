"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto max-w-[1200px] px-6 lg:px-12 ${className}`}
    >
      {children}
    </Component>
  );
}
