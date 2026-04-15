import couplePhoto1 from "@/assets/couple-photo-1.jpeg";
import couplePhoto2 from "@/assets/couple-photo-2.jpeg";
import couplePhoto3 from "@/assets/couple-photo-3.jpeg";
import familyPhoto from "@/assets/pasc-and-fam.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

interface StoryChapterProps {
  name: string;
  content: string;
  align?: "left" | "right";
}

const StoryChapter = ({ name, content, align = "left" }: StoryChapterProps) => (
  <div className={`max-w-2xl mx-auto ${align === "right" ? "text-right" : "text-left"}`}>
    <p className="text-primary text-sm tracking-wide mb-6">{name}</p>
    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{content}</p>
  </div>
);

const StorySectionGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-12">
    <h3 className="font-serif text-2xl text-center text-foreground">{title}</h3>
    {children}
  </div>
);

const couplePhotos = [
  { src: gallery1, alt: "Pascale et Étienne - photo 1" },
  { src: gallery2, alt: "Pascale et Étienne - photo 2" },
  { src: gallery3, alt: "Pascale et Étienne - photo 3" },
  { src: gallery4, alt: "Pascale et Étienne - photo 4" },
  { src: gallery5, alt: "Pascale et Étienne - photo 5" },
  { src: gallery6, alt: "Pascale et Étienne - photo 6" },
  { src: gallery7, alt: "Pascale et Étienne - photo 7" },
  { src: gallery8, alt: "Pascale et Étienne - photo 8" },
];

