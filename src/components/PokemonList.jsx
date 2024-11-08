import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { PokeCardListWrapper } from "../style/style";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {
  const { pokemons, selectedPokemon, setSelectedPokemon } =
    useContext(PokemonContext);
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
