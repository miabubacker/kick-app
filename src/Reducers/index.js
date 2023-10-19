import { combineReducers } from "redux";
import HomeReducer from "../Components/Home/Home.reducer";
export const defaultReducers = {
  HomeReducer,
};

export const rootReducer = combineReducers(defaultReducers);

export default {
  defaultReducers,
  rootReducer,
};
