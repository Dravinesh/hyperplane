export type FAQItem = {
  question: string;
  answer: string;
  category: "General" | "Services" | "Process" | "Security" | "Pricing";
};

export const faqData: FAQItem[] = [
  {
    question: "What makes Hyperplane different from traditional software agencies?",
    answer:
      "Unlike traditional agencies that assign junior developers or push generic templates, Hyperplane operates as an elite engineering partner. We combine senior systems architects, AI researchers, and UI designers to build custom, high-performance software tailored directly to your business goals.",
    category: "General",
  },
  {
    question: "How long does a typical project engagement take?",
    answer:
      "Engagement timelines depend on project scope. Initial MVP builds or AI proof-of-concepts typically ship within 4 to 8 weeks. Full enterprise platform modernizations or custom ERP solutions usually run 3 to 6 months in iterative agile bi-weekly sprints.",
    category: "Process",
  },
  {
    question: "How do you handle data privacy and AI model security?",
    answer:
      "Security is foundational. All custom AI solutions are deployed within your isolated cloud environment or private VPC. We never train public models on your proprietary business data. We enforce SOC2 compliance, strict role-based access control, and end-to-end data encryption.",
    category: "Security",
  },
  {
    question: "Can Hyperplane integrate with our existing internal engineering team?",
    answer:
      "Yes. We frequently co-engineer alongside client technology teams, providing specialized capabilities in AI engineering, cloud orchestration, or UI system design while mentoring internal staff.",
    category: "Services",
  },
  {
    question: "What is your pricing and engagement model?",
    answer:
      "We offer flexible engagement models: Fixed-Scope Milestones for clearly defined projects, and Dedicated Engineering Squads (monthly retainer) for ongoing platform development and evolution.",
    category: "Pricing",
  },
  {
    question: "What happens after the project is deployed to production?",
    answer:
      "We offer comprehensive 24/7 SRE monitoring, continuous security patching, cloud performance optimization, and SLA-backed maintenance contracts to guarantee uninterrupted platform health.",
    category: "Process",
  },
];
