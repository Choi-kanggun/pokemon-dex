import React from "react";
import PokemonList from "../components/pokemonList";
import { PokeDexWrapper } from "../style/style";
import Dashboard from "../components/Dashboard";

const Dex = ({ pokemons, selectedPokemon, setSelectedPokemon }) => {
  return (
    <PokeDexWrapper>
      <Dashboard
        pokemons={pokemons}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokemonList
        pokemons={pokemons}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </PokeDexWrapper>
  );
};

export default Dex;
