import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { IChildren, Character } from "../utils/interface";

/** Public shape of the favorites context */
interface FavoriteContextType {
  favorites: Character[];
  addFavorite: (newCharacter: Character) => void;
  removeFavorite: (idCharacterToDelete: string) => void;
  existsFavorite: (character: Character) => boolean;
}

/** Create as nullable, then expose a safe hook below */
export const FavoriteContext = createContext<FavoriteContextType | null>(null);

/** Convenience hook so consumers don't deal with nulls */
export function useFavorites() {
  const ctx = useContext(FavoriteContext);
  if (!ctx) {
    throw new Error("useFavorites must be used within <FavoriteProvider>.");
  }
  return ctx;
}

export function FavoriteProvider({ children }: IChildren) {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addFavorite = useCallback((newCharacter: Character) => {
    setFavorites((prev) =>
      prev.some((c) => c.id === newCharacter.id) ? prev : [...prev, newCharacter]
    );
  }, []);

  const removeFavorite = useCallback((idCharacterToDelete: string) => {
    setFavorites((prev) => prev.filter((c) => c.id !== idCharacterToDelete));
  }, []);

  const existsFavorite = useCallback(
    (character: Character) => favorites.some((c) => c.id === character.id),
    [favorites]
  );

  /** Memoize the context value to avoid unnecessary re-renders */
  const value = useMemo(
    () => ({ favorites, addFavorite, removeFavorite, existsFavorite }),
    [favorites, addFavorite, removeFavorite, existsFavorite]
  );

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}
