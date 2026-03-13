import { EucalyptusDivider } from "@/components/EucalyptusDecor";
import couplePhoto1 from "@/assets/couple-photo-1.jpeg";
import couplePhoto2 from "@/assets/couple-photo-2.jpeg";
import couplePhoto3 from "@/assets/couple-photo-3.jpeg";

interface StoryChapterProps {
  title: string;
  date: string;
  content: string;
}

const StoryChapter = ({ title, date, content }: StoryChapterProps) =>
<div className="text-center max-w-2xl mx-auto">
    <h3 className="font-serif text-2xl text-foreground mb-2">{title}</h3>
    <p className="text-primary text-sm tracking-wide mb-6 text-left">{date}</p>
    <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-left">{content}</p>
  </div>;


const couplePhotos = [
{ src: couplePhoto1, alt: "Pascale et Étienne en Suisse" },
{ src: couplePhoto2, alt: "Pascale et Étienne en randonnée" },
{ src: couplePhoto3, alt: "Pascale et Étienne à la plage" }];


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

        <div className="space-y-16">
          <StoryChapter
            title="Notre Rencontre"
            date="Pascale"
            content="2013. Nouvelle arrivée d’analystes au travail. J’aperçois Etienne. Chouette gars. Geek aux lunettes. Il joue de la guitare devant tout le monde dans une rencontre d’équipe. Ok yé game. Il habite Québec, moi Montréal et a une blonde: l’idée d’une date ne me traverse même pas l’esprit.\n\nn2018: je recroise Étienne au bureau. Nice. Toujours aussi sympathique. On se voit 2 jours pas semaine. Je pense que chacun de notre côté on souhaite absolument croiser l’autre. Ma collègue m’informe qu’il est célibataire. Ah ouin? Une idée se forme. Mais quand même Quebec-Montreal on ne commence pas ça simple. Pourtant, je trippe à lui écrire. Les textos commencent. On s’écrit sans cesse, à tous les jours, tous le mois de novembre. Ça devient gênant le croiser au bureau. Début décembre. Après un brunch de Noël arrosé, je tente le tout pour le tout et lui admet que j’ai un gros crush. C’est réciproque. Wow. Party de Noël. Etienne est toujours à 2 jours par semaine à Montréal. On arrive à se voir 3 fois avant les fêtes. Question que je ne l’oubli pas, il m’envoi une chanson de Noël par jour et ce jusqu’à ce que je parte aux Philippines le 26 décembre. Je quitte pour un mois. Lui ensuite quitte pour la Martinique. On ne cesse pas de s’écrire. Le 1er février, on se revoit. Ça passe ou ça casse. C’est passé ♥️" />
          

          <EucalyptusDivider />

          <StoryChapter
            title="La Demande"
            date="[Date à définir]"
            content="[Décrivez le moment magique de la demande en mariage. Où étiez-vous? Comment cela s'est-il passé? Quelles émotions avez-vous ressenties? Partagez ce souvenir précieux avec vos proches.]" />
          

          <EucalyptusDivider />

          <StoryChapter
            title="Et Maintenant..."
            date="[Année du mariage]"
            content="[Partagez votre excitation pour le mariage à venir. Mentionnez ce que cette célébration représente pour vous et combien vous avez hâte de partager ce moment avec tous vos invités.]" />
          
        </div>

        {/* Photo gallery */}
        <div className="mt-20">
          <h3 className="font-serif text-xl text-center text-foreground mb-8">
            Quelques moments ensemble
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {couplePhotos.map((photo, i) =>
            <img
              key={i}
              src={photo.src}
              alt={photo.alt}
              className="aspect-square object-cover rounded-sm" />

            )}
          </div>
        </div>
      </div>
    </section>);

};