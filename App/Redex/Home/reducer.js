import { Map } from "immutable";

import homeActions from "./actions";

const messagecreataction = undefined;

const menucategories = undefined;
const offers_result = undefined;
const offersitem_result = undefined;
const menuitem_result = undefined;
const addfavourite_result = undefined;
// const menuitemdata_result=undefined
const addpromocode_result = undefined;
const getDeals_result = undefined;
const getBranchDetailsResult = undefined;
const reservationResult = undefined;
const validateResult = undefined;
const validateMessage = undefined;
const addpostcode_result = undefined;
const takeawayResult = undefined;
const deliveryResult = undefined;
const paymentMethodResult = undefined;
const validateReservationResult = undefined;
const resturantDetailsResult = undefined;
const addressArray = undefined;
const orderResults = undefined;
const getOrderDetailsTakeawaydata = undefined;
const getOrderDetailsReservationdata = undefined;
const getOrderDetailsdata = undefined;
const addaddressResultmsg = undefined;
const myaddressbookResult = undefined;
const startupdataloginResult = undefined;

const initState = new Map({
  messagecreataction,
  menucategories,
  offers_result,
  offersitem_result,
  menuitem_result,
  addfavourite_result,
  //  menuitemdata_result,
  addpromocode_result,
  getDeals_result,
  getBranchDetailsResult,
  reservationResult,
  validateResult,
  validateMessage,
  addpostcode_result,
  takeawayResult,
  deliveryResult,
  paymentMethodResult,
  validateReservationResult,
  resturantDetailsResult,
  addressArray,
  orderResults,
  getOrderDetailsTakeawaydata,
  getOrderDetailsReservationdata,
  getOrderDetailsdata,
  addaddressResultmsg,
  myaddressbookResult,
  startupdataloginResult,
});