export const OurStorySection = () => {
  return (
    <section id="notre-histoire" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Notre Histoire
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Le chemin qui nous a menés jusqu'ici
          </p>
        </div>

        <div className="space-y-20">
          {/* Notre rencontre */}
          <StorySectionGroup title="Notre rencontre">
            <StoryChapter
              align="left"
              name="Pascale"
              content={"2013. Nouvelle arrivée d'analystes au travail. J'aperçois Etienne. Chouette gars. Geek aux lunettes. Il joue de la guitare devant tout le monde dans une rencontre d'équipe. Ok yé game. Il habite Québec, moi Montréal et a une blonde: l'idée d'une date ne me traverse même pas l'esprit.\n\n2018: je recroise Étienne au bureau. Nice. Toujours aussi sympathique. On se voit 2 jours par semaine. Je pense que chacun de notre côté on souhaite absolument croiser l'autre. Ma collègue m'informe qu'il est célibataire. Ah ouin? Une idée se forme. Mais quand même Quebec-Montreal on ne commence pas ça simple. Pourtant, je trippe à lui écrire. Les textos commencent. On s'écrit sans cesse, à tous les jours, tous le mois de novembre. Ça devient gênant le croiser au bureau. Début décembre. Après un brunch de Noël arrosé, je tente le tout pour le tout et lui admet que j'ai un gros crush. C'est réciproque. Wow. Party de Noël. Etienne est toujours à 2 jours par semaine à Montréal. On arrive à se voir 3 fois avant les fêtes. Question que je ne l'oubli pas, il m'envoi une chanson de Noël par jour et ce jusqu'à ce que je parte aux Philippines le 26 décembre. Je quitte pour un mois. Lui ensuite quitte pour la Martinique. On ne cesse pas de s'écrire. Le 1er février, on se revoit. Ça passe ou ça casse. C'est passé ♥️"}
            />
            <StoryChapter
              align="right"
              name="Étienne"
              content={"L'an 2013. J'arrive chez Desjardins. Jeune et fringuant. Mon tout premier contact; ma « coach », c'est Pascale. Je lui parle juste au téléphone pour savoir où on m'assigne. Première impression : wow elle a l'air de savoir ce qu'elle veut. Assez droit au but merci! On se voit la première fois parce qu'elle vient m'aider avec un gros premier mandat. Toute façon je comprenais rien à moitié. Je la vois. Elle est jolie…mais bon je suis déjà pris.\n\n2018, comme par hasard on se recroise. Plutôt souvent quand je suis en ville. Toujours aussi belle! Je suis bien libre maintenant. On avait déjà échangé nos cellulaires depuis 2013. On s'écrit pour la première fois en privé. Je lui avait dit d'écouter une émission super épeurante…alors elle essaie ça puis me lance une ligne, un bon soir de novembre. On se texte pas mal. Même beaucoup. C'est lfun…à chaque fois, c'est un sourire aux lèvres. On a un humour pareil. Ça devient une habitude et j'attends le prochain texto, toujours fébrile. Quand on se voit en vrai au bureau, il y une p'tite chaleur qui me monte aux joues. Et BAM, c'est un peu avant Noël. Elle m'avoue qu'elle a un p'tit kick sur moi. Mais t'sé, moi aussi! On comprend plus tard que c'est pas moi l'as des premiers pas. Puis je me dis que pour faire quelque chose d'unique, je lui envoie des chansons de Noël. Ça devient mon projet, ma motivation. Je me dis que c'est impossible que ça ne lui fasse pas un p'tit velour. On s'embrasse pour la première fois au complexe Desjardins, dans l'esprit de l'avent. Non mais quel concept le p'tit couple en vert! Après nos retours respectifs de voyage, ça n'a plus arrêté. Des beaux moments entre Québec et Montréal. Le début d'une relation, marquée par le décor monocorde de l'autoroute 20!"}
            />
          </StorySectionGroup>

          {/* La demande */}
          <StorySectionGroup title="La demande">
            <StoryChapter
              align="left"
              name="Pascale"
              content={"2023. On s'en va au Mexique. À Bacalar. 4 nuits. Sans enfant. LETS GO. L'endroit est magnifique. Pas d'enfant, pas de budget. Première journée, on prend ça relax. Il est bizarre de s'en aller au spa et de ne pas me proposer de venir avec lui. Oh well. Le soir on a un souper en amoureux sur le quai. L'attention est sur nous. Y'a ben trop de bouffe. C'est pas si bon. Je chiale. Il fait sa demande. What?"}
            />
            <StoryChapter
              align="right"
              name="Étienne"
              content={"Je m'étais décidé depuis un moment. J'attendais une occasion et le voyage au Mexique en amoureux semblait tout indiqué. Je me dis que ce serait trop compliqué de choisir une bague alors j'achète un bijou quelconque chez Winners pour faire office de petit boîte. On arrive finalement à Baccalar. Beau spot! J'ai un peu de misère à être dans le moment…j'attends de comprendre ma meilleure option de demande. Le souper romantique sur un quai dans le lagon, ça m'apparaît drôlement bon! Ça se passe le 1er soir. Stressé, je vais prendre un spa tout seul à la grosse pluie pour me répéter mon mot pendant l'après midi. J'étais un peu blême. Pascale trouve ça bizarre mais je me dis intérieurement : j'ai une bonne raison, elle verra bien. L'endroit est parfait. Seuls sur le quai. J'étais tellement content de ne pas être avec d'autres. Le souper avance. Je compte les minutes. J'attends le moment. Oups Pascale trouve que la bouffe est pas si bonne. Vite! Il faut que je me lance. Un genou par terre comme il le faut et je pars mon p'tit mot…en m'enfargeant un peu. Elle a dit oui …fiou"}
            />
          </StorySectionGroup>

          {/* Et maintenant */}
          <StorySectionGroup title="Et maintenant">
            <div className="max-w-md mx-auto">
              <img
                src={familyPhoto}
                alt="Pascale, Étienne et leur famille"
                className="w-full rounded-sm object-cover"
              />
            </div>
          </StorySectionGroup>
        </div>

        {/* Photo gallery */}
        <div className="mt-20">
          <h3 className="font-serif text-xl text-center text-foreground mb-8">
            Quelques moments ensemble
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {couplePhotos.map((photo, i) => (
              <img
                key={i}
                src={photo.src}
                alt={photo.alt}
                className="aspect-square object-cover rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
