import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, View } from "react-native";
import { SignupParams } from "../../../services/api/auth/Auth.api.model";
import { FlatButton } from "../../UI/FlatButton/FlatButton";
import { AuthForm } from "../AuthForm/AuthForm";
import { styles } from "./AuthContent.styles";

type Props = {
  isLogin: boolean;
  onAuthenticate: (data: SignupParams) => void;
};

type NavProps = {
  Signup: {};
  Login: {};
};

export const AuthContent = (props: Props) => {
  const { isLogin, onAuthenticate } = props;
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });
  const navigation = useNavigation<NativeStackNavigationProp<NavProps>>();

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.replace("Signup", {});
    } else {
      navigation.replace("Login", {});
    }
  };

  const submitHandler = (credentials: any) => {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  };

  return (
    <View style={styles.container}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
};
