export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Artificial Intelligence"
    | "Digital Transformation"
    | "Software Engineering"
    | "Cloud"
    | "Business Growth"
    | "Technology Trends";
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  featured: boolean;
  content: string[];
};

export const blogCategories = [
  "All",
  "Artificial Intelligence",
  "Digital Transformation",
  "Software Engineering",
  "Cloud",
  "Business Growth",
  "Technology Trends",
] as const;

export const blogPostsData: BlogPost[] = [
  {
    id: "post-01",
    slug: "building-production-rag-systems-at-scale",
    title: "Building Production-Grade RAG Systems: Beyond Naive Vector Search",
    excerpt:
      "Why standard vector similarity search breaks in enterprise production, and how hybrid retrieval, re-ranking, and query decomposition solve accuracy gaps.",
    category: "Artificial Intelligence",
    author: {
      name: "Dr. Elena Rostova",
      role: "Principal AI Engineer",
    },
    publishedAt: "July 28, 2026",
    readTime: "7 min read",
    featured: true,
    content: [
      "Naive Retrieval-Augmented Generation (RAG) works exceptionally well for small demos, but degrades rapidly when faced with complex, domain-specific enterprise documentation.",
      "In production environments, vector embeddings often fail to distinguish between highly nuanced legal clauses or domain specific acronyms. To achieve sub-1% hallucination rates, engineering teams must implement hybrid search combining dense vector embeddings with sparse BM25 keyword matching.",
      "Furthermore, incorporating a secondary re-ranking stage (such as Cohere Rerank or BGE-Reranker) before injecting context into the LLM window dramatically improves top-k relevance while keeping context tokens minimal.",
      "At Hyperplane, our RAG framework uses query decomposition agents to break down compound user questions into single-intent sub-queries before querying vector indices, delivering up to 94% retrieval accuracy on enterprise knowledge bases.",
    ],
  },
  {
    id: "post-02",
    slug: "zero-bloat-microservice-architecture-in-go",
    title: "Zero-Bloat Microservices: Why We Replaced Monoliths with Minimal Go Services",
    excerpt:
      "How stripping away heavy frameworks and embracing explicit Go microservices enabled 10x throughput with a fraction of server memory.",
    category: "Software Engineering",
    author: {
      name: "Marcus Chen",
      role: "Lead Software Architect",
    },
    publishedAt: "July 19, 2026",
    readTime: "6 min read",
    featured: true,
    content: [
      "Microservice bloat is the silent killer of engineering velocity. Developers frequently wrap light business logic inside bloated web frameworks, bringing along hundreds of unnecessary dependencies.",
      "By adopting standard library Go HTTP handlers, gRPC transport layers, and explicit SQL query builders like sqlc, we reduced memory consumption per service instance to under 15MB.",
      "This minimal approach allows our clients to run hundreds of isolated worker containers on modest cloud instances while enjoying sub-5ms API response times.",
    ],
  },
  {
    id: "post-03",
    slug: "modernizing-legacy-enterprise-systems-without-downtime",
    title: "Digital Transformation: Migrating Legacy Mainframes Without Business Disruption",
    excerpt:
      "A battle-tested blueprint for strangler-fig pattern migration from legacy databases to cloud-native microservices.",
    category: "Digital Transformation",
    author: {
      name: "Alex Vance",
      role: "Founder & CEO",
    },
    publishedAt: "July 12, 2026",
    readTime: "9 min read",
    featured: false,
    content: [
      "Big-bang enterprise software rewrites are notoriously risky. The most reliable path to modernizing legacy infrastructure is the Strangler Fig Pattern.",
      "By placing an intelligent routing gateway in front of legacy services, teams can incrementally extract domain logic into cloud microservices piece by piece, validating each component under real user traffic.",
    ],
  },
  {
    id: "post-04",
    slug: "cost-optimized-multi-cloud-kubernetes-patterns",
    title: "Cloud Infrastructure 2026: Cutting Kubernetes Cloud Spend by 40%",
    excerpt:
      "Practical strategies for spot instance orchestration, pod right-sizing, and ingress bandwidth optimization.",
    category: "Cloud",
    author: {
      name: "David Kruger",
      role: "Cloud Infrastructure Lead",
    },
    publishedAt: "June 30, 2026",
    readTime: "5 min read",
    featured: false,
    content: [
      "Unmanaged cloud infrastructure costs compound fast as Kubernetes clusters scale. Most clusters over-provision CPU and RAM limits by 200-300% to handle rare traffic spikes.",
      "Implementing Karpenter or Cluster Autoscaler alongside spot instance fallbacks allows production workloads to automatically scale nodes up and down based on actual CPU metrics.",
    ],
  },
  {
    id: "post-05",
    slug: "engineering-velocity-as-a-business-growth-driver",
    title: "Engineering Velocity: Why Delivery Speed is the Ultimate Moat",
    excerpt:
      "How high-velocity software engineering directly correlates with market share acquisition and enterprise valuation.",
    category: "Business Growth",
    author: {
      name: "Alex Vance",
      role: "Founder & CEO",
    },
    publishedAt: "June 14, 2026",
    readTime: "4 min read",
    featured: false,
    content: [
      "In technology-driven markets, the company that iterates and ships features fastest wins. Engineering velocity isn't just about writing code quicker; it's about reducing cycle time from idea to user feedback.",
    ],
  },
  {
    id: "post-06",
    slug: "the-future-of-autonomous-agentic-software",
    title: "Technology Trends: The Shift From Generative Text to Agentic Action",
    excerpt:
      "Why the next decade of AI software will be defined by multi-agent workflows executing end-to-end business operations.",
    category: "Technology Trends",
    author: {
      name: "Dr. Elena Rostova",
      role: "Principal AI Engineer",
    },
    publishedAt: "June 02, 2026",
    readTime: "8 min read",
    featured: false,
    content: [
      "Generative AI chat models were only phase one. Phase two is agentic automation — autonomous software agents equipped with tools, APIs, and state memory capable of completing multi-step operational tasks.",
    ],
  },
];
