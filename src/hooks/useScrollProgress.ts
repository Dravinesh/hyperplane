"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollProgressReturn {
  ref: React.RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  /** Mapped 0–1 value transformed to any output range */
  mapProgress: (outputRange: number[]) => MotionValue<number>;
}

/**
 * useScrollProgress — tracks scroll progress of a specific element
 * relative to the viewport.
 *
 * Usage:
 *   const { ref, mapProgress } = useScrollProgress();
 *   const opacity = mapProgress([0, 0.5, 1], [0, 1, 0]);
 *   <motion.div ref={ref} style={{ opacity }} />
 */
export function useScrollProgress(): ScrollProgressReturn {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });

  const mapProgress = (outputRange: number[]) =>
    useTransform(scrollYProgress, [0, 1], outputRange);

  return { ref, scrollYProgress, mapProgress };
}
