import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/redux/slices/auth/auth.slice";
import { MainStackNavigator } from "./stack/MainStack.navigation";

export const RootNavigator = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const getTokenFromLocalStorage = async () => {
      const data = await AsyncStorage.getItem("tokenData");
      if (data && data.length) {
        dispatch(authenticate(JSON.parse(data)));
      }
      setLoading(false);
    };
    getTokenFromLocalStorage();
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
