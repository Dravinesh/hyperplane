"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HyperplaneEmblem } from "@/components/ui/HyperplaneLogo";

type SpecialistVisualProps = {
  theme: "neural" | "database" | "cloud" | "design" | "nodes" | "trajectory";
  initials: string;
  gradient: string;
  name: string;
  className?: string;
};

export function SpecialistVisual({
  theme,
  initials,
  gradient,
  name,
  className,
}: SpecialistVisualProps) {
  return (
    <div
      className={cn(
        "relative flex size-20 md:size-24 items-center justify-center overflow-hidden rounded-2xl border border-[var(--hp-border-strong)] bg-gradient-to-br shadow-xl shrink-0 transition-transform duration-500 group-hover:scale-105 select-none",
        gradient,
        className
      )}
      aria-label={`${name} specialist visual representation`}
    >
      {/* Background ambient radial layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,transparent_75%)] pointer-events-none" />

      {/* Abstract Domain-Specific Vector Geometries */}
      <svg
        className="absolute inset-0 size-full opacity-40 transition-opacity duration-500 group-hover:opacity-70"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {theme === "neural" && (
          // Neural / Particle Inspired Geometry
          <g>
            <circle cx="50" cy="50" r="32" stroke="white" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="18" stroke="white" strokeWidth="0.5" />
            <line x1="25" y1="25" x2="75" y2="75" stroke="#d8b4fe" strokeWidth="1" />
            <line x1="25" y1="75" x2="75" y2="25" stroke="#d8b4fe" strokeWidth="1" />
            <circle cx="25" cy="25" r="3" fill="#c084fc" />
            <circle cx="75" cy="25" r="3" fill="#818cf8" />
            <circle cx="25" cy="75" r="3" fill="#818cf8" />
            <circle cx="75" cy="75" r="3" fill="#c084fc" />
            <circle cx="50" cy="50" r="4" fill="white" />
          </g>
        )}

        {theme === "database" && (
          // Structured Grid / Data Table Matrix Geometry
          <g>
            <rect x="20" y="24" width="60" height="52" rx="4" stroke="white" strokeWidth="1" fill="rgba(0,0,0,0.2)" />
            <line x1="20" y1="40" x2="80" y2="40" stroke="#818cf8" strokeWidth="1" />
            <line x1="20" y1="56" x2="80" y2="56" stroke="#818cf8" strokeWidth="1" />
            <line x1="45" y1="24" x2="45" y2="76" stroke="#a855f7" strokeWidth="1" />
            <circle cx="32" cy="32" r="2" fill="white" />
            <circle cx="62" cy="32" r="2" fill="#c084fc" />
            <circle cx="32" cy="48" r="2" fill="#818cf8" />
            <circle cx="62" cy="48" r="2" fill="white" />
            <circle cx="32" cy="66" r="2" fill="#c084fc" />
            <circle cx="62" cy="66" r="2" fill="#818cf8" />
          </g>
        )}

        {theme === "cloud" && (
          // Layered Mesh / Cloud Infrastructure Topology
          <g>
            <path
              d="M30 65 C20 65 18 50 28 45 C28 32 45 28 55 35 C62 25 78 30 78 45 C86 48 84 65 72 65 Z"
              stroke="white"
              strokeWidth="1.2"
              fill="rgba(99,102,241,0.2)"
            />
            <path d="M25 75 L75 75" stroke="#c084fc" strokeWidth="1" strokeDasharray="4 2" />
            <circle cx="35" cy="75" r="2.5" fill="white" />
            <circle cx="50" cy="75" r="2.5" fill="#818cf8" />
            <circle cx="65" cy="75" r="2.5" fill="white" />
            <line x1="50" y1="50" x2="50" y2="75" stroke="white" strokeWidth="0.8" />
          </g>
        )}

        {theme === "design" && (
          // Precision Interface Wireframe / Golden Ratio Arc
          <g>
            <rect x="22" y="22" width="56" height="56" rx="8" stroke="white" strokeWidth="1" fill="rgba(0,0,0,0.15)" />
            <circle cx="50" cy="50" r="20" stroke="#f472b6" strokeWidth="1" />
            <rect x="30" y="30" width="16" height="12" rx="2" fill="#c084fc" opacity="0.6" />
            <line x1="52" y1="34" x2="70" y2="34" stroke="white" strokeWidth="1" />
            <line x1="52" y1="40" x2="65" y2="40" stroke="#f472b6" strokeWidth="0.8" />
            <circle cx="70" cy="70" r="3" fill="white" />
          </g>
        )}

        {theme === "nodes" && (
          // Connected Node / Distributed System Graph
          <g>
            <polygon points="50,20 80,40 70,75 30,75 20,40" stroke="#a855f7" strokeWidth="1" fill="rgba(124,58,237,0.15)" />
            <line x1="50" y1="20" x2="70" y2="75" stroke="white" strokeWidth="0.75" />
            <line x1="50" y1="20" x2="30" y2="75" stroke="white" strokeWidth="0.75" />
            <line x1="20" y1="40" x2="80" y2="40" stroke="#c084fc" strokeWidth="0.75" />
            <circle cx="50" cy="20" r="3.5" fill="white" />
            <circle cx="80" cy="40" r="3" fill="#818cf8" />
            <circle cx="70" cy="75" r="3" fill="#c084fc" />
            <circle cx="30" cy="75" r="3" fill="#818cf8" />
            <circle cx="20" cy="40" r="3" fill="white" />
          </g>
        )}

        {theme === "trajectory" && (
          // Growth / Trajectory Vector Shard
          <g>
            <path d="M20 78 Q 45 65 55 45 T 82 22" stroke="white" strokeWidth="1.5" />
            <polygon points="82,22 72,24 78,30" fill="white" />
            <line x1="20" y1="80" x2="80" y2="80" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="20" x2="20" y2="80" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="35" cy="70" r="2.5" fill="#a855f7" />
            <circle cx="55" cy="45" r="3" fill="#2dd4bf" />
            <circle cx="75" cy="28" r="3.5" fill="white" />
          </g>
        )}
      </svg>

      {/* Foreground Specialist Monogram */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <HyperplaneEmblem className="size-4 opacity-30 mb-0.5" />
        <span className="font-brand-title text-sm md:text-base text-white font-normal tracking-[0.25em]">
          {initials}
        </span>
      </div>
    </div>
  );
}
