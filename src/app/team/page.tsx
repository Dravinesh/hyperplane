"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  teamData,
  teamHeading,
  teamTagline,
  teamSupportingText,
  teamCategories,
  type SpecialistCategory,
} from "@/data/team";
import { SpecialistVisual } from "@/components/ui/SpecialistVisual";
import {
  Layers,
  Sparkles,
  Code2,
  ArrowRight,
  Filter,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";
import { HP_EASE } from "@/animations/easings";

export default function TeamPage() {
  const [activeCategory, setActiveCategory] =
    useState<SpecialistCategory>("All");

  const filteredSpecialists =
    activeCategory === "All"
      ? teamData
      : teamData.filter((s) => s.category === activeCategory);

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
              <Layers className="size-3.5" /> Multidisciplinary Capabilities
            </span>
            <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-white">
              {teamHeading}
            </h1>
            <p className="mt-3 font-brand-title text-sm md:text-base text-[var(--hp-accent-secondary)] tracking-[0.25em]">
              {teamTagline}
            </p>
            <p className="mt-5 max-w-2xl text-base text-[var(--hp-text-secondary)] sm:text-lg leading-relaxed">
              {teamSupportingText}
            </p>
          </div>
        </Container>
      </section>

      {/* DISCIPLINE FILTER BAR */}
      <section className="py-4 border-y border-[var(--hp-border)] bg-[var(--hp-surface)]/40 sticky top-[72px] z-30 backdrop-blur-md">
        <Container>
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {teamCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 shrink-0 border ${
                    isActive
                      ? "border-[var(--hp-accent-secondary)] bg-[var(--hp-accent-primary)]/20 text-white shadow-[var(--hp-shadow-glow-violet)]"
                      : "border-[var(--hp-border)] bg-black/40 text-[var(--hp-text-secondary)] hover:text-white hover:border-[var(--hp-border-strong)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SPECIALIST CARDS GRID */}
      <section className="hp-section">
        <Container>
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredSpecialists.map((specialist) => (
                <motion.div
                  key={specialist.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: HP_EASE }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.3, ease: HP_EASE },
                  }}
                >
                  <Card className="group h-full flex flex-col justify-between p-7 md:p-8 border border-[var(--hp-border)] transition-all duration-300 hover:border-[var(--hp-accent-secondary)]/40 hover:shadow-[0_16px_56px_-12px_rgba(168,85,247,0.25)] relative overflow-hidden bg-[var(--hp-card)]">
                    {/* Subtle ambient hover glow */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div>
                      {/* Specialist Visual & Identifier */}
                      <div className="flex items-start gap-4 mb-6">
                        <SpecialistVisual
                          theme={specialist.visualTheme}
                          initials={specialist.initials}
                          gradient={specialist.avatarGradient}
                          name={specialist.name}
                        />
                        <div className="flex-1">
                          <span className="inline-block rounded-full bg-[var(--hp-accent-primary)]/15 px-2.5 py-0.5 text-[10px] font-semibold text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/30 font-mono tracking-wider">
                            {specialist.department}
                          </span>
                          <h2 className="font-display text-xl font-medium text-white mt-1.5">
                            {specialist.name}
                          </h2>
                          <p className="text-xs text-[var(--hp-text-tertiary)] mt-0.5 font-medium">
                            {specialist.role}
                          </p>
                        </div>
                      </div>

                      {/* Specialization Line */}
                      <div className="mb-4 rounded-xl border border-[var(--hp-border)] bg-black/40 px-3.5 py-2">
                        <span className="text-[10px] uppercase font-mono text-[var(--hp-text-tertiary)] block">
                          Specialization
                        </span>
                        <span className="text-xs text-[var(--hp-accent-secondary)] font-medium">
                          {specialist.specialization}
                        </span>
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-[var(--hp-text-secondary)] leading-relaxed mb-6">
                        {specialist.bio}
                      </p>

                      {/* Skill Tags */}
                      <div className="mb-6">
                        <span className="text-[10px] uppercase font-semibold text-[var(--hp-text-tertiary)] tracking-wider block mb-2 font-mono">
                          Technical Arsenal
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {specialist.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-[var(--hp-text-secondary)] border border-[var(--hp-border)] transition-colors group-hover:border-[var(--hp-border-strong)] group-hover:text-white"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Indicator */}
                    <div className="flex items-center justify-between border-t border-[var(--hp-border)] pt-4 mt-2">
                      <span className="text-[11px] font-mono text-[var(--hp-text-tertiary)]">
                        Capability Domain //
                      </span>
                      <div className="flex items-center gap-1 text-xs font-medium text-[var(--hp-accent-secondary)] group-hover:text-white transition-colors">
                        <span>Deploy Capability</span>
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* MULTIDISCIPLINARY CAPABILITY BANNER */}
      <section className="py-12">
        <Container>
          <div className="hp-glass rounded-[var(--hp-radius-xl)] p-8 md:p-12 border border-[var(--hp-border-strong)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-semibold text-[var(--hp-accent-secondary)] uppercase tracking-wider font-mono">
                Full-Lifecycle Technology Partner
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-white mt-1">
                Assemble Your Dedicated Engineering Squad
              </h3>
              <p className="mt-2 text-sm text-[var(--hp-text-secondary)] max-w-xl leading-relaxed">
                From AI model development and database optimization to cloud infrastructure and UX design systems, Hyperplane deploys specialized squads tailored to your exact roadmap.
              </p>
            </div>

            <Link href="/contact">
              <Button variant="primary" size="lg" withArrow>
                Start a conversation
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
