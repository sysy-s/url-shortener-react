import Block from "../components/ui/Block";
import LoginForm from "../components/user/LoginForm";
import Header from "../components/ui/Header";

export default function Login() {
  return (
    <div>
      <Header />
      <Block>
        <LoginForm />
      </Block>
      </div>
  );
}
