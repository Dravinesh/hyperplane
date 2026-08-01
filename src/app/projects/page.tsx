"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { projectsData, type ProjectCaseStudy } from "@/data/projects";
import {
  Briefcase,
  Layers,
  ArrowUpRight,
  X,
  Quote,
  Clock,
  Cpu,
  BarChart3,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = ["All", "Financial Technology", "Supply Chain & Logistics", "Consumer Marketplace", "Healthcare Analytics", "Clean Energy", "Digital Media & Streaming"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.industry === activeCategory);

  return (
    <SmoothScrollProvider>
      <Navbar />
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
                <Briefcase className="size-3.5" /> Scalable Portfolio Architecture
              </span>
              <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-white">
                Featured Case Studies & <span className="hp-gradient-text">Engineered Impact</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base text-[var(--hp-text-secondary)] sm:text-lg">
                Explore how we partner with forward-thinking enterprises to solve complex software challenges with high-performance architectures.
              </p>
            </div>
          </Container>
        </section>

        {/* CATEGORY FILTER TABS */}
        <section className="py-6 border-y border-[var(--hp-border)] bg-[var(--hp-surface)]/50">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--hp-accent-primary)] text-white shadow-[var(--hp-shadow-glow-violet)]"
                      : "bg-white/[0.04] text-[var(--hp-text-secondary)] hover:text-white border border-[var(--hp-border)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* PROJECTS GRID */}
        <section className="hp-section">
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <Card className="h-full flex flex-col justify-between overflow-hidden p-0 group border border-[var(--hp-border)]">
                    {/* Generative Dark Visual Cover */}
                    <div
                      className={`relative h-48 w-full bg-gradient-to-br ${project.accentGradient} p-6 flex flex-col justify-between border-b border-[var(--hp-border)]`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white border border-white/10">
                          {project.industry}
                        </span>
                        <span className="font-mono text-xs text-white/60">
                          {project.year}
                        </span>
                      </div>

                      <div>
                        <span className="font-mono text-xs text-[var(--hp-accent-secondary)] block">
                          CASE STUDY //
                        </span>
                        <h3 className="font-display text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-[var(--hp-text-secondary)] line-clamp-3 leading-relaxed mb-6">
                          {project.summary}
                        </p>

                        {/* Top Metric */}
                        <div className="mb-6 rounded-xl border border-[var(--hp-border)] bg-black/40 p-3.5 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-[var(--hp-text-tertiary)] uppercase tracking-wider block">
                              Key Result
                            </span>
                            <span className="text-xs text-[var(--hp-text-secondary)]">
                              {project.metrics[0].detail}
                            </span>
                          </div>
                          <span className="font-display text-xl font-bold text-[var(--hp-accent-secondary)]">
                            {project.metrics[0].value}
                          </span>
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-[var(--hp-text-secondary)] border border-[var(--hp-border)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        onClick={() => setActiveModalProject(project)}
                        variant="secondary"
                        size="md"
                        className="w-full flex items-center justify-center gap-2 group-hover:border-white/30"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="size-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* DETAILED PROJECT MODAL */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[var(--hp-radius-xl)] border border-[var(--hp-border-strong)] bg-[var(--hp-card)] p-6 md:p-10 shadow-2xl hp-noise"
              >
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute right-6 top-6 flex size-9 items-center justify-center rounded-full border border-[var(--hp-border)] bg-black/40 text-[var(--hp-text-secondary)] hover:text-white"
                >
                  <X className="size-4" />
                </button>

                {/* Modal Header */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-full bg-[var(--hp-accent-primary)]/20 px-3 py-1 text-xs font-semibold text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/30">
                    {activeModalProject.industry}
                  </span>
                  <span className="text-xs text-[var(--hp-text-tertiary)] font-mono">
                    Timeline: {activeModalProject.timeline}
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
                  {activeModalProject.title}
                </h2>
                <p className="text-base text-[var(--hp-text-secondary)] leading-relaxed mb-8">
                  {activeModalProject.summary}
                </p>

                {/* Metrics Highlights */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
                  {activeModalProject.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[var(--hp-border-strong)] bg-black/50 p-4 text-center"
                    >
                      <span className="font-display text-2xl font-bold text-[var(--hp-accent-secondary)] block">
                        {m.value}
                      </span>
                      <span className="text-xs font-medium text-white block mt-1">
                        {m.label}
                      </span>
                      <span className="text-[10px] text-[var(--hp-text-tertiary)] block mt-0.5">
                        {m.detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Problem vs Solution */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
                  <div className="rounded-2xl border border-[var(--hp-border)] bg-red-950/10 p-6">
                    <h3 className="font-display text-base font-semibold text-red-400 mb-2">
                      The Challenge / Problem
                    </h3>
                    <p className="text-xs text-[var(--hp-text-secondary)] leading-relaxed">
                      {activeModalProject.problem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--hp-border)] bg-emerald-950/10 p-6">
                    <h3 className="font-display text-base font-semibold text-emerald-400 mb-2">
                      Engineered Solution
                    </h3>
                    <p className="text-xs text-[var(--hp-text-secondary)] leading-relaxed">
                      {activeModalProject.solution}
                    </p>
                  </div>
                </div>

                {/* Client Quote */}
                <div className="rounded-2xl border border-[var(--hp-border)] bg-gradient-to-r from-[var(--hp-accent-primary)]/10 to-transparent p-6 mb-8 relative overflow-hidden">
                  <Quote className="absolute right-4 bottom-4 size-16 text-white/5 pointer-events-none" />
                  <p className="italic text-sm text-[var(--hp-text)] leading-relaxed mb-4">
                    "{activeModalProject.clientQuote.quote}"
                  </p>
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      {activeModalProject.clientQuote.author}
                    </span>
                    <span className="text-[11px] text-[var(--hp-text-tertiary)] block">
                      {activeModalProject.clientQuote.role}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--hp-border)] pt-6">
                  <div>
                    <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-2">
                      Technologies Employed
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-xs text-[var(--hp-text-secondary)] border border-[var(--hp-border)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/contact?project=${encodeURIComponent(activeModalProject.title)}`}>
                    <Button variant="primary" size="md" withArrow>
                      Build Similar Architecture
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
