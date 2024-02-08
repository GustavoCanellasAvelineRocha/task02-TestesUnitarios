/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { CharacterContext } from "../../context/CharacterContext";
import { Container } from "../../components/container/Container";
import { ContainerCard } from "../../components/card/ContainerCards";
import { Main } from "../../components/main/main";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";

export default function Home() {
  const { CharacterData, getAllCharacters } = useContext(CharacterContext);

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
              <Card {...character} key={character.id}></Card>
            ))}
          </ContainerCard>
        </Main>
        <Footer></Footer>
      </Container>
    </>
  );
}
