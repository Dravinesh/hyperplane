export type TeamMember = {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  avatarGradient: string;
  initials: string;
  skills: string[];
  socials: {
    linkedin: string;
    github?: string;
    twitter?: string;
  };
};

export const teamData: TeamMember[] = [
  {
    id: "alex-vance",
    name: "Alex Vance",
    role: "Founder & Chief Executive Officer",
    badge: "Founder",
    bio: "Former enterprise systems architect with 14+ years experience leading engineering teams. Obsessed with zero-bloat architecture and product precision.",
    avatarGradient: "from-violet-500 via-indigo-500 to-purple-600",
    initials: "AV",
    skills: ["System Architecture", "Product Strategy", "Technical Leadership", "AI Integration"],
    socials: {
      linkedin: "https://linkedin.com/in/hyperplane-placeholder",
      github: "https://github.com/hyperplane-placeholder",
      twitter: "https://twitter.com/hyperplane-placeholder",
    },
  },
  {
    id: "elena-rostova",
    name: "Dr. Elena Rostova",
    role: "Principal AI Engineer",
    badge: "AI Engineer",
    bio: "PhD in Computer Science with a focus on neural networks and retrieval systems. Spearheads custom LLM fine-tuning and agentic workflow R&D at Hyperplane.",
    avatarGradient: "from-indigo-500 via-purple-500 to-violet-600",
    initials: "ER",
    skills: ["PyTorch", "RAG Systems", "LLM Distillation", "Vector Databases", "Agentic AI"],
    socials: {
      linkedin: "https://linkedin.com/in/hyperplane-placeholder",
      github: "https://github.com/hyperplane-placeholder",
    },
  },
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    role: "Lead Software Architect",
    badge: "Lead Engineer",
    bio: "Specializes in high-frequency distributed systems, Rust, and Go. Previously engineered payment clearing platforms processing over $2B annually.",
    avatarGradient: "from-purple-500 via-violet-600 to-indigo-700",
    initials: "MC",
    skills: ["Go", "Rust", "Distributed Systems", "Kafka", "PostgreSQL Engine Tuning"],
    socials: {
      linkedin: "https://linkedin.com/in/hyperplane-placeholder",
      github: "https://github.com/hyperplane-placeholder",
    },
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Head of UI/UX Design",
    badge: "UI Designer",
    bio: "Award-winning product designer creating high-contrast luxury UI, complex data visualization dashboards, and seamless design systems.",
    avatarGradient: "from-violet-600 via-purple-500 to-blue-600",
    initials: "SJ",
    skills: ["Design Systems", "Figma", "Micro-Interactions", "User Research", "Dark Luxury UI"],
    socials: {
      linkedin: "https://linkedin.com/in/hyperplane-placeholder",
      twitter: "https://twitter.com/hyperplane-placeholder",
    },
  },
  {
    id: "david-kruger",
    name: "David Kruger",
    role: "Cloud Infrastructure Lead",
    badge: "Cloud Engineer",
    bio: "Kubernetes maintainer and Site Reliability Engineer. Expert in zero-trust cloud infrastructure, automated multi-region failover, and GitOps.",
    avatarGradient: "from-blue-600 via-indigo-600 to-purple-600",
    initials: "DK",
    skills: ["Kubernetes", "Terraform", "AWS / GCP", "DevOps", "Prometheus & SRE"],
    socials: {
      linkedin: "https://linkedin.com/in/hyperplane-placeholder",
      github: "https://github.com/hyperplane-placeholder",
    },
  },
  {
    id: "maya-patel",
    name: "Maya Patel",
    role: "Director of Engineering",
    badge: "Engineering Lead",
    bio: "Bridges client product visions with agile execution. Oversees sprint planning, technical quality assurance, and engineering delivery speed.",
    avatarGradient: "from-indigo-600 via-violet-500 to-purple-500",
    initials: "MP",
    skills: ["Agile Delivery", "Technical Project Management", "QA Frameworks", "CI/CD Orchestration"],
    socials: {
      linkedin: "https://linkedin.com/in/hyperplane-placeholder",
    },
  },
];
