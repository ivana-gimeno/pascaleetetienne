import taniaImg from "@/assets/tania.jpeg";
import thomasImg from "@/assets/thomas.jpeg";
import felixImg from "@/assets/felix.jpeg";
import ivanaImg from "@/assets/ivana.jpeg";

interface PartyMemberProps {
  name: string;
  role: string;
  description: string;
  align: "left" | "right";
  image?: string;
}

const PartyMember = ({ name, role, description, align, image }: PartyMemberProps) => {
  const photoBlock = (
    <div className="flex flex-col items-center shrink-0">
      <div className="aspect-square rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center overflow-hidden bg-muted/50">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <p className="text-muted-foreground text-xs">Photo</p>
        )}
      </div>
      <h3 className="font-serif text-xl text-foreground mt-3 mb-1">{name}</h3>
      <p className="text-primary text-sm tracking-wide">{role}</p>
    </div>
  );

  const textBlock = (
    <div className={`flex-1 flex items-start ${align === "right" ? "md:text-right" : "md:text-left"} text-center md:text-inherit`}>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <div className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
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
      description: "Tane, la fille que j’ai rencontré il y a 16 ans, un soir de party chez mes parents, à rapidement changé son statut +1 à « us against the world ». Mon téléphone serait gêné de montrer les printscreens indécents, notre amour pour l’aneth, les reels d’Excel, nos achats compulsifs de Noel, nos recettes d’Instagram et nos références à Friends que nous avons fait. Moi qui gère son anxiété, et elle qui gère ma vie, nous sommes devenues un beau mélange unifié toujours prêtes à accueillir l’une ou l’autre avec du mousseux dans une main et du ubereats dans l’autre. Si vous avez des questions, n’hésitez pas à lui parler, car elle a opéré cet événement avec, un peu, notre aide.",
      align: "left" as const,
      image: taniaImg,
    },
    {
      name: "Ivana",
      role: "Témoin de la mariée",
      description: "Ivi, la force tranquille, mon amie techno, celle avec qui il ne suffit qu’un regard afin de comprendre ce que l’autre ressent. C’est avec elle dont je peux: rire de sa gamme de couleur vestimentaire, discuter voyage de 24h en Irlande, s’exciter avec le classement de nos épices et partager notre amour pour mon 2e mari (désolée Etienne) Bad Bunny. Celle qui est dévouée à aller m’acheter des tops parce que ça me le dit pas, je sais qu’elle est toujours à un seul coup de fil de venir à mon secours ou à créer un code QR pour notre mariage. ",
      align: "left" as const,
      image: ivanaImg,
    },
    {
      name: "Thomas",
      role: "Témoin du marié",
      description: "Qu'il chasse les champignons en forêt, qu'il rêve de Porsche ou d'immobilier, Thomas ne fait rien à moitié. De nos batailles de neige en 3e année aux jeudis au Toys \"R\" Us, jusqu'à nos expéditions en Colombie et sur la Mistassini, c'est le compagnon de route ultime. Épicurien et as de l'organisation, c'est le \"chum\" sur qui on peut toujours compter pour les meilleurs plans. Un pilier indispensable de ce mariage.",
      align: "right" as const,
      image: thomasImg,
    },
    {
      name: "Félix",
      role: "Témoin du marié",
      description: "Ami depuis la garderie chez Violaine, Félix est l'originalité pure. Capable de dominer le calcul différentiel au Cégep tout en filant dans les corridors sur des souliers à roulettes. Entre nos virées en tandem 1977 et nos partys aux quatre coins du Québec, il a passé 30 ans à refaire le monde avec moi. L'ingéniosité incarnée pour mon grand jour.",
      align: "right" as const,
      image: felixImg,
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
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
