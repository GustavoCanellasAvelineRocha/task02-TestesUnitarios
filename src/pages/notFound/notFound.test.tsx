import { render, screen } from "@testing-library/react";
import { Character } from "../../utils/interface";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../Styles/themes/default";
import { CharacterContext } from "../../context/CharacterContext";
import { FavoriteProvinder } from "../../context/FavoriteContext";
import user, { userEvent } from "@testing-library/user-event";
import NotFound from "./Notfound";

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
              <NotFound />
            </CharacterContext.Provider>
          </FavoriteProvinder>
        </BrowserRouter>
      </ThemeProvider>
    );
  };

  test("Os campos do notFound devem ser renderizados na tela", async () => {
    customRender();

    const title = screen.getByTestId("not-found");

    expect(title).toBeInTheDocument();
  });
});
