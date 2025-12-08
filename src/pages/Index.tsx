import { useState, useEffect } from "react";
import { PasswordGate } from "@/components/PasswordGate";
import { WeddingSite } from "@/pages/WeddingSite";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("wedding-auth");
    setIsAuthenticated(auth === "true");
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse">
          <p className="font-serif text-2xl text-muted-foreground">P & E</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PasswordGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <WeddingSite />;
};

export default Index;
