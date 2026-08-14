"use client";

import { motion } from "framer-motion";
import { HP_EASE } from "@/animations/easings";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { companyData } from "@/data/company";
import { teamData } from "@/data/team";
import { SpecialistVisual } from "@/components/ui/SpecialistVisual";
import {
  Target,
  Eye,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";

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
              <Sparkles className="size-3.5" /> Our Story & Purpose
            </span>
            <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-white">
              Technology Engineered to{" "}
              <span className="hp-gradient-text">Move Businesses Forward</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--hp-text-secondary)] sm:text-lg leading-relaxed">
              {companyData.headline}
            </p>
          </div>
        </Container>
      </section>

      {/* MULTIDISCIPLINARY CAPABILITY SPOTLIGHT */}
      <section className="py-12">
        <Container>
          <SectionHeading
            eyebrow="Multidisciplinary Engineering"
            title="Built by Specialists"
            description="Hyperplane unites expertise across AI, database engineering, cloud infrastructure, full-stack software, UX design, and market growth."
            align="center"
            className="mb-14"
          />

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {teamData.slice(0, 3).map((specialist) => (
              <motion.div
                key={specialist.id}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: HP_EASE },
                }}
              >
                <Card className="group h-full flex flex-col justify-between p-7 border border-[var(--hp-border)] transition-all duration-300 hover:border-[var(--hp-accent-secondary)]/40 hover:shadow-[0_12px_48px_-12px_rgba(168,85,247,0.25)] relative overflow-hidden bg-[var(--hp-card)]">
                  <div>
                    <div className="flex items-start gap-4 mb-5">
                      <SpecialistVisual
                        theme={specialist.visualTheme}
                        initials={specialist.initials}
                        gradient={specialist.avatarGradient}
                        name={specialist.name}
                      />
                      <div>
                        <span className="inline-block rounded-full bg-[var(--hp-accent-primary)]/15 px-2.5 py-0.5 text-[10px] font-semibold text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/30 font-mono">
                          {specialist.department}
                        </span>
                        <h3 className="font-display text-lg font-medium text-white mt-1">
                          {specialist.name}
                        </h3>
                        <p className="text-xs text-[var(--hp-text-tertiary)]">
                          {specialist.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-[var(--hp-text-secondary)] leading-relaxed mb-5">
                      {specialist.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {specialist.skills.slice(0, 4).map((skill, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-[var(--hp-text-secondary)] border border-[var(--hp-border)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[var(--hp-border)] pt-4 mt-2">
                    <span className="text-xs text-[var(--hp-accent-secondary)] font-medium">
                      {specialist.specialization}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Link href="/team">
              <Button variant="secondary" size="md" withArrow>
                Explore All 9 Profiles & Specialists
              </Button>
            </Link>
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

      {/* WHY HYPERPLANE EXISTS & PHILOSOPHY */}
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
                <Link href="/projects">
                  <Button variant="primary" size="md" withArrow>
                    Explore Our Projects
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

      {/* FOUNDING JOURNEY & MILESTONES */}
      <section className="hp-section">
        <Container>
          <SectionHeading
            eyebrow="Company Trajectory"
            title="Our Engineering Journey"
            description="How Hyperplane is progressing from foundational engineering to scalable digital products."
            align="center"
            className="mb-16"
          />

          <div className="relative ml-4 md:ml-32 space-y-12">
            {/* Glowing vertical timeline line */}
            <div
              className="absolute left-0 top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(180deg, var(--hp-accent-secondary) 0%, var(--hp-accent-blue) 60%, transparent 100%)",
              }}
            />

            {companyData.milestones.map((item, idx) => (
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

      {/* CTA */}
      <CTASection />
    </main>
  );
}
