"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type CardProps = Omit<HTMLMotionProps<"div">, "children"> & {
  glow?: boolean;
  children?: React.ReactNode;
};

/** Base surface for service cards, pillar cards, and project cards. */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "hp-card group relative overflow-hidden p-7",
          className
        )}
        whileHover={glow ? { y: -4 } : undefined}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      >
        {glow && (
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(320px circle at var(--x,50%) var(--y,0%), rgba(139,92,246,0.12), transparent 60%)",
            }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);
Card.displayName = "Card";
