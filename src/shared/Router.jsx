import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";

import PokemonDetail from "../components/PokemonDetail";
import PokemonProvider from "../context/PokemonContext";

const Router = () => {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex/" element={<Dex />} />
          <Route path="/dex/pokemondetail/:id" element={<PokemonDetail />} />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  );
};

export default Router;
