import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import MOCK_DATA from "../mock/mock-data";
import PokemonDetail from "../components/PokemonDetail";
import { PokemonContext } from "../context/PokemonContext";


const Router = () => {
  const pokemons = MOCK_DATA;

  return (
    <BrowserRouter>
      <PokemonContext.Provider
        value={{
          pokemons,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex/" element={<Dex />} />
          <Route path="/dex/pokemondetail/:id" element={<PokemonDetail />} />
        </Routes>
      </PokemonContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
