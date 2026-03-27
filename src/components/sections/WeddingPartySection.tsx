interface PartyMemberProps {
  name: string;
  role: string;
  description: string;
}

const PartyMember = ({ name, role, description }: PartyMemberProps) => (
  <div className="text-center">
    <div className="aspect-square bg-muted/50 border-2 border-dashed border-border rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center">
      <p className="text-muted-foreground text-xs">Photo</p>
    </div>
    <h3 className="font-serif text-xl text-foreground mb-1">{name}</h3>
    <p className="text-primary text-sm tracking-wide mb-2">{role}</p>
    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
      {description}
    </p>
  </div>
);

export const WeddingPartySection = () => {
  const partyMembers = [
    {
      name: "Tania",
      role: "Témoin de la mariée",
      description: "Organisée, dévouée et capable de calculer le timing parfait d'un mariage dans sa tête — elle est le pilier discret qui fait que tout tient ensemble, même quand elle stresse en silence."
    },
    {
      name: "Ivana",
      role: "Témoin de la mariée",
      description: "Elle a visité la moitié du monde, a une appli pour tout et une solution pour n'importe quoi — mais c'est quand même elle qui va pleurer la première dans l'allée."
    },
    {
      name: "Thomas",
      role: "Témoin du marié",
      description: "Qu'il chasse les champignons en forêt, qu'il rêve de Porsche ou d'immobilier, Thomas ne fait rien à moitié. De nos batailles de neige en 3e année aux jeudis au Toys \"R\" Us, jusqu'à nos expéditions en Colombie et sur la Mistassini, c'est le compagnon de route ultime. Épicurien et as de l’organisation, c’est le \"chum\" sur qui on peut toujours compter pour les meilleurs plans. Un pilier indispensable de ce mariage."
    },
    {
      name: "Félix",
      role: "Témoin du marié",
      description: "[Description courte de la personne et de votre relation]"
    }
  ];

  return (
    <section id="wedding-party" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Wedding Party
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Les personnes spéciales qui nous accompagnent dans cette aventure
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {partyMembers.map((member, index) => (
            <PartyMember
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};