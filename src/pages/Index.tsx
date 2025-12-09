import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WeddingSite } from "@/pages/WeddingSite";

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("wedding-auth");
    if (auth !== "true") {
      navigate("/auth", { replace: true });
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [navigate]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse">
          <p className="font-serif text-2xl text-muted-foreground">P & E</p>
        </div>
      </div>
    );
  }

  return <WeddingSite />;
};

export default Index;
