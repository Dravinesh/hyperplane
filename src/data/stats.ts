export type StatItem = {
  value: string;
  label: string;
  sublabel: string;
};

export const statsData: StatItem[] = [
  {
    value: "99.99%",
    label: "Platform Uptime SLA",
    sublabel: "Guaranteed across multi-region cloud clusters",
  },
  {
    value: "< 120ms",
    label: "Average Inference Latency",
    sublabel: "Sub-second AI model response throughput",
  },
  {
    value: "$180M+",
    label: "Client Value Generated",
    sublabel: "Through automation and infrastructure optimization",
  },
  {
    value: "45+",
    label: "Enterprise Solutions Shipped",
    sublabel: "Across fintech, healthcare, logistics & retail",
  },
];
