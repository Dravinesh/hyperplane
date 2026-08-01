"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars } from "@/constants/pillars";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";
import { motion } from "framer-motion";

export function WhyHyperplane() {
  return (
    <section id="why" className="hp-section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/4 h-[420px] w-[420px] rounded-full blur-[140px]"
        style={{ background: "var(--hp-gradient-radial-glow)" }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why hyperplane"
          title="Trust, built through an engineering mindset."
          description="Not vendor promises — the working habits that determine whether a system holds up two years after launch."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                variants={fadeUp}
                className="flex gap-5 rounded-[var(--hp-radius-lg)] border border-[var(--hp-border)] bg-[var(--hp-surface)] p-7 transition-colors duration-300 hover:border-[var(--hp-border-strong)]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-[var(--hp-radius-sm)] bg-gradient-to-br from-[var(--hp-accent-secondary)]/20 to-[var(--hp-accent-blue)]/10 ring-1 ring-[var(--hp-border)]">
                  <Icon className="size-5 text-[var(--hp-accent-secondary)]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-[1.05rem] font-medium text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--hp-text-secondary)]">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
