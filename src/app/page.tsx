import { Hero } from "@/components/sections/Hero";
import { BrandIdentity } from "@/components/sections/BrandIdentity";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyHyperplane } from "@/components/sections/WhyHyperplane";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="hp-noise pt-28 pb-20">
      <Hero />
      <BrandIdentity />
      <ServicesPreview />
      <WhyHyperplane />
      <FeaturedProjects />
      <CTASection />
    </main>
  );
}
