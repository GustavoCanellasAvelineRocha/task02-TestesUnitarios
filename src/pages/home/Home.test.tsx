import { render, screen } from "@testing-library/react";
import { Character } from "../../utils/interface";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../Styles/themes/default";
import { CharacterContext } from "../../context/CharacterContext";
import { FavoriteProvinder } from "../../context/FavoriteContext";
import { userEvent } from "@testing-library/user-event";
import Home from "./Home";

describe("Home Page", () => {
  const characterDataMocked: Character = {
    id: "1",
    firstName: "Daenerys",
    lastName: "Targaryen",
    title: "Mother of Dragons",
    family: "House Targaryen",
    image: "daenerys.jpg",
    imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
  };

  const customRender = () => {
    return render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <FavoriteProvinder>
            <CharacterContext.Provider
              value={{
                CharacterData: [characterDataMocked],
                getAllCharacters: jest.fn(),
              }}
            >
              <Home />
            </CharacterContext.Provider>
          </FavoriteProvinder>
        </BrowserRouter>
      </ThemeProvider>
    );
  };

  test("Os campos do Personagem e os botões de adicionar favorito devem estar renderizado em tela.", async () => {
    customRender();

    const nameCharacter = screen.getByTestId("name-character");
    const imgCharacter = screen.getByTestId("img-character");
    const buttonAddCharacter = screen.getByTestId("button-add-character");

    expect(nameCharacter).toBeInTheDocument();
    expect(imgCharacter).toBeInTheDocument();
    expect(buttonAddCharacter).toBeInTheDocument();
  });

  test("Deve ir para pagina favoritos ao clicar no link.", async () => {
    customRender();

    const contatoLink = screen.getByTestId("link");
    await userEvent.click(contatoLink);

    const currentUrl = window.location.href.split("localhost")[1];

    expect(currentUrl).toBe("/Favoritos");
  });
});
