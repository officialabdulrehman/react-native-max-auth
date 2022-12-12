import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { AuthContent } from "../../components/Auth/AuthContent/AuthContent";
import { LoadingOverlay } from "../../components/UI/LoadingOverlay/LoadingOverlay";
import { authApi } from "../../services/api/auth/auth.api";
import { LoginParams } from "../../services/api/auth/Auth.api.model";
import { authenticate } from "../../store/redux/slices/auth/auth.slice";

type Props = {};

export const LoginScreen = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const login = async (data: LoginParams) => {
    setLoading(true);
    try {
      const result = await authApi.login(data);
      dispatch(authenticate(result));
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
