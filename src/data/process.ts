export type ProcessStep = {
  stepNumber: number;
  id: string;
  title: string;
  shortTagline: string;
  description: string;
  iconName: string;
  duration: string;
  inputs: string[];
  deliverables: string[];
  keyActivities: string[];
};

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: 1,
    id: "discover",
    title: "Discover",
    shortTagline: "Understanding core business objectives & technical constraints",
    description:
      "We begin every engagement with deep-dive technical workshops. We analyze your existing architecture, identify business bottlenecks, evaluate risk factors, and define measurable KPIs for project success.",
    iconName: "Search",
    duration: "1 - 2 Weeks",
    inputs: [
      "Current system documentation & code access",
      "Key stakeholder business goals & target metrics",
      "Security compliance & platform requirements",
    ],
    deliverables: [
      "Technical Audit & Gap Analysis Report",
      "System Architecture Baseline",
      "Project Roadmap & Success Criteria Matrix",
    ],
    keyActivities: [
      "Executive stakeholder alignment interviews",
      "Codebase & database dependency mapping",
      "Security & infrastructure readiness audit",
    ],
  },
  {
    stepNumber: 2,
    id: "research",
    title: "Research",
    shortTagline: "Market bench-marking, technology evaluation & data modeling",
    description:
      "We explore technology options, benchmark open-source tools versus custom builds, evaluate AI model performance on your sample datasets, and establish data schema prototypes.",
    iconName: "Compass",
    duration: "1 - 2 Weeks",
    inputs: [
      "Sample dataset extracts & telemetry logs",
      "Target user persona workflows",
      "Competitive tech stack benchmark data",
    ],
    deliverables: [
      "Technology Selection & Benchmark Matrix",
      "Data Pipeline & Schema Specifications",
      "Proof of Concept (PoC) Feasibility Report",
    ],
    keyActivities: [
      "AI model evaluation & accuracy benchmarking",
      "Database schema load testing simulations",
      "Third-party API capability & rate-limit testing",
    ],
  },
  {
    stepNumber: 3,
    id: "strategy",
    title: "Strategy",
    shortTagline: "Architectural blueprint, sprint planning & resource allocation",
    description:
      "We translate research into a comprehensive engineering strategy. We define microservices boundaries, API contracts, deployment pipelines, risk mitigation plans, and agile sprint milestones.",
    iconName: "Target",
    duration: "1 Week",
    inputs: [
      "Approved feasibility research",
      "Budget & timeline milestones",
      "DevOps & compliance guidelines",
    ],
    deliverables: [
      "System Architecture Blueprint (C4 Model)",
      "API Open-API Specifications & Schemas",
      "Sprint Release Schedule & Resource Plan",
    ],
    keyActivities: [
      "System topology & microservice demarcation",
      "CI/CD release strategy definition",
      "Zero-trust security model planning",
    ],
  },
  {
    stepNumber: 4,
    id: "design",
    title: "Design",
    shortTagline: "UI/UX design systems, interactive prototypes & component specs",
    description:
      "Our design team creates human-centered interfaces, interaction patterns, design tokens, and clickable prototypes. We test usability early to ensure zero friction for end users.",
    iconName: "Figma",
    duration: "2 - 4 Weeks",
    inputs: [
      "Approved user stories & wireframes",
      "Brand identity assets & guidelines",
      "Design token requirements",
    ],
    deliverables: [
      "Figma Enterprise Design System",
      "High-Fidelity Interactive Prototype",
      "Developer Component Handoff Specs",
    ],
    keyActivities: [
      "UX wireframing & user journey mapping",
      "Design token library creation (Dark luxury aesthetic)",
      "Interactive micro-animation prototyping",
    ],
  },
  {
    stepNumber: 5,
    id: "development",
    title: "Development",
    shortTagline: "High-velocity production coding, modular build & code reviews",
    description:
      "Engineering begins in bi-weekly sprints with continuous integration. Every pull request undergoes peer code review, static analysis, unit test coverage validation, and automated vulnerability scanning.",
    iconName: "Code",
    duration: "4 - 12 Weeks",
    inputs: [
      "Design system & API specs",
      "Staging cloud environments",
      "Agile backlog user stories",
    ],
    deliverables: [
      "Production-Ready Modular Codebase",
      "Automated Unit & Integration Test Suites",
      "Internal Technical API Documentation",
    ],
    keyActivities: [
      "Full-stack microservices & frontend engineering",
      "Database migration script creation",
      "Continuous Integration (CI) build pipelines",
    ],
  },
  {
    stepNumber: 6,
    id: "testing",
    title: "Testing",
    shortTagline: "Automated QA, load testing, penetration audits & user acceptance",
    description:
      "We rigorously stress-test the application under extreme concurrency loads, execute automated end-to-end regression test suites, run security vulnerability penetration tests, and conduct UAT.",
    iconName: "CheckCircle2",
    duration: "2 Weeks",
    inputs: [
      "Feature-complete candidate build",
      "Peak traffic load targets",
      "Security compliance checklists",
    ],
    deliverables: [
      "QA Test Execution & Bug Resolution Matrix",
      "Load & Concurrency Benchmark Report",
      "Security Penetration Audit Certificate",
    ],
    keyActivities: [
      "k6 load testing for peak concurrency",
      "Cypress/Playwright E2E automation",
      "SOC2 / OWASP Top 10 security audit",
    ],
  },
  {
    stepNumber: 7,
    id: "deployment",
    title: "Deployment",
    shortTagline: "Zero-downtime production launch & multi-region orchestration",
    description:
      "We execute blue-green or canary deployments to transition live traffic smoothly onto the new platform. Monitoring dashboards and alerting systems activate immediately to track system metrics.",
    iconName: "Rocket",
    duration: "1 Week",
    inputs: [
      "Passed security & QA gate checks",
      "Production AWS/GCP cloud cluster",
      "Rollback & emergency procedures",
    ],
    deliverables: [
      "Live Production Environment",
      "Automated Cloud Monitoring Dashboards",
      "Disaster Recovery & Rollback Playbook",
    ],
    keyActivities: [
      "Zero-downtime DNS & load balancer cutover",
      "Prometheus & Grafana telemetry setup",
      "SRE standby launch window monitoring",
    ],
  },
  {
    stepNumber: 8,
    id: "support",
    title: "Support & Evolution",
    shortTagline: "24/7 SLA monitoring, continuous maintenance & optimization",
    description:
      "Our partnership continues post-launch. We provide dedicated SRE monitoring, performance tuning, proactive security patching, and ongoing feature updates aligned with your growth roadmap.",
    iconName: "LifeBuoy",
    duration: "Ongoing",
    inputs: [
      "Live telemetry & error telemetry logs",
      "User feedback & feature requests",
      "SLA service agreement parameters",
    ],
    deliverables: [
      "Monthly SLA Uptime & Performance Reports",
      "Continuous Security & Dependency Patches",
      "Quarterly Tech Optimization Recommendations",
    ],
    keyActivities: [
      "24/7 automated uptime and error tracking",
      "Performance optimization & cost tuning",
      "Continuous product enhancement sprints",
    ],
  },
];
