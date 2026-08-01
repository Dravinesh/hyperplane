export type FeaturedProject = {
  id: string;
  client: string;
  summary: string;
  discipline: string;
  year: string;
};

/** Placeholder case studies — layout is production-ready, content swaps in as real client work ships. */
export const featuredProjects: FeaturedProject[] = [
  {
    id: "project-01",
    client: "Case Study — Fintech Platform",
    summary: "Rebuilding a lending pipeline around a real-time risk engine.",
    discipline: "AI Solutions · Cloud Infrastructure",
    year: "2026",
  },
  {
    id: "project-02",
    client: "Case Study — Logistics Network",
    summary: "Replacing spreadsheets with a live operations control system.",
    discipline: "Custom Software · Automation",
    year: "2026",
  },
  {
    id: "project-03",
    client: "Case Study — Consumer Marketplace",
    summary: "A storefront and admin platform engineered for peak-season load.",
    discipline: "Web Applications · UI/UX",
    year: "2025",
  },
];
