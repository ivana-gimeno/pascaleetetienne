import { ReactNode } from "react";
import siteBackground from "@/assets/site-background.avif";

interface SiteLayoutProps {
  children: ReactNode;
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      {/* COUCHE 1 - Arrière-plan fixe */}
      <div 
        className="fixed inset-0 bg-cover bg-right bg-no-repeat -z-10"
        style={{ 
          backgroundImage: `url(${siteBackground})`,
          filter: 'saturate(1.2) contrast(1.05)'
        }}
      />
      
      {/* COUCHE 2 - Conteneur central blanc/beige */}
      <div className="relative z-0 min-h-screen flex justify-center">
        <div className="w-[95%] md:w-[80%] lg:w-[70%] bg-background/95 shadow-xl">
          {/* COUCHE 3 - Contenu */}
          {children}
        </div>
      </div>
    </div>
  );
};
