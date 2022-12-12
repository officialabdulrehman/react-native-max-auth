import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AuthContent } from "../../components/Auth/AuthContent/AuthContent";
import { LoadingOverlay } from "../../components/UI/LoadingOverlay/LoadingOverlay";
import { authApi } from "../../services/api/auth/auth.api";
import { SignupParams } from "../../services/api/auth/Auth.api.model";
import { authenticate } from "../../store/redux/slices/auth/auth.slice";
import { RootState } from "../../store/redux/store";

type Props = {};

export const SignupScreen = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const tokenData = useSelector(
    (state: RootState) => state.authReducer.tokenData
  );
  const dispatch = useDispatch();

  const signup = async (data: SignupParams) => {
    setLoading(true);
    try {
      const result = await authApi.signup(data);
      dispatch(authenticate(result));
    } catch (e) {
      Alert.alert("Signup failed", "Invalid data");
    }
    setLoading(false);
  };

  if (loading) {
    return <LoadingOverlay />;
  }

  return <AuthContent isLogin={false} onAuthenticate={signup} />;
};
