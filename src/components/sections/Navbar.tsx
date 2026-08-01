"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/constants/site";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "hp-glass py-3" : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <HyperplaneMark />
          <span className="font-display text-[1.05rem] font-medium tracking-tight text-white">
            Hyperplane
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--hp-text-secondary)] transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="md" variant="primary" withArrow className="group">
            Start a project
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-[var(--hp-border)] text-white md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden hp-glass md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm text-[var(--hp-text-secondary)] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button size="md" variant="primary" className="mt-3 w-full">
                Start a project
              </Button>
              <p className="pt-4 text-xs text-[var(--hp-text-tertiary)]">
                {site.email}
              </p>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HyperplaneMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="navmark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <path
        d="M6 3v18M6 3l12 8-12 8M18 3v18"
        stroke="url(#navmark)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
