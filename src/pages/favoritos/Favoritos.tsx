import { useContext } from "react";
import { Container } from "../../components/container/Container";
import { Main } from "../../components/main/main";
import { FavoriteContext } from "../../context/FavoriteContext";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { EmptyListWarning } from "../../components/emptyListWarning/EmptyListWarning";
import ContainerFavorite from "../../components/containerFavorite/ContainerFavorite";

export default function Home() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <>
      <Container>
        <Navbar link="/" label="Home"></Navbar>

        <Main>
          <h2 className="title">Seus Favoritos!</h2>
          <p className="Welcome">
            Nesta pagina estao seus personagens mais amados de game of thrones!
          </p>
          {favorites.length > 0 ? (
            favorites.map((character) => (
              <ContainerFavorite
                {...character}
                key={character.id}
              ></ContainerFavorite>
            ))
          ) : (
            <EmptyListWarning data-testid="text-empty">
              Sua lista de favoritos está <strong>vazia!</strong> Por favor,
              adicione seus favoritos na página inicial!
            </EmptyListWarning>
          )}
        </Main>
        <Footer></Footer>
      </Container>
    </>
  );
}
