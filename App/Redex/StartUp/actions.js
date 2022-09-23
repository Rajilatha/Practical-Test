// import axios from "axios";
// const LoginUrl = "https://restaurant.codelantic.com/api/login";
const actions = {
  DEFAULT: "DEFAULT",
  DEFAULT_RESULT: "DEFAULT_RESULT",
  DEFAULT_ERROR: "DEFAULT_ERROR",

 

  LOGIN: "LOGIN",
  LOGIN_RESULT_SUCCESS: "LOGIN_RESULT_SUCCESS",
  LOGIN_RESULT_ERROR: "LOGIN_RESULT_ERROR",
  LOGIN_ERROR: "LOGIN_ERROR",

  

  USER_SHOW: "USER_SHOW",
  USER_SHOW_RESULT_SUCCESS: "USER_SHOW_RESULT_SUCCESS",
  USER_SHOW_RESULT_ERROR: "USER_SHOW_RESULT_ERROR",
  USER_SHOW_ERROR: "USER_SHOW_ERROR",

  

  CLEAR_PROPS: "CLEAR_PROPS",

  

  userShow: (access_token) => ({
    type: actions.USER_SHOW,
    access_token,
  }),

  
 
  loginAccount: (data) => ({
    type: actions.LOGIN,
    data,
  }),

 
  defaultFunc: (value) => ({
    type: actions.DEFAULT,
    value,
  }),

  clearProps: () => ({
    type: actions.CLEAR_PROPS,
  }),
};


export default actions;
