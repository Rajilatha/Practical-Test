import { Map } from "immutable";

import startUpActions from "./actions";

const messagecreataction = undefined;
const startupdataResult = undefined;
const getRandomIdResult = undefined;
const branchlist = undefined;

const initState = new Map({
  messagecreataction,
  startupdataResult,
  getRandomIdResult,
  branchlist,
});

export default function startUpReducer(state = initState, action) {
  switch (action.type) {
    //clear Props
    case startUpActions.CLEAR_PROPS:
      return {
        ...state,
        messagecreataction: undefined,
        client_secret: undefined,
        errorlogin: undefined,
        access_token: undefined,
        errormsg: undefined,
        loginresultmsgt: undefined,
        versionresult: undefined,
        getmoduleresult: undefined,
        getRandomIdResult: undefined,
        resetPasswordmessage: undefined,
        guestloginresultmsg: undefined,
        startupdataResult: undefined,
        branchlist: undefined,
      };

    

    case startUpActions.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case startUpActions.LOGIN_RESULT_SUCCESS:
      return {
      
        loginresultmsgt: action.result.token,
        loading: false,
      };
    case startUpActions.LOGIN_RESULT_ERROR:
      return {
        errorlogin: action.result.message,
        loading: false,
      };
    case startUpActions.LOGIN_ERROR:
      return {
        loading: false,
      };

   
   

   

    case startUpActions.USER_SHOW:
      return {
        ...state,
        loading: true,
      };
    case startUpActions.USER_SHOW_RESULT_SUCCESS:
      return {
        startupdataResult: action.result.data,
        loading: false,
      };
    case startUpActions.USER_SHOW_RESULT_ERROR:
      return {
        loading: false,
      };
    case startUpActions.USER_SHOW_ERROR:
      return {
        loading: false,
      };

   
    case startUpActions.DEFAULT_RESULT:
      return state;
    case startUpActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
