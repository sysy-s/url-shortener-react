import Header from "../ui/Header";

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
