import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif text-2xl text-foreground mb-4">
          P & E
        </p>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          Fait avec <Heart className="w-4 h-4 text-primary fill-primary" /> pour notre grand jour
        </p>
        <p className="text-muted-foreground/60 text-xs mt-4">
          [Date du mariage] • [Lieu]
        </p>
      </div>
    </footer>
  );
};
