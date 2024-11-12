// import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
//import pokemon from "../modules/pokemon";
import pokemonSlice from "../slices/pokemonSlice";

// const rootReducer = combineReducers({ pokemon });
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
});

export default store;
