import {connect} from 'react-redux';
import { defaultMemoize } from 'reselect';
import { bindActionCreators } from 'redux';
import * as mainPageAction from './Mainpage.ActionHandler';
import _get from 'lodash/get';
import MainPage from './MainPage';
import { compose } from 'recompose';



const mainPageActions = defaultMemoize(dispatch => bindActionCreators({ ...mainPageAction }, dispatch));

const mapDispatchToProps = dispatch => ({
    mainPageAction: mainPageActions(dispatch),
});

const mapStateToProps = ({
    mainpageReducer,
}) => ({
    loading: _get(mainpageReducer, 'loading'),
  gallery:_get(mainpageReducer, 'shoesGallery'),
  shoesCategories:_get(mainpageReducer, 'categories'),
  selectedProduct:_get(mainpageReducer, 'selectedProduct')
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(MainPage);