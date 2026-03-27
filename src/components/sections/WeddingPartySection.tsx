interface PartyMemberProps {
  name: string;
  role: string;
  description: string;
  align: "left" | "right";
}

const PartyMember = ({ name, role, description, align }: PartyMemberProps) => {
  const photoBlock = (
    <div className="flex flex-col items-center shrink-0">
      <div className="aspect-square bg-muted/50 border-2 border-dashed border-border rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
        <p className="text-muted-foreground text-xs">Photo</p>
      </div>
      <h3 className="font-serif text-xl text-foreground mt-3 mb-1">{name}</h3>
      <p className="text-primary text-sm tracking-wide">{role}</p>
    </div>
  );

  const textBlock = (
    <div className={`flex-1 flex items-center ${align === "right" ? "md:text-right" : "md:text-left"} text-center md:text-inherit`}>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
      {photoBlock}
      {textBlock}
    </div>
  );
};

export const WeddingPartySection = () => {
  const partyMembers = [
    {
      name: "Tania",
      role: "Témoin de la mariée",
      description: "Organisée, dévouée et capable de calculer le timing parfait d'un mariage dans sa tête — elle est le pilier discret qui fait que tout tient ensemble, même quand elle stresse en silence.",
      align: "left" as const,
    },
    {
      name: "Ivana",
      role: "Témoin de la mariée",
      description: "Elle a visité la moitié du monde, a une appli pour tout et une solution pour n'importe quoi — mais c'est quand même elle qui va pleurer la première dans l'allée.",
      align: "left" as const,
    },
    {
      name: "Thomas",
      role: "Témoin du marié",
      description: "Qu'il chasse les champignons en forêt, qu'il rêve de Porsche ou d'immobilier, Thomas ne fait rien à moitié. De nos batailles de neige en 3e année aux jeudis au Toys \"R\" Us, jusqu'à nos expéditions en Colombie et sur la Mistassini, c'est le compagnon de route ultime. Épicurien et as de l'organisation, c'est le \"chum\" sur qui on peut toujours compter pour les meilleurs plans. Un pilier indispensable de ce mariage.",
      align: "right" as const,
    },
    {
      name: "Félix",
      role: "Témoin du marié",
      description: "Ami depuis la garderie chez Violaine, Félix est l'originalité pure. Capable de dominer le calcul différentiel au Cégep tout en filant dans les corridors sur des souliers à roulettes. Entre nos virées en tandem 1977 et nos partys aux quatre coins du Québec, il a passé 30 ans à refaire le monde avec moi. L'ingéniosité incarnée pour mon grand jour.",
      align: "right" as const,
    },
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

        <div className="flex flex-col gap-12 md:gap-16 max-w-3xl mx-auto">
          {partyMembers.map((member, index) => (
            <PartyMember
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              align={member.align}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
