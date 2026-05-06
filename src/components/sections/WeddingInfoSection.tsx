import { MapPin, Clock, Calendar } from "lucide-react";
import { EucalyptusDivider } from "@/components/EucalyptusDecor";
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}
const InfoCard = ({
  icon,
  title,
  details
}: InfoCardProps) => <div className="text-center p-8 bg-card rounded-sm border border-border/50 hover:shadow-md transition-shadow">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
      {icon}
    </div>
    <h3 className="font-serif text-xl text-foreground mb-4">{title}</h3>
    {details.map((detail, index) =>
  <p key={index} className="text-muted-foreground text-sm leading-relaxed">
        {detail}
      </p>
  )}
  </div>;
export const WeddingInfoSection = () => {
  return <section id="mariage" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Le Grand Jour
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xs font-light">
            Tous les détails pour célébrer avec nous cette journée inoubliable
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <InfoCard icon={<Calendar className="w-5 h-5 text-primary" />} title="La Date" details={["Dimanche", "6 septembre 2026"]} />
            <InfoCard icon={<MapPin className="w-5 h-5 text-primary" />} title="Le Lieu" details={["Auberge des Iles", "St-Gédéon"]} />
          </div>
          
          <div className="mt-8">
            <div className="text-center p-8 bg-card rounded-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-6">Horaire</h3>
              <table className="max-w-lg mx-auto w-full text-left">
                <tbody>
                  <tr className="border-b border-border/30">
                    <td className="py-4 pr-8 text-foreground font-medium align-top whitespace-nowrap">Samedi</td>
                    <td className="py-4 text-muted-foreground text-sm align-top">Un souper sera organisé avec les personnes présentes. Détails à venir.</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="py-4 pr-8 text-foreground font-medium align-top whitespace-nowrap">Dimanche</td>
                    <td className="py-4 text-muted-foreground text-sm align-top">
                      <p>16h00 : cocktail de bienvenue</p>
                      <p>18h00 : cérémonie</p>
                      <p>19h30 : réception et repas</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-8 text-foreground font-medium align-top whitespace-nowrap">Lundi</td>
                    <td className="py-4 text-muted-foreground text-sm align-top">Brunch sur place et départ.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <EucalyptusDivider className="mt-16" />
      </div>
    </section>;};