import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { LoginScreen } from "../../screens/LoginScreen/LoginScreen.screen";
import { SignupScreen } from "../../screens/SignupScreen/Signup.screen";
import { RootState } from "../../store/redux/store";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.backgroundColors.primary000 },
        headerTintColor: theme.colors.primary400,
        contentStyle: { backgroundColor: theme.backgroundColors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
