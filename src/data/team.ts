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
  linkedin?: string;
};

export const teamHeading = "The Team & Specialists";
export const teamTagline = "Different disciplines. One technology vision.";
export const teamSupportingText =
  "Hyperplane unites core leadership and multidisciplinary specialists across AI, machine learning, data architecture, cloud infrastructure, full-stack software, UX design, and market growth.";

export const teamCategories: SpecialistCategory[] = [
  "All",
  "Engineering",
  "AI & Data",
  "Cloud",
  "Design",
  "Growth",
];

export const teamData: TeamSpecialist[] = [
  // -------------------------------------------------------------
  // 1. Core Founding Team Members (Containers 1, 2, 3)
  // -------------------------------------------------------------
  {
    id: "dravinesh",
    name: "Dravinesh Narayanan",
    role: "Co-Founder",
    department: "AI & Engineering",
    specialization: "AI & Data / Technology",
    bio: "Dravinesh is an AI and Data Science engineer focused on turning intelligent systems into practical software products. His experience spans machine learning, computer vision, data, and full-stack development.",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Computer Vision",
      "Full-Stack Development",
      "Python",
      "Java",
      "SQL / Data",
    ],
    image: "/team/dravinesh.webp",
    isPlaceholder: false,
    category: "AI & Data",
    visualTheme: "neural",
    initials: "DN",
    avatarGradient: "from-violet-600 via-indigo-600 to-purple-800",
    linkedin: "https://www.linkedin.com/in/dravinesh-narayanan-b64561248/",
  },
  {
    id: "dhanush",
    name: "Dhanush",
    role: "Co-Founder",
    department: "AI & Analytics",
    specialization: "AI & Machine Learning / Data Analytics",
    bio: "Dhanush is an AI, Machine Learning, and Data Analytics enthusiast contributing to Hyperplane's data-driven solutions and technology. His experience includes Python, data analysis, machine learning, SQL, business intelligence, and web development, with hands-on experience building AI and data-focused projects.",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analytics",
      "Python",
      "SQL / MySQL",
      "Power BI",
      "Pandas",
      "NumPy",
      "Full-Stack Development",
    ],
    image: "/team/dhanush.webp",
    isPlaceholder: false,
    category: "AI & Data",
    visualTheme: "nodes",
    initials: "D",
    avatarGradient: "from-indigo-600 via-purple-600 to-violet-800",
    linkedin: "https://www.linkedin.com/in/dhanushs0603/",
  },
  {
    id: "shahira",
    name: "Shahira Shabnam",
    role: "Co-Founder",
    department: "AI & Machine Learning",
    specialization: "AI & Machine Learning",
    bio: "Shahira is an AI and Machine Learning practitioner with experience across data science, model development, GenAI, and software development. She brings an analytical and research-oriented perspective to the products Hyperplane builds.",
    skills: [
      "Machine Learning",
      "GenAI / LLMs",
      "Data Science",
      "Data Pipelines",
      "SHAP / Explainability",
      "XGBoost",
      "Python",
      "Java",
    ],
    image: "/team/shahira.webp",
    isPlaceholder: false,
    category: "AI & Data",
    visualTheme: "neural",
    initials: "SS",
    avatarGradient: "from-purple-600 via-violet-600 to-indigo-800",
    linkedin: "https://www.linkedin.com/in/shahira-shabnam-653116241/",
  },

  // -------------------------------------------------------------
  // 2. Multidisciplinary Specialists (Containers 4 to 9)
  // -------------------------------------------------------------
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
