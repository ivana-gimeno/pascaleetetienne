import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordGate } from "@/components/PasswordGate";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("wedding-auth");
    if (auth === "true") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleSuccess = () => {
    navigate("/", { replace: true });
  };

  return <PasswordGate onSuccess={handleSuccess} />;
};

export default Auth;
