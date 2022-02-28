import Header from "../ui/Header";

export default function Layout(props) {
  return (
    <div>
      <Header token={props.token} />
      {props.children}
    </div>
  );
}
