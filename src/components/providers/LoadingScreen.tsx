"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HyperplaneEmblem } from "@/components/ui/HyperplaneLogo";
import { HP_EASE, HP_DUR } from "@/animations/easings";

/** Shows once per browser session. Skips if user prefers reduced motion. */
export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"entering" | "hold" | "leaving">("entering");

  useEffect(() => {
    // Only show on first visit per session
    const alreadySeen = sessionStorage.getItem("hp-loaded");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadySeen || prefersReduced) return;

    sessionStorage.setItem("hp-loaded", "1");
    setVisible(true);

    // Phase timeline: enter → hold → leave
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("leaving"), 1100);
    const t3 = setTimeout(() => setVisible(false), 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--hp-bg)]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: HP_EASE },
          }}
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,0.25) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            {/* Emblem pieces animate in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }}
              animate={{
                opacity: phase !== "entering" ? 1 : 0,
                scale: phase !== "entering" ? 1 : 0.6,
                filter: phase !== "entering" ? "blur(0px)" : "blur(20px)",
              }}
              transition={{ duration: 0.6, ease: HP_EASE }}
            >
              <HyperplaneEmblem className="size-20" />
            </motion.div>

            {/* Wordmark */}
            <motion.div
              className="flex flex-col items-center gap-1 overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              animate={{
                opacity: phase !== "entering" ? 1 : 0,
                y: phase !== "entering" ? 0 : 16,
              }}
              transition={{ duration: 0.5, ease: HP_EASE, delay: 0.15 }}
            >
              <span className="font-brand-title text-xl text-white">
                HYPERPLANE
              </span>
              <span className="font-brand-title text-[10px] text-[var(--hp-accent-secondary)]">
                VISION BEYOND DIMENSIONS
              </span>
            </motion.div>

            {/* Progress bar */}
            <motion.div className="w-48 h-px bg-[var(--hp-border)] overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--hp-accent-secondary)] to-[var(--hp-accent-blue)]"
                initial={{ width: "0%" }}
                animate={{ width: phase === "leaving" ? "100%" : phase === "hold" ? "70%" : "0%" }}
                transition={{ duration: 0.5, ease: HP_EASE }}
              />
            </motion.div>
          </div>

          {/* Blade reveal that sweeps off */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "var(--hp-bg)",
              clipPath: "inset(0 100% 0 0)",
            }}
            animate={
              phase === "leaving"
                ? { clipPath: "inset(0 0% 0 0)" }
                : { clipPath: "inset(0 100% 0 0)" }
            }
            transition={{ duration: 0.5, ease: HP_EASE }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
