import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import axios from "axios";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
//const baseUrl='https://restaurant-qa.tk';
// const baseUrl = "http://fonix-pizza-staging.tk";
// const baseUrl = "http://fonixpizza.codelantic-staging.club/";
const baseUrl = "https://restaurant.codelantic.com";
const resturantDetailsapiURL = baseUrl + "/api/restaurant/1";
const getMenuCategoriesUrl = baseUrl + "/api/web/menu-categories?branch_id=";
const getOffersURL = baseUrl + "/api/web/offers";
const getOffersItemsURL = baseUrl + "/api/web/offerItems?offer_id=";
const getMenuItemsURL = baseUrl + "/api/web/menu-items?menu_id=";
const getMenuItemsDataURL = baseUrl + "/api/web/menu-item?id=";
const addfavouriteItemURL = baseUrl + "/api/user/addFavourite";
const addfreviewURL = baseUrl + "/api/user/addItemReview";
const addpromocodeURL =
  baseUrl + "/api/promotion/validate?restaurant_id=1&promocode=";
const getDealsURL = baseUrl + "/api/web/deals";
const getBranchURL = baseUrl + "/api/branch-details?branch_id=";
const reservationURL = baseUrl + "/api/reservation";
const validateTimeURL = baseUrl + "/api/validateTime";
const addpostcodeURL = baseUrl + "/api/user/validateCode?postcode=";
const deliveryURL = baseUrl + "/api/delivery";
const takeawayURL = baseUrl + "/api/takeaway";
const paymentmethodURL = baseUrl + "/api/user/payment-methods?branch_id=";
const getAddressDataUrl = baseUrl + "/api/address";
const addAddressDataUrl = baseUrl + "/api/address";
const setDefaultAddressDataUrl = baseUrl + "/api/address/";
const getOrdersUrl = baseUrl + "/api/user/order";
const getOrderDetailsUrl = baseUrl + "/api/user/getorder?type=";
const userShowURL = baseUrl + "/api/user/show";

//promocode validation
export function* getOrderDetails() {
  yield takeEvery(actions.GET_ORDER_DETAILS, function* (payload) {
    console.log(payload.orderid);
    console.log(payload.access_token);
    const url =
      getOrderDetailsUrl + payload.ordertype + "&order_id=" + payload.orderid; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      // console.log(result)
      console.log(url);

      if (response.ok) {
        if (result != undefined) {
          yield put({ type: actions.GET_ORDER_DETAILS_RESULT_SUCCESS, result });
          console.log(result);
        } else {
          yield put({
            type: actions.GET_ORDER_DETAILS_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.GET_ORDER_DETAILS_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_ORDER_DETAILS_ERROR });
      console.log(error);
    }
  });
}

//getOrderDetailsReservation
export function* getOrderDetailsReservation() {
  yield takeEvery(actions.GET_ORDER_DETAILS_RESERVATION, function* (payload) {
    console.log(payload.orderid);
    console.log(payload.access_token);
    const url =
      getOrderDetailsUrl + payload.ordertype + "&order_id=" + payload.orderid; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      // console.log(result)
      console.log(url);

      if (response.ok) {
        if (result != undefined) {
          yield put({
            type: actions.GET_ORDER_DETAILS_RESERVATION_RESULT_SUCCESS,
            result,
          });
          console.log(result);
        } else {
          yield put({
            type: actions.GET_ORDER_DETAILS_RESERVATION_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.GET_ORDER_DETAILS_RESERVATION_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_ORDER_DETAILS_RESERVATION_ERROR });
      console.log(error);
    }
  });
}

//getOrderDetails Takeaway
export function* getOrderDetailsTakeaway() {
  yield takeEvery(actions.GET_ORDER_DETAILS_TAKEAWAY, function* (payload) {
    console.log(payload.orderid);
    console.log(payload.access_token);
    const url =
      getOrderDetailsUrl + payload.ordertype + "&order_id=" + payload.orderid; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      // console.log(result)
      console.log(url);

      if (response.ok) {
        if (result != undefined) {
          yield put({
            type: actions.GET_ORDER_DETAILS_TAKEAWAY_RESULT_SUCCESS,
            result,
          });
          console.log(result);
        } else {
          yield put({
            type: actions.GET_ORDER_DETAILS_TAKEAWAY_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.GET_ORDER_DETAILS_TAKEAWAY_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_ORDER_DETAILS_TAKEAWAY_ERROR });
      console.log(error);
    }
  });
}

export function* paymentMethod() {
  yield takeEvery(actions.PAYMENT_METHOD, function* (payload) {
    const url = paymentmethodURL + payload.branchId; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        // body: "",
      });
      const result = yield response.json();
      console.log("result");
      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          console.log(result);
          yield put({ type: actions.PAYMENT_METHOD_RESULT_SUCCESS, result });
        } else {
          yield put({
            type: actions.PAYMENT_METHOD_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.PAYMENT_METHOD_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.PAYMENT_METHOD_ERROR });
      console.log(error);
    }
  });
}

