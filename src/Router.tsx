import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterProvider } from "./context/CharacterContext";
import { FavoriteProvinder } from "./context/FavoriteContext";
import Notfound from "./pages/notFound/Notfound";
import Favoritos from "./pages/favoritos/Favoritos";
import Home from "./pages/home/Home";


export function Router() {
  return (
    <BrowserRouter>
      <CharacterProvider>
        <FavoriteProvinder>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favoritos" element={<Favoritos />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </FavoriteProvinder>
      </CharacterProvider>
    </BrowserRouter>
  );
}
