import { combineReducers } from "redux";
// import HomeReducer from "../Components/HomePage/Home/Home.reducer";
// import HeroReducer from "../Components/HomePage/HeroCutOut/HeroCutOut.reducer";
 import mainpageReducer from '../Pages/Page/MainPage.reducer'
export const defaultReducers = {
  // HomeReducer,
  // HeroReducer,
   mainpageReducer
};

export const rootReducer = combineReducers(defaultReducers);

export default {
  defaultReducers,
  rootReducer,
};
