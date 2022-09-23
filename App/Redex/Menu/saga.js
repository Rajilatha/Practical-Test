import { all, takeEvery, put, fork, call } from "redux-saga/effects";

import actions from "./actions";










export function* getMenuItems() {
  yield takeEvery(actions.GET_MENU_ITEMS, function* (payload) {
 console.log(payload.data, "payload.....")
    
    const url = "https://dummyjson.com/products";
    console.log(url)
    try {
      console.log("getMenuItems.......");
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Authorization":'Bearer '+payload.access_token,
          "Content-Type": "application/json"
        },
         body: JSON.stringify(payload.data)

      });
      console.log(response, "response......");
      const result = yield response.json();
      console.log(result)
      console.log(url);
      if (response.ok) {
       
        if(result!=undefined){
        
          yield put({ type: actions.GET_MENU_ITEMS_RESULT_SUCCESS, result });
          console.log(result)
        }else{
          yield put({
            type: actions.GET_MENU_ITEMS_RESULT_ERROR,
            result
          });
        }
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type:  actions.GET_MENU_ITEMS_ERROR ,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_MENU_ITEMS_ERROR });
      console.log(error);
    }
  });
}


export function* getMenuItemsData() {
  yield takeEvery(actions.GET_MENU_ITEMS_DATA, function* (payload) {
 
    // const url = getMenuItemsDataURL+payload.menuItemId+'&branch_id='+payload.branchId;
   const url = "https://dummyjson.com/products/"+payload.menuItemId;
    console.log(url)
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
       
          "Content-Type": "application/json"
        },
         body: JSON.stringify(payload.data)

      });
      const result = yield response.json();
      console.log(result)
      console.log(url);
      if (response.ok) {
       
        if(result!=undefined){
        
          yield put({ type: actions.GET_MENU_ITEMS_DATA_RESULT_SUCCESS, result });
          console.log(result)
        }else{
          yield put({
            type: actions.GET_MENU_ITEMS_DATA_RESULT_ERROR,
            result
          });
        }
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type:  actions.GET_MENU_ITEMS_DATA_ERROR ,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_MENU_ITEMS_DATA_ERROR });
      console.log(error);
    }
  });
}























export function* defaultFunc() {
}

export default function* rootSaga() {
  yield all([
  
  
    fork(getMenuItems),
    
    fork(getMenuItemsData),
    
  
   
   
  ]);
}
