"use client";

import { useState, useCallback } from "react";
import type { CSSProperties, RefCallback } from "react";

interface UseScrollRevealOptions {
  delay?: number;
  threshold?: number;
}

interface UseScrollRevealResult {
  ref: RefCallback<HTMLElement>;
  className: string;
  style: CSSProperties;
}

export function useScrollReveal(
  options: UseScrollRevealOptions = {},
): UseScrollRevealResult {
  const { delay = 0, threshold = 0.15 } = options;

  const prefersReduced =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [isVisible, setIsVisible] = useState(prefersReduced);

  const ref: RefCallback<HTMLElement> = useCallback(
    (node) => {
      if (!node || prefersReduced) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold },
      );

      observer.observe(node);
    },
    [prefersReduced, threshold],
  );

  if (prefersReduced) {
    return { ref: () => {}, className: "", style: {} };
  }

  return {
    ref,
    className: isVisible
      ? "opacity-100 translate-y-0 transition-[opacity,transform] duration-500 ease-out"
      : "opacity-0 translate-y-4",
    style: delay > 0 ? { transitionDelay: `${delay}ms` } : {},
  };
}
