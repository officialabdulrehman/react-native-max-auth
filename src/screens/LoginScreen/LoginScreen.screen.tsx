import { useState } from "react";
import { Alert } from "react-native";
import { AuthContent } from "../../components/Auth/AuthContent/AuthContent";
import { LoadingOverlay } from "../../components/UI/LoadingOverlay/LoadingOverlay";
import { authApi } from "../../services/api/auth/auth.api";
import { LoginParams } from "../../services/api/auth/Auth.api.model";

type Props = {};

export const LoginScreen = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const login = async (data: LoginParams) => {
    setLoading(true);
    try {
      await authApi.login(data);
    } catch (e) {
      Alert.alert("Login failed", "Invalid credentials");
    }
    setLoading(false);
  };

  if (loading) {
    return <LoadingOverlay />;
  }
  return <AuthContent isLogin={true} onAuthenticate={login} />;
};
