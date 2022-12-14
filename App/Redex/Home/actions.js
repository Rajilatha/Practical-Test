const actions = {
  DEFAULT: "DEFAULT",
  DEFAULT_RESULT: "DEFAULT_RESULT",
  DEFAULT_ERROR: "DEFAULT_ERROR",

  RESTURANT_DETAILS: "RESTURANT_DETAILS",
  RESTURANT_DETAILS_RESULT_SUCCESS: "RESTURANT_DETAILS_RESULT_SUCCESS",
  RESTURANT_DETAILS_RESULT_ERROR: "RESTURANT_DETAILS_RESULT_ERROR",
  RESTURANT_DETAILS_ERROR: "RESTURANT_DETAILS_ERROR",

  GET_MENU_CATEGORIES: "GET_MENU_CATEGORIES",
  GET_MENU_CATEGORIES_RESULT_SUCCESS: "GET_MENU_CATEGORIES_RESULT_SUCCESS",
  GET_MENU_CATEGORIES_RESULT_ERROR: "GET_MENU_CATEGORIES_RESULT_ERROR",
  GET_MENU_CATEGORIES_ERROR: "GET_MENU_CATEGORIES_ERROR",

  GET_REVIEW: "GET_REVIEW",
  GET_REVIEW_RESULT_SUCCESS: "GET_REVIEW_RESULT_SUCCESS",
  GET_REVIEW_RESULT_ERROR: "GET_REVIEW_RESULT_ERROR",
  GET_REVIEW_ERROR: "GET_REVIEW_ERROR",

  GET_OFFERS: "GET_OFFERS",
  GET_OFFERS_RESULT_SUCCESS: "GET_OFFERS_RESULT_SUCCESS",
  GET_OFFERS_RESULT_ERROR: "GET_OFFERS_RESULT_ERROR",
  GET_OFFERS_ERROR: "GET_OFFERS_ERROR",

  GET_OFFERS_ITEMS: "GET_OFFERS_ITEMS",
  GET_OFFERS_ITEMS_RESULT_SUCCESS: "GET_OFFERS_ITEMS_RESULT_SUCCESS",
  GET_OFFERS_ITEMS_RESULT_ERROR: "GET_OFFERS_ITEMS_RESULT_ERROR",
  GET_OFFERS_ITEMS_ERROR: "GET_OFFERS_ITEMS_ERROR",

  // GET_MENU_ITEMS:"GET_MENU_ITEMS",
  // GET_MENU_ITEMS_RESULT_SUCCESS: "GET_MENU_ITEMS_RESULT_SUCCESS",
  // GET_MENU_ITEMS_RESULT_ERROR: "GET_MENU_ITEMS_RESULT_ERROR",
  // GET_MENU_ITEMS_ERROR: "GET_MENU_ITEMS_ERROR",

  // GET_MENU_ITEMS_DATA:"GET_MENU_ITEMS_DATA",
  // GET_MENU_ITEMS_DATA_RESULT_SUCCESS: "GET_MENU_ITEMS_DATA_RESULT_SUCCESS",
  // GET_MENU_ITEMS_DATA_RESULT_ERROR: "GET_MENU_ITEMS_DATA_RESULT_ERROR",
  // GET_MENU_ITEMS_DATA_ERROR: "GET_MENU_ITEMS_DATA_ERROR",

  // ADD_FAVOURITE_ITEMS:"ADD_FAVOURITE_ITEMS",
  // ADD_FAVOURITE_ITEMS_RESULT_SUCCESS: "ADD_FAVOURITE_ITEMS_RESULT_SUCCESS",
  // ADD_FAVOURITE_ITEMS_RESULT_ERROR: "ADD_FAVOURITE_ITEMS_RESULT_ERROR",
  // ADD_FAVOURITE_ITEMS_ERROR: "ADD_FAVOURITE_ITEMS_ERROR",

  ADD_REVIEWS: "ADD_REVIEWS",
  ADD_REVIEWS_RESULT_SUCCESS: "ADD_REVIEWS_RESULT_SUCCESS",
  ADD_REVIEWS_RESULT_ERROR: "ADD_REVIEWS_RESULT_ERROR",
  ADD_REVIEWS_ERROR: "ADD_REVIEWS_ERROR",

  ADD_PROME_CODE: "ADD_PROME_CODE",
  ADD_PROME_CODE_RESULT_SUCCESS: "ADD_PROME_CODE_RESULT_SUCCESS",
  ADD_PROME_CODE_RESULT_ERROR: "ADD_PROME_CODE_RESULT_ERROR",
  ADD_PROME_CODE_ERROR: "ADD_PROME_CODE_ERROR",

  ADD_POST_CODE: "ADD_POST_CODE",
  ADD_POST_CODE_RESULT_SUCCESS: "ADD_POST_CODE_RESULT_SUCCESS",
  ADD_POST_CODE_RESULT_ERROR: "ADD_POST_CODE_RESULT_ERROR",
  ADD_POST_CODE_ERROR: "ADD_POST_CODE_ERROR",

  // GET_DEALS:"GET_DEALS",
  // GET_DEALS_RESULT_SUCCESS: "GET_DEALS_RESULT_SUCCESS",
  // GET_DEALS_RESULT_ERROR: "GET_DEALS_RESULT_ERROR",
  // GET_DEALS_ERROR: "GET_DEALS_ERROR",

  GET_BRANCH_DEALS: "GET_BRANCH_DEALS",
  GET_BRANCH_DEALS_RESULT_SUCCESS: "GET_BRANCH_DEALS_RESULT_SUCCESS",
  GET_BRANCH_DEALS_RESULT_ERROR: "GET_BRANCH_DEALS_RESULT_ERROR",
  GET_BRANCH_DEALS_ERROR: "GET_BRANCH_DEALS_ERROR",

  VALIDATE_TIME: "VALIDATE_TIME",
  VALIDATE_TIME_RESULT_SUCCESS: "VALIDATE_TIME_RESULT_SUCCESS",
  VALIDATE_TIME_RESULT_ERROR: "VALIDATE_TIME_RESULT_ERROR",
  VALIDATE_TIME_ERROR: "VALIDATE_TIME_ERROR",

  VALIDATE_TIME_RESERVATION: "VALIDATE_TIME_RESERVATION",
  VALIDATE_TIME_RESERVATION_RESULT_SUCCESS:
    "VALIDATE_TIME_RESERVATION_RESULT_SUCCESS",
  VALIDATE_TIME_RESERVATION_RESULT_ERROR:
    "VALIDATE_TIME_RESERVATION_RESULT_ERROR",
  VALIDATE_TIME_RESERVATION_ERROR: "VALIDATE_TIME_RESERVATION_ERROR",

  RESERVATION: "RESERVATION",
  RESERVATION_RESULT_SUCCESS: "RESERVATION_RESULT_SUCCESS",
  RESERVATION_RESULT_ERROR: "RESERVATION_RESULT_ERROR",
  RESERVATION_ERROR: "RESERVATION_ERROR",

  DELIVERY: "DELIVERY",
  DELIVERY_RESULT_SUCCESS: "DELIVERY_RESULT_SUCCESS",
  DELIVERY_RESULT_ERROR: "DELIVERY_RESULT_ERROR",
  DELIVERY_ERROR: "DELIVERY_ERROR",

  TAKEAWAY: "TAKEAWAY",
  TAKEAWAY_RESULT_SUCCESS: "TAKEAWAY_RESULT_SUCCESS",
  TAKEAWAY_RESULT_ERROR: "TAKEAWAY_RESULT_ERROR",
  TAKEAWAY_ERROR: "TAKEAWAY_ERROR",

  PAYMENT_METHOD: "PAYMENT_METHOD",
  PAYMENT_METHOD_RESULT_SUCCESS: "PAYMENT_METHOD_RESULT_SUCCESS",
  PAYMENT_METHOD_RESULT_ERROR: "PAYMENT_METHOD_RESULT_ERROR",
  PAYMENT_METHOD_ERROR: "PAYMENT_METHOD_ERROR",

  GET_ADDRESSES: "GET_ADDRESSES",
  GET_ADDRESSES_RESULT_SUCCESS: "GET_ADDRESSES_RESULT_SUCCESS",
  GET_ADDRESSES_RESULT_ERROR: "GET_ADDRESSES_RESULT_ERROR",
  GET_ADDRESSES_ERROR: "GET_ADDRESSES_ERROR",

  ADD_ADDRESSES: "ADD_ADDRESSES",
  ADD_ADDRESSES_RESULT_SUCCESS: "ADD_ADDRESSES_RESULT_SUCCESS",
  ADD_ADDRESSES_RESULT_ERROR: "ADD_ADDRESSES_RESULT_ERROR",
  ADD_ADDRESSES_ERROR: "ADD_ADDRESSES_ERROR",

  SET_DEFAULT_ADDRESSES: "SET_DEFAULT_ADDRESSES",
  SET_DEFAULT_ADDRESSES_RESULT_SUCCESS: "SET_DEFAULT_ADDRESSES_RESULT_SUCCESS",
  SET_DEFAULT_ADDRESSES_RESULT_ERROR: "SET_DEFAULT_ADDRESSES_RESULT_ERROR",
  SET_DEFAULT_ADDRESSES_ERROR: "SET_DEFAULT_ADDRESSES_ERROR",

  GET_ORDERS: "GET_ORDERS",
  GET_ORDERS_RESULT_SUCCESS: "GET_ORDERS_RESULT_SUCCESS",
  GET_ORDERS_RESULT_ERROR: "GET_ORDERS_RESULT_ERROR",
  GET_ORDERS_ERROR: "GET_ORDERS_ERROR",

  GET_ORDER_DETAILS: "GET_ORDER_DETAILS",
  GET_ORDER_DETAILS_RESULT_SUCCESS: "GET_ORDER_DETAILS_RESULT_SUCCESS",
  GET_ORDER_DETAILS_RESULT_ERROR: "GET_ORDER_DETAILS_RESULT_ERROR",
  GET_ORDER_DETAILS_ERROR: "GET_ORDER_DETAILS_ERROR",

  GET_ORDER_DETAILS_TAKEAWAY: "GET_ORDER_DETAILS_TAKEAWAY",
  GET_ORDER_DETAILS_TAKEAWAY_RESULT_SUCCESS:
    "GET_ORDER_DETAILS_TAKEAWAY_RESULT_SUCCESS",
  GET_ORDER_DETAILS_TAKEAWAY_RESULT_ERROR:
    "GET_ORDER_DETAILS_TAKEAWAY_RESULT_ERROR",
  GET_ORDER_DETAILS_TAKEAWAY_ERROR: "GET_ORDER_DETAILS_TAKEAWAY_ERROR",

  GET_ORDER_DETAILS_RESERVATION: "GET_ORDER_DETAILS_RESERVATION",
  GET_ORDER_DETAILS_RESERVATION_RESULT_SUCCESS:
    "GET_ORDER_DETAILS_RESERVATION_RESULT_SUCCESS",
  GET_ORDER_DETAILS_RESERVATION_RESULT_ERROR:
    "GET_ORDER_DETAILS_RESERVATION_RESULT_ERROR",
  GET_ORDER_DETAILS_RESERVATION_ERROR: "GET_ORDER_DETAILS_RESERVATION_ERROR",

  USER_SHOW_LOGIN: "USER_SHOW_LOGIN",
  USER_SHOW_LOGIN_RESULT_SUCCESS: "USER_SHOW_LOGIN_RESULT_SUCCESS",
  USER_SHOW_LOGIN_RESULT_ERROR: "USER_SHOW_LOGIN_RESULT_ERROR",
  USER_SHOW_LOGIN_ERROR: "USER_SHOW_LOGIN_ERROR",

  CLEAR_PROPS: "CLEAR_PROPS",

  userShowLogin: (access_token) => ({
    type: actions.USER_SHOW_LOGIN,
    access_token,
  }),

  getOrderDetailsReservation: (access_token, orderid, ordertype) => ({
    type: actions.GET_ORDER_DETAILS_RESERVATION,
    access_token,
    orderid,
    ordertype,
  }),

  getOrderDetailsTakeaway: (access_token, orderid, ordertype) => ({
    type: actions.GET_ORDER_DETAILS_TAKEAWAY,
    access_token,
    orderid,
    ordertype,
  }),

  getOrderDetails: (access_token, orderid, ordertype) => ({
    type: actions.GET_ORDER_DETAILS,
    access_token,
    orderid,
    ordertype,
  }),

  getOrders: (access_token) => ({
    type: actions.GET_ORDERS,
    access_token,
   
  }),

  paymentMethod: (access_token, branchId) => ({
    type: actions.PAYMENT_METHOD,
    access_token,
    branchId,
  }),

  validateTime: (access_token, data) => ({
    type: actions.VALIDATE_TIME,
    access_token,
    data,
  }),

  validateTimeReservation: (access_token, data) => ({
    type: actions.VALIDATE_TIME_RESERVATION,
    access_token,
    data,
  }),

  reservation: (access_token, data) => ({
    type: actions.RESERVATION,
    access_token,
    data,
  }),

  takeaway: (access_token, data) => ({
    type: actions.TAKEAWAY,
    access_token,
    data,
  }),

  delivery: (access_token, data) => ({
    type: actions.DELIVERY,
    access_token,
    data,
  }),

  getBranchDeals: (access_token, branch_id) => ({
    type: actions.GET_BRANCH_DEALS,
    access_token,
    branch_id,
  }),

  getDeals: (access_token) => ({
    type: actions.GET_DEALS,
    access_token,
  }),

  addPromoCode: (access_token, promocode) => ({
    type: actions.ADD_PROME_CODE,
    access_token,
    promocode,
  }),

  addPostCode: (access_token, postcode) => ({
    type: actions.ADD_POST_CODE,
    access_token,
    postcode,
  }),

  addReviews: (access_token, data) => ({
    type: actions.ADD_REVIEWS,
    access_token,
    data,
  }),

  // addFavouriteItems:(access_token,data)=>({
  //   type: actions.ADD_FAVOURITE_ITEMS,
  //   access_token,
  //   data
  // }),

  // getMenuItems:(access_token,menuItemId,branchId)=>({
  //   type: actions.GET_MENU_ITEMS,
  //   menuItemId,
  //   branchId
  // }),

  // getMenuItemsData:(access_token,menuItemId,branchId)=>({
  //   type: actions.GET_MENU_ITEMS_DATA,
  //   menuItemId,
  //   branchId
  // }),

  getOffersItems: (access_token, offerid) => ({
    type: actions.GET_OFFERS_ITEMS,
    offerid,
  }),

  getOffers: (access_token) => ({
    type: actions.GET_OFFERS,
  }),

  getMenuCategories: (access_token, branchid) => ({
    type: actions.GET_MENU_CATEGORIES,
    branchid,
  }),

  getresturantDetails: (access_token) => ({
    type: actions.RESTURANT_DETAILS,
    access_token,
  }),

  addAddress: (access_token, data) => ({
    type: actions.ADD_ADDRESSES,
    access_token,
    data,
  }),

  setDefaultAddress: (access_token, data, id) => ({
    type: actions.SET_DEFAULT_ADDRESSES,
    access_token,
    data,
    id,
  }),

  getAddress: (access_token) => ({
    type: actions.GET_ADDRESSES,
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
