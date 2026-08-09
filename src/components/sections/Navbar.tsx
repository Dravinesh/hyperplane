"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/constants/site";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HyperplaneLogo } from "@/components/ui/HyperplaneLogo";
import { HP_EASE } from "@/animations/easings";

export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "hp-glass py-3" : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <HyperplaneLogo variant="full" size="md" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm transition-colors duration-200 hover:text-white pb-0.5",
                  active
                    ? "font-medium text-white"
                    : "text-[var(--hp-text-secondary)]"
                )}
              >
                {link.label}
                {/* Active indicator — sliding underline */}
                <AnimatePresence>
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[var(--hp-accent-secondary)] to-[var(--hp-accent-blue)] rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: HP_EASE }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact">
            <Button size="md" variant="primary" withArrow className="group">
              Start a project
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.93 }}
          className="flex size-10 items-center justify-center rounded-full border border-[var(--hp-border)] text-white lg:hidden"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X className="size-4" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu className="size-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: HP_EASE }}
            className="overflow-hidden hp-glass lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link, idx) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.25, ease: HP_EASE }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center py-2.5 text-sm transition-colors hover:text-white",
                        active
                          ? "font-medium text-[var(--hp-accent-secondary)]"
                          : "text-[var(--hp-text-secondary)]"
                      )}
                    >
                      {active && (
                        <span className="mr-2 h-1 w-1 rounded-full bg-[var(--hp-accent-secondary)]" />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
              >
                <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 w-full block">
                  <Button size="md" variant="primary" className="w-full" noMagnet>
                    Start a project
                  </Button>
                </Link>
                <p className="pt-4 text-xs text-[var(--hp-text-tertiary)]">
                  {site.email}
                </p>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
