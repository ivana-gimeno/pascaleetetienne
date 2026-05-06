import { Heart, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
export const RegistrySection = () => {
  return <section id="liste" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Liste de Mariage
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Votre présence est le plus beau des cadeaux
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-sm p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <Plane className="w-7 h-7 text-primary" />
              </div>
            </div>

            <h3 className="font-serif text-2xl text-foreground mb-6">
              Contribuez à notre voyage de noces
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Nous avons la chance d'avoir déjà tout ce dont nous avons besoin pour notre nid douillet. 
              Si vous souhaitez nous gâter, nous serions touchés par une contribution à notre voyage de noces, 
              un rêve que nous souhaitons réaliser ensemble.
            </p>

            <div className="bg-secondary/50 rounded-sm p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-4">
                <Heart className="w-4 h-4 inline-block mr-2 text-primary" />
                Chaque contribution, petite ou grande, nous rapproche de notre rêve - vous pouvez le faire en nous envoyant un virement à: pascale.panneton@gmail.com
              </p>
              
            </div>

            

          

            
          </div>
        </div>
      </div>
    </section>;
};