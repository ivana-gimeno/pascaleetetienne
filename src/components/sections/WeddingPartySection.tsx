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
      description: "[Description courte de la personne et de votre relation]"
    },
    {
      name: "Ivana",
      role: "Témoin de la mariée",
      description: "[Description courte de la personne et de votre relation]"
    },
    {
      name: "Thomas",
      role: "Témoin du marié",
      description: "[Description courte de la personne et de votre relation]"
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