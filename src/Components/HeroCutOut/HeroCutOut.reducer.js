import { handleActions } from "redux-actions";
// import { ACTION_TYPES } from "./Home.constant";
import { produce } from "immer";

const initialState = {
  loading: false,
};

export default handleActions(
  {
    // [ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING]: (state, { data } = {}) =>
    //   produce(state, (draft) => {
    //     draft.loading = true;
    //   }),
  },
  initialState
);
