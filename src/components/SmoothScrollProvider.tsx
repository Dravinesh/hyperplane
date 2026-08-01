"use client";

import { useLenis } from "@/hooks/useLenis";

/** Thin client boundary so the root page can stay a server component. */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
