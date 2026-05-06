import { Hotel, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import venuePhoto from "@/assets/venue-photo.webp";
export const AccommodationSection = () => {
  return <section id="hebergement" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Hébergement
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xs font-light">
            Nous avons réservé un bloc de chambres pour vous faciliter la vie
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-sm p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Hotel className="w-5 h-5 text-primary" />
              </div>
            </div>

            <h3 className="font-serif text-2xl text-center text-foreground mb-6">
              Auberge des Iles
            </h3>

            <div className="space-y-4 text-center text-muted-foreground mb-8">
              <p>250 Rang des Îles, Saint-Gédéon, QC G0W 2P0</p>
              
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <p>418-549-7111</p>
              </div>
            </div>


            <div className="text-center">
              <Button variant="default" size="lg" onClick={() => window.open("/Mariage-de-Pascale-et-Etienne.pdf", "_blank")}>
                Pour réserver
              </Button>
            </div>
          </div>
        </div>

        {/* Venue photo */}
        <div className="max-w-2xl mx-auto mt-12 relative">
          <img 
            src={venuePhoto} 
            alt="Auberge des Iles - Lieu de réception" 
            className="w-full aspect-[16/9] object-cover rounded-sm shadow-md brightness-75"
          />
        </div>
      </div>
    </section>;
};