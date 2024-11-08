import React from "react";
import PokemonCard from "./PokemonCard";
import { PokeCardListWrapper } from "../style/style";

const PokemonList = ({ pokemons, selectedPokemon, setSelectedPokemon }) => {
  return (
    <PokeCardListWrapper>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          isSelected={selectedPokemon.some(
            (selectPokemon) => selectPokemon.id === pokemon.id
          )}
        />
      ))}
    </PokeCardListWrapper>
  );
};

export default PokemonList;
