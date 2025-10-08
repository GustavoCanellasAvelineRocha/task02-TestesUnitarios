import { render, screen } from "@testing-library/react";
import { Character } from "../../utils/interface";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../Styles/themes/default";
import { CharacterProvider } from "../../context/CharacterContext";
import {
  FavoriteContext,
  FavoriteProvinder,
} from "../../context/FavoriteContext";
import { userEvent } from "@testing-library/user-event";
import Favoritos from "./Favoritos";
import { BrowserRouter } from "react-router-dom";


describe("ContainerFavorite Component", () => {
  const characterDataMocked: Character = {
    id: "1",
    firstName: "Daenerys",
    lastName: "Targaryen",
    title: "Mother of Dragons",
    family: "House Targaryen",
    image: "daenerys.jpg",
    imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
  };

  const customRenderMocked = () => {
    return render(
      <ThemeProvider theme={defaultTheme}>
        <CharacterProvider>
          <FavoriteContext.Provider
            value={{
              favorites: [characterDataMocked],
              addFavorite: jest.fn(),
              removeFavorite: jest.fn(),
              existsFavorite: jest.fn(),
            }}
          >
            <BrowserRouter>
              <Favoritos />
            </BrowserRouter>
          </FavoriteContext.Provider>
        </CharacterProvider>
      </ThemeProvider>
    );
  };

  const customRender = () => {
    return render(
      <ThemeProvider theme={defaultTheme}>
        <CharacterProvider>
          <FavoriteProvinder>
            <BrowserRouter>
              <Favoritos />
            </BrowserRouter>
          </FavoriteProvinder>
        </CharacterProvider>
      </ThemeProvider>
    );
  };

  test("Os campos do Personagem favorito e os botão de remover favorito devem estar renderizado em tela.", () => {
    customRenderMocked();

    const nameCharacter = screen.getByTestId("name-character");
    const imgCharacter = screen.getByTestId("img-character");
    const buttonRemoveCharacter = screen.getByTestId("button-remove-character");
    const houseCharacter = screen.getByTestId("house-character");
    const titleCharacter = screen.getByTestId("title-character");

    expect(nameCharacter).toBeInTheDocument();
    expect(imgCharacter).toBeInTheDocument();
    expect(buttonRemoveCharacter).toBeInTheDocument();
    expect(houseCharacter).toBeInTheDocument();
    expect(titleCharacter).toBeInTheDocument();
  });

  test("O campo sem favoritos deve estar renderizado na tela.", () => {
    customRender();

    const textEmpty = screen.getByTestId("text-empty");

    expect(textEmpty).toBeInTheDocument();
  });

  test("Deve ir para pagina home ao clicar no link", async () => {
    customRender();

    const contatoLink = screen.getByTestId("link");
    await userEvent.click(contatoLink);

    const currentUrl = window.location.href.split("localhost")[1];

    expect(currentUrl).toBe("/");
  });
  
  test("Deve chamar a função removeFavorite ao clicar no botão de remover", async () => {
    const mockRemoveFavorite = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <CharacterProvider>
          <FavoriteContext.Provider
            value={{
              favorites: [characterDataMocked],
              addFavorite: jest.fn(),
              removeFavorite: mockRemoveFavorite,
              existsFavorite: jest.fn(),
            }}
          >
            <BrowserRouter>
              <Favoritos />
            </BrowserRouter>
          </FavoriteContext.Provider>
        </CharacterProvider>
      </ThemeProvider>
    );

    const removeButton = screen.getByTestId("button-remove-character");
    await userEvent.click(removeButton);

    expect(mockRemoveFavorite).toHaveBeenCalledWith(characterDataMocked.id);
  });

  test("A imagem do personagem deve conter src e alt corretos", () => {
    customRenderMocked();

    const img = screen.getByTestId("img-character") as HTMLImageElement;

    expect(img).toBeInTheDocument();
    expect(img.src).toBe(characterDataMocked.imageUrl);
    expect(img.alt.toLowerCase()).toContain(characterDataMocked.firstName.toLowerCase());
  });

  test("Deve exibir o nome completo do personagem (nome + sobrenome)", () => {
    customRenderMocked();

    const name = screen.getByTestId("name-character");

    const expectedFullName = `${characterDataMocked.firstName} ${characterDataMocked.lastName}`;
    expect(name.textContent).toBe(expectedFullName);
  });

});
