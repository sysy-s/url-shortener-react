import Block from "../components/ui/Block";
import RegisterForm from "../components/user/RegisterForm";
import Header from "../components/ui/Header";

export default function Register() {
  return (
    <div>
      <Header />
      <Block>
        <RegisterForm />
      </Block>
      </div>
  );
}
