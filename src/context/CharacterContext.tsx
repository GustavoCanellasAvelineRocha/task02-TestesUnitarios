import { createContext, useState } from "react";
import { IChildren, Character } from "../utils/interface";
import { API } from "../utils/api";

interface CharacterContextType {
  CharacterData: Character[] | null;
  getAllCharacters: () => Promise<void>;
}

export const CharacterContext = createContext({} as CharacterContextType);

export function CharacterProvider({ children }: IChildren) {
  const [CharacterData, setCharacterData] = useState(null);

  async function getAllCharacters() {
    try {
      const response = await fetch(`${API}/Characters`);

      if (!response.ok) {
        throw new Error("Não foram encotrados personagens");
      }

      const data = await response.json();
      setCharacterData(data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <CharacterContext.Provider value={{ CharacterData, getAllCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
}
