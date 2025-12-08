import { MapPin, Clock, Calendar } from "lucide-react";
import { EucalyptusDivider } from "@/components/EucalyptusDecor";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const InfoCard = ({ icon, title, details }: InfoCardProps) => (
  <div className="text-center p-8 bg-card rounded-sm border border-border/50 hover:shadow-md transition-shadow">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
      {icon}
    </div>
    <h3 className="font-serif text-xl text-foreground mb-4">{title}</h3>
    {details.map((detail, index) => (
      <p key={index} className="text-muted-foreground text-sm leading-relaxed">
        {detail}
      </p>
    ))}
  </div>
);

export const WeddingInfoSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Le Grand Jour
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tous les détails pour célébrer avec nous cette journée inoubliable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <InfoCard
            icon={<Calendar className="w-5 h-5 text-primary" />}
            title="La Date"
            details={[
              "Dimanche",
              "6 septembre",
              "2026",
            ]}
          />
          
          <InfoCard
            icon={<MapPin className="w-5 h-5 text-primary" />}
            title="Le Lieu"
            details={[
              "[Nom du lieu]",
              "[Adresse]",
              "[Ville, Province]",
            ]}
          />
          
          <InfoCard
            icon={<MapPin className="w-5 h-5 text-primary" />}
            title="Les Enfants"
            details={[
              "Bien que nous aimons profondément",
              "tous vos bouts de choux, nous avons choisi",
              "de célébrer cette soirée sans la présence de ceux-ci.",
            ]}
          />
        </div>

        <EucalyptusDivider className="mt-16" />

        {/* Additional venue photo placeholder */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="aspect-[16/9] bg-muted/50 border-2 border-dashed border-border rounded-sm flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-muted-foreground text-sm">
                Photo du lieu de réception
              </p>
              <p className="text-muted-foreground/60 text-xs mt-2">
                Format recommandé: 16:9
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
