export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
};

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Hyperplane replaced our manual underwriting checks with an AI risk engine in less than 6 months. Our application conversion jumped by 340% without compromising credit quality.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Project Alpha (Fintech)",
    metric: "340%",
    metricLabel: "Conversion Increase",
  },
  {
    id: "testimonial-2",
    quote:
      "The fleet control tower engineered by Hyperplane gave us real-time visibility across 4,000+ logistics nodes. Fuel burn dropped 28% in our first quarter live.",
    author: "Marcus Vance",
    role: "VP of Operations",
    company: "Project Nova (Logistics)",
    metric: "- 28%",
    metricLabel: "Fuel Burn",
  },
  {
    id: "testimonial-3",
    quote:
      "Our peak season flash sales used to bring down our storefront. Hyperplane's modern microservices architecture handled 18,500 orders per minute with 100% uptime.",
    author: "David Sterling",
    role: "Head of Digital Products",
    company: "Project Orion (E-Commerce)",
    metric: "100%",
    metricLabel: "Peak Uptime",
  },
];
