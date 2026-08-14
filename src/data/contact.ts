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
      detail: "Direct collaboration with our 3 founding engineers.",
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
    "Custom Software Engineering",
    "Full-Stack Web Applications",
    "Business Automation & Pipelines",
    "Cloud Architecture & Deployment",
    "Product Strategy & MVP Engineering",
  ],
  budgetRanges: [
    "Exploring / Early Stage",
    "$10,000 – $25,000",
    "$25,000 – $50,000",
    "$50,000+",
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/hyperplane-tech",
      isConfigured: false,
    },
  ],
} as const;
