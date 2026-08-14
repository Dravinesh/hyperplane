export type OfficeLocation = {
  city: string;
  role: string;
  address: string;
  timezone: string;
};

export const contactData = {
  email: "services@hyperplane.com",
  phone: null as string | null,
  headquarters: {
    city: "Greater Chennai Area",
    region: "Tamil Nadu, India",
    role: "Founding Hub",
    timezone: "IST (UTC+5:30)",
  },
  collaborationModes: [
    {
      title: "Direct Engineering Access",
      detail: "Direct collaboration with our core founding engineers.",
    },
    {
      title: "Global Collaboration",
      detail: "Asynchronous & synchronous project sprints across timezones.",
    },
    {
      title: "Guaranteed Turnaround",
      detail: "Technical response and feasibility review within 24 hours.",
    },
  ],
  inquiryTopics: [
    "AI Solutions & Machine Learning",
    "Generative AI & LLM Systems",
    "Computer Vision & Visual Intelligence",
    "Data Engineering & Analytics Pipelines",
    "Custom Software & Enterprise Platforms",
    "Full-Stack Web Applications",
    "Mobile Application Development (iOS / Android)",
    "Cloud Architecture, DevOps & SRE",
    "Database Architecture & Optimization",
    "Business Automation & Workflow Pipelines",
    "UI/UX Design Systems & Product Strategy",
    "API Engineering & System Integrations",
    "Cybersecurity & Architecture Review",
    "Other / Specialized Engineering",
  ],
  budgetRanges: [
    "₹50,000 – ₹1,50,000",
    "₹1,50,000 – ₹5,00,000",
    "₹5,00,000 – ₹15,00,000",
    "₹15,00,000+",
    "Custom Budget",
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/hyperplane-tech",
      isConfigured: false,
    },
  ],
} as const;
