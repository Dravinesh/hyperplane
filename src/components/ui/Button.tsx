"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { forwardRef } from "react";
import { useMagnet } from "@/hooks/useMagnet";

const buttonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-[var(--hp-accent-primary)] hover:bg-[var(--hp-accent-highlight)] shadow-[var(--hp-shadow-glow-violet)]",
        secondary:
          "text-white bg-white/[0.04] border border-[var(--hp-border-strong)] hover:bg-white/[0.08] hover:border-white/20",
        ghost: "text-[var(--hp-text-secondary)] hover:text-white",
      },
      size: {
        md: "h-11 px-5 text-sm rounded-[var(--hp-radius-full)]",
        lg: "h-[52px] px-7 text-[0.95rem] rounded-[var(--hp-radius-full)]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> &
  VariantProps<typeof buttonStyles> & {
    withArrow?: boolean;
    children?: React.ReactNode;
    /** Disable magnetic pull (e.g. in loading states) */
    noMagnet?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withArrow, children, noMagnet, onMouseMove, onMouseLeave, ...props }, ref) => {
    const magnet = useMagnet({ strength: variant === "primary" ? 6 : 4 });

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={cn(buttonStyles({ variant, size }), className)}
        style={noMagnet ? undefined : { x: magnet.x, y: magnet.y }}
        onMouseMove={noMagnet ? onMouseMove : (e) => { magnet.onMouseMove(e); onMouseMove?.(e); }}
        onMouseLeave={noMagnet ? onMouseLeave : (e) => { magnet.onMouseLeave(); onMouseLeave?.(e as React.MouseEvent<HTMLButtonElement>); }}
        {...props}
      >
        {children}
        {withArrow && (
          <motion.span
            className="inline-flex"
            initial={false}
            whileHover={{ x: 2, y: -2 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <ArrowUpRight
              className="size-4"
              strokeWidth={2}
            />
          </motion.span>
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
