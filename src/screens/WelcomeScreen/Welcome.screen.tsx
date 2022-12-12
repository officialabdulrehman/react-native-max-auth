import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../../config/env";
import { api } from "../../lib/api/api.base";
import { RootState } from "../../store/redux/store";
import { styles } from "./Welcome.styles";

type Props = {};

export const WelcomeScreen = (props: Props) => {
  const [message, setMessage] = useState();
  const token = useSelector((state: RootState) => state.authReducer.tokenData);
  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await api.get(
          `${SERVER_URL}/message.json?auth=${token?.idToken}`
        );
        setMessage(response.data);
      } catch (e) {}
    };
    getMessage();
  }, [token]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>Message: {message}</Text>
    </View>
  );
};
