export const contactData = {
  email: "services@hyperplane.com",
  phonePlaceholder: "+1 (800) 555-0199",
  offices: [
    {
      city: "San Francisco",
      role: "Global Headquarters",
      address: "500 Howard Street, Suite 800, San Francisco, CA 94105",
      timezone: "PST (UTC-8)",
    },
    {
      city: "New York",
      role: "East Coast Tech Hub",
      address: "One World Trade Center, Floor 65, New York, NY 10007",
      timezone: "EST (UTC-5)",
    },
    {
      city: "London",
      role: "EMEA Engineering Hub",
      address: "100 Bishopsgate, Level 18, London EC2N 4AG",
      timezone: "GMT (UTC+0)",
    },
  ],
  businessHours: [
    { days: "Monday – Friday", hours: "08:00 AM – 07:00 PM (Local Time)" },
    { days: "Saturday – Sunday", hours: "Emergency SRE On-Call Active 24/7" },
  ],
  inquiryTopics: [
    "AI Solutions & Machine Learning",
    "Custom Software Engineering",
    "Business Automation & Workflows",
    "Cloud Infrastructure & Migration",
    "Modern Web Application",
    "UI/UX Design Systems",
    "Strategic Tech Consulting",
  ],
  budgetRanges: [
    "$25,000 – $50,000",
    "$50,000 – $100,000",
    "$100,000 – $250,000",
    "$250,000+",
  ],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/company/hyperplane-placeholder" },
    { label: "GitHub", href: "https://github.com/hyperplane-placeholder" },
    { label: "Twitter", href: "https://twitter.com/hyperplane-placeholder" },
  ],
} as const;
