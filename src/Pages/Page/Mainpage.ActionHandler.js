import { ACTION_TYPES } from './MainPage.constant';

export const viewProduct=(payload)=>(dispatch)=>{
    dispatch({ type: ACTION_TYPES.VIEW_PRODUCT, data: payload });
   }