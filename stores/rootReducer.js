import { combineReducers } from 'redux';
 
//import tabRaducer from './tab/tabReducer';
import tabRaducer from './tab/tabReducer';

import marketReducer from './market/marketReducer';
 
export default combineReducers({
    tabRaducer,
    marketReducer
})