export function* getresturantDetails() {
  yield takeEvery(actions.RESTURANT_DETAILS, function* (payload) {
    console.log(payload,"resturent..")
    const url = resturantDetailsapiURL; //'https://api.winmehub.com/v1/api/signup'
    console.log(url, "url")
    try {
      console.log("123")
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      console.log(result);
      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          console.log(result);
          yield put({ type: actions.RESTURANT_DETAILS_RESULT_SUCCESS, result });
        } else {
          yield put({
            type: actions.RESTURANT_DETAILS_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.RESTURANT_DETAILS_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.RESTURANT_DETAILS_ERROR });
      console.log(error);
    }
  });
}

export function* getMenuCategories() {
  yield takeEvery(actions.GET_MENU_CATEGORIES, function* (payload) {
    const url = getMenuCategoriesUrl + payload.branchid; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      console.log(result);
      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          yield put({
            type: actions.GET_MENU_CATEGORIES_RESULT_SUCCESS,
            result,
          });
          console.log(result);
        } else {
          yield put({
            type: actions.GET_MENU_CATEGORIES_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.GET_MENU_CATEGORIES_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_MENU_CATEGORIES_ERROR });
      console.log(error);
    }
  });
}

export function* getOffers() {
  yield takeEvery(actions.GET_OFFERS, function* (payload) {
    const url = getOffersURL; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      console.log(result);
      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          yield put({ type: actions.GET_OFFERS_RESULT_SUCCESS, result });
          console.log(result);
        } else {
          yield put({
            type: actions.GET_OFFERS_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.GET_OFFERS_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_MENU_CATEGORIES_ERROR });
      console.log(error);
    }
  });
}

export function* getOffersItems() {
  yield takeEvery(actions.GET_OFFERS_ITEMS, function* (payload) {
    const url = getOffersItemsURL + payload.offerid; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      console.log(result);
      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          yield put({ type: actions.GET_OFFERS_ITEMS_RESULT_SUCCESS, result });
          console.log(result);
        } else {
          yield put({
            type: actions.GET_OFFERS_ITEMS_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.GET_OFFERS_ITEMS_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_OFFERS_ITEMS_ERROR });
      console.log(error);
    }
  });
}

// export function* getMenuItems() {
//   yield takeEvery(actions.GET_MENU_ITEMS, function* (payload) {

//     const url = getMenuItemsURL+payload.menuItemId+'&branch_id=1'; //'https://api.winmehub.com/v1/api/signup'
//     console.log(url)
//     try {
//       const response = yield fetch(url, {
//         method: "GET",
//         headers: {
//           "Authorization":'Bearer '+payload.access_token,
//           "Content-Type": "application/json"
//         },
//          body: JSON.stringify(payload.data)

//       });
//       const result = yield response.json();
//       console.log(result)
//       console.log(url);
//       if (response.ok) {

//         if(result!=undefined){

