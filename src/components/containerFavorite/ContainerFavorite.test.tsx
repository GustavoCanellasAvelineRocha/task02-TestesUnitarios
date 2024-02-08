import { render, screen } from "@testing-library/react";
import { Character } from "../../utils/interface";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../Styles/themes/default";
import { CharacterProvider } from "../../context/CharacterContext";
import { FavoriteProvinder } from "../../context/FavoriteContext";
import user from "@testing-library/user-event";
import ContainerFavorite from "./ContainerFavorite";

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

  const customRender = () => {
    return render(
      <ThemeProvider theme={defaultTheme}>
        <CharacterProvider>
          <FavoriteProvinder>
            <BrowserRouter>
              <ContainerFavorite {...characterDataMocked} />
            </BrowserRouter>
          </FavoriteProvinder>
        </CharacterProvider>
      </ThemeProvider>
    );
  };

  test("Os campos do Personagem e os botão de remover favorito devem estar renderizado em tela.", () => {
    customRender();

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

  test("Os campos devem sumir ao apertar em remover.", async () => {
    customRender();
    
    const buttonRemoveCharacter = screen.getByTestId("button-remove-character");

    expect(buttonRemoveCharacter).toBeInTheDocument();

    await user.click(buttonRemoveCharacter);
  });
});
