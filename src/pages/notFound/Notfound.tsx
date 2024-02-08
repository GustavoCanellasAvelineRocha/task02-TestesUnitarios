import CardNotFound from "../../components/cardNotFound/CartNotFound";
import { Container } from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import { Main } from "../../components/main/main";
import Navbar from "../../components/navbar/Navbar";

export default function NotFound() {
  return (
    <>
      <Container>
        <Navbar link="/" label="Home"></Navbar>
        <Main>
          <h2 className="title" data-testid="not-found">Error 404: NotFound 🥶</h2>
          <p className="Welcome">
            Perdido por Westeros? Bem, é melhor voltar para casa! Caso
            contrário... um Caminhante Branco pode te encontrar.
          </p>
          <CardNotFound></CardNotFound>
        </Main>
        <Footer></Footer>
      </Container>
    </>
  );
}
