import { Map } from "immutable";

import myaccountActions from "./actions";

const messagecreataction = undefined;
const userShowResult = undefined;
const updateuserdataresult = undefined;

const initState = new Map({
  messagecreataction,
  userShowResult,
  updateuserdataresult,
});

export default function menuReducer(state = initState, action) {
  switch (action.type) {
    //clear Props
    case myaccountActions.CLEAR_PROPS:
      return {
        ...state,
        userShowResult: undefined,
        updateuserdataresult: undefined,
      };

    case myaccountActions.USER_SHOW_MYACCOUNT:
      return {
        ...state,
        loading: true,
      };
    case myaccountActions.USER_SHOW_MYACCOUNT_RESULT_SUCCESS:
      return {
        userShowResult: action.result,
        loading: false,
      };
    case myaccountActions.USER_SHOW_MYACCOUNT_RESULT_ERROR:
      return {
        loading: false,
      };
    case myaccountActions.USER_SHOW_MYACCOUNT_ERROR:
      return {
        loading: false,
      };

   

    case myaccountActions.DEFAULT_RESULT:
      return state;
    case myaccountActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