//           yield put({ type: actions.GET_MENU_ITEMS_RESULT_SUCCESS, result });
//           console.log(result)
//         }else{
//           yield put({
//             type: actions.GET_MENU_ITEMS_RESULT_ERROR,
//             result
//           });
//         }
//        // console.log(result)
//       } else {
//         console.log("result")
//         yield put({
//           type:  actions.GET_MENU_ITEMS_ERROR ,
//           result

//         });
//        // console.log(result)
//       }
//     } catch (error) {
//       yield put({ type: actions.GET_MENU_ITEMS_ERROR });
//       console.log(error);
//     }
//   });
// }

// export function* getMenuItemsData() {
//   yield takeEvery(actions.GET_MENU_ITEMS_DATA, function* (payload) {

//     const url = getMenuItemsDataURL+payload.menuItemId+'&branch_id=1'; //'https://api.winmehub.com/v1/api/signup'
//     console.log(url)
//     try {
//       const response = yield fetch(url, {
//         method: "GET",
//         headers: {
//           "Authorization":'Bearer '+payload.access_token,
//           "Content-Type": "application/json"
//         },
//          body: JSON.stringify(payload.data)

//       });
//       const result = yield response.json();
//       console.log(result)
//       console.log(url);
//       if (response.ok) {

//         if(result!=undefined){

//           yield put({ type: actions.GET_MENU_ITEMS_DATA_RESULT_SUCCESS, result });
//           console.log(result)
//         }else{
//           yield put({
//             type: actions.GET_MENU_ITEMS_DATA_RESULT_ERROR,
//             result
//           });
//         }
//        // console.log(result)
//       } else {
//         console.log("result")
//         yield put({
//           type:  actions.GET_MENU_ITEMS_DATA_ERROR ,
//           result

//         });
//        // console.log(result)
//       }
//     } catch (error) {
//       yield put({ type: actions.GET_MENU_ITEMS_DATA_ERROR });
//       console.log(error);
//     }
//   });
// }

// export function* addFavouriteItems() {
//   yield takeEvery(actions.ADD_FAVOURITE_ITEMS, function* (payload) {

//     const url = addfavouriteItemURL; //'https://api.winmehub.com/v1/api/signup'
//     console.log(url)
//     try {
//       const response = yield fetch(url, {
//         method: "POST",
//         headers: {
//           "Authorization":'Bearer '+payload.access_token,
//           "Content-Type": "application/json"
//         },
//          body: JSON.stringify(payload.data)

//       });
//       const result = yield response.json();
//       console.log(result)
//       console.log(url);
//       if (response.ok) {

//         if(result!=undefined){

//           yield put({ type: actions.ADD_FAVOURITE_ITEMS_RESULT_SUCCESS, result });
//           console.log(result)
//         }else{
//           yield put({
//             type: actions.ADD_FAVOURITE_ITEMS_RESULT_ERROR,
//             result
//           });
//         }
//        // console.log(result)
//       } else {
//         console.log("result")
//         yield put({
//           type:  actions.ADD_FAVOURITE_ITEMS_ERROR ,
//           result

//         });
//        // console.log(result)
//       }
//     } catch (error) {
//       yield put({ type: actions.ADD_FAVOURITE_ITEMS_ERROR });
//       console.log(error);
//     }
//   });
// }

// export function* addReviews() {
//   yield takeEvery(actions.ADD_REVIEWS, function* (payload) {

//     const url = addfreviewURL; //'https://api.winmehub.com/v1/api/signup'
//     console.log(url)
//     try {
//       const response = yield fetch(url, {
//         method: "POST",
//         headers: {
//           "Authorization":'Bearer '+payload.access_token,
//           "Content-Type": "application/json"
//         },
//          body: JSON.stringify(payload.data)

//       });
//       const result = yield response.json();
//       console.log(result)
//       console.log(url);
//       if (response.ok) {

//         if(result!=undefined){

//           yield put({ type: actions.ADD_REVIEWS_RESULT_SUCCESS, result });
//           console.log(result)
//         }else{
//           yield put({
//             type: actions.ADD_REVIEWS_RESULT_ERROR,
//             result
//           });
//         }
//        // console.log(result)
//       } else {
//         console.log("result")
//         yield put({
//           type:  actions.ADD_REVIEWS_ERROR ,
//           result

