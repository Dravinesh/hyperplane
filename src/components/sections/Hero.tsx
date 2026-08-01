"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroVisual } from "./HeroVisual";
import { blurIn, fadeUp, stagger } from "@/animations/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { HyperplaneEmblem } from "@/components/ui/HyperplaneLogo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <AmbientGlow />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-7"
        >
          {/* Exact Logo Format Lockup */}
          <motion.div variants={fadeUp} className="flex flex-col items-start gap-1.5">
            <div className="flex items-center gap-3">
              <HyperplaneEmblem className="size-8" />
              <span className="font-display text-2xl font-bold uppercase tracking-[0.3em] text-white sm:text-3xl">
                HYPERPLANE
              </span>
            </div>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-[var(--hp-accent-secondary)] pl-11">
              VISION BEYOND DIMENSIONS
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-2">
            <Eyebrow>Technology, engineered around your business</Eyebrow>
          </motion.div>

          <motion.h1
            variants={blurIn}
            className="font-display text-[clamp(2.3rem,4.8vw,4.1rem)] font-medium leading-[1.08] text-white"
          >
            We solve business
            <br />
            problems with{" "}
            <span className="hp-gradient-text">technology</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-lg leading-relaxed text-[var(--hp-text-secondary)]"
          >
            <strong className="font-display uppercase tracking-[0.15em] text-white font-semibold">
              HYPERPLANE
            </strong>{" "}
            is not a web design agency. We build AI systems, custom software, and cloud infrastructure that move your business forward — engineering first, always.
          </motion.p>

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

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}

function AmbientGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute left-1/2 top-[-10%] h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "var(--hp-gradient-radial-glow)" }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, black 40%, transparent 80%)",
        }}
      />
    </div>
  );
}
