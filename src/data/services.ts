export type ServiceDetail = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  technologies: string[];
  benefits: string[];
  features: string[];
};

export const servicesData: ServiceDetail[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    shortDescription:
      "Applied AI systems, custom RAG architectures, and agentic workflows that automate decisions.",
    fullDescription:
      "We design, fine-tune, and deploy production-ready AI solutions tailored to your proprietary datasets. From domain-specific LLMs and retrieval-augmented generation (RAG) to computer vision and real-time predictive modeling, we turn raw data into autonomous competitive advantages.",
    iconName: "BrainCircuit",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LlamaIndex",
      "Pinecone / Qdrant",
      "OpenAI API",
      "Hugging Face",
      "vLLM",
    ],
    benefits: [
      "Automate up to 85% of repetitive cognitive tasks across business units",
      "Extract actionable insight from unformatted enterprise knowledge silos",
      "Achieve sub-second inference speeds with custom optimized deployment",
      "Maintain strict enterprise security and data privacy compliance",
    ],
    features: [
      "Custom Model Fine-tuning & Distillation",
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "Autonomous Multi-Agent Workflows",
      "Predictive Analytics & Anomaly Detection",
      "AI Pipeline Monitoring & Evaluation",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDescription:
      "Purpose-built software platforms engineered specifically around your complex operational flows.",
    fullDescription:
      "Off-the-shelf software often forces companies into awkward workflows. We build bespoke web, desktop, and distributed backend systems tailored precisely to your operational requirements with uncompromising performance, clean architecture, and long-term scalability.",
    iconName: "Code2",
    technologies: [
      "TypeScript",
      "Go (Golang)",
      "Rust",
      "Python",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "GraphQL / gRPC",
    ],
    benefits: [
      "Zero compromise — software engineered around your exact workflow",
      "Substantially reduced total cost of ownership over generic SaaS stack",
      "Built for extreme throughput and concurrent user volume",
      "High test coverage with automated CI/CD deployment pipelines",
    ],
    features: [
      "Distributed Backend Systems & Microservices",
      "High-Frequency Data Processing Engines",
      "Custom Enterprise Resource Planning (ERP)",
      "Legacy Codebase Refactoring & Modernization",
      "Robust API Design & Third-Party Integration",
    ],
  },
  {
    id: "business-automation",
    title: "Business Automation",
    shortDescription:
      "Eliminate manual operational friction by seamlessly connecting your applications and data pipelines.",
    fullDescription:
      "Disconnect between software tools drains employee productivity and creates costly data errors. We build event-driven automation pipelines that seamlessly bridge your CRM, ERP, billing systems, communication tools, and data warehouses.",
    iconName: "Workflow",
    technologies: [
      "Temporal.io",
      "Apache Kafka",
      "RabbitMQ",
      "Zapier / Make APIs",
      "Python Workers",
      "Docker",
      "Webhooks Engine",
    ],
    benefits: [
      "Eliminate human error in multi-step manual data entry processes",
      "Reduce order-to-fulfillment cycle times by up to 70%",
      "Real-time event sync across all core business applications",
      "Comprehensive audit logs and self-healing error handlers",
    ],
    features: [
      "Event-Driven Micro-Workflows",
      "Document OCR & Intelligent Data Extraction",
      "Automated Financial & Invoice Reconciliation",
      "Cross-Platform API Sync Engines",
      "Custom Internal Admin Portals",
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    shortDescription:
      "Resilient, zero-downtime cloud architectures engineered for instant scalability and low latency.",
    fullDescription:
      "We design and manage immutable Infrastructure-as-Code (IaC) environments across AWS, Google Cloud, and Azure. From Kubernetes cluster orchestration to multi-region failover and cost optimization, we ensure your applications remain fast, safe, and cost-efficient.",
    iconName: "Cloud",
    technologies: [
      "AWS",
      "Google Cloud (GCP)",
      "Terraform",
      "Kubernetes (K8s)",
      "Docker",
      "Cloudflare",
      "Prometheus & Grafana",
      "ArgoCD",
    ],
    benefits: [
      "Guaranteed 99.99% infrastructure uptime with auto-scaling",
      "Average cloud spend reduction of 30-45% through optimization",
      "Zero-downtime deployments via blue-green and canary strategies",
      "Bank-grade security hardening and compliance readiness (SOC2, HIPAA)",
    ],
    features: [
      "Infrastructure as Code (Terraform / Pulumi)",
      "Multi-Region High-Availability Architecture",
      "DevOps & CI/CD Pipeline Automation",
      "Cloud Cost Audit & Resource Optimization",
      "24/7 Monitoring, Alerting & SRE Support",
    ],
  },
  {
    id: "web-applications",
    title: "Modern Web Applications",
    shortDescription:
      "Lightning-fast, highly responsive web products built with state-of-the-art frontend frameworks.",
    fullDescription:
      "We build modern web applications that combine hyper-fast server rendering, instantaneous interactions, smooth micro-animations, and bulletproof security. Optimized for conversion, SEO, and engagement across every screen size.",
    iconName: "AppWindow",
    technologies: [
      "React",
      "Next.js",
      "Vue.js / Nuxt",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "WebSockets",
      "Vercel",
    ],
    benefits: [
      "Sub-second page loading speeds boosting conversion rates",
      "Impeccable responsiveness from mobile phones to ultrawide displays",
      "Built-in accessibility (WCAG 2.1 AA compliant) and optimal SEO structure",
      "Fluid state management for real-time collaborative applications",
    ],
    features: [
      "Server-Side Rendered (SSR) & Static Site Architecture",
      "Progressive Web Apps (PWA) with Offline Support",
      "Real-Time Collaboration & Live WebSockets",
      "Design System Implementation & UI Libraries",
      "Performance Audits & Core Web Vitals Optimization",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Intuitive, visually arresting digital interfaces engineered to delight users and convert visitors.",
    fullDescription:
      "Great software requires great design. Our design team creates human-centered visual languages, intuitive navigation flows, interactive prototypes, and scalable design systems that make complex technological capabilities effortless to use.",
    iconName: "PenTool",
    technologies: [
      "Figma",
      "Principle",
      "Adobe CC",
      "Rive",
      "Tailwind CSS Tokens",
      "Storybook",
      "UserTesting",
    ],
    benefits: [
      "Higher user adoption rates and dramatically reduced onboarding friction",
      "Cohesive brand positioning that projects enterprise trustworthiness",
      "Design systems that accelerate software engineering speed by 2x",
      "Data-backed UX decisions derived from user testing and heatmaps",
    ],
    features: [
      "User Experience (UX) Research & User Mapping",
      "High-Fidelity Interface (UI) Design",
      "Scalable Enterprise Design Systems",
      "Interactive Micro-Interactions & Prototyping",
      "Usability Testing & Accessibility Audits",
    ],
  },
  {
    id: "technology-consulting",
    title: "Technology Consulting",
    shortDescription:
      "Strategic technical guidance to help leadership navigate complex architecture choices.",
    fullDescription:
      "Making the wrong technical decision can cost millions and set product roadmaps back by years. We provide C-level technical strategy, architecture reviews, tech stack selection, vendor audits, and technical due diligence for startups and established enterprises.",
    iconName: "Sparkles",
    technologies: [
      "Architecture Audits",
      "Security Assessment",
      "Tech Stack Evaluation",
      "Vendor Assessment",
      "Scaling Roadmaps",
    ],
    benefits: [
      "Avoid costly architectural rewrite traps before writing code",
      "Align technical strategy directly with key business objectives",
      "Accelerate product engineering release velocity",
      "Empower internal teams through technical mentorship and standards",
    ],
    features: [
      "Fractional CTO & Strategic Advisory",
      "Architecture & Codebase Security Reviews",
      "Technical Due Diligence for M&A / Investment",
      "Engineering Team Capability Building",
      "Software Stack Modernization Roadmaps",
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    shortDescription:
      "End-to-end modernization of legacy systems, processes, and corporate technology ecosystems.",
    fullDescription:
      "Transition legacy enterprise organizations into agile, data-driven powerhouses. We audit existing software assets, redesign inefficient workflows, and systematically replace outdated legacy mainframes with modern cloud-native architectures.",
    iconName: "Layers",
    technologies: [
      "Cloud Migration",
      "Legacy Refactoring",
      "Microservices",
      "Data Lake Integration",
      "Change Management",
    ],
    benefits: [
      "Unlock trapped enterprise data for modern reporting and AI insight",
      "Dramatically improve employee efficiency and satisfaction",
      "Minimize operational risk associated with unsupported legacy code",
      "Prepare the organization for ongoing technological evolution",
    ],
    features: [
      "Legacy System Audit & Migration Roadmaps",
      "Enterprise Cloud Migration & Containerization",
      "Centralized Data Lake & Analytics Integration",
      "Operational Workflow Modernization",
      "Change Management & Technical Training",
    ],
  },
];
