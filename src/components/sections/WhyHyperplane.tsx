"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars } from "@/constants/pillars";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";
import { HP_EASE } from "@/animations/easings";
import { motion } from "framer-motion";
import { HpBackground } from "@/components/ui/HpBackground";

export function WhyHyperplane() {
  return (
    <section id="why" className="hp-section relative overflow-hidden">
      <HpBackground glow glowOrigin="100% 50%" glowIntensity={0.8} />

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
                whileHover={{
                  y: -4,
                  borderColor: "rgba(168, 85, 247, 0.3)",
                  transition: { duration: 0.28, ease: HP_EASE },
                }}
                className="flex gap-5 rounded-[var(--hp-radius-lg)] border border-[var(--hp-border)] bg-[var(--hp-surface)] p-7 transition-colors duration-300 hover:bg-[var(--hp-card-hover)]"
              >
                <motion.div
                  className="flex size-11 shrink-0 items-center justify-center rounded-[var(--hp-radius-sm)] bg-gradient-to-br from-[var(--hp-accent-secondary)]/20 to-[var(--hp-accent-blue)]/10 ring-1 ring-[var(--hp-border)]"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(168, 85, 247, 0.15)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <Icon className="size-5 text-[var(--hp-accent-secondary)]" strokeWidth={1.75} />
                </motion.div>
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
