import { useContext, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { CharacterContext } from "../../context/CharacterContext";
import { Container } from "../../components/container/Container";
import { Card } from "../../components/card/Card";
import { ContainerCard } from "../../components/card/ContainerCards";
import { Main } from "../../components/main/main";
import { FavoriteContext } from "../../context/FavoriteContext";
import { Button } from "../../components/button/Button";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const { CharacterData, getAllCharacters } = useContext(CharacterContext);
  const { addFavorite, existsFavorite, removeFavorite } =
    useContext(FavoriteContext);

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <Container>
        <Navbar link="/Favoritos" label="Favoritos"></Navbar>
        <Main>
          <h2 className="title">Bem vindo!</h2>
          <p className="Welcome">
            Este projeto foi criado para realizar a tarefa da Context API do
            React! O tema escolhido foi Game of Thrones (GOT).
          </p>
          <p className="Welcome">
            Nesta página, você deve escolher seus personagens favoritos, e na
            página de favoritos, você pode visualizá-los com mais detalhes
          </p>
          <ContainerCard>
            {CharacterData?.map((character) => (
              <Card key={character.id}>
                <img src={character.imageUrl} alt={character.image} />
                <p>
                  {character.firstName} <strong>{character.lastName}</strong>
                </p>
                {existsFavorite(character) ? (
                  <Button onClick={() => removeFavorite(character.id)}>
                    Remover dos favoritos
                  </Button>
                ) : (
                  <Button onClick={() => addFavorite({ ...character })}>
                    Adicionar aos favoritos
                  </Button>
                )}
              </Card>
            ))}
          </ContainerCard>
        </Main>
        <Footer></Footer>
      </Container>
    </>
  );
}
