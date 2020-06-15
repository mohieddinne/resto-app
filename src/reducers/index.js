import { combineReducers } from "redux";
import reducer from './reduer.js'
import authReducer from './reduer.js'
import panierReducer from './reduer.js'

const allReducers = combineReducers({
    menu: reducer,
    /* authReducer: authReducer,
    panierReducer:panierReducer */
  });
  
export default allReducers 