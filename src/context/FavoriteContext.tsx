import { createContext, useState } from "react";
import { IChildren, Character } from "../utils/interface";

interface FavoriteContextType {
  favorites: Character[] | [];
  addFavorite: (newCharacter: Character) => void;
  removeFavorite: (idCharaterToDelete: string) => void;
  existsFavorite: (character: Character) => boolean;
}

export const FavoriteContext = createContext({} as FavoriteContextType);

export function FavoriteProvinder({ children }: IChildren) {
  const [favorites, setFavorites] = useState<Character[]>([]);

  function addFavorite(newCharacter: Character) {
    if (!existsFavorite(newCharacter)) {
      setFavorites((state) => [...state, newCharacter]);
    } else {
    }
  }

  function removeFavorite(idCharaterToDelete: string) {
    setFavorites((state) =>
      state.filter((favorite) => idCharaterToDelete !== favorite.id)
    );
  }
  function existsFavorite(character: Character) {
    return favorites.some((favorite) => favorite.id === character.id);
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        existsFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
