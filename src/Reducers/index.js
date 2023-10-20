import { combineReducers } from "redux";
import HomeReducer from "../Components/Home/Home.reducer";
import HeroReducer from "../Components/HeroCutOut/HeroCutOut.reducer";
export const defaultReducers = {
  HomeReducer,
  HeroReducer,
};

export const rootReducer = combineReducers(defaultReducers);

export default {
  defaultReducers,
  rootReducer,
};
