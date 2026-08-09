"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { servicesData, faqData, type ServiceDetail } from "@/data";
import {
  BrainCircuit,
  Code2,
  Workflow,
  Cloud,
  AppWindow,
  PenTool,
  Sparkles,
  Layers,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  Code2,
  Workflow,
  Cloud,
  AppWindow,
  PenTool,
  Sparkles,
  Layers,
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceDetail>(
    servicesData[0]
  );
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

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
                <Zap className="size-3.5" /> Core Capabilities
              </span>
              <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-white">
                Engineering Services Designed for{" "}
                <span className="hp-gradient-text">Unconstrained Scale</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base text-[var(--hp-text-secondary)] sm:text-lg">
                We combine artificial intelligence, custom distributed systems, and modern web engineering into cohesive solutions that drive measurable business outcomes.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" withArrow>
                    Discuss Your Architecture
                  </Button>
                </Link>
                <a href="#all-services">
                  <Button variant="secondary" size="lg">
                    Explore All Services
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* OVERVIEW METRICS STRIP */}
        <section className="border-y border-[var(--hp-border)] bg-[var(--hp-surface)]/50 py-10">
          <Container>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <span className="font-display text-3xl font-bold text-white sm:text-4xl">8</span>
                <span className="mt-1 text-xs text-[var(--hp-text-secondary)] uppercase tracking-wider">Core Disciplines</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-display text-3xl font-bold text-white sm:text-4xl">100%</span>
                <span className="mt-1 text-xs text-[var(--hp-text-secondary)] uppercase tracking-wider">Custom Codebases</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-display text-3xl font-bold text-white sm:text-4xl">&lt; 120ms</span>
                <span className="mt-1 text-xs text-[var(--hp-text-secondary)] uppercase tracking-wider">Target Latency</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-display text-3xl font-bold text-white sm:text-4xl">24/7</span>
                <span className="mt-1 text-xs text-[var(--hp-text-secondary)] uppercase tracking-wider">SLA Monitoring</span>
              </div>
            </div>
          </Container>
        </section>

        {/* SERVICES CARDS GRID */}
        <section id="all-services" className="hp-section">
          <Container>
            <SectionHeading
              eyebrow="Capabilities"
              title="End-to-End Technology Stack"
              description="Explore our specialized services. Click any service card to view deep-dive technical features, stack options, and business benefits."
              align="center"
              className="mb-16"
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {servicesData.map((service, idx) => {
                const IconComponent = iconMap[service.iconName] || Code2;
                const isSelected = selectedService.id === service.id;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    onClick={() => setSelectedService(service)}
                    className="cursor-pointer"
                  >
                    <Card
                      className={`h-full flex flex-col justify-between transition-all duration-300 ${
                        isSelected
                          ? "border-[var(--hp-accent-secondary)] bg-[var(--hp-card-hover)] shadow-[var(--hp-shadow-glow-violet)]"
                          : ""
                      }`}
                    >
                      <div>
                        <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[var(--hp-accent-primary)]/10 text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/20">
                          <IconComponent className="size-6" />
                        </div>
                        <h3 className="font-display text-xl font-medium text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-xs text-[var(--hp-text-secondary)] line-clamp-3 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-[var(--hp-accent-secondary)] group-hover:text-white transition-colors">
                        <span>Inspect Architecture</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* DETAILED SERVICE BREAKDOWN PANEL */}
        <section className="py-12">
          <Container>
            <div className="hp-glass rounded-[var(--hp-radius-xl)] p-8 md:p-12 border border-[var(--hp-border-strong)]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[var(--hp-border)] pb-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--hp-accent-secondary)]">
                    Deep Dive Technical Inspection
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-white mt-1">
                    {selectedService.title}
                  </h2>
                </div>
                <Link href={`/contact?topic=${encodeURIComponent(selectedService.title)}`}>
                  <Button variant="primary" size="md" withArrow>
                    Build {selectedService.title} Solution
                  </Button>
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <p className="text-base leading-relaxed text-[var(--hp-text-secondary)]">
                    {selectedService.fullDescription}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                      Key Technical Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--hp-text-secondary)]">
                          <CheckCircle className="size-4 text-[var(--hp-accent-secondary)] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                      Business Benefits
                    </h4>
                    <div className="flex flex-col gap-2">
                      {selectedService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg border border-[var(--hp-border)] bg-black/40 p-3 text-xs text-[var(--hp-text)]">
                          <ShieldCheck className="size-4 text-[var(--hp-accent-blue)] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[var(--hp-border)] bg-[var(--hp-surface)] p-6">
                  <div>
                    <div className="flex items-center gap-2 text-white font-medium text-sm mb-4">
                      <Cpu className="size-4 text-[var(--hp-accent-secondary)]" />
                      <span>Supported Technologies & Stack</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-[var(--hp-border-strong)] bg-white/[0.04] px-3 py-1 text-xs font-mono text-[var(--hp-text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl border border-[var(--hp-accent-primary)]/30 bg-[var(--hp-accent-primary)]/10 p-4">
                    <p className="text-xs text-[var(--hp-text-secondary)]">
                      <strong className="text-white">Need a custom stack integration?</strong> Our architects design zero-friction compatibility layers with legacy infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="hp-section">
          <Container className="max-w-4xl">
            <SectionHeading
              eyebrow="Questions & Answers"
              title="Frequently Asked Questions"
              description="Clear answers regarding our engineering process, compliance standards, and engagement models."
              align="center"
              className="mb-12"
            />

            <div className="flex flex-col gap-4">
              {faqData.map((faq, idx) => {
                const isOpen = activeFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-[var(--hp-border)] bg-[var(--hp-card)] transition-colors duration-200"
                  >
                    <button
                      onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <span className="font-display text-lg font-medium text-white pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`size-5 shrink-0 text-[var(--hp-text-secondary)] transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[var(--hp-accent-secondary)]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="border-t border-[var(--hp-border)] p-6 pt-4 text-sm text-[var(--hp-text-secondary)] leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
  );
}
