"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { HP_SPRING_CURSOR } from "@/animations/easings";
import { cn } from "@/lib/utils";

type CursorState = "default" | "hover-link" | "hover-button" | "hover-card";

/**
 * CustomCursor — premium cursor replacement for desktop pointer devices.
 * Tracks mouse with spring physics. Changes shape based on context.
 * Auto-hidden on touch devices and when prefers-reduced-motion.
 */
export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, HP_SPRING_CURSOR);
  const dotY = useSpring(mouseY, HP_SPRING_CURSOR);

  // Ring follows with slightly more lag
  const ringSpring = { stiffness: 300, damping: 40, mass: 0.6 };
  const ringX = useSpring(mouseX, ringSpring);
  const ringY = useSpring(mouseY, ringSpring);

  useEffect(() => {
    // Only activate for true pointer (mouse/trackpad) devices
    const isPointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isPointer || prefersReduced) return;

    setIsPointerDevice(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    // Detect hover context for state changes
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestButton = target.closest("button, [role='button'], .cursor-pointer");
      const closestLink = target.closest("a");
      const closestCard = target.closest("[data-cursor='card']");

      if (closestButton) {
        setCursorState("hover-button");
      } else if (closestCard) {
        setCursorState("hover-card");
      } else if (closestLink) {
        setCursorState("hover-link");
      } else {
        setCursorState("default");
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isPointerDevice) return null;

  const ringSize = {
    default: 28,
    "hover-link": 40,
    "hover-button": 44,
    "hover-card": 52,
  }[cursorState];

  const ringColor = {
    default: "rgba(168, 85, 247, 0.5)",
    "hover-link": "rgba(168, 85, 247, 0.7)",
    "hover-button": "rgba(168, 85, 247, 0.8)",
    "hover-card": "rgba(168, 85, 247, 0.4)",
  }[cursorState];

  return (
    <>
      {/* Hide native cursor site-wide when custom cursor is active */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Dot — instant tracking */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full bg-white mix-blend-difference"
        style={{
          width: 7,
          height: 7,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Ring — lagged tracking */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full border"
        style={{
          width: ringSize,
          height: ringSize,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: ringColor,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: ringColor,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Card label */}
      {cursorState === "hover-card" && (
        <motion.div
          className="fixed pointer-events-none z-[9999] rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-black"
          style={{
            x: ringX,
            y: ringY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.15 }}
        >
          View
        </motion.div>
      )}
    </>
  );
}
