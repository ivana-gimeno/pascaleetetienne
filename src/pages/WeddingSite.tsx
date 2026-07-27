import { SiteLayout } from "@/components/layout/SiteLayout";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroBanner } from "@/components/layout/HeroBanner";
import heroCoupleImage from "@/assets/hero-couple.jpg";
import { WeddingInfoSection } from "@/components/sections/WeddingInfoSection";
import { AccommodationSection } from "@/components/sections/AccommodationSection";
import { OurStorySection } from "@/components/sections/OurStorySection";
import { WeddingPartySection } from "@/components/sections/WeddingPartySection";
import { RegistrySection } from "@/components/sections/RegistrySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/Footer";

export const WeddingSite = () => {
  return (
    <SiteLayout>
      <SiteHeader />
      <main>
        <HeroBanner imageSrc={heroCoupleImage} alt="Pascale & Étienne" />
        <div className="px-6 md:px-12 lg:px-16">
          <WeddingInfoSection />
          <AccommodationSection />
          <OurStorySection />
          <WeddingPartySection />
          <RegistrySection />
          <FAQSection />
        </div>
      </main>
      <Footer />
    </SiteLayout>
  );
};
