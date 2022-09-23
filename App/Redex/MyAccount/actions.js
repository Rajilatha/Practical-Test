const actions = {
  DEFAULT: "DEFAULT",
  DEFAULT_RESULT: "DEFAULT_RESULT",
  DEFAULT_ERROR: "DEFAULT_ERROR",

  USER_SHOW_MYACCOUNT: "USER_SHOW_MYACCOUNT",
  USER_SHOW_MYACCOUNT_RESULT_SUCCESS: "USER_SHOW_MYACCOUNT_RESULT_SUCCESS",
  USER_SHOW_MYACCOUNT_RESULT_ERROR: "USER_SHOW_MYACCOUNT_RESULT_ERROR",
  USER_SHOW_MYACCOUNT_ERROR: "USER_SHOW_MYACCOUNT_ERROR",

 

  CLEAR_PROPS: "CLEAR_PROPS",

  userShowLogin: (access_token) => ({
    type: actions.USER_SHOW_MYACCOUNT,
    access_token,
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
