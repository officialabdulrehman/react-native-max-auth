import { useSelector } from "react-redux";
import { RootState } from "../../../src/store/redux/store";
import { AuthenticatedStack } from "./AuthenticatedStack.navigation";
import { AuthStack } from "./AuthStack.navigation";

export const MainStackNavigator = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authReducer.isAuthenticated
  );
  const stack = isAuthenticated ? <AuthenticatedStack /> : <AuthStack />;
  return stack;
};
