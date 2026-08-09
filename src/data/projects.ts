export type ProjectCaseStudy = {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  timeline: string;
  year: string;
  featured: boolean;
  metrics: { label: string; value: string; detail: string }[];
  clientQuote: {
    quote: string;
    author: string;
    role: string;
  };
  accentGradient: string;
};

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "legacymind-ai",
    title: "LegacyMind AI – Institutional Knowledge Platform",
    client: "LegacyMind AI Systems",
    industry: "Developer Tooling & Enterprise AI",
    summary:
      "Captures and preserves institutional engineering knowledge as teams work. Continuously learns from PRs, code reviews, design docs, meeting transcripts, and commits to build a living knowledge graph. 'People may leave. Knowledge doesn't.'",
    problem:
      "Every experienced engineer carries years of undocumented architectural decisions, failed experiments, production workarounds, and historical context. When they leave, that vital knowledge leaves with them, leading to repeated mistakes and long onboarding times.",
    solution:
      "Hyperplane engineered LegacyMind AI, an Engineering Memory Graph platform featuring Decision Intelligence, Historical Context Search, AI Handover Assistant, Edge Case Repository, Expertise Discovery, and a Conversational Knowledge Assistant.",
    technologies: [
      "Python",
      "TypeScript",
      "AI Memory Graph",
      "Git & PR Scraper",
      "Vector Search",
      "LLM Context Index",
      "Jira & Slack APIs",
    ],
    timeline: "6 Months",
    year: "2026",
    featured: true,
    metrics: [
      { label: "Knowledge Retention", value: "100%", detail: "Preserves historical reasoning" },
      { label: "Onboarding Speed", value: "2.5x Faster", detail: "Instant context accessibility" },
      { label: "Repeated Mistakes", value: "Zero", detail: "Historical edge case search" },
    ],
    clientQuote: {
      quote:
        "People may leave. Knowledge doesn't. LegacyMind AI has eliminated our onboarding friction and saved us from repeating past architectural mistakes.",
      author: "Chief Technology Officer",
      role: "Enterprise Software Group",
    },
    accentGradient: "from-indigo-600/30 via-violet-600/20 to-purple-900/40",
  },
  {
    id: "syncdoc-ai",
    title: "SyncDoc AI – Autonomous Documentation Platform",
    client: "SyncDoc AI Developer Tools",
    industry: "Developer Tooling & Enterprise SaaS",
    summary:
      "Autonomous documentation platform that continuously observes development activity and automatically keeps technical documentation accurate, version-aware, and searchable. 'If the code changes, the docs should too.'",
    problem:
      "Engineering documentation quickly becomes stale as codebase merges happen daily, causing costly developer onboarding friction, information silos, and architectural misalignment.",
    solution:
      "Hyperplane engineered SyncDoc AI, an autonomous infrastructure layer that connects to Git repos, CI/CD pipelines, and cloud specs to automatically update API references, generate architecture diagrams, flag knowledge gaps, and answer developer queries in natural language.",
    technologies: [
      "TypeScript",
      "Python",
      "AI Code Analysis",
      "Git Integration",
      "CI/CD Pipeline",
      "OpenAPI",
      "Graph Vector Index",
    ],
    timeline: "6 Months",
    year: "2026",
    featured: true,
    metrics: [
      { label: "Doc Sync Velocity", value: "Real-time", detail: "Documentation that ships with your code" },
      { label: "Architecture Intelligence", value: "Automated", detail: "Generates diagrams & API refs" },
      { label: "Search Efficiency", value: "35% Saved", detail: "Instant natural language QA" },
    ],
    clientQuote: {
      quote:
        "Documentation shouldn't be something engineers remember to maintain — it should be a living reflection of the codebase. SyncDoc AI keeps our technical knowledge aligned automatically.",
      author: "VP of Engineering",
      role: "Scale-Up Developer Platform",
    },
    accentGradient: "from-violet-600/30 via-purple-600/20 to-indigo-900/40",
  },
  {
    id: "sustainagent",
    title: "SustainAgent – Multi-Agent AI System",
    client: "SustainAgent Energy Intelligence",
    industry: "Clean Energy & AI",
    summary:
      "A multi-agent AI system designed to transform large-scale energy consumption data into actionable sustainability insights and ML anomaly detection.",
    problem:
      "Processing millions of energy consumption records across fragmented infrastructure made it difficult to identify unusual usage patterns, compute trend trajectories, or generate timely sustainability compliance reports.",
    solution:
      "Hyperplane built a modular multi-agent AI system coordinating specialized agents for data retrieval, machine-learning anomaly detection, trend analysis, session-based context management, and automated report generation to support smarter energy decisions.",
    technologies: [
      "Python",
      "Google AI Agent",
      "Kaggle",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],
    timeline: "5 Months",
    year: "2026",
    featured: true,
    metrics: [
      { label: "Data Scope", value: "Millions", detail: "Energy records processed" },
      { label: "Anomaly Detection", value: "ML-Based", detail: "Pattern recognition engine" },
      { label: "Reporting Velocity", value: "Automated", detail: "Session context & structured reports" },
    ],
    clientQuote: {
      quote:
        "SustainAgent turns complex, noisy energy data into clear, actionable decision-making insights. The multi-agent workflow catches anomalies before they become expensive losses.",
      author: "Chief Sustainability Officer",
      role: "Global Utility & Grid Alliance",
    },
    accentGradient: "from-emerald-600/30 via-teal-600/20 to-indigo-900/40",
  },
  {
    id: "divyavasthu",
    title: "Divyavasthu – Natural & Ayurvedic E-Commerce Platform",
    client: "Divyavasthu Brand Group",
    industry: "Consumer Marketplace",
    summary:
      "A modern, mobile-responsive e-commerce platform and centralized admin management system for a handcrafted natural & Ayurvedic skincare brand.",
    problem:
      "A growing handcrafted Ayurvedic skincare brand needed to replace manual customer orders and fragmented store processes with a high-conversion, mobile-optimized storefront and centralized multi-tenant store operations dashboard.",
    solution:
      "Hyperplane engineered a modern cloud-based e-commerce platform integrating Firebase Authentication (Phone OTP & Google Auth), Cloud Firestore, Firebase Storage, Razorpay online payments, persistent cart & wishlist, order tracking, and a dedicated admin management dashboard deployed on Vercel.",
    technologies: [
      "Next.js",
      "React",
      "Firebase Auth",
      "Cloud Firestore",
      "Razorpay",
      "Vercel",
      "Tailwind CSS",
    ],
    timeline: "4 Months",
    year: "2026",
    featured: true,
    metrics: [
      { label: "Authentication", value: "OTP & Google", detail: "Phone OTP & Social Auth" },
      { label: "Payment Verification", value: "Razorpay", detail: "Sub-second online checkout" },
      { label: "Store Control", value: "Admin Dashboard", detail: "Inventory & order management" },
    ],
    clientQuote: {
      quote:
        "Divyavasthu transformed how our customers discover natural wellness online. The platform handles browsing, payments, and admin store operations flawlessly.",
      author: "Founder & Brand Lead",
      role: "Divyavasthu Natural Care",
    },
    accentGradient: "from-amber-600/30 via-emerald-600/20 to-purple-900/40",
  },
  {
    id: "ai-bi-assistant",
    title: "AI Business Intelligence Assistant",
    client: "Conversational Analytics Platform",
    industry: "Financial Technology & Analytics",
    summary:
      "Transforms raw enterprise business data into natural language explanations, trends, visualizations, and strategic profit optimization recommendations.",
    problem:
      "Business leaders and analysts spend hours creating manual reports and writing complex SQL queries to answer routine operational and revenue questions.",
    solution:
      "We engineered an intelligent BI assistant allowing users to ask natural language questions (e.g. 'What caused sales to decline this month?'), automatically identifying trends, detecting anomalies, and providing actionable profit recommendations.",
    technologies: [
      "Python",
      "LLM Orchestration",
      "Pandas",
      "PostgreSQL",
      "Plotly",
      "FastAPI",
      "React",
    ],
    timeline: "4 Months",
    year: "2025",
    featured: false,
    metrics: [
      { label: "Query Speed", value: "< 2s", detail: "Natural language to chart" },
      { label: "Report Automation", value: "100%", detail: "Zero manual SQL required" },
      { label: "Profit Insight", value: "Actionable", detail: "Automated recommendations" },
    ],
    clientQuote: {
      quote:
        "Instead of filing data requests and waiting days for BI dashboards, our leadership team asks questions in plain language and receives instant, deep insights.",
      author: "Head of Revenue Operations",
      role: "Global Enterprise SaaS",
    },
    accentGradient: "from-blue-600/30 via-indigo-600/20 to-purple-900/40",
  },
  {
    id: "ai-support-agent",
    title: "AI Customer Support Agent",
    client: "Intelligent Virtual Assistant",
    industry: "Customer Experience & AI",
    summary:
      "Intelligent virtual assistant trained on internal knowledge bases, product docs, and policies to deliver instant, context-aware customer support with seamless escalation to human staff.",
    problem:
      "High customer support ticket volumes caused response delays, increased support costs, and overwhelmed human support agents with repetitive Tier-1 inquiries.",
    solution:
      "Hyperplane built an AI Support Agent featuring natural intent recognition, vector search knowledge base retrieval, session context preservation, and smooth escalation to human teams with full conversation history.",
    technologies: [
      "Python",
      "Vector DB",
      "RAG Pipeline",
      "FastAPI",
      "WebSockets",
      "React",
      "Redis",
    ],
    timeline: "3 Months",
    year: "2025",
    featured: false,
    metrics: [
      { label: "Ticket Resolution", value: "78%", detail: "Automated tier-1 resolution" },
      { label: "Response Latency", value: "< 500ms", detail: "Instant context-aware replies" },
      { label: "Customer CSAT", value: "4.8 / 5.0", detail: "Satisfied user experience" },
    ],
    clientQuote: {
      quote:
        "Our support staff can now focus on complex enterprise cases while the AI agent flawlessly resolves thousands of everyday customer inquiries.",
      author: "Director of Customer Experience",
      role: "Digital Services Group",
    },
    accentGradient: "from-purple-600/30 via-violet-600/20 to-teal-900/40",
  },
];
