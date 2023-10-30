import { connect } from "react-redux";
import { defaultMemoize } from "reselect";
import { bindActionCreators } from "redux";
import * as homeActions from "./ProductHome.actionHandler";
import _get from "lodash/get";
import Home from "./ProductHome";
import { compose } from "recompose";

const homeDetailsActions = defaultMemoize((dispatch) =>
  bindActionCreators({ ...homeActions }, dispatch)
);

const mapDispatchToProps = (dispatch) => ({
  homeActions: homeDetailsActions(dispatch),
});

const mapStateToProps = ({ HomeReducer }) => ({
  loading: _get(HomeReducer, "loading"),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
