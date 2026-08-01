import type { LucideIcon } from "lucide-react";
import { Target, Cpu, Layers, Handshake } from "lucide-react";

export type Pillar = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const pillars: Pillar[] = [
  {
    id: "business-understanding",
    title: "Business understanding first",
    description:
      "We start with your business model and constraints, not a technology we want to sell you.",
    icon: Target,
  },
  {
    id: "technology-expertise",
    title: "Deep technology expertise",
    description:
      "Senior engineers across AI, cloud, and software — not a template with your logo on it.",
    icon: Cpu,
  },
  {
    id: "scalable-systems",
    title: "Systems built to scale",
    description:
      "Architecture decisions made for the business you're growing into, not just the one you have.",
    icon: Layers,
  },
  {
    id: "long-term-partnership",
    title: "Long-term partnership",
    description:
      "We stay accountable after launch — measured by outcomes, not by a delivered handoff.",
    icon: Handshake,
  },
];
