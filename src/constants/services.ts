import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Code2,
  AppWindow,
  Cloud,
  Workflow,
  PenTool,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Applied AI systems that automate decisions and unlock data your business already owns.",
    icon: BrainCircuit,
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Purpose-built platforms engineered around how your business actually operates.",
    icon: Code2,
  },
  {
    id: "web-applications",
    title: "Modern Web Applications",
    description:
      "Fast, resilient products built on modern frameworks — made to scale from day one.",
    icon: AppWindow,
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description:
      "Infrastructure that stays online, scales on demand, and stays out of your way.",
    icon: Cloud,
  },
  {
    id: "automation",
    title: "Business Automation",
    description:
      "Remove the manual work between your systems so your team can focus on growth.",
    icon: Workflow,
  },
  {
    id: "brand-technology",
    title: "Branding Through Technology",
    description:
      "Identity and UI/UX systems where the product experience carries the brand itself.",
    icon: PenTool,
  },
];
