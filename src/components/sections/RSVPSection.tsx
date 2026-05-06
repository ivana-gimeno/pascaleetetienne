import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { EucalyptusDecor } from "@/components/EucalyptusDecor";

// ── Configuration ──────────────────────────────────────────────
// 1. Deploy your Google Apps Script web app (see setup instructions)
// 2. Paste the URL below
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzuzF9KVvHnkvuB3h89uT83pDAC9KnSiDdP6dDduoHk4LM_hlHByiwh8AZptpbO4qpgKw/exec";
// Shared secret – must match the one in your Apps Script
const FORM_SECRET = "ppeg-rsvp-2026";
// ───────────────────────────────────────────────────────────────

const INITIAL_FORM = {
  name: "",
  email: "",
  attendance: "",
  meal: "",
  allergies: "",
};

export const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!GOOGLE_SCRIPT_URL) {
      toast({
        title: "Erreur de configuration",
        description: "L'URL du formulaire n'est pas encore configurée.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: FORM_SECRET,
          timestamp: new Date().toISOString(),
          name: formData.name,
          email: formData.email,
          attendance: formData.attendance,
          meal: formData.meal,
          allergies: formData.allergies,
        }),
      });

      // no-cors returns opaque response, so we assume success
      setSubmitted(true);
      setFormData(INITIAL_FORM);
      toast({
        title: "Merci!",
        description: "Votre réponse a été enregistrée.",
      });
    } catch {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer votre réponse. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 bg-secondary/30 relative overflow-hidden">
        <EucalyptusDecor position="top-left" variant={2} size="lg" rotate={-20} className="opacity-25" />
        <EucalyptusDecor position="bottom-right" variant={1} size="lg" flip rotate={15} className="opacity-25" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Merci!</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Votre réponse a bien été enregistrée. Au plaisir de vous voir!
          </p>
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Modifier ma réponse
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-secondary/30 relative overflow-hidden">
      <EucalyptusDecor position="top-left" variant={2} size="lg" rotate={-20} className="opacity-25" />
      <EucalyptusDecor position="bottom-right" variant={1} size="lg" flip rotate={15} className="opacity-25" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            RSVP
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Confirmez votre présence avant le 31 mai 2026
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm mt-2">
            Si vous répondez après cette date, apportez-vous une chaise et un sandwich!
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-sm p-8 md:p-10 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Courriel *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@courriel.com"
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-3">
              <Label>Serez-vous des nôtres? *</Label>
              <RadioGroup
                value={formData.attendance}
                onValueChange={(value) =>
                  setFormData({ ...formData, attendance: value })
                }
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-normal cursor-pointer">
                    Avec joie!
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-normal cursor-pointer">
                    Malheureusement non
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attendance === "yes" && (
              <>
                <div className="space-y-3">
                  <Label>Quel repas voulez-vous? *</Label>
                  <RadioGroup
                    value={formData.meal}
                    onValueChange={(value) =>
                      setFormData({ ...formData, meal: value })
                    }
                    className="flex flex-col gap-4"
                  >
                    <label htmlFor="poisson" className="flex items-start space-x-3 cursor-pointer">
                      <RadioGroupItem value="poisson" id="poisson" className="mt-1" />
                      <div>
                        <span className="font-medium">Poisson</span>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          Omble chevalier avec concassé de fraises à l'angélique sur risotto aux champignons et légumes de saison
                        </p>
                      </div>
                    </label>
                    <label htmlFor="viande" className="flex items-start space-x-3 cursor-pointer">
                      <RadioGroupItem value="viande" id="viande" className="mt-1" />
                      <div>
                        <span className="font-medium">Viande</span>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          Bavette de bœuf sur purée de pommes de terre fumées et légumes de saison
                        </p>
                      </div>
                    </label>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies">
                    Avez-vous des intolérances alimentaires ou allergies?
                  </Label>
                  <Textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    placeholder="Précisez ici..."
                    className="bg-background resize-none"
                    rows={2}
                  />
                </div>
              </>
            )}

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma réponse"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              * Champs obligatoires
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
