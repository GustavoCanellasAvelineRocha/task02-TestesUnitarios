import { CardNotFound } from "../../components/cardNotFound/CardNotFound";
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
          <h2 className="title">Error 404: NotFound 🥶</h2>
          <p className="Welcome">
            Perdido por Westeros? Bem, é melhor voltar para casa! Caso
            contrário... um Caminhante Branco pode te encontrar.
          </p>
          <CardNotFound>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/White_Walker-Game_of_Thrones-S02-E10.jpg/330px-White_Walker-Game_of_Thrones-S02-E10.jpg"
              alt="Imagem White Walker"
            />
            <blockquote>
              <p>"O inverno está chegando."</p>
            </blockquote>
          </CardNotFound>
        </Main>
        <Footer></Footer>
      </Container>
    </>
  );
}
