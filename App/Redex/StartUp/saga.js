import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import axios from "axios";
// API URIs goes here, now i do not use any
import actions from "./actions";







export function* loginAccount() {
  yield takeEvery(actions.LOGIN, function* (payload) {
    const url = "https://dummyjson.com/auth/login";
  
    console.log(url,"url..") 
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
        console.log("result", response);
      const result = yield response.json();
      console.log(result);
      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          console.log(result);
          yield put({ type: actions.LOGIN_RESULT_SUCCESS, result });
        } else {
          yield put({
            type: actions.LOGIN_RESULT_ERROR,
            result,
          });
        }
        console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.LOGIN_ERROR,
          result,
        });
        console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.LOGIN_ERROR });
      console.log(error);
    }
  });
}







export function* defaultFunc() {}

export default function* rootSaga() {
  yield all([

    fork(loginAccount),
  
  ]);
}
