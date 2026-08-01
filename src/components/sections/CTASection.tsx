"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";
import { motion } from "framer-motion";

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
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "var(--hp-gradient-brand-soft)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
            style={{ background: "var(--hp-gradient-radial-glow)" }}
          />

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
          <motion.div variants={fadeUp} className="mt-9 flex justify-center gap-4">
            <Button size="lg" variant="primary" withArrow>
              Start a project
            </Button>
            <Button size="lg" variant="secondary">
              Talk to an engineer
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