//         });
//        // console.log(result)
//       }
//     } catch (error) {
//       yield put({ type: actions.ADD_REVIEWS_ERROR });
//       console.log(error);
//     }
//   });
// }

export function* addPromoCode() {
  yield takeEvery(actions.ADD_PROME_CODE, function* (payload) {
    const url = addpromocodeURL + payload.promocode; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      console.log(result);
      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          yield put({ type: actions.ADD_PROME_CODE_RESULT_SUCCESS, result });
          console.log(result);
        } else {
          yield put({
            type: actions.ADD_PROME_CODE_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.ADD_PROME_CODE_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.ADD_PROME_CODE_ERROR });
      console.log(error);
    }
  });
}

export function* addPostCode() {
  yield takeEvery(actions.ADD_POST_CODE, function* (payload) {
    const url = addpostcodeURL + payload.postcode; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      console.log(result);
      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          yield put({ type: actions.ADD_POST_CODE_RESULT_SUCCESS, result });
          console.log(result);
        } else {
          yield put({
            type: actions.ADD_POST_CODE_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.ADD_POST_CODE_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.ADD_POST_CODE_ERROR });
      console.log(error);
    }
  });
}

// export function* getDeals() {
//   yield takeEvery(actions.GET_DEALS, function* (payload) {

//     const url = getDealsURL; //'https://api.winmehub.com/v1/api/signup'
//     console.log(url)
//     try {
//       const response = yield fetch(url, {
//         method: "GET",
//         headers: {
//           "Authorization":'Bearer '+payload.access_token,
//           "Content-Type": "application/json"
//         },
//          body: JSON.stringify(payload.data)

//       });
//       const result = yield response.json();
//       console.log(result)
//       console.log(url);
//       if (response.ok) {

//         if(result!=undefined){

//           yield put({ type: actions.GET_DEALS_RESULT_SUCCESS, result });
//           console.log(result)
//         }else{
//           yield put({
//             type: actions.GET_DEALS_RESULT_ERROR,
//             result
//           });
//         }
//        // console.log(result)
//       } else {
//         console.log("result")
//         yield put({
//           type:  actions.GET_DEALS_ERROR ,
//           result

//         });
//        // console.log(result)
//       }
//     } catch (error) {
//       yield put({ type: actions.GET_DEALS_ERROR });
//       console.log(error);
//     }
//   });
// }

export function* getBranchDeals() {
  yield takeEvery(actions.GET_BRANCH_DEALS, function* (payload) {
    const url = getBranchURL + payload.branch_id; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        // body: "",
      });
      const result = yield response.json();
      console.log(result);
      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          yield put({ type: actions.GET_BRANCH_DEALS_RESULT_SUCCESS, result });
          console.log(result);
        } else {
          yield put({
            type: actions.GET_BRANCH_DEALS_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.GET_BRANCH_DEALS_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_BRANCH_DEALS_ERROR });
      console.log(error);
    }
  });
}

export function* validateTime() {
  yield takeEvery(actions.VALIDATE_TIME, function* (payload) {
    const url = validateTimeURL; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      // console.log(result)
      // console.log(url);
      yield put({ type: actions.VALIDATE_TIME_RESULT_SUCCESS, result });
      console.log(result);
      // if (response.ok) {

      //     yield put({ type: actions.VALIDATE_TIME_RESULT_SUCCESS, result });
      //     console.log(result)

      //  // console.log(result)
      // } else {
      //   console.log("result")
      //   yield put({
      //     type:  actions.VALIDATE_TIME_ERROR ,
      //     result

      //   });
      //  // console.log(result)
      // }
    } catch (error) {
      yield put({ type: actions.VALIDATE_TIME_ERROR });
      console.log(error);
    }
  });
}

