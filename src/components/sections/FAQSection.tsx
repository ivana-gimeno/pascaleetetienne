import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Puis-je amener un accompagnateur?",
    answer:
      "Afin de respecter la capacité de notre lieu de réception, seules les personnes nommées sur l'invitation pourront être présentes. Nous vous remercions de votre compréhension!",
  },
  {
    question: "Y a-t-il un code vestimentaire?",
    answer:
      "Nous vous demandons une tenue formelle dans des tons neutres (noir, blanc, beige, gris, marine, etc.). N'oubliez pas vos chaussures confortables pour danser!",
  },
  {
    question: "Puis-je prendre des photos pendant la cérémonie?",
    answer:
      "Nous vous demandons de garder vos téléphones rangés pendant la cérémonie afin de profiter pleinement du moment. Un photographe professionnel capturera chaque instant. Vous pourrez prendre autant de photos que vous le souhaitez lors de la réception!",
  },
  {
    question: "Y a-t-il un stationnement disponible?",
    answer:
      "Oui, un stationnement gratuit est disponible sur place pour tous les invités.",
  },
  {
    question: "Les enfants sont-ils les bienvenus?",
    answer:
      "Nous adorons vos petits, mais nous avons choisi de réserver cette soirée aux adultes. Nous espérons que cela vous permettra de profiter d'une belle soirée sans soucis!",
  },
  {
    question: "Avez-vous une liste de mariage?",
    answer:
      "Votre présence est le plus beau des cadeaux! Si vous souhaitez tout de même nous gâter, nous avons préparé quelques suggestions dans la section Registre de cadeaux.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-foreground">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-primary/20 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
