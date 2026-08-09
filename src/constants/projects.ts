export type FeaturedProject = {
  id: string;
  client: string;
  summary: string;
  discipline: string;
  year: string;
};

/** Featured Case Studies on Homepage */
export const featuredProjects: FeaturedProject[] = [
  {
    id: "legacymind-ai",
    client: "LegacyMind AI — Engineering Memory Graph",
    summary: "Captures and preserves institutional engineering knowledge as teams work. 'People may leave. Knowledge doesn't.'",
    discipline: "AI Platform · Knowledge Graph",
    year: "2026",
  },
  {
    id: "syncdoc-ai",
    client: "SyncDoc AI — Autonomous Documentation Platform",
    summary: "Documentation platform that continuously observes development activity. 'If code changes, docs do too.'",
    discipline: "Developer Tooling · Architecture Intelligence",
    year: "2026",
  },
  {
    id: "divyavasthu",
    client: "Divyavasthu — Natural & Ayurvedic Store",
    summary: "Modern, mobile-responsive e-commerce platform & admin management engine with Phone OTP & Razorpay.",
    discipline: "E-Commerce · Firebase · Razorpay",
    year: "2026",
  },
];