export default function homeReducer(state = initState, action) {
  switch (action.type) {
    //clear Props
    case homeActions.CLEAR_PROPS:
      return {
        ...state,

        menucategories: undefined,
        offers_result: undefined,
        menuitem_result: undefined,
        addfavourite_result: undefined,
        offersitem_result: undefined,
        //  menuitemdata_result:undefined,
        addpromocode_result: undefined,
        getDeals_result: undefined,
        getBranchDetailsResult: undefined,
        reservationResult: undefined,
        validateResult: undefined,
        validateMessage: undefined,
        addpostcode_result: undefined,
        takeawayResult: undefined,
        deliveryResult: undefined,
        paymentMethodResult: undefined,
        validateReservationResult: undefined,
        resturantDetailsResult: undefined,
        addressArray: undefined,
        orderResults: undefined,
        getOrderDetailsTakeawaydata: undefined,
        getOrderDetailsReservationdata: undefined,
        getOrderDetailsdata: undefined,
        addaddressResultmsg: undefined,
        myaddressbookResult: undefined,
        startupdataloginResult: undefined,
      };

    case homeActions.USER_SHOW_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case homeActions.USER_SHOW_LOGIN_RESULT_SUCCESS:
      return {
        startupdataloginResult: action.result.data,
        loading: false,
      };
    case homeActions.USER_SHOW_LOGIN_RESULT_ERROR:
      return {
        loading: false,
      };
    case homeActions.USER_SHOW_LOGIN_ERROR:
      return {
        loading: false,
      };

    //get order details
    case homeActions.GET_ORDER_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case homeActions.GET_ORDER_DETAILS_RESULT_SUCCESS:
      return {
        loading: false,
        getOrderDetailsdata: action.result.data,
      };
    case homeActions.GET_ORDER_DETAILS_RESULT_ERROR:
      return {
        loading: false,
      };
    case homeActions.GET_ORDER_DETAILS_ERROR:
      return {
        loading: false,
      };

    //get order details
    case homeActions.GET_ORDER_DETAILS_RESERVATION:
      return {
        ...state,
        loading: true,
      };
    case homeActions.GET_ORDER_DETAILS_RESERVATION_RESULT_SUCCESS:
      return {
        loading: false,
        getOrderDetailsReservationdata: action.result.data,
      };
    case homeActions.GET_ORDER_DETAILS_RESERVATION_RESULT_ERROR:
      return {
        loading: false,
      };
    case homeActions.GET_ORDER_DETAILS_RESERVATION_ERROR:
      return {
        loading: false,
      };

    //get takeaway
    case homeActions.GET_ORDER_DETAILS_TAKEAWAY:
      return {
        ...state,
        loading: true,
      };
    case homeActions.GET_ORDER_DETAILS_TAKEAWAY_RESULT_SUCCESS:
      return {
        loading: false,
        getOrderDetailsTakeawaydata: action.result.data,
      };
    case homeActions.GET_ORDER_DETAILS_TAKEAWAY_RESULT_ERROR:
      return {
        loading: false,
      };
    case homeActions.GET_ORDER_DETAILS_TAKEAWAY_ERROR:
      return {
        loading: false,
      };

    case homeActions.RESTURANT_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case homeActions.RESTURANT_DETAILS_RESULT_SUCCESS:
      return {
        resturantDetailsResult: action.result.data,
        loading: false,
      };
    case homeActions.RESTURANT_DETAILS_RESULT_ERROR:
      return {
        resturantDetailsResult: "err",
        loading: false,
      };
    case homeActions.RESTURANT_DETAILS_ERROR:
      return {
        loading: false,
      };

    case homeActions.GET_MENU_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case homeActions.GET_MENU_CATEGORIES_RESULT_SUCCESS:
      return {
        loading: false,
        menucategories: action.result.menues,
      };
    case homeActions.GET_MENU_CATEGORIES_RESULT_ERROR:
      return {
        loading: false,
        menucategories: "err",
      };
    case homeActions.GET_MENU_CATEGORIES_ERROR:
      return {
        loading: false,
      };

    case homeActions.GET_OFFERS:
      return {
        ...state,
        loading: true,
      };
    case homeActions.GET_OFFERS_RESULT_SUCCESS:
      return {
        loading: false,
        offers_result: action.result.offers,
      };
    case homeActions.GET_OFFERS_RESULT_ERROR:
      return {
        loading: false,
        offers_result: "err",
      };
    case homeActions.GET_OFFERS_ERROR:
      return {
        loading: false,
      };

    case homeActions.GET_OFFERS_ITEMS:
      return {
        ...state,
        loading: true,
      };
    case homeActions.GET_OFFERS_ITEMS_RESULT_SUCCESS:
      return {
        loading: false,
        offersitem_result: action.result.data,
      };
    case homeActions.GET_OFFERS_ITEMS_RESULT_ERROR:
      return {
        loading: false,
        offersitem_result: "err",
      };
    case homeActions.GET_OFFERS_ITEMS_ERROR:
      return {
        loading: false,
      };

    // case homeActions.GET_MENU_ITEMS:
    //   return{
    //     ...state,
    //     loading:true
    //   }
    //  case homeActions.GET_MENU_ITEMS_RESULT_SUCCESS:
    //      return{
    //       loading:false,
    //        menuitem_result:action.result.data
    //     }
    //  case homeActions.GET_MENU_ITEMS_RESULT_ERROR:
    //   return{

    //         loading:false,
    //         menuitem_result:'err'
    //    }
    //  case homeActions.GET_MENU_ITEMS_ERROR:
    //       return{
    //           loading:false,

    // }

    // case homeActions.GET_MENU_ITEMS_DATA:
    //   return{
    //     ...state,
    //     loading:true
    //   }
    //  case homeActions.GET_MENU_ITEMS_DATA_RESULT_SUCCESS:
    //      return{
    //       loading:false,
    //        menuitemdata_result:action.result.data
    //     }
    //  case homeActions.GET_MENU_ITEMS_DATA_RESULT_ERROR:
    //   return{

    //         loading:false,
    //         menuitemdata_result:'err'
    //    }
    //  case homeActions.GET_MENU_ITEMS_DATA_ERROR:
    //       return{
    //           loading:false,

    // }

    // case homeActions.ADD_FAVOURITE_ITEMS:
    //   return{
    //     ...state,
    //     loading:true
    //   }
    //  case homeActions.ADD_FAVOURITE_ITEMS_RESULT_SUCCESS:
    //      return{
    //       loading:false,
    //        addfavourite_result:action.result.message
    //     }
    //  case homeActions.ADD_FAVOURITE_ITEMS_RESULT_ERROR:
    //   return{

    //         loading:false,
    //         addfavourite_result:'err'
    //    }
    //  case homeActions.ADD_FAVOURITE_ITEMS_ERROR:
    //       return{
    //           loading:false,

    // }

    case homeActions.ADD_REVIEWS:
      return {
        ...state,
        loading: true,
      };
    case homeActions.ADD_REVIEWS_RESULT_SUCCESS:
      return {
        loading: false,
        addfavourite_result: action.result.message,
      };
    case homeActions.ADD_REVIEWS_RESULT_ERROR:
      return {
        loading: false,
        addfavourite_result: "err",
      };
    case homeActions.ADD_REVIEWS_ERROR:
      return {
        loading: false,
      };

    case homeActions.ADD_PROME_CODE:
      return {
        ...state,
        loading: true,
      };
    case homeActions.ADD_PROME_CODE_RESULT_SUCCESS:
      return {
        loading: false,
        addpromocode_result: action.result,
      };
    case homeActions.ADD_PROME_CODE_RESULT_ERROR:
      return {
        loading: false,
        addpromocode_result: "err",
      };
    case homeActions.ADD_PROME_CODE_ERROR:
      return {
        loading: false,
      };

    case homeActions.ADD_POST_CODE:
      return {
        ...state,
        loading: true,
      };
    case homeActions.ADD_POST_CODE_RESULT_SUCCESS:
      return {
        loading: false,
        addpostcode_result: action.result,
      };
    case homeActions.ADD_POST_CODE_RESULT_ERROR:
      return {
        loading: false,
        addpostcode_result: "err",
      };
    case homeActions.ADD_POST_CODE_ERROR:
      return {
        loading: false,
      };

    // case homeActions.GET_DEALS:
    //   return{
    //     ...state,
    //     loading:true
    //   }
    //  case homeActions.GET_DEALS_RESULT_SUCCESS:
    //      return{
    //        loading:false,
    //        getDeals_result:action.result.deals
    //     }
    //  case homeActions.GET_DEALS_RESULT_ERROR:
    //   return{
    //         loading:false,
    //         getDeals_result:'err'
    //    }
    //  case homeActions.GET_DEALS_ERROR:
    //       return{
    //           loading:false,

    // }

    case homeActions.GET_BRANCH_DEALS:
      return {
        ...state,
        loading: true,
      };
    case homeActions.GET_BRANCH_DEALS_RESULT_SUCCESS:
      return {
        loading: false,
        getBranchDetailsResult: action.result.data,
      };
    case homeActions.GET_BRANCH_DEALS_RESULT_ERROR:
      return {
        loading: false,
        getBranchDetailsResult: "err",
      };
    case homeActions.GET_BRANCH_DEALS_ERROR:
      return {
        loading: false,
      };

    case homeActions.VALIDATE_TIME:
      return {
        ...state,
        loading: true,
      };
    case homeActions.VALIDATE_TIME_RESULT_SUCCESS:
      return {
        loading: false,
        validateResult: action.result,
        validateMessage: action.result,
      };
    case homeActions.VALIDATE_TIME_RESULT_ERROR:
      return {
        loading: false,
        validateResult: "err",
      };
    case homeActions.VALIDATE_TIME_ERROR:
      return {
        loading: false,
      };

    case homeActions.VALIDATE_TIME_RESERVATION:
      return {
        ...state,
        loading: true,
      };
    case homeActions.VALIDATE_TIME_RESERVATION_RESULT_SUCCESS:
      return {
        loading: false,
        validateReservationResult: action.result,
      };
    case homeActions.VALIDATE_TIME_RESERVATION_RESULT_ERROR:
      return {
        loading: false,
        validateReservationResult: "err",
      };
    case homeActions.VALIDATE_TIME_RESERVATION_ERROR:
      return {
        loading: false,
      };

    case homeActions.RESERVATION:
      return {
        ...state,
        loading: true,
      };
    case homeActions.RESERVATION_RESULT_SUCCESS:
      return {
        loading: false,
        reservationResult: action.result,
      };
    case homeActions.RESERVATION_RESULT_ERROR:
      return {
        loading: false,
        reservationResult: "err",
      };
    case homeActions.RESERVATION_ERROR:
      return {
        loading: false,
      };

    case homeActions.TAKEAWAY:
      return {
        ...state,
        loading: true,
      };
    case homeActions.TAKEAWAY_RESULT_SUCCESS:
      return {
        loading: false,
        takeawayResult: action.result,
      };
    case homeActions.TAKEAWAY_RESULT_ERROR:
      return {
        loading: false,
        takeawayResult: "err",
      };
    case homeActions.TAKEAWAY_ERROR:
      return {
        loading: false,
      };

    case homeActions.DELIVERY:
      return {
        ...state,
        loading: true,
      };
    case homeActions.DELIVERY_RESULT_SUCCESS:
      return {
        loading: false,
        deliveryResult: action.result,
      };
    case homeActions.DELIVERY_RESULT_ERROR:
      return {
        loading: false,
        deliveryResult: "err",
      };
    case homeActions.DELIVERY_ERROR:
      return {
        loading: false,
      };

    case homeActions.PAYMENT_METHOD:
      return {
        ...state,
        loading: true,
      };
    case homeActions.PAYMENT_METHOD_RESULT_SUCCESS:
      return {
        loading: false,
        paymentMethodResult: action.result,
      };
    case homeActions.PAYMENT_METHOD_RESULT_ERROR:
      return {
        loading: false,
        paymentMethodResult: "err",
      };
    case homeActions.PAYMENT_METHOD_ERROR:
      return {
        loading: false,
      };

    //get address
    case homeActions.GET_ADDRESSES:
      return {
        ...state,
        loading: true,
      };
    case homeActions.GET_ADDRESSES_RESULT_SUCCESS:
      return {
        loading: false,
        addressArray: action.result.data.addresses,
      };
    case homeActions.GET_ADDRESSES_RESULT_ERROR:
      return {
        loading: false,
      };
    case homeActions.GET_ADDRESSES_ERROR:
      return {
        loading: false,
      };

    //add address
    case homeActions.ADD_ADDRESSES:
      return {
        ...state,
        loading: true,
      };
    case homeActions.ADD_ADDRESSES_RESULT_SUCCESS:
      return {
        loading: false,
        addaddressResultmsg: action.result,
      };
    case homeActions.ADD_ADDRESSES_RESULT_ERROR:
      return {
        loading: false,
      };
    case homeActions.ADD_ADDRESSES_ERROR:
      return {
        loading: false,
      };

    //set default address
    case homeActions.SET_DEFAULT_ADDRESSES:
      return {
        ...state,
        loading: true,
      };
    case homeActions.SET_DEFAULT_ADDRESSES_RESULT_SUCCESS:
      return {
        loading: false,
        myaddressbookResult: action.result,
      };
    case homeActions.SET_DEFAULT_ADDRESSES_RESULT_ERROR:
      return {
        loading: false,
      };
    case homeActions.SET_DEFAULT_ADDRESSES_ERROR:
      return {
        loading: false,
      };

    //set default address
    case homeActions.GET_ORDERS:
      return {
        ...state,
        loading: true,
      };
    case homeActions.GET_ORDERS_RESULT_SUCCESS:
      return {
        loading: false,
        orderResults: action.result.data.orders,
      };
    case homeActions.GET_ORDERS_RESULT_ERROR:
      return {
        orderResults: "err",
        loading: false,
      };
    case homeActions.GET_ORDERS_ERROR:
      return {
        loading: false,
      };

    case homeActions.DEFAULT_RESULT:
      return state;
    case homeActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
