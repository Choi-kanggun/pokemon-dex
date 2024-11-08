import React, { useContext } from "react";
import {
  DashboardTitle,
  MyPokemonCard,
  MyPokemonCardBox,
  MyPokemonImg,
  MyPokemonWrapper,
} from "../style/style";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../context/PokemonContext";

const Dashboard = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);
  return (
    <MyPokemonWrapper>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <MyPokemonCardBox>
        {selectedPokemon.map((pokemon) => (
          <MyPokemonCard key={pokemon.id}>
            <PokemonCard
              pokemon={pokemon}
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
              isSelected={selectedPokemon.some(
                (selectPokemon) => selectPokemon.id === pokemon.id
              )}
            />
          </MyPokemonCard>
        ))}
        {Array.from({ length: 6 - selectedPokemon.length }).map((_, idx) => (
          <MyPokemonCard key={idx}>
            <MyPokemonImg src="../../public/pokeball.png"></MyPokemonImg>
          </MyPokemonCard>
        ))}
      </MyPokemonCardBox>
    </MyPokemonWrapper>
  );
};

export default Dashboard;
