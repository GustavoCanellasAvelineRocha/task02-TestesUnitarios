import { useContext } from "react";

import { Container } from "../../components/container/Container";
import { Main } from "../../components/main/main";
import { FavoriteContext } from "../../context/FavoriteContext";
import Navbar from "../../components/navbar/Navbar";
import { ContainerFavorite } from "../../components/containerFavorite/ContainerFavorite";
import Footer from "../../components/footer/Footer";
import { Button } from "../../components/button/Button";
import { EmptyListWarning } from "../../components/emptyListWarning/EmptyListWarning";

export default function Home() {
  const { favorites, removeFavorite } = useContext(FavoriteContext);

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
              <ContainerFavorite key={character.id}>
                <img src={character.imageUrl} alt="" />
                <h3>
                  {character.firstName} <strong>{character.lastName}</strong>
                </h3>
                <p>
                  Casa: <strong>{character.family}</strong>
                </p>
                <p>
                  Título: <strong>{character.title}</strong>
                </p>
                <Button onClick={() => removeFavorite(character.id)}>
                  Remover dos favoritos
                </Button>
              </ContainerFavorite>
            ))
          ) : (
            <EmptyListWarning>
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
