"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";
import { motion } from "framer-motion";

const points = [
  {
    label: "Who we are",
    copy: "A technology company built by engineers, for businesses that need real systems — not another template.",
  },
  {
    label: "Why we exist",
    copy: "Too many businesses are sold websites when what they need is technology that solves the problem underneath.",
  },
  {
    label: "What makes us different",
    copy: "We start with the business problem, then choose the technology — AI, software, or infrastructure — that actually solves it.",
  },
];

export function BrandIdentity() {
  return (
    <section id="about" className="hp-section relative">
      <Container>
        <SectionHeading
          eyebrow="Brand identity"
          title="Beyond dimensions means beyond the surface."
          description="We exist at the intersection of business strategy and engineering — the plane where technology decisions actually move a company forward."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-px overflow-hidden rounded-[var(--hp-radius-lg)] border border-[var(--hp-border)] md:grid-cols-3"
        >
          {points.map((point) => (
            <motion.div
              key={point.label}
              variants={fadeUp}
              className="bg-[var(--hp-surface)] p-8"
            >
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--hp-accent-secondary)]">
                {point.label}
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-white/90">
                {point.copy}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
