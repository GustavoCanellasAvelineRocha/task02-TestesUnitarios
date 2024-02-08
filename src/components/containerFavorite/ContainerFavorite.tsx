import { useContext } from "react";
import { Character } from "../../utils/interface";
import { Button } from "../button/Button";
import { FavoriteContext } from "../../context/FavoriteContext";
import { ContainerFavoriteStyled } from "./ContainerFavoriteStyled";

export default function ContainerFavorite(character: Character) {
  const { removeFavorite } = useContext(FavoriteContext);
  return (
    <>
      <ContainerFavoriteStyled>
        <img src={character.imageUrl} alt="" data-testid="img-character" />
        <h3 data-testid="name-character">
          {character.firstName} <strong>{character.lastName}</strong>
        </h3>
        <p data-testid="house-character">
          Casa: <strong>{character.family}</strong>
        </p>
        <p data-testid="title-character">
          Título: <strong>{character.title}</strong>
        </p>
        <Button
          onClick={() => removeFavorite(character.id)}
          data-testid="button-remove-character"
        >
          Remover dos favoritos
        </Button>
      </ContainerFavoriteStyled>
    </>
  );
}
