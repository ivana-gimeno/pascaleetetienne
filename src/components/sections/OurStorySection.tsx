import { EucalyptusDivider } from "@/components/EucalyptusDecor";

interface StoryChapterProps {
  title: string;
  date: string;
  content: string;
}

const StoryChapter = ({ title, date, content }: StoryChapterProps) => (
  <div className="text-center max-w-2xl mx-auto">
    <h3 className="font-serif text-2xl text-foreground mb-2">{title}</h3>
    <p className="text-primary text-sm tracking-wide mb-6">{date}</p>
    <p className="text-muted-foreground leading-relaxed">{content}</p>
  </div>
);

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
            date="[Date à définir]"
            content="[Racontez ici comment vous vous êtes rencontrés. C'est l'occasion de partager ce moment spécial avec vos invités. Décrivez le lieu, les circonstances, et ce qui a fait que cette rencontre était unique.]"
          />

          <EucalyptusDivider />

          <StoryChapter
            title="La Demande"
            date="[Date à définir]"
            content="[Décrivez le moment magique de la demande en mariage. Où étiez-vous? Comment cela s'est-il passé? Quelles émotions avez-vous ressenties? Partagez ce souvenir précieux avec vos proches.]"
          />

          <EucalyptusDivider />

          <StoryChapter
            title="Et Maintenant..."
            date="[Année du mariage]"
            content="[Partagez votre excitation pour le mariage à venir. Mentionnez ce que cette célébration représente pour vous et combien vous avez hâte de partager ce moment avec tous vos invités.]"
          />
        </div>

        {/* Photo gallery placeholder */}
        <div className="mt-20">
          <h3 className="font-serif text-xl text-center text-foreground mb-8">
            Quelques moments ensemble
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-muted/50 border-2 border-dashed border-border rounded-sm flex items-center justify-center"
              >
                <p className="text-muted-foreground text-xs text-center p-4">
                  Photo {i}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
