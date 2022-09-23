import { all, takeEvery, put, fork, call } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";

export function* userShowLogin() {
  yield takeEvery(actions.USER_SHOW_MYACCOUNT, function* (payload) {

    const url = "https://dummyjson.com/users/1";

    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
     
      });
      console.log(payload.access_token);
      const result = yield response.json();
      console.log("result");

      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          console.log(result);
          yield put({
            type: actions.USER_SHOW_MYACCOUNT_RESULT_SUCCESS,
            result,
          });
        } else {
          yield put({
            type: actions.USER_SHOW_MYACCOUNT_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.USER_SHOW_MYACCOUNT_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.USER_SHOW_MYACCOUNT_ERROR });
      console.log(error);
    }
  });
}

//Update user


export function* defaultFunc() {}

export default function* rootSaga() {
  yield all([fork(userShowLogin)]);
}
