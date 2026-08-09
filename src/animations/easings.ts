/**
 * Hyperplane Brand Easing Constants
 * All motion in the website should use one of these curves.
 * Never scatter arbitrary cubic-bezier values throughout components.
 */

/** Primary easing — snappy entrance, high output tension. Used for reveals, cards. */
export const HP_EASE = [0.16, 1, 0.3, 1] as const;

/** Soft easing — slightly gentler entry. Used for large elements, backgrounds. */
export const HP_EASE_SOFT = [0.22, 1, 0.36, 1] as const;

/** In-out easing — symmetric curve for loops, pulsing, ambient motion. */
export const HP_EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

/** Out exponential — fast start, cushioned stop. Used for page transitions. */
export const HP_EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** Spring config for magnetic/cursor effects — snappy but physical. */
export const HP_SPRING_SNAPPY = { stiffness: 400, damping: 30, mass: 0.8 } as const;

/** Spring config for floating elements — gentle, dreamy. */
export const HP_SPRING_GENTLE = { stiffness: 120, damping: 20, mass: 1 } as const;

/** Spring config for cursor ring — ultra responsive. */
export const HP_SPRING_CURSOR = { stiffness: 800, damping: 60, mass: 0.4 } as const;

/** Duration constants in seconds */
export const HP_DUR = {
  instant: 0.12,
  fast: 0.22,
  base: 0.42,
  slow: 0.7,
  cinematic: 1.0,
} as const;
