import { Text, View } from "react-native";
import { styles } from "./Welcome.styles";

type Props = {};

export const WelcomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
};
