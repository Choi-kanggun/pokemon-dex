import { createContext } from "react";
import MOCK_DATA from "../mock/mock-data";
const pokemons = MOCK_DATA;
export const PokemonContext = createContext(null);

const PokemonProvider = ({ children }) => {
  return (
    <PokemonContext.Provider value={{ pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
