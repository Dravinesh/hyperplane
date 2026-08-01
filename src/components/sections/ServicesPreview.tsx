"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { services } from "@/constants/services";
import { fadeUp, stagger, viewportOnce } from "@/animations/variants";
import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function onCardMouseMove(e: MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export function ServicesPreview() {
  return (
    <section id="services" className="hp-section relative">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Engineering, applied to every layer of your business."
          description="Six core disciplines. One senior team. Each engagement draws on whichever combination actually solves your problem."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={fadeUp}>
                <Link href="/services" className="block h-full">
                  <Card onMouseMove={onCardMouseMove} className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex size-11 items-center justify-center rounded-[var(--hp-radius-sm)] bg-white/[0.04] ring-1 ring-[var(--hp-border)]">
                        <Icon
                          className="size-5 text-[var(--hp-accent-secondary)]"
                          strokeWidth={1.75}
                        />
                      </div>
                      <h3 className="mt-6 font-display text-lg font-medium text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--hp-text-secondary)]">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-[var(--hp-accent-secondary)] group-hover:text-white transition-colors">
                      <span>Explore Service Details</span>
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
