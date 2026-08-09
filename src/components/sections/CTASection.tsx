"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";
import { HpBackground } from "@/components/ui/HpBackground";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[var(--hp-radius-xl)] border border-[var(--hp-border)] px-8 py-20 text-center md:px-16 md:py-28"
          style={{ background: "var(--hp-gradient-brand-soft)" }}
        >
          {/* Background layers */}
          <HpBackground glow beam noise glowOrigin="50% 50%" glowIntensity={1.3} />

          {/* Decorative diagonal shards — logo-inspired */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <svg className="absolute inset-0 h-full w-full opacity-10" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="cta-shard" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                  <stop offset="50%" stopColor="#c084fc" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="350" x2="800" y2="50" stroke="url(#cta-shard)" strokeWidth="2" />
              <line x1="0" y1="380" x2="800" y2="80" stroke="url(#cta-shard)" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-2xl font-display text-[clamp(1.9rem,4vw,3.1rem)] font-medium leading-[1.1] text-white"
          >
            Let&apos;s build the system your business actually needs.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[var(--hp-text-secondary)]"
          >
            Tell us the problem. We&apos;ll tell you the technology that solves it.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="primary" withArrow>
                Start a project
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Talk to an engineer
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
