import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { EucalyptusDecor } from "@/components/EucalyptusDecor";
import authBackground from "@/assets/auth-background.jpg";

interface PasswordGateProps {
  onSuccess: () => void;
}

const CORRECT_PASSWORD = "ppeg2026";

export const PasswordGate = ({ onSuccess }: PasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase() === CORRECT_PASSWORD.toLowerCase()) {
      localStorage.setItem("wedding-auth", "true");
      onSuccess();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${authBackground})` }}
      />
      <EucalyptusDecor position="top-left" variant={1} size="lg" rotate={-15} className="opacity-30" />
      <EucalyptusDecor position="top-right" variant={2} size="md" flip rotate={20} className="opacity-30" />
      <EucalyptusDecor position="bottom-left" variant={3} size="md" rotate={10} className="opacity-25" />
      <EucalyptusDecor position="bottom-right" variant={1} size="lg" flip rotate={-25} className="opacity-30" />

      <div className="w-full max-w-sm mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3 tracking-wide">
            P & E
          </h1>
          <div className="w-16 h-px bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-sm tracking-wide">
            Bienvenue à notre mariage
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`bg-card border border-border rounded-sm p-8 ${
            isShaking ? "animate-[shake_0.5s_ease-in-out]" : ""
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
          </div>

          <label htmlFor="password" className="block text-sm text-muted-foreground text-center mb-4">
            Entrez le mot de passe pour accéder au site
          </label>

          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Mot de passe"
            className={`text-center mb-4 bg-background ${
              error ? "border-destructive" : ""
            }`}
            autoComplete="off"
          />

          {error && (
            <p className="text-destructive text-sm text-center mb-4">
              Mot de passe incorrect
            </p>
          )}

          <Button type="submit" className="w-full">
            Accéder au site
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground/60 mt-6">
          Le mot de passe se trouve sur votre invitation
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};
