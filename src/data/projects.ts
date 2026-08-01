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
    id: "project-alpha",
    title: "Project Alpha",
    client: "Project Alpha (Fintech Pioneer)",
    industry: "Financial Technology",
    summary:
      "Rebuilding a global lending pipeline around an autonomous real-time risk evaluation engine.",
    problem:
      "The client's legacy loan processing system required 48+ hours for manual underwriting risk checks, resulting in a 38% application drop-off rate and scaling bottlenecks during peak market demand.",
    solution:
      "Hyperplane engineered an AI-powered underwriting platform featuring high-throughput event processing and sub-100ms algorithmic risk scoring with automated audit logging.",
    technologies: ["PyTorch", "Go", "Apache Kafka", "PostgreSQL", "React", "AWS"],
    timeline: "6 Months",
    year: "2026",
    featured: true,
    metrics: [
      { label: "Decision Speed", value: "< 120ms", detail: "Down from 48 hours" },
      { label: "Application Conversion", value: "+ 340%", detail: "Post launch growth" },
      { label: "Operating Cost", value: "- 62%", detail: "Reduced manual audit load" },
    ],
    clientQuote: {
      quote:
        "Hyperplane delivered an engine that handled our peak season transaction volumes without a single hiccup. Our risk accuracy actually improved while decision time dropped to milliseconds.",
      author: "Chief Risk Officer",
      role: "Global Fintech Division",
    },
    accentGradient: "from-violet-600/30 via-indigo-600/20 to-purple-900/40",
  },
  {
    id: "project-nova",
    title: "Project Nova",
    client: "Project Nova (Global Logistics Network)",
    industry: "Supply Chain & Logistics",
    summary:
      "Replacing legacy spreadsheets with a unified live operations control tower and route optimizer.",
    problem:
      "A fleet of 4,000+ freight vehicles operated on fragmented legacy spreadsheets, causing route inefficiencies, excessive fuel burn, and zero real-time tracking for end clients.",
    solution:
      "We built a real-time IoT tracking hub and dynamic graph optimization engine that continuously reroutes vehicles based on live traffic, weather, and dynamic customs clearance data.",
    technologies: ["Rust", "Python", "Kubernetes", "TypeScript", "Tailwind CSS", "GCP"],
    timeline: "8 Months",
    year: "2026",
    featured: true,
    metrics: [
      { label: "Fleet On-Time Delivery", value: "99.4%", detail: "Up from 81.2%" },
      { label: "Fuel Consumption", value: "- 28%", detail: "Optimized route efficiency" },
      { label: "Live Telemetry Nodes", value: "45k+", detail: "Real-time updates/sec" },
    ],
    clientQuote: {
      quote:
        "The control tower built by Hyperplane transformed our operational visibility. We now pinpoint bottlenecks before they impact deliveries.",
      author: "VP of Supply Operations",
      role: "International Freight Alliance",
    },
    accentGradient: "from-indigo-600/30 via-purple-600/20 to-blue-900/40",
  },
  {
    id: "project-orion",
    title: "Project Orion",
    client: "Project Orion (Enterprise E-Commerce)",
    industry: "Consumer Marketplace",
    summary:
      "A high-concurrency storefront and merchant admin engine built to sustain Black Friday traffic spikes.",
    problem:
      "Frequent flash sales overwhelmed the client's monolithic e-commerce framework, triggering server crashes and lost transactions amounting to millions in missed revenue.",
    solution:
      "Hyperplane re-architected the application into a headless, event-driven microservices architecture using Next.js, Redis edge caching, and auto-scaling cloud microservices.",
    technologies: ["Next.js", "Node.js", "Redis", "GraphQL", "Terraform", "Cloudflare"],
    timeline: "5 Months",
    year: "2025",
    featured: true,
    metrics: [
      { label: "Uptime During Peak", value: "100%", detail: "Zero downtime in 2025" },
      { label: "Page Load Speed", value: "240ms", detail: "Global edge latency" },
      { label: "Peak Orders/Min", value: "18,500", detail: "Sustained high load" },
    ],
    clientQuote: {
      quote:
        "During our highest revenue event of the year, the platform didn't just stay up — it felt instantaneous for shoppers worldwide.",
      author: "Director of Digital Engineering",
      role: "Consumer Retail Group",
    },
    accentGradient: "from-purple-600/30 via-violet-600/20 to-pink-900/40",
  },
  {
    id: "project-vertex",
    title: "Project Vertex",
    client: "Project Vertex (HealthTech Intelligence)",
    industry: "Healthcare Analytics",
    summary:
      "HIPAA-compliant patient data aggregation platform with predictive diagnostic assistance.",
    problem:
      "Clinical research teams spent hours compiling patient data across siloed hospital electronic health record (EHR) databases.",
    solution:
      "We engineered a zero-trust, federated analytics pipeline with encrypted data ingest and an intuitive medical research search portal.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "React", "Azure Security"],
    timeline: "9 Months",
    year: "2025",
    featured: false,
    metrics: [
      { label: "Data Ingest Rate", value: "10x", detail: "Faster clinical synthesis" },
      { label: "Compliance Score", value: "100%", detail: "HIPAA & SOC2 certified" },
      { label: "Research Time Saved", value: "15 hrs/wk", detail: "Per medical researcher" },
    ],
    clientQuote: {
      quote:
        "Hyperplane's strict adherence to security combined with exceptional UX design made our clinical software both bulletproof and a pleasure to use.",
      author: "Head of Medical Informatics",
      role: "Health Science Institute",
    },
    accentGradient: "from-blue-600/30 via-indigo-600/20 to-teal-900/40",
  },
  {
    id: "project-horizon",
    title: "Project Horizon",
    client: "Project Horizon (Renewable Energy Grid)",
    industry: "Clean Energy",
    summary:
      "Predictive grid load balancing and smart telemetry management for regional solar farms.",
    problem:
      "Unpredicted weather shifts created voltage spikes and grid imbalance across distributed solar energy storage units.",
    solution:
      "Hyperplane built a machine learning grid orchestrator that forecasts weather patterns and automatically rebalances battery storage distribution.",
    technologies: ["Python", "TensorFlow", "Go", "TimescaleDB", "Vue.js", "AWS IoT"],
    timeline: "7 Months",
    year: "2025",
    featured: false,
    metrics: [
      { label: "Grid Efficiency", value: "+ 22%", detail: "Optimized power utilization" },
      { label: "Wasted Energy", value: "- 41%", detail: "Battery discharge tuning" },
      { label: "Forecast Accuracy", value: "96.8%", detail: "24-hr predictive model" },
    ],
    clientQuote: {
      quote:
        "The intelligence Hyperplane brought to our energy management software allowed us to expand our grid capacity without additional hardware.",
      author: "VP of Grid Operations",
      role: "Clean Energy Utility",
    },
    accentGradient: "from-violet-600/30 via-purple-600/20 to-indigo-900/40",
  },
  {
    id: "project-nexus",
    title: "Project Nexus",
    client: "Project Nexus (Autonomous Media Platform)",
    industry: "Digital Media & Streaming",
    summary:
      "Real-time video transcode processing and automated AI captioning/translation pipeline.",
    problem:
      "High rendering costs and manual multi-language translation slowed down global media distribution schedules.",
    solution:
      "We built a GPU-accelerated video rendering cloud worker cluster integrated with multimodal AI translation models.",
    technologies: ["Rust", "PyTorch", "FFmpeg", "Next.js", "Kubernetes", "AWS WebSockets"],
    timeline: "6 Months",
    year: "2026",
    featured: false,
    metrics: [
      { label: "Transcode Speed", value: "4x Realtime", detail: "GPU cluster benchmark" },
      { label: "Translation Accuracy", value: "98.2%", detail: "Across 34 languages" },
      { label: "Media Processing Cost", value: "- 55%", detail: "Autoscaling GPU cost" },
    ],
    clientQuote: {
      quote:
        "Content that used to take days to localize and publish globally now goes live in minutes thanks to Hyperplane's pipeline.",
      author: "Chief Product Officer",
      role: "Global Media Enterprise",
    },
    accentGradient: "from-indigo-600/30 via-violet-600/20 to-purple-900/40",
  },
];
