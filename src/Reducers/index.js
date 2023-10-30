import { combineReducers } from "redux";
import HomeReducer from "../Components/HomePage/Home/Home.reducer";
import HeroReducer from "../Components/HomePage/HeroCutOut/HeroCutOut.reducer";
export const defaultReducers = {
  HomeReducer,
  HeroReducer,
};

export const rootReducer = combineReducers(defaultReducers);

export default {
  defaultReducers,
  rootReducer,
};