export function* validateTimeReservation() {
  yield takeEvery(actions.VALIDATE_TIME_RESERVATION, function* (payload) {
    const url = validateTimeURL; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      // console.log(result)
      // console.log(url);
      yield put({
        type: actions.VALIDATE_TIME_RESERVATION_RESULT_SUCCESS,
        result,
      });
      console.log(result);
      // if (response.ok) {

      //     yield put({ type: actions.VALIDATE_TIME_RESULT_SUCCESS, result });
      //     console.log(result)

      //  // console.log(result)
      // } else {
      //   console.log("result")
      //   yield put({
      //     type:  actions.VALIDATE_TIME_ERROR ,
      //     result

      //   });
      //  // console.log(result)
      // }
    } catch (error) {
      yield put({ type: actions.VALIDATE_TIME_RESERVATION_ERROR });
      console.log(error);
    }
  });
}

export function* reservation() {
  yield takeEvery(actions.RESERVATION, function* (payload) {
    const url = reservationURL; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      console.log(response, "response......")
      const result = yield response.json();
      console.log(result);
      yield put({ type: actions.RESERVATION_RESULT_SUCCESS, result });
      // // if (response.ok) {

      // //   if(result!=undefined){

      // //     yield put({ type: actions.RESERVATION_RESULT_SUCCESS, result });
      // //     console.log(result)
      // //   }else{
      // //     yield put({
      // //       type: actions.RESERVATION_RESULT_ERROR,
      // //       result
      // //     });
      // //   }
      //  // console.log(result)
      // } else {

      //   yield put({
      //     type:  actions.RESERVATION_ERROR ,
      //     result

      //   });
      //  // console.log(result)
      // }
    } catch (error) {
      yield put({ type: actions.RESERVATION_ERROR });
      console.log(error);
    }
  });
}

export function* takeaway() {
  yield takeEvery(actions.TAKEAWAY, function* (payload) {
    const url = takeawayURL; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      console.log("12")
      const result = yield response.json();
      console.log(result);
      yield put({ type: actions.TAKEAWAY_RESULT_SUCCESS, result });
      // // if (response.ok) {

      // //   if(result!=undefined){

      // //     yield put({ type: actions.RESERVATION_RESULT_SUCCESS, result });
      // //     console.log(result)
      // //   }else{
      // //     yield put({
      // //       type: actions.RESERVATION_RESULT_ERROR,
      // //       result
      // //     });
      // //   }
      //  // console.log(result)
      // } else {

      //   yield put({
      //     type:  actions.RESERVATION_ERROR ,
      //     result

      //   });
      //  // console.log(result)
      // }
    } catch (error) {
      yield put({ type: actions.TAKEAWAY_ERROR });
      console.log(error);
    }
  });
}

export function* delivery() {
  yield takeEvery(actions.DELIVERY, function* (payload) {
    console.log(payload.data, "payload")
    const url = deliveryURL; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      console.log("deliver")
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      console.log(1234)
      console.log(response, "rk");
      const result = yield response.json();
      console.log(result, "123");
      // yield put({ type: actions.DELIVERY_RESULT_SUCCESS, result });
      if (response.ok) {

        if(result!=undefined){

          yield put({ type: actions.DELIVERY_RESULT_SUCCESS, result });
          console.log(result)
        }else{
          yield put({
            type: actions.DELIVERY_RESULT_ERROR,
            result
          });
        }
       console.log(result)
      } else {

        yield put({
          type:  actions.DELIVERY_ERROR ,
          result

        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.DELIVERY_ERROR });
      console.log(error);
    }
  });
}

