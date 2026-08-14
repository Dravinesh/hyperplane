export type SpecialistCategory =
  | "All"
  | "Engineering"
  | "AI & Data"
  | "Cloud"
  | "Design"
  | "Growth";

export type TeamSpecialist = {
  id: string;
  name: string;
  role: string;
  department: string;
  specialization: string;
  bio: string;
  skills: string[];
  image: string;
  isPlaceholder: boolean;
  category: SpecialistCategory;
  visualTheme: "neural" | "database" | "cloud" | "design" | "nodes" | "trajectory";
  initials: string;
  avatarGradient: string;
};

export const teamHeading = "Built by Specialists";
export const teamTagline = "Different disciplines. One technology vision.";
export const teamSupportingText =
  "Hyperplane brings together specialists across engineering, design, data, cloud, AI, and growth to solve complex business problems from first principles.";

export const teamCategories: SpecialistCategory[] = [
  "All",
  "Engineering",
  "AI & Data",
  "Cloud",
  "Design",
  "Growth",
];

export const teamData: TeamSpecialist[] = [
  {
    id: "arjun-mehta",
    name: "Arjun Mehta",
    role: "AI & Machine Learning Engineer",
    department: "Artificial Intelligence",
    specialization: "Artificial Intelligence · Machine Learning · Generative AI",
    bio: "Designs intelligent systems that turn complex business problems into practical AI-powered solutions.",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "Computer Vision",
      "AI Agents",
    ],
    image: "/team/specialists/arjun.webp",
    isPlaceholder: true,
    category: "AI & Data",
    visualTheme: "neural",
    initials: "AM",
    avatarGradient: "from-violet-600 via-indigo-600 to-purple-800",
  },
  {
    id: "vikram-nair",
    name: "Vikram Nair",
    role: "Database & Data Engineer",
    department: "Data Engineering",
    specialization: "Data Architecture · Database Systems · Analytics",
    bio: "Designs reliable data foundations that help businesses store, process, and transform information into actionable intelligence.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL",
      "Database Design",
      "Data Warehousing",
      "ETL",
      "Data Pipelines",
    ],
    image: "/team/specialists/vikram.webp",
    isPlaceholder: true,
    category: "AI & Data",
    visualTheme: "database",
    initials: "VN",
    avatarGradient: "from-indigo-600 via-purple-600 to-blue-800",
  },
  {
    id: "rohan-kapoor",
    name: "Rohan Kapoor",
    role: "Cloud & DevOps Engineer",
    department: "Cloud & Infrastructure",
    specialization: "Cloud Infrastructure · DevOps · Scalability",
    bio: "Builds secure, scalable infrastructure and deployment systems that keep modern applications reliable as they grow.",
    skills: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "CI/CD",
      "Linux",
      "Kubernetes",
      "Cloud Architecture",
    ],
    image: "/team/specialists/rohan.webp",
    isPlaceholder: true,
    category: "Cloud",
    visualTheme: "cloud",
    initials: "RK",
    avatarGradient: "from-blue-600 via-indigo-600 to-violet-800",
  },
  {
    id: "maya-iyer",
    name: "Maya Iyer",
    role: "UI/UX Designer",
    department: "Product Design",
    specialization: "Product Design · User Experience · Design Systems",
    bio: "Creates intuitive digital experiences by combining user research, visual design, and thoughtful interaction.",
    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Design Systems",
      "Prototyping",
      "Interaction Design",
      "User Flows",
    ],
    image: "/team/specialists/maya.webp",
    isPlaceholder: true,
    category: "Design",
    visualTheme: "design",
    initials: "MI",
    avatarGradient: "from-purple-600 via-pink-600 to-violet-800",
  },
  {
    id: "aditya-rao",
    name: "Aditya Rao",
    role: "Full-Stack Engineer",
    department: "Software Engineering",
    specialization: "Web Applications · Software Engineering",
    bio: "Builds scalable web applications from interface to infrastructure, turning product ideas into dependable software.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Firebase",
      "PostgreSQL",
      "Git",
    ],
    image: "/team/specialists/aditya.webp",
    isPlaceholder: true,
    category: "Engineering",
    visualTheme: "nodes",
    initials: "AR",
    avatarGradient: "from-violet-600 via-purple-600 to-indigo-800",
  },
  {
    id: "ananya-sharma",
    name: "Ananya Sharma",
    role: "Marketing & Growth Lead",
    department: "Marketing & Growth",
    specialization: "Digital Marketing · Brand Strategy · Growth",
    bio: "Connects technology with the market through data-driven marketing, positioning, content, and growth strategies.",
    skills: [
      "Digital Marketing",
      "SEO",
      "Content Strategy",
      "Social Media",
      "Performance Marketing",
      "Brand Strategy",
      "Analytics",
      "Lead Generation",
    ],
    image: "/team/specialists/ananya.webp",
    isPlaceholder: true,
    category: "Growth",
    visualTheme: "trajectory",
    initials: "AS",
    avatarGradient: "from-purple-600 via-violet-500 to-teal-700",
  },
];
