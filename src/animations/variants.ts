import type { Variants } from "framer-motion";
import { HP_EASE, HP_EASE_SOFT, HP_DUR } from "./easings";

/** Shared easing curve — matches --hp-ease in the design system. */
export { HP_EASE };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: HP_DUR.slow, ease: HP_EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: HP_DUR.slow, ease: HP_EASE } },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: HP_DUR.slow, ease: HP_EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: HP_DUR.base, ease: HP_EASE },
  },
};

/** Slides in from left (for timelines, step indicators). */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: HP_DUR.slow, ease: HP_EASE },
  },
};

/** Slides in from right. */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: HP_DUR.slow, ease: HP_EASE },
  },
};

/** Clip-path reveal — content sweeps in from bottom (word/line reveal). */
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: HP_DUR.slow, ease: HP_EASE },
  },
};

/** For large headline words — clip-path upward sweep. */
export const wordReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: HP_DUR.slow, ease: HP_EASE },
  },
};

/** Subtle lift — for cards on hover via whileHover. */
export const hoverLift = {
  y: -6,
  transition: { duration: HP_DUR.fast, ease: HP_EASE },
};

/** Applies to a parent to stagger any children using fadeUp/scaleIn/etc. */
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const viewportOnce = { once: true, margin: "-80px" } as const;

/** Page transition overlay — the Hyperplane blade wipe. */
export const pageTransitionOut: Variants = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.35, ease: HP_EASE },
  },
  exit: {
    clipPath: "inset(0 0 0 100%)",
    transition: { duration: 0.3, ease: HP_EASE_SOFT },
  },
};
