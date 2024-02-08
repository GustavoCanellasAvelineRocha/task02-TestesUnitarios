import { useContext } from "react";
import { Character } from "../../utils/interface";
import { CardStyled } from "./CardStyled";
import { Button } from "../button/Button";
import { FavoriteContext } from "../../context/FavoriteContext";

export default function Card(character: Character) {
  const { addFavorite, existsFavorite, removeFavorite } =
    useContext(FavoriteContext);

  return (
    <>
      <CardStyled>
        <img src={character.imageUrl} alt={character.image} data-testid="img-character"/>
        <p data-testid="name-character">
          {character.firstName} <strong>{character.lastName}</strong>
        </p>
        {existsFavorite(character) ? (
          <Button onClick={() => removeFavorite(character.id)} data-testid="button-remove-character">
            Remover dos favoritos
          </Button>
        ) : (
          <Button onClick={() => addFavorite({ ...character })} data-testid="button-add-character">
            Adicionar aos favoritos
          </Button>
        )}
      </CardStyled>
    </>
  );
}
