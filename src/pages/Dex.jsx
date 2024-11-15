import React from "react";
import PokemonList from "../components/PokemonList";
import { PokeDexWrapper } from "../style/style";
import Dashboard from "../components/Dashboard";

const Dex = () => {
  return (
    <PokeDexWrapper>
      <Dashboard />
      <PokemonList />
    </PokeDexWrapper>
  );
};

export default Dex;
