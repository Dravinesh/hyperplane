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

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-200 hover:text-white",
                  active
                    ? "font-medium text-white underline underline-offset-8 decoration-[var(--hp-accent-secondary)]"
                    : "text-[var(--hp-text-secondary)]"
                )}
              >
                {link.label}
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

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-[var(--hp-border)] text-white lg:hidden"
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
            className="overflow-hidden hp-glass lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "py-2.5 text-sm transition-colors hover:text-white",
                      active
                        ? "font-medium text-[var(--hp-accent-secondary)]"
                        : "text-[var(--hp-text-secondary)]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 w-full">
                <Button size="md" variant="primary" className="w-full">
                  Start a project
                </Button>
              </Link>
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