//get address
export function* getAddress() {
  yield takeEvery(actions.GET_ADDRESSES, function* (payload) {
    console.log(payload.data);
    console.log(payload.access_token);
    const url = getAddressDataUrl; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      if (response.ok) {
        if (result != undefined) {
          yield put({
            type: actions.GET_ADDRESSES_RESULT_SUCCESS,
            result,
          });
          console.log(result);
        } else {
          yield put({
            type: actions.GET_ADDRESSES_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log(result);
        yield put({
          type: actions.GET_ADDRESSES_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_ADDRESSES_ERROR });
      console.log(error);
    }
  });
}

//add address
export function* addAddress() {
  yield takeEvery(actions.ADD_ADDRESSES, function* (payload) {
    console.log(payload.access_token);
    const url = addAddressDataUrl; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + payload.access_token,
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      if (response.ok) {
        if (result != undefined) {
          yield put({
            type: actions.ADD_ADDRESSES_RESULT_SUCCESS,
            result,
          });
          console.log(result);
        } else {
          yield put({
            type: actions.ADD_ADDRESSES_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log(result);
        yield put({
          type: actions.ADD_ADDRESSES_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.ADD_ADDRESSES_ERROR });
      console.log(error);
    }
  });
}

//set default address
export function* setDefaultAddress() {
  yield takeEvery(actions.SET_DEFAULT_ADDRESSES, function* (payload) {
    console.log(payload.data);
    console.log(payload.access_token);
    const url = setDefaultAddressDataUrl + payload.id; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + payload.access_token,
        },
        body: JSON.stringify(payload.data),
      });
      const result = yield response.json();
      if (response.ok) {
        if (result != undefined) {
          yield put({
            type: actions.SET_DEFAULT_ADDRESSES_RESULT_SUCCESS,
            result,
          });
          console.log(result);
        } else {
          yield put({
            type: actions.SET_DEFAULT_ADDRESSES_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log(result);
        yield put({
          type: actions.SET_DEFAULT_ADDRESSES_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.SET_DEFAULT_ADDRESSES_ERROR });
      console.log(error);
    }
  });
}

//get address
export function* getOrders() {
  yield takeEvery(actions.GET_ORDERS, function* (payload) {
    console.log(payload.data);
    console.log(payload.access_token);
    const url = getOrdersUrl; //'https://api.winmehub.com/v1/api/signup'
    console.log(url);
    try {
      console.log("order...")
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      });
      console.log(response,"order12..")
      const result = yield response.json();
      console.log(result)
      if (response.ok) {
        if (result != undefined) {
          yield put({
            type: actions.GET_ORDERS_RESULT_SUCCESS,
            result,
          });
          console.log(result);
        } else {
          yield put({
            type: actions.GET_ORDERS_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log(result);
        yield put({
          type: actions.GET_ORDERS_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_ORDERS_ERROR });
      console.log(error);
    }
  });
}

export function* userShowLogin() {
  yield takeEvery(actions.USER_SHOW_LOGIN, function* (payload) {
    const url = userShowURL; //'https://api.winmehub.com/v1/api/signup'

    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + payload.access_token,
          "Content-Type": "application/json",
        },
        // body: "",
      });
      console.log(payload.access_token);
      const result = yield response.json();
      console.log("result");

      console.log(url);
      if (response.ok) {
        if (result != undefined) {
          console.log(result);
          yield put({ type: actions.USER_SHOW_LOGIN_RESULT_SUCCESS, result });
        } else {
          yield put({
            type: actions.USER_SHOW_LOGIN_RESULT_ERROR,
            result,
          });
        }
        // console.log(result)
      } else {
        console.log("result");
        yield put({
          type: actions.USER_SHOW_LOGIN_ERROR,
          result,
        });
        // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.USER_SHOW_LOGIN_ERROR });
      console.log(error);
    }
  });
}

export function* defaultFunc() {}

export default function* rootSaga() {
  yield all([
    fork(getresturantDetails),
    fork(getMenuCategories),
    fork(getOffers),
    fork(getOffersItems),
    // fork(getMenuItems),
    // fork(addFavouriteItems),
    // fork(getMenuItemsData),
    // fork(addReviews),
    fork(addPromoCode),
    // fork(getDeals),
    fork(getBranchDeals),
    fork(validateTime),
    fork(reservation),
    fork(addPostCode),
    fork(takeaway),
    fork(delivery),
    fork(paymentMethod),
    fork(validateTimeReservation),
    fork(getAddress),
    fork(addAddress),
    fork(setDefaultAddress),
    fork(getOrders),
    fork(getOrderDetails),
    fork(getOrderDetailsReservation),
    fork(getOrderDetailsTakeaway),
    fork(userShowLogin),
  ]);
}
