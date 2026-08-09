"use client";

import { cn } from "@/lib/utils";

interface HpBackgroundProps {
  /** Glow layer — radial purple ambient */
  glow?: boolean;
  /** Fine grid overlay */
  grid?: boolean;
  /** Film grain noise texture */
  noise?: boolean;
  /** Slow-sweeping diagonal beam */
  beam?: boolean;
  className?: string;
  /** Position of the radial glow (e.g. "50% 0%", "0% 50%") */
  glowOrigin?: string;
  /** Glow intensity 0-1 */
  glowIntensity?: number;
}

/**
 * HpBackground — Reusable layered background component.
 * Mount as the first child of a `relative overflow-hidden` section.
 * All layers are aria-hidden and pointer-events-none.
 */
export function HpBackground({
  glow = true,
  grid = false,
  noise = false,
  beam = false,
  className,
  glowOrigin = "50% 50%",
  glowIntensity = 1,
}: HpBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Radial glow layer */}
      {glow && (
        <div
          className="absolute inset-0 hp-bg-glow-pulse"
          style={{
            background: `radial-gradient(60% 60% at ${glowOrigin}, rgba(139,92,246,${0.32 * glowIntensity}) 0%, rgba(124,58,237,${0.12 * glowIntensity}) 40%, transparent 70%)`,
          }}
        />
      )}

      {/* Fine grid overlay */}
      {grid && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 0%, black 40%, transparent 80%)",
          }}
        />
      )}

      {/* Film grain noise */}
      {noise && (
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      )}

      {/* Slow diagonal light beam */}
      {beam && (
        <div
          className="absolute hp-bg-beam"
          style={{
            top: "-20%",
            left: "-10%",
            width: "60%",
            height: "200%",
            background:
              "linear-gradient(115deg, transparent 0%, rgba(168,85,247,0.04) 45%, transparent 55%, transparent 100%)",
            transform: "rotate(-15deg)",
          }}
        />
      )}
    </div>
  );
}
