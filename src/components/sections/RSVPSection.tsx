import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { EucalyptusDecor } from "@/components/EucalyptusDecor";

export const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "",
    dietaryRestrictions: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Placeholder - backend to be added later
    toast({
      title: "Merci!",
      description: "Votre réponse a été enregistrée. (Fonctionnalité bientôt active)",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="rsvp" className="py-24 bg-secondary/30 relative overflow-hidden">
      <EucalyptusDecor position="top-left" variant={2} size="lg" rotate={-20} className="opacity-25" />
      <EucalyptusDecor position="bottom-right" variant={1} size="lg" flip rotate={15} className="opacity-25" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            RSVP
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Confirmez votre présence avant le [date limite]
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
                <div className="space-y-2">
                  <Label htmlFor="guests">Nombre de personnes (incluant vous)</Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="1"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietaryRestrictions">
                    Restrictions alimentaires ou allergies
                  </Label>
                  <Textarea
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Végétarien, sans gluten, allergies..."
                    className="bg-background resize-none"
                    rows={2}
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">Un petit mot pour nous (optionnel)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                className="bg-background resize-none"
                rows={3}
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Envoyer ma réponse
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
