import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import MOCK_DATA from "../mock/mock-data";
import PokemonDetail from "../components/PokemonDetail";

const Router = () => {
  const pokemons = MOCK_DATA;
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dex/"
          element={
            <Dex
              pokemons={pokemons}
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          }
        />
        <Route
          path="/dex/pokemondetail/:id"
          element={<PokemonDetail pokemons={pokemons} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
