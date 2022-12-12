import { AuthContent } from "../../components/Auth/AuthContent/AuthContent";

type Props = {};

export const SignupScreen = (props: Props) => {
  return <AuthContent isLogin={false} onAuthenticate={() => {}} />;
};
