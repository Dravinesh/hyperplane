"use client";

import { motion, useTransform } from "framer-motion";
import { HyperplaneEmblem } from "@/components/ui/HyperplaneLogo";
import { useMouseParallax } from "@/hooks/useMouseParallax";

/**
 * Signature element: intersecting plane geometry with the official Hyperplane Emblem at center.
 * Phase 3 — Enhanced with mouse parallax depth layers.
 * Three translucent quadrilaterals on independent slow rotation,
 * cut through by one bright diagonal shard. Layers respond to cursor.
 */
export function HeroVisual() {
  const { x: mx, y: my, onMouseMove, onMouseLeave } = useMouseParallax(18);

  // Different parallax depths for each layer
  const plane1X = useTransform(mx, (v) => v * 0.6);
  const plane1Y = useTransform(my, (v) => v * 0.6);
  const plane2X = useTransform(mx, (v) => v * -0.4);
  const plane2Y = useTransform(my, (v) => v * -0.4);
  const plane3X = useTransform(mx, (v) => v * 0.3);
  const plane3Y = useTransform(my, (v) => v * 0.8);
  const cardX = useTransform(mx, (v) => v * -0.2);
  const cardY = useTransform(my, (v) => v * -0.2);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[560px] flex items-center justify-center"
      aria-hidden
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: "var(--hp-gradient-radial-glow)" }}
      />

      {/* SVG Plane Layer */}
      <svg
        viewBox="0 0 560 560"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="planeA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="planeB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="planeC" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="shard" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#d8b4fe" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <filter id="shardGlow" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Plane A — far layer, slowest parallax */}
        <motion.g style={{ x: plane1X, y: plane1Y }}>
          <motion.polygon
            points="120,90 340,60 380,240 160,270"
            fill="url(#planeA)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            animate={{ rotate: [0, 6, 0], y: [0, -10, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "250px 165px" }}
          />
        </motion.g>

        {/* Plane B — mid layer */}
        <motion.g style={{ x: plane2X, y: plane2Y }}>
          <motion.polygon
            points="200,220 440,180 470,400 230,430"
            fill="url(#planeB)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            animate={{ rotate: [0, -5, 0], y: [0, 8, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "350px 305px" }}
          />
        </motion.g>

        {/* Plane C — close layer */}
        <motion.g style={{ x: plane3X, y: plane3Y }}>
          <motion.polygon
            points="90,320 300,300 330,480 120,500"
            fill="url(#planeC)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            animate={{ rotate: [0, 4, 0], y: [0, -6, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "210px 400px" }}
          />
        </motion.g>

        {/* Diagonal shard */}
        <motion.line
          x1="40"
          y1="470"
          x2="520"
          y2="90"
          stroke="url(#shard)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#shardGlow)"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Secondary fine shard */}
        <motion.line
          x1="80"
          y1="440"
          x2="480"
          y2="120"
          stroke="url(#shard)"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>

      {/* Floating Center Glass Card — subtle parallax */}
      <motion.div
        style={{ x: cardX, y: cardY }}
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 p-8 md:p-10 rounded-3xl hp-glass border border-[var(--hp-border-strong)] flex flex-col items-center justify-center text-center shadow-[0_0_80px_rgba(168,85,247,0.35)]"
        data-cursor="card"
      >
        <HyperplaneEmblem className="size-28 md:size-36" />
        <span className="font-brand-title text-xl md:text-2xl text-white mt-4">
          HYPERPLANE
        </span>
        <span className="font-brand-title text-[10px] md:text-xs text-[var(--hp-accent-secondary)] mt-1.5">
          VISION BEYOND DIMENSIONS
        </span>
      </motion.div>
    </div>
  );
}
