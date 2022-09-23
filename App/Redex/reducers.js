import { combineReducers } from "redux";

import startUpReducer from "./StartUp/reducer";
import homeReducer from "./Home/reducer";
import menuReducer from './Menu/reducer';


import myAccountReducer from './MyAccount/reducer';

export default combineReducers({
  startUpReducer,
  homeReducer,

  menuReducer,

  myAccountReducer,
});
