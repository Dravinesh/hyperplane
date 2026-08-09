"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/constants/projects";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";
import { HP_EASE } from "@/animations/easings";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function FeaturedProjects() {
  return (
    <section id="work" className="hp-section relative">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured work"
            title="Case studies, engineered to scale."
            description="Explore our recent architecture deployments across fintech, logistics, and retail."
          />
        </div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {featuredProjects.map((project, idx) => (
            <motion.div key={project.id} variants={fadeUp} data-cursor="card">
              <Link href="/projects" className="block h-full">
                <motion.div
                  whileHover={{ y: -6, borderColor: "rgba(168, 85, 247, 0.35)" }}
                  transition={{ duration: 0.35, ease: HP_EASE }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--hp-radius-lg)] border border-[var(--hp-border)] bg-[var(--hp-surface)] p-7 pt-40"
                  style={{ boxShadow: "0 0 0 0 rgba(124,58,237,0)" }}
                >
                  {/* Top gradient cover */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-44 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "var(--hp-gradient-brand-soft)" }}
                  />

                  {/* Diagonal shard accent — top of card */}
                  <div
                    aria-hidden
                    className="absolute inset-x-6 top-8 h-px"
                    style={{ background: "var(--hp-gradient-brand)" }}
                  />

                  {/* Project number reveal on hover */}
                  <motion.span
                    className="absolute top-5 left-7 font-mono text-[11px] font-bold text-[var(--hp-accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden
                  >
                    {String(idx + 1).padStart(2, "0")} //
                  </motion.span>

                  <div className="relative z-10">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--hp-text-tertiary)]">
                      {project.discipline} · {project.year}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-medium text-white">
                      {project.client}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--hp-text-secondary)]">
                      {project.summary}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center gap-1.5 text-sm font-medium text-[var(--hp-accent-secondary)]">
                    View case study
                    <motion.span
                      className="inline-flex"
                      animate={{ x: 0, y: 0 }}
                      whileHover={{ x: 2, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
