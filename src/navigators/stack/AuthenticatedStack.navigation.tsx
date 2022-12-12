import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "../../components/UI/IconButton/IconButton";
import { WelcomeScreen } from "../../screens/WelcomeScreen/Welcome.screen";
import { logout } from "../../store/redux/slices/auth/auth.slice";
import { RootState } from "../../store/redux/store";

const Stack = createNativeStackNavigator();

export const AuthenticatedStack = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.backgroundColors.primary000 },
        headerTintColor: theme.colors.primary400,
        contentStyle: { backgroundColor: theme.backgroundColors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: () => (
            <IconButton
              name="power"
              color={theme.colors.secondary400}
              size={24}
              onPress={handleLogout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
