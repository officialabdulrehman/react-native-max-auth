import { useState } from "react";
import { AuthContent } from "../../components/Auth/AuthContent/AuthContent";
import { LoadingOverlay } from "../../components/UI/LoadingOverlay/LoadingOverlay";
import { authApi } from "../../services/api/auth/auth.api";
import { SignupParams } from "../../services/api/auth/Auth.api.model";

type Props = {};

export const SignupScreen = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const signup = async (data: SignupParams) => {
    setLoading(true);
    await authApi.signup(data);
    setLoading(false);
  };

  if (loading) {
    return <LoadingOverlay />;
  }

  return <AuthContent isLogin={false} onAuthenticate={signup} />;
};
