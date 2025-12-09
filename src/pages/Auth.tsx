import { useNavigate } from "react-router-dom";
import { PasswordGate } from "@/components/PasswordGate";

const Auth = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/", { replace: true });
  };

  return <PasswordGate onSuccess={handleSuccess} />;
};

export default Auth;
