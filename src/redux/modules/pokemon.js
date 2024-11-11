const ADD_POKEMON = "ADD_POKEMON";
const DELETE_POKEMON = "DELETE_POKEMON";

export const addPokemon = (payload) => {
  return {
    type: ADD_POKEMON,
    payload,
  };
};

export const deletePokemon = (payload) => {
  return {
    type: DELETE_POKEMON,
    payload,
  };
};

const initialState = { selectedPokemon: [] };

const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return { selectedPokemon: [...state.selectedPokemon, action.payload] };
    case DELETE_POKEMON:
      return {
        selectedPokemon: state.selectedPokemon.filter(
          (pokemon) => pokemon.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default pokemon;
