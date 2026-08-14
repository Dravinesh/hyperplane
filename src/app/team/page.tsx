"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { teamData, teamHeading, teamSupportingText } from "@/data/team";
import { FounderAvatar } from "@/components/ui/FounderAvatar";
import { Users, ExternalLink, Sparkles, Code2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";
import { HP_EASE } from "@/animations/easings";

export default function TeamPage() {
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
              <Users className="size-3.5" /> Founding Team
            </span>
            <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-white">
              {teamHeading}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--hp-text-secondary)] sm:text-lg leading-relaxed">
              {teamSupportingText}
            </p>
          </div>
        </Container>
      </section>

      {/* FOUNDERS GRID */}
      <section className="hp-section">
        <Container>
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {teamData.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: HP_EASE },
                }}
              >
                <Card className="group h-full flex flex-col justify-between p-7 md:p-8 border border-[var(--hp-border)] transition-all duration-300 hover:border-[var(--hp-accent-secondary)]/40 hover:shadow-[0_12px_48px_-12px_rgba(168,85,247,0.25)] relative overflow-hidden">
                  {/* Subtle background glow reaction */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div>
                    {/* Founder Avatar & Identification */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                      <FounderAvatar
                        src={member.image}
                        name={member.name}
                        initials={member.initials}
                        gradient={member.avatarGradient}
                      />
                      <div>
                        <span className="inline-block rounded-full bg-[var(--hp-accent-primary)]/15 px-3 py-0.5 text-[11px] font-semibold text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/30 font-mono tracking-wider">
                          {member.role}
                        </span>
                        <h2 className="font-display text-xl font-medium text-white mt-1.5">
                          {member.name}
                        </h2>
                        <p className="text-xs text-[var(--hp-accent-secondary)] mt-0.5 font-medium">
                          {member.capability}
                        </p>
                      </div>
                    </div>

                    {/* Biography */}
                    <p className="text-sm text-[var(--hp-text-secondary)] leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Skills / Expertise */}
                    <div className="mb-6">
                      <span className="text-[10px] uppercase font-semibold text-[var(--hp-text-tertiary)] tracking-wider block mb-2 font-mono">
                        Key Areas & Technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-[var(--hp-text-secondary)] border border-[var(--hp-border)] transition-colors group-hover:border-[var(--hp-border-strong)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Link (Accessible, opens in new tab) */}
                  <div className="flex items-center justify-between border-t border-[var(--hp-border)] pt-5 mt-2">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${member.name} on LinkedIn`}
                      className="group/link inline-flex items-center gap-2 rounded-full border border-[var(--hp-border)] bg-black/40 px-4 py-2 text-xs font-medium text-[var(--hp-text-secondary)] hover:border-[var(--hp-accent-secondary)] hover:text-white hover:bg-[var(--hp-accent-primary)]/15 transition-all duration-200"
                    >
                      <span className="font-brand-title tracking-[0.2em] text-[11px]">
                        LINKEDIN
                      </span>
                      <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    <span className="font-mono text-[10px] text-[var(--hp-text-tertiary)]">
                      Hyperplane Co-Founder
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* COLLABORATION CALLOUT */}
      <section className="py-12">
        <Container>
          <div className="hp-glass rounded-[var(--hp-radius-xl)] p-8 md:p-12 border border-[var(--hp-border-strong)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-semibold text-[var(--hp-accent-secondary)] uppercase tracking-wider font-mono">
                Direct Engineering Collaboration
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-white mt-1">
                Build With The Founding Engineers
              </h3>
              <p className="mt-2 text-sm text-[var(--hp-text-secondary)] max-w-xl leading-relaxed">
                When you partner with Hyperplane, you work directly with our founding team to architect and build your software solutions from first principles.
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
