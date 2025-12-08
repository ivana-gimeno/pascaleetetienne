import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { WeddingInfoSection } from "@/components/sections/WeddingInfoSection";
import { AccommodationSection } from "@/components/sections/AccommodationSection";
import { OurStorySection } from "@/components/sections/OurStorySection";
import { RegistrySection } from "@/components/sections/RegistrySection";
import { RSVPSection } from "@/components/sections/RSVPSection";
import { Footer } from "@/components/Footer";

export const WeddingSite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WeddingInfoSection />
        <AccommodationSection />
        <OurStorySection />
        <RegistrySection />
        <RSVPSection />
      </main>
      <Footer />
    </div>
  );
};
