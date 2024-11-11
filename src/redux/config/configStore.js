import { combineReducers, createStore } from "redux";
import pokemon from "../modules/pokemon";

const rootReducer = combineReducers({ pokemon });
const store = createStore(rootReducer);

export default store;
