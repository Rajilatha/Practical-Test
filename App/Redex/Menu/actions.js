const actions = {

  DEFAULT: "DEFAULT",
  DEFAULT_RESULT: "DEFAULT_RESULT",
  DEFAULT_ERROR: "DEFAULT_ERROR",

  
 



  GET_MENU_ITEMS:"GET_MENU_ITEMS",
  GET_MENU_ITEMS_RESULT_SUCCESS: "GET_MENU_ITEMS_RESULT_SUCCESS",
  GET_MENU_ITEMS_RESULT_ERROR: "GET_MENU_ITEMS_RESULT_ERROR",
  GET_MENU_ITEMS_ERROR: "GET_MENU_ITEMS_ERROR",

  GET_MENU_ITEMS_DATA:"GET_MENU_ITEMS_DATA",
  GET_MENU_ITEMS_DATA_RESULT_SUCCESS: "GET_MENU_ITEMS_DATA_RESULT_SUCCESS",
  GET_MENU_ITEMS_DATA_RESULT_ERROR: "GET_MENU_ITEMS_DATA_RESULT_ERROR",
  GET_MENU_ITEMS_DATA_ERROR: "GET_MENU_ITEMS_DATA_ERROR",

  CLEAR_PROPS:"CLEAR_PROPS",






 

  getMenuItems:(access_token)=>({
    type: actions.GET_MENU_ITEMS,
   
  }),


  getMenuItemsData:(access_token,menuItemId)=>({
    type: actions.GET_MENU_ITEMS_DATA,
    menuItemId,
    // branchId
  }),

  defaultFunc: (value) => ({
    type: actions.DEFAULT,
    value
  }),

  clearProps: () =>({
    type: actions.CLEAR_PROPS,
    
  }),
};

export default actions;