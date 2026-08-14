"use client";

import { useState } from "react";
import Image from "next/image";
import { HyperplaneEmblem } from "@/components/ui/HyperplaneLogo";
import { cn } from "@/lib/utils";

type FounderAvatarProps = {
  src: string;
  name: string;
  initials: string;
  gradient: string;
  className?: string;
};

/**
 * FounderAvatar — Renders founder portrait if present in /public/team/,
 * otherwise seamlessly displays an elegant on-brand geometric avatar.
 */
export function FounderAvatar({
  src,
  name,
  initials,
  gradient,
  className,
}: FounderAvatarProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        "relative flex size-20 md:size-24 items-center justify-center overflow-hidden rounded-2xl border border-[var(--hp-border-strong)] bg-gradient-to-br shadow-xl shrink-0 transition-transform duration-500 group-hover:scale-105",
        gradient,
        className
      )}
    >
      {/* Background geometric accents */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,white_0%,transparent_70%)]" />
      <div className="absolute -right-4 -bottom-4 size-16 rounded-full bg-black/40 blur-sm" />

      {!imageError ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 768px) 80px, 96px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setImageError(true)}
        />
      ) : null}

      {/* Elegant fallback if image file is not yet dropped in */}
      {imageError && (
        <div className="relative z-10 flex flex-col items-center justify-center">
          <HyperplaneEmblem className="size-6 opacity-40 mb-0.5" />
          <span className="font-brand-title text-base md:text-lg text-white font-normal tracking-[0.2em]">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
