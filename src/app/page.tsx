import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandIdentity } from "@/components/sections/BrandIdentity";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyHyperplane } from "@/components/sections/WhyHyperplane";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="hp-noise">
        <Hero />
        <BrandIdentity />
        <ServicesPreview />
        <WhyHyperplane />
        <FeaturedProjects />
        <CTASection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
