"use client";

import { motion } from "framer-motion";
import { HP_EASE } from "@/animations/easings";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { companyData } from "@/data/company";
import {
  Target,
  Eye,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  Milestone,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
                <Sparkles className="size-3.5" /> Our Story & Vision
              </span>
              <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-white">
                Engineered to Rebuild How Enterprise Software{" "}
                <span className="hp-gradient-text">Is Built</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base text-[var(--hp-text-secondary)] sm:text-lg">
                Hyperplane was founded on a simple principle: enterprise technology should be fast, deterministic, and built with zero unnecessary overhead.
              </p>
            </div>
          </Container>
        </section>

        {/* MISSION & VISION DUAL CARDS */}
        <section className="py-12">
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full p-8 md:p-10 border border-[var(--hp-border-strong)] bg-gradient-to-b from-[var(--hp-card)] to-[var(--hp-surface)]">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[var(--hp-accent-primary)]/10 text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/20">
                    <Target className="size-6" />
                  </div>
                  <h2 className="font-display text-2xl font-medium text-white mb-4">
                    Our Mission
                  </h2>
                  <p className="text-base text-[var(--hp-text-secondary)] leading-relaxed">
                    {companyData.mission}
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full p-8 md:p-10 border border-[var(--hp-border-strong)] bg-gradient-to-b from-[var(--hp-card)] to-[var(--hp-surface)]">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[var(--hp-accent-blue)]/10 text-[var(--hp-accent-blue)] border border-[var(--hp-accent-blue)]/20">
                    <Eye className="size-6" />
                  </div>
                  <h2 className="font-display text-2xl font-medium text-white mb-4">
                    Our Vision
                  </h2>
                  <p className="text-base text-[var(--hp-text-secondary)] leading-relaxed">
                    {companyData.vision}
                  </p>
                </Card>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* WHY HYPERPLANE EXISTS */}
        <section className="hp-section bg-[var(--hp-surface)]/40 border-y border-[var(--hp-border)]">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Core Purpose"
                  title="Why Hyperplane Exists"
                  description={companyData.whyWeExist}
                />
                <div className="mt-8">
                  <Link href="/process">
                    <Button variant="primary" size="md" withArrow>
                      Explore Our Process
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <h3 className="font-display text-xl font-medium text-white mb-6">
                  Our Engineering Philosophy
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {companyData.engineeringPhilosophy.map((pillar, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="hp-card p-6"
                    >
                      <h4 className="font-display text-base font-medium text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="size-4 text-[var(--hp-accent-secondary)] shrink-0" />
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[var(--hp-text-secondary)] leading-relaxed">
                        {pillar.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* COMPANY TIMELINE */}
        <section className="hp-section">
          <Container>
            <SectionHeading
              eyebrow="Milestones"
              title="Company Timeline & Growth"
              description="A track record of technological milestones shaping our future trajectory."
              align="center"
              className="mb-16"
            />

            <div className="relative ml-4 md:ml-32 space-y-12">
              {/* Glowing vertical timeline line */}
              <div
                className="absolute left-0 top-2 bottom-2 w-px"
                style={{
                  background: "linear-gradient(180deg, var(--hp-accent-secondary) 0%, var(--hp-accent-blue) 60%, transparent 100%)",
                }}
              />

              {companyData.timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: HP_EASE }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline dot — glowing */}
                  <motion.div
                    className="absolute -left-[9px] top-1.5 size-4 rounded-full border-2 border-[var(--hp-accent-secondary)] bg-[var(--hp-bg)]"
                    initial={{ boxShadow: "0 0 0 0 rgba(168,85,247,0)" }}
                    whileInView={{ boxShadow: "0 0 16px 4px rgba(168,85,247,0.5)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 + 0.3 }}
                  />

                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                    <span className="font-display text-2xl font-bold text-[var(--hp-accent-secondary)]">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl font-medium text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-2 max-w-2xl text-sm text-[var(--hp-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* FUTURE GOALS */}
        <section className="py-12">
          <Container>
            <div className="hp-glass rounded-[var(--hp-radius-xl)] p-8 md:p-12 border border-[var(--hp-border-strong)]">
              <div className="flex items-center gap-3 mb-6">
                <Milestone className="size-6 text-[var(--hp-accent-secondary)]" />
                <h3 className="font-display text-2xl font-medium text-white">
                  Future Roadmap & Strategic Goals
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {companyData.futureGoals.map((goal, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[var(--hp-border)] bg-black/40 p-5 text-sm text-[var(--hp-text-secondary)] leading-relaxed"
                  >
                    <span className="font-mono text-xs text-[var(--hp-accent-secondary)] block mb-2">
                      0{idx + 1} //
                    </span>
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
  );
}
