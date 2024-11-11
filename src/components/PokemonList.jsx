import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { ListTitle, PokeCardList, PokeCardListWrapper } from "../style/style";
import { PokemonContext } from "../context/PokemonContext";
import { useSelector } from "react-redux";

const PokemonList = () => {
  const { pokemons } = useContext(PokemonContext);
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  return (
    <PokeCardListWrapper>
      <ListTitle>포켓몬 리스트</ListTitle>
      <PokeCardList>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isSelected={selectedPokemon.some(
              (selectPokemon) => selectPokemon.id === pokemon.id
            )}
          />
        ))}
      </PokeCardList>
    </PokeCardListWrapper>
  );
};

export default PokemonList;
