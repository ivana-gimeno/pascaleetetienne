import { EucalyptusDecor } from "@/components/EucalyptusDecor";
export const HeroSection = () => {
  return <section id="mariage" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle eucalyptus decorations */}
      <EucalyptusDecor position="top-left" variant={1} size="lg" rotate={-15} className="opacity-40" />
      <EucalyptusDecor position="top-right" variant={2} size="md" flip rotate={20} className="opacity-40" />
      <EucalyptusDecor position="bottom-left" variant={3} size="md" rotate={10} className="opacity-30" />
      <EucalyptusDecor position="bottom-right" variant={1} size="lg" flip rotate={-25} className="opacity-35" />

      <div className="container mx-auto px-6 text-center py-24">
        <div className="animate-fade-in-up">
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-6">
            Nous nous marions
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 tracking-wide">
            Pascale &amp; Étienne
          </h1>
          
          <div className="w-24 h-px bg-primary mx-auto my-8" />
          
          <p className="font-serif text-2xl md:text-3xl text-primary mb-8">
            6 septembre 2026
          </p>
          
          <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto">
            Nous avons hâte de célébrer ce moment magique avec vous
          </p>

          {/* Photo placeholder */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="aspect-[4/3] bg-muted/50 border-2 border-dashed border-border rounded-sm flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-muted-foreground text-sm">
                  Votre photo de couple ici
                </p>
                <p className="text-muted-foreground/60 text-xs mt-2">
                  Format recommandé: 4:3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};