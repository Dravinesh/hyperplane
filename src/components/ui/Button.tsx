"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { forwardRef } from "react";

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
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withArrow, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={cn(buttonStyles({ variant, size }), className)}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
