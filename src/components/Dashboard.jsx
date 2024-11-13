import {
  DashboardTitle,
  MyPokemonCard,
  MyPokemonCardBox,
  MyPokemonWrapper,
  PokeballBox,
  PokeBallImg,
} from "../style/style";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const selectedPokemon = useSelector((store) => store.pokemon.selectedPokemon);

  return (
    <MyPokemonWrapper>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <MyPokemonCardBox>
        {selectedPokemon.map((pokemon) => (
          <MyPokemonCard key={pokemon.id}>
            <PokemonCard
              pokemon={pokemon}
              isSelected={selectedPokemon.some(
                (selectPokemon) => selectPokemon.id === pokemon.id
              )}
            />
          </MyPokemonCard>
        ))}
        {Array.from({ length: 6 - selectedPokemon.length }).map((_, idx) => (
          <PokeballBox key={idx}>
            <PokeBallImg src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"></PokeBallImg>
          </PokeballBox>
        ))}
      </MyPokemonCardBox>
    </MyPokemonWrapper>
  );
};

export default Dashboard;
