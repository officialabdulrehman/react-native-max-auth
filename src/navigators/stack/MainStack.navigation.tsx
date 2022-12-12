import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "../../../src/store/redux/store";
import { AuthStack } from "./AuthStack.navigation";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  return <AuthStack />;
};
