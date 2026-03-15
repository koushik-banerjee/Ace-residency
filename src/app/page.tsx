import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { ShowcaseSlider } from "@/components/sections/ShowcaseSlider";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <ExperienceSection />
      <AmenitiesSection />
      <ShowcaseSlider />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
