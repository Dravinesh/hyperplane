export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  isPlaceholder?: boolean;
};

export const testimonialsHeading = "Client Stories & Partnerships";
export const testimonialsSubheading =
  "Building our first generation of products and partnerships. Real client case studies and testimonials will be published as projects conclude.";

export const testimonialsData: Testimonial[] = [];
