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

            <div className="bg-secondary/50 rounded-sm p-6 mb-8">
              <h4 className="font-medium text-foreground mb-3 text-center">
                Informations de réservation
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mentionnez le code: <span className="font-medium text-foreground">[CODE À DÉFINIR]</span></li>
                <li>• Tarif préférentiel: <span className="font-medium text-foreground">[Prix]/nuit</span></li>
                <li>• Réservez avant le: <span className="font-medium text-foreground">[Date limite]</span></li>
              </ul>
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

          <p className="text-center text-sm text-muted-foreground mt-8">
            D'autres options d'hébergement sont disponibles dans la région. 
            N'hésitez pas à nous contacter si vous avez besoin d'aide.
          </p>
        </div>
      </div>
    </section>
  );
};
