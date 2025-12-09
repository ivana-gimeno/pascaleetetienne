import { useState } from "react";
import { Menu, X } from "lucide-react";
import eucalyptusHeader from "@/assets/eucalyptus-header.png";

const navItems = [{
  label: "Mariage",
  href: "#mariage"
}, {
  label: "RSVP",
  href: "#rsvp"
}, {
  label: "Hébergement",
  href: "#hebergement"
}, {
  label: "Notre histoire",
  href: "#notre-histoire"
}, {
  label: "Wedding Party",
  href: "#wedding-party"
}, {
  label: "Q & A",
  href: "#qa"
}];
export const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };
  return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30 shadow-sm">
      {/* Titre principal */}
      <div className="pt-6 pb-2 md:pt-8 md:pb-3 text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-foreground">
          Pascale & Etienne
        </h1>
        <img 
          src={eucalyptusHeader} 
          alt="" 
          className="mx-auto h-20 md:h-28 mt-1 object-contain object-top"
        />
      </div>

      {/* Navigation desktop */}
      <nav className="hidden md:block border-t border-border/30">
        <div className="flex justify-center items-center gap-6 lg:gap-10 py-4">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Navigation mobile - hamburger */}
      <div className="md:hidden border-t border-border/30">
        <button className="w-full flex items-center justify-center gap-2 py-3 text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="text-sm">Menu</span>
        </button>

        {/* Menu mobile déroulant */}
        {mobileMenuOpen && <div className="border-t border-border/30 bg-background animate-fade-in">
            <div className="flex flex-col">
              {navItems.map(item => <button key={item.href} onClick={() => scrollToSection(item.href)} className="px-6 py-3 text-center text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors border-b border-border/20 last:border-b-0">
                  {item.label}
                </button>)}
            </div>
          </div>}
      </div>
    </header>;
};