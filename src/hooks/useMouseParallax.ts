"use client";

import { useCallback } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";
import { HP_SPRING_GENTLE } from "@/animations/easings";

interface MouseParallaxReturn {
  x: MotionValue<number>;
  y: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

/**
 * useMouseParallax — returns spring-animated offsets based on cursor
 * position relative to the viewport center. Use to create depth parallax
 * on hero visuals.
 *
 * @param strength - Max translation in px (default 15)
 */
export function useMouseParallax(strength = 15): MouseParallaxReturn {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, HP_SPRING_GENTLE);
  const y = useSpring(rawY, HP_SPRING_GENTLE);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!window.matchMedia("(pointer: fine)").matches) return;
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const ny = (e.clientY / innerHeight - 0.5) * 2;
      rawX.set(nx * strength);
      rawY.set(ny * strength);
    },
    [rawX, rawY, strength]
  );

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { x, y, onMouseMove, onMouseLeave };
}
