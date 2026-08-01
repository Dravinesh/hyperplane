"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "mark" | "image";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showTagline?: boolean;
};

/**
 * Hyperplane Official Logo component
 * Renders the exact brand logo (H-emblem with diagonal hyperplane shard)
 */
export function HyperplaneLogo({
  variant = "full",
  size = "md",
  className,
  showTagline = false,
}: LogoProps) {
  if (variant === "image") {
    return (
      <div className={cn("relative inline-flex flex-col items-center", className)}>
        <Image
          src="/logo.jpg"
          alt="Hyperplane — Vision Beyond Dimensions"
          width={size === "sm" ? 140 : size === "md" ? 180 : size === "lg" ? 240 : 320}
          height={size === "sm" ? 140 : size === "md" ? 180 : size === "lg" ? 240 : 320}
          className="object-contain rounded-xl"
          priority
        />
      </div>
    );
  }

  const markSizes = {
    sm: "size-6",
    md: "size-8",
    lg: "size-12",
    xl: "size-20",
  };

  const textSizes = {
    sm: "text-sm tracking-[0.2em]",
    md: "text-base tracking-[0.25em]",
    lg: "text-xl tracking-[0.3em]",
    xl: "text-3xl tracking-[0.35em]",
  };

  return (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      <HyperplaneEmblem className={markSizes[size]} />
      {variant === "full" && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-display font-bold uppercase text-white leading-none",
              textSizes[size]
            )}
          >
            Hyperplane
          </span>
          {showTagline && (
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--hp-accent-secondary)] mt-1">
              Vision Beyond Dimensions
            </span>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Exact Vector SVG Emblem of the Hyperplane 'H' Glyph with Diagonal Shard
 */
export function HyperplaneEmblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      <defs>
        {/* Main purple/violet gradient for pillars */}
        <linearGradient id="hp-pillar-grad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>

        {/* High-intensity diagonal blade shard gradient */}
        <linearGradient id="hp-shard-grad" x1="15" y1="65" x2="85" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e9d5ff" />
          <stop offset="35%" stopColor="#c084fc" />
          <stop offset="70%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="hp-emblem-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Left Pillar */}
      <polygon
        points="36,18 45,10 45,65 36,65"
        fill="url(#hp-pillar-grad)"
      />

      {/* Right Pillar */}
      <polygon
        points="57,26 66,19 66,65 57,65"
        fill="url(#hp-pillar-grad)"
      />

      {/* Sharp Diagonal Hyperplane Shard */}
      <polygon
        points="17,60 50,45 83,31 50,54"
        fill="url(#hp-shard-grad)"
        filter="url(#hp-emblem-glow)"
      />
    </svg>
  );
}
