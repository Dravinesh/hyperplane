"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { teamData } from "@/data/team";
import { Users, ExternalLink, Globe, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";

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
                <Users className="size-3.5" /> Engineering Minds
              </span>
              <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-white">
                Architects, Researchers & <span className="hp-gradient-text">Product Pioneers</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base text-[var(--hp-text-secondary)] sm:text-lg">
                Meet the senior engineering leaders behind Hyperplane's high-performance architectures, AI engines, and product platforms.
              </p>
            </div>
          </Container>
        </section>

        {/* TEAM CARDS GRID */}
        <section className="hp-section">
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamData.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <Card className="h-full flex flex-col justify-between p-7 border border-[var(--hp-border)]">
                    <div>
                      {/* Avatar Placeholder */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.avatarGradient} text-xl font-bold font-display text-white shadow-lg shrink-0 border border-white/20`}
                        >
                          {member.initials}
                        </div>
                        <div>
                          <span className="rounded-full bg-[var(--hp-accent-primary)]/15 px-2.5 py-0.5 text-[10px] font-semibold text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/30">
                            {member.badge}
                          </span>
                          <h3 className="font-display text-xl font-medium text-white mt-1">
                            {member.name}
                          </h3>
                          <p className="text-xs text-[var(--hp-text-tertiary)]">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-[var(--hp-text-secondary)] leading-relaxed mb-6">
                        {member.bio}
                      </p>

                      {/* Skills */}
                      <div className="mb-6">
                        <span className="text-[10px] uppercase font-semibold text-[var(--hp-text-tertiary)] tracking-wider block mb-2">
                          Core Expertise
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {member.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-[var(--hp-text-secondary)] border border-[var(--hp-border)]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3 border-t border-[var(--hp-border)] pt-4">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="LinkedIn profile"
                          className="flex items-center gap-1.5 rounded-full border border-[var(--hp-border)] bg-black/40 px-3 py-1 text-xs text-[var(--hp-text-secondary)] hover:border-[var(--hp-accent-secondary)] hover:text-white transition-colors"
                        >
                          <span>LinkedIn</span>
                          <ExternalLink className="size-3" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub profile"
                          className="flex items-center gap-1.5 rounded-full border border-[var(--hp-border)] bg-black/40 px-3 py-1 text-xs text-[var(--hp-text-secondary)] hover:border-[var(--hp-accent-secondary)] hover:text-white transition-colors"
                        >
                          <span>GitHub</span>
                          <ExternalLink className="size-3" />
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CAREERS / TALENT BANNER */}
        <section className="py-12">
          <Container>
            <div className="hp-glass rounded-[var(--hp-radius-xl)] p-8 md:p-12 border border-[var(--hp-border-strong)] flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-xs font-semibold text-[var(--hp-accent-secondary)] uppercase tracking-wider">
                  Work With Us
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-white mt-1">
                  Want to Build Next-Gen Systems?
                </h3>
                <p className="mt-2 text-sm text-[var(--hp-text-secondary)] max-w-xl">
                  We are always seeking exceptional software architects, AI researchers, and DevOps engineers who thrive on complex challenges.
                </p>
              </div>

              <Link href="/contact">
                <Button variant="primary" size="lg" withArrow>
                  Join Engineering Team
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
