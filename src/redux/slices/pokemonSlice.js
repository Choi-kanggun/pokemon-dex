import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedPokemon: [] };

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      return { selectedPokemon: [...state.selectedPokemon, action.payload] };
    },
    deletePokemon: (state, action) => {
      return {
        selectedPokemon: state.selectedPokemon.filter(
          (pokemon) => pokemon.id !== action.payload.id
        ),
      };
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
