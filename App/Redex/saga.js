import { all } from "redux-saga/effects";

import startUpSaga from "./StartUp/saga";
import homeSaga from "./Home/saga";

import menuSaga from './Menu/saga';

import myAccountSaga from './MyAccount/saga';

export default function* rootSaga() {
  yield all([
    startUpSaga(),
    homeSaga(),
    
    menuSaga(),
  
    myAccountSaga(),
  ]);
}
