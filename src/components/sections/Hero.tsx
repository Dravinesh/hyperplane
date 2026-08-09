"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroVisual } from "./HeroVisual";
import { HpBackground } from "@/components/ui/HpBackground";
import { blurIn, fadeUp, stagger } from "@/animations/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { HyperplaneEmblem } from "@/components/ui/HyperplaneLogo";
import { HP_EASE } from "@/animations/easings";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      {/* Phase 3 Background system */}
      <HpBackground glow grid noise glowOrigin="50% 0%" glowIntensity={1.1} />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left column — staggered cinematic reveal */}
        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-7"
        >
          {/* Exact Logo Format Lockup */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-1.5 overflow-hidden"
          >
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: HP_EASE, delay: 0.05 }}
            >
              <HyperplaneEmblem className="size-8" />
              <span className="font-brand-title text-2xl text-white sm:text-3xl">
                HYPERPLANE
              </span>
            </motion.div>
            <motion.span
              className="font-brand-title text-xs text-[var(--hp-accent-secondary)] pl-11"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: HP_EASE, delay: 0.2 }}
            >
              VISION BEYOND DIMENSIONS
            </motion.span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-2">
            <Eyebrow>Technology, engineered around your business</Eyebrow>
          </motion.div>

          {/* Headline — blur-in reveal */}
          <motion.h1
            variants={blurIn}
            className="font-display text-[clamp(2.3rem,4.8vw,4.1rem)] font-medium leading-[1.08] text-white"
          >
            We solve business
            <br />
            problems with{" "}
            <span className="hp-gradient-text">technology</span>.
          </motion.h1>

          {/* Body copy */}
          <motion.p
            variants={fadeUp}
            className="max-w-lg text-lg leading-relaxed text-[var(--hp-text-secondary)]"
          >
            <strong className="font-display uppercase tracking-[0.15em] text-white font-semibold">
              HYPERPLANE
            </strong>{" "}
            is not a web design agency. We build AI systems, custom software, and cloud infrastructure that move your business forward — engineering first, always.
          </motion.p>

          {/* CTA pair */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button size="lg" variant="primary" withArrow className="group">
                Start a project
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="secondary">
                See our work
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column — visual enter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: HP_EASE, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}
