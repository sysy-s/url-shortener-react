import Header from "../ui/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <>{children}</>
    </div>
  );
}
