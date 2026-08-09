"use client";

import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/constants/site";
import Link from "next/link";
import { HyperplaneLogo } from "@/components/ui/HyperplaneLogo";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--hp-border)] py-14 overflow-hidden">
      {/* Subtle glow at bottom of page */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[80px] opacity-20"
        style={{ background: "var(--hp-gradient-radial-glow)" }}
      />

      <Container className="relative flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <motion.div
          className="flex flex-col items-center gap-3 md:items-start"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <HyperplaneLogo variant="full" size="md" showTagline={true} />
          </Link>
        </motion.div>

        <motion.nav
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[var(--hp-text-secondary)]"
        >
          {navLinks.map((link) => (
            <motion.div key={link.href} variants={fadeUp}>
              <Link
                href={link.href}
                className="hp-link transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div variants={fadeUp}>
            <a
              href={`mailto:${site.email}`}
              className="hp-link transition-colors duration-200 hover:text-white"
            >
              {site.email}
            </a>
          </motion.div>
        </motion.nav>
      </Container>

      <Container className="relative mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--hp-border)] pt-6 text-xs text-[var(--hp-text-tertiary)] md:flex-row">
        <p>© {new Date().getFullYear()} Hyperplane. All rights reserved.</p>
        <p>Built with engineering, not templates.</p>
      </Container>
    </footer>
  );
}
