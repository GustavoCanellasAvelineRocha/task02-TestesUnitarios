import { Link } from "react-router-dom";
import { Header } from "./Header";

interface props {
  link: string;
  label: string;
}

export default function NavBar(props: props) {
  return (
    <>
      <Header>
          <h1>
            <Link to="/">Favoritos GOT</Link>
          </h1>
          <Link to={props.link}>{props.label}</Link>
      </Header>
    </>
  );
}
