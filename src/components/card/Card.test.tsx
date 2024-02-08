import {  render, screen } from "@testing-library/react";
import Card from "./Card";
import { Character } from "../../utils/interface";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../Styles/themes/default";
import { CharacterProvider } from "../../context/CharacterContext";
import { FavoriteProvinder } from "../../context/FavoriteContext";
import user from "@testing-library/user-event";

describe("Card Component", () => {
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
              <Card {...characterDataMocked} />
            </BrowserRouter>
          </FavoriteProvinder>
        </CharacterProvider>
      </ThemeProvider>
    );
  };
  test("Os campos do Personagem e os botões de adicionar favorito devem estar renderizado em tela.", () => {
    customRender();

    const nameCharacter = screen.getByTestId("name-character");
    const imgCharacter = screen.getByTestId("img-character");
    const buttonAddCharacter = screen.getByTestId("button-add-character");

    expect(nameCharacter).toBeInTheDocument();
    expect(imgCharacter).toBeInTheDocument();
    expect(buttonAddCharacter).toBeInTheDocument();
  });

  test("Ao apertar o botão de adicionar o botão remover deve aparecer em tela.", async () => {
    customRender();

    const buttonAddCharacter = screen.getByTestId("button-add-character");

    await user.click(buttonAddCharacter);

    const buttonRemoveCharacter = screen.getByTestId("button-remove-character");

    expect(buttonRemoveCharacter).toBeInTheDocument();
  });

  test("Ao apertar o botão de adicionar e apertar botão remover o botão de adicionar deve estar em tela.", async () => {
    customRender();

    const buttonAddCharacter = screen.getByTestId("button-add-character");

    await user.click(buttonAddCharacter);

    const buttonRemoveCharacter = screen.getByTestId("button-remove-character");

    expect(buttonRemoveCharacter).toBeInTheDocument();

    await user.click(buttonRemoveCharacter);

    expect(buttonAddCharacter).toBeInTheDocument();
  });
});
