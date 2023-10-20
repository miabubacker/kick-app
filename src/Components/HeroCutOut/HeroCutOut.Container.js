import { connect } from "react-redux";
import { defaultMemoize } from "reselect";
import { bindActionCreators } from "redux";
import * as HeroCutOutActions from "./HeroCutOut.ActionalHnadler";
import _get from "lodash/get";
import HeroCutOut from "./HeroCutOut";
import { compose } from "recompose";

const heroActions = defaultMemoize((dispatch) =>
  bindActionCreators({ ...HeroCutOutActions }, dispatch)
);

const mapDispatchToProps = (dispatch) => ({
    HeroCutOutActions: heroActions(dispatch),
});

const mapStateToProps = ({ HeroReducer }) => ({
//   loading: _get(HomeReducer, "loading"),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(HeroCutOut);