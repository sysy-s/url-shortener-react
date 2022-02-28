import NewUrlForm from "../components/url/NewUrlForm";
import Block from "../components/ui/Block";
import Header from "../components/ui/Header";

export default function Default() {
  return (
    <div>
      <Header />
      <Block>
        <NewUrlForm />
      </Block>
      </div>
  );
}
