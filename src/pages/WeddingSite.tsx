import { SiteLayout } from "@/components/layout/SiteLayout";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { WeddingInfoSection } from "@/components/sections/WeddingInfoSection";
import { AccommodationSection } from "@/components/sections/AccommodationSection";
import { OurStorySection } from "@/components/sections/OurStorySection";
import { RegistrySection } from "@/components/sections/RegistrySection";
import { RSVPSection } from "@/components/sections/RSVPSection";
import { Footer } from "@/components/Footer";

export const WeddingSite = () => {
  return (
    <SiteLayout>
      <SiteHeader />
      <main>
        <HeroBanner />
        <div className="px-6 md:px-12 lg:px-16">
          <WeddingInfoSection />
          <AccommodationSection />
          <OurStorySection />
          <RegistrySection />
          <RSVPSection />
        </div>
      </main>
      <Footer />
    </SiteLayout>
  );
};
