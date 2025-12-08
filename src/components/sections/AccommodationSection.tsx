import { Hotel, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AccommodationSection = () => {
  return (
    <section id="hebergement" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Hébergement
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
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
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => window.open("#", "_blank")}
              >
                Réserver en ligne
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
