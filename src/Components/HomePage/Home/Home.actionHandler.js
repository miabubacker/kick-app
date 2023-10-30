// // import { toaster } from 'tcomponents/organisms/NotificationWrapper';
import { ACTION_TYPES } from './Home.constant';

 export const fetchRequestedFeatures = payload => (dispatch) => {
    dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING, data: true });
      
};