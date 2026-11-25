"use client";

import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  className?: string;
}

/**
 * Wrapper komponen yang memastikan seluruh konten langsung terbaca (tidak pernah
 * terjebak di opacity: 0 saat scroll cepat atau tangkapan layar penuh).
 */
export default function FadeIn({
  children,
  fullWidth = false,
  className = "",
}: FadeInProps) {
  return (
    <div className={`${fullWidth ? "w-full" : ""} ${className}`}>
      {children}
    </div>
  );
}
