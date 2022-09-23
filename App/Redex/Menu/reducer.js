import { Map } from "immutable";

import menuActions from "./actions";

const messagecreataction=undefined;

const menucategories=undefined;

const menuitem_result=undefined;
const addfavourite_result=undefined
const menuitemdata_result=undefined

const getDeals_result=undefined
const addreview_result=undefined



const initState = new Map({
 messagecreataction,

 menucategories,
 menuitem_result,
 addfavourite_result,
 menuitemdata_result,
 addreview_result,
 getDeals_result,



});

export default function menuReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case menuActions.CLEAR_PROPS:
           return{
               ...state,
               menuitem_result:undefined,
               getDeals_result:undefined,
               menucategories:undefined,  
              
               addfavourite_result:undefined,
               menuitemdata_result:undefined,
               addreview_result:undefined,
           
      
          }

      
          case menuActions.GET_MENU_ITEMS:
            return{
              ...state,
              loading:true
            }
           case menuActions.GET_MENU_ITEMS_RESULT_SUCCESS:
               return {
                 loading: false,
                 menuitem_result: action.result.products,
               };
           case menuActions.GET_MENU_ITEMS_RESULT_ERROR:
            return{
                
                  loading:false,
                  menuitem_result:'err'
             }
           case menuActions.GET_MENU_ITEMS_ERROR:
                return{
                    loading:false,
                   
          } 


          case menuActions.GET_MENU_ITEMS_DATA:
            return{
              ...state,
              loading:true
            }
           case menuActions.GET_MENU_ITEMS_DATA_RESULT_SUCCESS:
               return{
                loading:false,
                 menuitemdata_result:action.result
              }
           case menuActions.GET_MENU_ITEMS_DATA_RESULT_ERROR:
            return{
                
                  loading:false,
                  menuitemdata_result:'err'
             }
           case menuActions.GET_MENU_ITEMS_DATA_ERROR:
                return{
                    loading:false,
                   
          } 
  
    case menuActions.DEFAULT_RESULT:
      return state;
    case menuActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
