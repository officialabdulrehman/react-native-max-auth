import { AuthContent } from "../../components/Auth/AuthContent/AuthContent";

type Props = {};

export const LoginScreen = (props: Props) => {
  return <AuthContent isLogin={true} onAuthenticate={() => {}} />;
};
