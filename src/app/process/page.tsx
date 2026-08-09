"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";
import { HP_EASE } from "@/animations/easings";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { processStepsData, type ProcessStep } from "@/data/process";
import {
  Search,
  Compass,
  Target,
  Palette,
  Code,
  CheckCircle2,
  Rocket,
  LifeBuoy,
  ArrowRight,
  Clock,
  FileCheck,
  Check,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Search,
  Compass,
  Target,
  Figma: Palette,
  Code,
  CheckCircle2,
  Rocket,
  LifeBuoy,
};

export default function ProcessPage() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = processStepsData[activeStepIndex];

  return (
    <main className="hp-noise pt-28 pb-20">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)] blur-3xl"
          />
          <Container>
            <div className="flex flex-col items-center text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--hp-border-strong)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-[var(--hp-accent-secondary)]">
                <Rocket className="size-3.5" /> Engineering Methodology
              </span>
              <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-white">
                An Interactive 8-Step <span className="hp-gradient-text">Engineering Workflow</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base text-[var(--hp-text-secondary)] sm:text-lg">
                From initial discovery to continuous production SRE support, our structured engineering pipeline ensures predictable velocity, zero rework, and maximum software quality.
              </p>
            </div>
          </Container>
        </section>

        {/* STEP SELECTOR TRACK (PROGRESSIVE BAR) */}
        <section className="py-8 bg-[var(--hp-surface)]/60 border-y border-[var(--hp-border)] sticky top-[72px] z-40 backdrop-blur-md">
          <Container>
            <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-3 pb-2 pt-1">
              {processStepsData.map((step, idx) => {
                const IconComponent = iconMap[step.iconName] || Code;
                const isActive = activeStepIndex === idx;
                const isPassed = activeStepIndex > idx;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium transition-all shrink-0 border ${
                      isActive
                        ? "border-[var(--hp-accent-secondary)] bg-[var(--hp-accent-primary)]/20 text-white shadow-[var(--hp-shadow-glow-violet)]"
                        : isPassed
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                        : "border-[var(--hp-border)] bg-black/40 text-[var(--hp-text-secondary)] hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex size-5 items-center justify-center rounded-full text-[10px] ${
                        isActive
                          ? "bg-[var(--hp-accent-secondary)] text-white"
                          : isPassed
                          ? "bg-emerald-500 text-black font-bold"
                          : "bg-white/10 text-[var(--hp-text-secondary)]"
                      }`}
                    >
                      {isPassed ? <Check className="size-3" /> : step.stepNumber}
                    </span>
                    <span>{step.title}</span>
                  </button>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ACTIVE STEP INSPECTION DETAIL PANEL */}
        <section className="hp-section">
          <Container>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="hp-glass rounded-[var(--hp-radius-xl)] p-8 md:p-12 border border-[var(--hp-border-strong)]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[var(--hp-border)] pb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-[var(--hp-accent-primary)]/20 text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/30">
                      {(() => {
                        const Icon = iconMap[activeStep.iconName] || Code;
                        return <Icon className="size-7" />;
                      })()}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold text-[var(--hp-accent-secondary)] uppercase tracking-wider">
                        Phase 0{activeStep.stepNumber} of 08
                      </span>
                      <h2 className="font-display text-3xl font-medium text-white">
                        {activeStep.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-[var(--hp-border)] bg-black/40 px-4 py-2 text-xs text-[var(--hp-text-secondary)] self-start md:self-auto">
                    <Clock className="size-4 text-[var(--hp-accent-secondary)]" />
                    <span>Typical Duration: <strong className="text-white">{activeStep.duration}</strong></span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div>
                      <h3 className="font-display text-lg font-medium text-white mb-2">
                        {activeStep.shortTagline}
                      </h3>
                      <p className="text-base text-[var(--hp-text-secondary)] leading-relaxed">
                        {activeStep.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                        Key Engineering Activities
                      </h4>
                      <div className="flex flex-col gap-2">
                        {activeStep.keyActivities.map((act, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 rounded-lg border border-[var(--hp-border)] bg-black/30 p-3 text-xs text-[var(--hp-text-secondary)]"
                          >
                            <span className="size-2 rounded-full bg-[var(--hp-accent-secondary)]" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="rounded-2xl border border-[var(--hp-border)] bg-[var(--hp-surface)] p-6">
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                        <FileCheck className="size-4 text-[var(--hp-accent-blue)]" />
                        Inputs & Prerequisites
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {activeStep.inputs.map((inp, idx) => (
                          <li key={idx} className="text-xs text-[var(--hp-text-secondary)] flex items-start gap-2">
                            <span className="text-[var(--hp-text-tertiary)]">•</span>
                            <span>{inp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-[var(--hp-accent-primary)]/30 bg-[var(--hp-accent-primary)]/10 p-6">
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[var(--hp-accent-secondary)]" />
                        Output Deliverables
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {activeStep.deliverables.map((deliv, idx) => (
                          <li key={idx} className="text-xs font-medium text-white flex items-start gap-2">
                            <Check className="size-3.5 text-[var(--hp-accent-secondary)] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-[var(--hp-border)] pt-6">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-medium text-[var(--hp-text-secondary)] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    ← Previous Phase
                  </button>

                  <button
                    disabled={activeStepIndex === processStepsData.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(processStepsData.length - 1, prev + 1))}
                    className="flex items-center gap-1.5 text-xs font-medium text-[var(--hp-accent-secondary)] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </Container>
        </section>

        {/* WORKFLOW PIPELINE GRID (FULL LIST) */}
        <section className="py-12 bg-[var(--hp-surface)]/40 border-t border-[var(--hp-border)]">
          <Container>
            <SectionHeading
              eyebrow="Pipeline Visual"
              title="Sequential Engineering Journey"
              description="A transparent overview of how your project transitions through each milestone."
              align="center"
              className="mb-12"
            />

            <motion.div
              variants={stagger(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {processStepsData.map((step, idx) => {
                const Icon = iconMap[step.iconName] || Code;
                const isActive = activeStepIndex === idx;
                const isPassed = activeStepIndex > idx;
                return (
                  <motion.div key={step.id} variants={fadeUp}>
                    <Card
                      className={`p-6 cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "border-[var(--hp-accent-secondary)] shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                          : isPassed
                          ? "border-emerald-500/30"
                          : ""
                      }`}
                      onClick={() => setActiveStepIndex(idx)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-mono text-xs font-bold ${
                          isActive ? "text-[var(--hp-accent-secondary)]" : isPassed ? "text-emerald-400" : "text-[var(--hp-text-tertiary)]"
                        }`}>
                          STEP 0{step.stepNumber}
                        </span>
                        <motion.div
                          animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                          transition={{ duration: 0.6, ease: HP_EASE }}
                        >
                          <Icon className={`size-5 transition-colors ${
                            isActive ? "text-[var(--hp-accent-secondary)]" : "text-[var(--hp-text-secondary)]"
                          }`} />
                        </motion.div>
                      </div>
                      <h3 className="font-display text-lg font-medium text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[var(--hp-text-secondary)] line-clamp-2 leading-relaxed">
                        {step.shortTagline}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </Container>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
  );
}
