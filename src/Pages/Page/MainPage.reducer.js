import { handleActions } from "redux-actions";
import { ACTION_TYPES } from "./MainPage.constant";
import { produce } from "immer";
import { shoesData ,shoescategories} from "../../ShoesData";

const initialState = {
  loading: false,
  shoesGallery:shoesData,
  categories:shoescategories,
   selectedProduct:{}
 
};

export default handleActions(
  {
    [ACTION_TYPES.VIEW_PRODUCT]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.selectedProduct = data;
      }),

    
  },
  initialState
);
