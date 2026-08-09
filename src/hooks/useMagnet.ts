"use client";

import { useRef, useCallback } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";
import { HP_SPRING_SNAPPY } from "@/animations/easings";

interface MagnetProps {
  strength?: number;
}

interface MagnetHandlers {
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/**
 * useMagnet — Returns spring-animated x/y offsets and event handlers
 * that pull the element toward the cursor, snapping back on leave.
 *
 * Apply x/y to the element's motion style.
 * Only effective on pointer/mouse devices.
 */
export function useMagnet({ strength = 8 }: MagnetProps = {}): MagnetHandlers {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, HP_SPRING_SNAPPY);
  const y = useSpring(rawY, HP_SPRING_SNAPPY);
  const ref = useRef<DOMRect | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      // Only run for true pointer devices
      if (!window.matchMedia("(pointer: fine)").matches) return;
      const el = (e.currentTarget as HTMLElement).getBoundingClientRect();
      ref.current = el;
      const cx = el.left + el.width / 2;
      const cy = el.top + el.height / 2;
      const dx = (e.clientX - cx) / (el.width / 2);
      const dy = (e.clientY - cy) / (el.height / 2);
      rawX.set(dx * strength);
      rawY.set(dy * strength);
    },
    [rawX, rawY, strength]
  );

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { onMouseMove, onMouseLeave, x, y };
}
