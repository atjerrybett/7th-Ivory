import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { VideoShowreel } from "@/components/home/VideoShowreel";
import { DirectorProfiles } from "@/components/home/DirectorProfiles";
import { ServicesSection } from "@/components/home/ServicesSection";
import { VeniceHighlight } from "@/components/home/VeniceHighlight";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoShowreel />
      <FeaturedWork />
      <DirectorProfiles />
      <VeniceHighlight />
      <ServicesSection />
      <CTASection />
    </>
  );
}
