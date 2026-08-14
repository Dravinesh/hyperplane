export type FounderMember = {
  id: string;
  name: string;
  role: "Co-Founder";
  capability: string;
  bio: string;
  image: string;
  avatarGradient: string;
  initials: string;
  skills: string[];
  socials: {
    linkedin: string;
  };
};

/**
 * Internal Founding Team Data Registry
 * Preserved with verified details for founders.
 */
export const foundersData: FounderMember[] = [
  {
    id: "dravinesh",
    name: "Dravinesh Narayanan",
    role: "Co-Founder",
    capability: "AI & Data / Technology",
    bio: "Dravinesh is an AI and Data Science engineer focused on turning intelligent systems into practical software products. His experience spans machine learning, computer vision, data, and full-stack development.",
    image: "/team/dravinesh.webp",
    avatarGradient: "from-violet-600 via-indigo-600 to-purple-800",
    initials: "DN",
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
    socials: {
      linkedin: "https://www.linkedin.com/in/dravinesh-narayanan-b64561248/",
    },
  },
  {
    id: "dhanush",
    name: "Dhanush",
    role: "Co-Founder",
    capability: "AI & Machine Learning / Data Analytics",
    bio: "Dhanush is an AI, Machine Learning, and Data Analytics enthusiast contributing to Hyperplane's data-driven solutions and technology. His experience includes Python, data analysis, machine learning, SQL, business intelligence, and web development, with hands-on experience building AI and data-focused projects.",
    image: "/team/dhanush.webp",
    avatarGradient: "from-indigo-600 via-purple-600 to-violet-800",
    initials: "D",
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
    socials: {
      linkedin: "https://www.linkedin.com/in/dhanushs0603/",
    },
  },
  {
    id: "shahira",
    name: "Shahira Shabnam",
    role: "Co-Founder",
    capability: "AI & Machine Learning",
    bio: "Shahira is an AI and Machine Learning practitioner with experience across data science, model development, GenAI, and software development. She brings an analytical and research-oriented perspective to the products Hyperplane builds.",
    image: "/team/shahira.webp",
    avatarGradient: "from-purple-600 via-violet-600 to-indigo-800",
    initials: "SS",
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
    socials: {
      linkedin: "https://www.linkedin.com/in/shahira-shabnam-653116241/",
    },
  },
];
