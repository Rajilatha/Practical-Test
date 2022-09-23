import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { showMessage, hideMessage } from "react-native-flash-message";
import Modal from "react-native-modal";
import { RadioButton } from "react-native-paper";

import registerAction from "../../../Redex/Menu/actions";
import NavBarWithBack from "../../../Components/NavBarWithBack";
import Loading from "../../../Components/Loading";

const {
  // getMenuCategories,
  getMenuItems,
  // addFavouriteItems,
  // getDeals,
  clearProps,
} = registerAction;
import styles from "./styles";

let menucategoriesDatadata;
let menuitem_resultDatadata;
let myValue;
let totvalue = 0;
let totvaluecheckout = 0;
let qty = 0;
let dealsArraydata = [];
let checkeddealsstate = [];
let dealsradiobuttondata = [];
let _storeAccess;
let c;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menucategoriesModeDesc: [],
      menucategoriesModeDescObj: {},

      menuitem_resultModeDesc: [],
      menuitem_resultModeDescObj: {},

      categortitemstate: -1,
      // categorynamestate: "Deal",
      showdealsstate: false,
      deal_itemsstate: [],
      menu_itemsstate: [],

      checkdealstate: 0,
      menuitemdealstate: [],
      menuitemsdealsObj: {},
      dealfullArrayDesc: [],
      dealfullArrayDescObj: {},

      dealFinalArrayDesc: [],
      dealFinalArrayDescObj: {},

      dealnamestate: "",
      dealidstate: 0,
      dealpricestate: 0,

      totvaluestate: 0,
      vatvalue: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    state.menucategoriesModeDesc = [];
    state.menuitem_resultModeDesc = [];
    menuitem_resultDatadata = [];

    // if (props.menucategories != undefined) {
    //   if (props.menucategories == "err") {
    //     // props.dispatch(clearProps())
    //   } else {
    //     console.log(props.menucategories);
    //     state.menucategoriesModeDescObj = {
    //       id: -1,
    //       value: "Deal",
    //     };
    //     state.menucategoriesModeDesc.push(state.menucategoriesModeDescObj);
    //     for (var i = 0, len = props.menucategories.length; i < len; i++) {
    //       state.menucategoriesModeDescObj = {
    //         id: props.menucategories[i].id,
    //         value: props.menucategories[i].name,
    //       };
    //       state.menucategoriesModeDesc.push(state.menucategoriesModeDescObj);
    //       menucategoriesDatadata = state.menucategoriesModeDesc;
    //     }
    //     // props.dispatch(clearProps())
    //   }
    //   props.dispatch(clearProps());
    // }

    if (props.menuitem_result != undefined) {
      if (props.menuitem_result == "err") {
        props.dispatch(clearProps());
      } else {
        console.log(props.menuitem_result, "props.menuitem_result");
        for (var i = 0, len = props.menuitem_result.length; i < len; i++) {
          state.menuitem_resultModeDescObj = {
            id: props.menuitem_result[i].id,
            title: props.menuitem_result[i].title,
            description: props.menuitem_result[i].description,
            price: props.menuitem_result[i].price,
            discountPercentage: props.menuitem_result[i].discountPercentage,
            rating: props.menuitem_result[i].rating,
            stock: props.menuitem_result[i].stock,
            brand: props.menuitem_result[i].brand,
            category: props.menuitem_result[i].category,
            logo: props.menuitem_result[i].thumbnail,
            // favoured: props.menuitem_result[i].favoured,
            // addons: props.menuitem_result[i].addons,
            // variants: props.menuitem_result[i].variants,
            // crusts: props.menuitem_result[i].crusts,
            // vat_category: props.menuitem_result[i].vat_category,
          };
          state.menuitem_resultModeDesc.push(state.menuitem_resultModeDescObj);
          menuitem_resultDatadata = state.menuitem_resultModeDesc;
        }
        console.log(state.menuitem_resultModeDesc);
      }
      // props.dispatch(clearProps())
    }

    // if (props.getDeals_result != undefined) {
    //   if (props.getDeals_result == "err") {
    //   } else {
    //     console.log(props.getDeals_result, "props.getDeals_result....");
    //     for (var i = 0, len = props.getDeals_result.length; i < len; i++) {
    //       state.menuitem_resultModeDescObj = {
    //         id: props.getDeals_result[i].id,
    //         value: props.getDeals_result[i].name,
    //         price: props.getDeals_result[i].price,
    //         description: props.getDeals_result[i].description,
    //         logo: props.getDeals_result[i].image,
    //         favoured: props.getDeals_result[i].favoured,
    //         variants: props.getDeals_result[i].variants,
    //         crusts: props.getDeals_result[i].crusts,
    //         deals_items: props.getDeals_result[i].deals_items,
    //         vat_category: props.getDeals_result[i].vat_category,
    //       };
    //       // console.log(
    //       //   state.menuitem_resultModeDescObj.props.getDeals_result[i].image
    //       // );
    //       state.menuitem_resultModeDesc.push(state.menuitem_resultModeDescObj);
    //       menuitem_resultDatadata = state.menuitem_resultModeDesc;
    //     }
    //   }
    //   //props.dispatch(clearProps())
    // }

    // if (props.addfavourite_result != undefined) {
    //   if (props.menuitem_result == "err") {
    //   } else {
    //     console.log(props.menuitem_result);

    //     showMessage({
    //       textStyle: { paddingLeft: 10 },
    //       titleStyle: { paddingLeft: 10 },
    //       message: "Success",
    //       description: props.menuitem_result,
    //       type: "default",
    //       backgroundColor: "green", // background color
    //       color: "#ffffff",
    //       duration: 3850,
    //     });
    //     //this.getData()\
    //     if (state.categortitemstate == -1) {
    //       props.dispatch(getDeals("accesstoken"));
    //       props.dispatch(clearProps());
    //     } else {
    //       const _storeAccess = async () => {
    //         const branchid = await AsyncStorage.getItem("branchId");
    //         const usershowdata = await AsyncStorage.getItem("usershowdata");
    //         props.dispatch(
    //           getMenuItems(
    //             "accesstoken",
    //             state.categortitemstate,
    //             branchid,
    //             JSON.parse(usershowdata).id
    //           )
    //         );
    //         props.dispatch(clearProps());
    //       };
    //       _storeAccess();
    //     }

    //     // _storeAccess=async()=>{
    //     //   try {
    //     //     const accesstoken = await AsyncStorage.getItem('access_token')

    //     //     // if(accesstoken !== null) {

    //     //     // }else{
    //     //     // props.navigation.navigate('SignIn')
    //     //     // }
    //     //   } catch(e) {
    //     //     console.log(e)
    //     //   }
    //     // }
    //     // _storeAccess();
    //   }
    // }
  }

  componentDidMount() {
    // this.getData()
    // this.getCountOfUserItems()
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      // this.getCountOfUserItems();
      this.getData();
    });
  }

  // getCountOfUserItems = async () => {
  //   const itemCount = await AsyncStorage.getItem("savedIds");
  //   console.log(itemCount,"itemCount")

  //   if (itemCount == null) {
  //     totvalue = 0;
  //     qty = 0;
  //     this.setState({ totvaluestate: totvalue });
  //     totvaluecheckout = totvalue;
  //   } else {
  //     await AsyncStorage.getItem("savedIds", (err, result) => {
  //       console.log("Data Found", JSON.parse(result));
  //       if (result !== null) {
  //           console.log(result,"result")
  //         this.setState({ bucketitemcountsate: JSON.parse(result).length });
  //         myValue = this.state.bucketitemcountsate;
  //         console.log(myValue,"myValue")
  //         totvalue = 0;
  //         qty = 0;
  //         for (var i = 0; i < JSON.parse(result).length; i++) {
  //           (qty = JSON.parse(result)[i].quantity + qty),
  //           // c=(result)[i].totalpricechange;
  //           // console.log(c, "123")
  //           // console.log(totvalue, "totvalue")
  //             (totvalue = JSON.parse(result)[i].totalpricechange + totvalue);
  //             console.log(qty, "qty....")
  //             console.log(totvalue, "totvalue")
  //         }

  //         this.setState({ totvaluestate: totvalue });
  //         totvaluecheckout = totvalue;
  //         console.log(totvaluecheckout, "totvaluecheckout")
  //         // AsyncStorage.setItem('savedIds', JSON.stringify(newIds));
  //       } else {
  //         console.log("Data Not Found");
  //         //AsyncStorage.setItem('savedIds', JSON.stringify(cart));
  //         this.setState({ bucketitemcountsate: 0 });
  //       }
  //     });
  //   }
  // };

  getData = async () => {
    try {
      const accesstoken = await AsyncStorage.getItem("access_token");
      const itemid = await AsyncStorage.getItem("itemid");
      const itemname = await AsyncStorage.getItem("itemname");
      console.log(itemname);
      // const branchid = await AsyncStorage.getItem("branchId");
      // this.setState({ categorynamestate: itemname });
      // this.setState({ categortitemstate: parseInt(itemid) });

      // checkeddealsstate[0] = String(0) + String(0);
      // checkeddealsstate[1] = String(0) + String(1);
      // checkeddealsstate[2] = String(0) + String(2);

      //  this.props.dispatch(getMenuCategories("accesstoken",branchid))
      //this.props.dispatch(clearProps())
      // this.props.dispatch(getDeals(accesstoken))

      // if (this.state.categortitemstate == -1) {
      // this.props.dispatch(getDeals("accesstoken"));
      //this.props.dispatch(clearProps())
      // }
      //  else {
      // const branchid = await AsyncStorage.getItem("branchId");
      // const usershowdata = await AsyncStorage.getItem("usershowdata");
      this.props.dispatch(
        getMenuItems()
        // "accesstoken",
        // this.state.categortitemstate,
        // branchid,
        // JSON.parse(usershowdata).id
        // )
      );
      // this.props.dispatch(clearProps())
    } catch (e) {
      // }
      console.log(e);
    }
  };

  //  scrollItems=async( num)=>{
  //    console.log(num)
  //    if(num==0  ){
  //     try {
  //       const accesstoken = await AsyncStorage.getItem('access_token')

  //       if(accesstoken !== null) {
  //         if(menucategoriesDatadata!=[]){
  //           //alert(this.state.categortitemstate+1)
  //           console.log(this.state.menucategoriesModeDesc)
  //          // alert(menucategoriesDatadata[this.state.categortitemstate+1].id)
  //           this.props.dispatch( getMenuItems(accesstoken,menucategoriesDatadata[this.state.categortitemstate-1].id,1))
  //           this.props.dispatch(clearProps())
  //           this.setState({categortitemstate:this.state.categortitemstate-1})
  //         }

  //       }else{
  //         this.props.navigation.navigate('SignIn')
  //       }
  //     } catch(e) {
  //       console.log(e)
  //     }

  //    }

  setContentSize = (height) => {
    console.log(height);
  };

  // addFavouriteItem = async (itemid) => {
  //   try {
  //     const accesstoken = await AsyncStorage.getItem("access_token");

  //     if (accesstoken !== null) {
  //       const obj = {
  //         item_id: itemid,
  //       };
  //       this.props.dispatch(addFavouriteItems(accesstoken, obj));
  //       //this.props.dispatch(clearProps())
  //     } else {
  //       this.props.navigation.navigate("SignIn");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  clickMenuItem = async (
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category
  ) => {
    // if (this.state.categortitemstate == -1) {
    // if (deal_items != undefined) {
    //   console.log(deal_items);
    //   this.setState({ dealfullArrayDesc: [] });
    //   this.state.dealfullArrayDesc = [];
    //   this.setState({ dealFinalArrayDesc: [] });
    //   this.state.dealFinalArrayDesc = [];
    //   this.setState({ dealnamestate: value });
    //   this.setState({ dealidstate: id });
    //   this.setState({ dealpricestate: price });

    // for( var j=0, len=deal_items.length; j < len; j++ ){

    //   this.state.addonsCheckboxdataDesc.push(dealsradiobuttondata[j])
    // }

    //  this.state.dealFinalArrayDesc.push(this.state.dealFinalArrayDescObj)

    // await AsyncStorage.setItem('dealname',value);
    // await AsyncStorage.setItem('dealid',id.toString);
    // await AsyncStorage.setItem('dealprice',price.toString);

    // for (var j in deal_items) {
    //   this.state.dealFinalArrayDescObj = {
    //     name: deal_items[j].menu_items[0].name,
    //     id: deal_items[j].menu_items[0].id,
    //     price: deal_items[j].menu_items[0].price,
    //     key: parseInt(j),
    //   };
    //   this.state.dealFinalArrayDesc.push(this.state.dealFinalArrayDescObj);
    // }

    // dealsradiobuttondata = this.state.dealFinalArrayDesc;
    ///end add deals

    // for (var j in deal_items) {
    //   this.state.dealfullArrayDescObj = {
    //     deal_id: deal_items[j].id,
    //     name: deal_items[j].name,
    //     deals_items: deal_items[j].menu_items,
    //     key: parseInt(j),
    //   };

    //   this.state.dealfullArrayDesc.push(this.state.dealfullArrayDescObj);
    // }

    //  console.log(this.state.menuitemdealstate)
    // }
    // dealsArraydata = this.state.dealfullArrayDesc;

    // this.setState({menu_itemsstate:menu_items})
    // this.setState({deal_itemsstate:deal_items})

    // console.log("this.state.dealfullArrayDesc");
    // console.log(dealsArraydata);
    // this.setState({ showdealsstate: true });
    // }
    // }
    // else
    {
      // alert(vat_category)
      try {
        await AsyncStorage.setItem("idstate", id.toString());
      } catch (error) {
        console.log(error);
      }
      try {
        await AsyncStorage.setItem("title", title);
      } catch (error) {
        console.log(error);
      }
      try {
        await AsyncStorage.setItem("description", description);
      } catch (error) {
        console.log(error);
      }
      // try {
      //   await AsyncStorage.setItem("value", value);
      // } catch (error) {
      //   console.log(error);
      // }
      try {
        await AsyncStorage.setItem("price", price.toString());
      } catch (error) {
        console.log(error);
      }

      try {
        await AsyncStorage.setItem(
          "discountPercentage",
          discountPercentage.toString()
        );
      } catch (error) {
        console.log(error);
      }

      try {
        await AsyncStorage.setItem("rating", rating.toString());
      } catch (error) {
        console.log(error);
      }

      try {
        await AsyncStorage.setItem("stock", stock.toString());
      } catch (error) {
        console.log(error);
      }

      try {
        await AsyncStorage.setItem("brand", brand);
      } catch (error) {
        console.log(error);
      }

      try {
        await AsyncStorage.setItem("category", category);
      } catch (error) {
        console.log(error);
      }

      try {
        await AsyncStorage.setItem("logo", logo);
      } catch (error) {
        console.log(error);
      }

      this.props.navigation.navigate("Checkout");
    }
  };

  // clickmenuItems = async (id, name) => {
  //   console.log("123menu")
  //   const accesstoken = await AsyncStorage.getItem("access_token");
  //   await AsyncStorage.setItem("itemid", id.toString());
  //   await AsyncStorage.setItem("itemname", name);
  //   // this.setState({ categortitemstate: id });
  //   // this.setState({ categorynamestate: name });

  //   if (id == -1) {
  //     this.props.dispatch(getDeals(accesstoken));
  //   } else {
  //     const branchid = await AsyncStorage.getItem("branchId");
  //     const usershowdata = await AsyncStorage.getItem("usershowdata");
  //     this.props.dispatch(
  //       getMenuItems(accesstoken, id, branchid, JSON.parse(usershowdata).id)
  //     );
  //   }
  // };

  // onPressCheckBoxDeal = async (id, value, price, index, key) => {
  //   //   this.setState({isclickradiobutton:true})
  //   //   console.log("dealsradiobuttondata")
  //   //  this.state.addonsCheckboxdataDesc=[]
  //   //   console.log(dealsradiobuttondata)
  //   //    console.log(key)

  //   dealsradiobuttondata.forEach(myFunction);

  //   function myFunction(item, index) {
  //     console.log(item.key);

  //     if (item.key == key) {
  //       dealsradiobuttondata.splice(index, 1);
  //     }
  //   }

  //   checkeddealsstate[key] = String(index) + String(key);
  //   this.setState({ checkeddeals: checkeddealsstate[key] });

  //   this.state.dealFinalArrayDescObj = {
  //     name: value,
  //     id: id,
  //     price: price,
  //     key: key,
  //   };

  //   for (var j = 0, len = dealsradiobuttondata.length; j < len; j++) {
  //     this.state.dealFinalArrayDesc.push(dealsradiobuttondata[j]);
  //   }

  //   this.state.dealFinalArrayDesc.push(this.state.dealFinalArrayDescObj);
  //   //    dealsradiobuttondata=this.state.addonsCheckboxdataDesc
  //   //    this.state.addonsCheckboxdataDesc  =[]
  //   //  console.log('dkjakdjkajk')
  //   //  console.log(dealsradiobuttondata)

  //   //   for( var j=0, len=dealsradiobuttondata.length; j < len; j++ ){
  //   //     this.state.addonsCheckboxdataDesc.push(dealsradiobuttondata[j])

  //   //   }

  //   //   dealsradiobuttondata=[]
  //   dealsradiobuttondata = this.state.dealFinalArrayDesc;
  //   //   console.log("dealsradiobuttondata")
  //   // console.log(dealsradiobuttondata)
  //   console.log(this.state.dealFinalArrayDesc);
  // };

  // pressAddToCart = async () => {
  //   const vatcategory = await AsyncStorage.getItem("vatcat");
  //   // const showuserdata=  await AsyncStorage.getItem('usershowdata')
  //   const food_vat = await AsyncStorage.getItem("food_vat");
  //   const alcohol_vat = await AsyncStorage.getItem("alcohol_vat");

  //   // console.log(JSON.parse(showuserdata).food_vat)
  //   if (vatcategory == "food") {
  //     this.setState({ vatvalue: parseInt(food_vat) });
  //   } else {
  //     this.setState({ vatvalue: parseInt(alcohol_vat) });
  //   }

  //   await AsyncStorage.getItem("savedIds", (err, result) => {
  //     if (result !== null) {
  //       const resultData = JSON.parse(result);
  //       console.log(JSON.parse(result));
  //       if (resultData.length == 0) {
  //         this.setState({ bucketitemcountsate: JSON.parse(result).length + 1 });
  //         var totaladdonsprice = 0;
  //         var totcrustprice = 0;
  //         var vatvalue = 0;
  //         //     for( var j=0, len=this.state.addonsCheckboxdataDesc.length; j < len; j++ ){

  //         //         totaladdonsprice=this.state.addonsCheckboxdataDesc[j].price+totaladdonsprice;
  //         //    }

  //         //    for( var j=0, len=this.state.crustCheckboxdataDesc.length; j < len; j++ ){

  //         //     totcrustprice=this.state.crustCheckboxdataDesc[j].price+totcrustprice;
  //         //  }
  //         var totalmenuitemvalue = parseInt(this.state.dealpricestate);

  //         for (var j = 0, len = dealsradiobuttondata.length; j < len; j++) {
  //           vatvalue =
  //             dealsradiobuttondata[j].price * this.state.vatvalue + vatvalue;
  //         }

  //         // alert(vatvalue)
  //         //  var vatvalue=totalmenuitemvalue * this.state.vatvalue*1
  //         const cart = [
  //           {
  //             randomid: Math.floor(Math.random() * 1000) + 1,
  //             menu_item_id: this.state.dealidstate,
  //             quantity: 1,
  //             itemname: this.state.dealnamestate,
  //             price: parseFloat(this.state.dealpricestate),
  //             item_type: "deals",
  //             totalprice: parseFloat(this.state.dealpricestate),
  //             totalpricechange: parseFloat(this.state.dealpricestate),
  //             vat: vatvalue,
  //             varients: [],
  //             addons: [],
  //             crusts: [],
  //             offer_menuItems: [],
  //             deals: dealsradiobuttondata,
  //           },
  //         ];
  //         var newIds = JSON.parse(result).concat(cart);
  //         AsyncStorage.setItem("savedIds", JSON.stringify(newIds));
  //         this.setState({ bucketitemcountsate: resultData.length + 1 });
  //         console.log(JSON.parse(result));
  //       } else {
  //         var totaladdonsprice = 0;
  //         var totcrustprice = 0;
  //         var vatvalue = 0;
  //         //   for( var j=0, len=this.state.addonsCheckboxdataDesc.length; j < len; j++ ){

  //         //            totaladdonsprice=this.state.addonsCheckboxdataDesc[j].price+totaladdonsprice;
  //         //   }
  //         //   alert(totaladdonsprice)
  //         //   for( var j=0, len=this.state.crustCheckboxdataDesc.length; j < len; j++ ){

  //         //     totcrustprice=this.state.crustCheckboxdataDesc[j].price+totcrustprice;
  //         //  }
  //         var totalmenuitemvalue = parseInt(this.state.dealpricestate);
  //         //  var vatvalue=totalmenuitemvalue* this.state.vatvalue*1

  //         for (var j = 0, len = dealsradiobuttondata.length; j < len; j++) {
  //           vatvalue =
  //             dealsradiobuttondata[j].price * this.state.vatvalue + vatvalue;
  //         }

  //         // alert(vatvalue)
  //         const cart = [
  //           {
  //             randomid: Math.floor(Math.random() * 1000) + 1,
  //             menu_item_id: this.state.dealidstate,
  //             quantity: 1,
  //             itemname: this.state.dealnamestate,
  //             price: parseFloat(this.state.dealpricestate),
  //             item_type: "deals",
  //             totalprice: parseFloat(this.state.dealpricestate),
  //             totalpricechange: parseFloat(this.state.dealpricestate),
  //             vat: vatvalue,
  //             varients: [],
  //             addons: [],
  //             crusts: [],
  //             offer_menuItems: [],
  //             deals: dealsradiobuttondata,
  //           },
  //         ];

  //         var newIds = resultData.concat(cart);
  //         AsyncStorage.setItem("savedIds", JSON.stringify(newIds));
  //         this.setState({ bucketitemcountsate: resultData.length + 1 });
  //       }
  //     } else {
  //       var totaladdonsprice = 0;
  //       var totcrustprice = 0;
  //       var vatvalue = 0;
  //       // for( var j=0, len=this.state.addonsCheckboxdataDesc.length; j < len; j++ ){

  //       //     totaladdonsprice=this.state.addonsCheckboxdataDesc[j].price+totaladdonsprice;
  //       // }
  //       for (var j = 0, len = dealsradiobuttondata.length; j < len; j++) {
  //         vatvalue =
  //           dealsradiobuttondata[j].price * this.state.vatvalue + vatvalue;
  //       }

  //       var totalmenuitemvalue = parseInt(this.state.dealpricestate);
  //       // var vatvalue=totalmenuitemvalue* this.state.vatvalue*1

  //       //alert(vatvalue)
  //       const cart = [
  //         {
  //           randomid: Math.floor(Math.random() * 1000) + 1,
  //           menu_item_id: this.state.dealidstate,
  //           quantity: 1,
  //           itemname: this.state.dealnamestate,
  //           price: parseFloat(this.state.dealpricestate),
  //           item_type: "deals",
  //           totalprice: parseFloat(this.state.dealpricestate),
  //           totalpricechange: parseFloat(this.state.dealpricestate),
  //           vat: vatvalue,
  //           varients: [],
  //           addons: [],
  //           crusts: [],
  //           offer_menuItems: [],
  //           deals: dealsradiobuttondata,
  //         },
  //       ];
  //       console.log("Data Not Found");
  //       AsyncStorage.setItem("savedIds", JSON.stringify(cart));
  //       this.setState({ bucketitemcountsate: 1 });
  //     }
  //   });

  //   this.setState({ showdealsstate: false });
  //   this.getCountOfUserItems();
  // };

  // goCheckout = async () => {
  //   await AsyncStorage.setItem("checkoutnav", "menu");
  //   this.props.navigation.navigate("Checkout");
  // };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F5F2" }}>
        <NavBarWithBack
          name={"Products"}
          // onPressBack={() => this.props.navigation.navigate("HomeScreen")}
        />

        {/* <View style={{ margin: 5 }}> */}
        {/* <Text>{this.state.categortitemstate}</Text> */}
        {/* <FlatList
            horizontal={true}
            keyExtractor={(item, index) => item.id}
            data={menucategoriesDatadata}
            renderItem={({ item }) => {
              if (item.id == this.state.categortitemstate) {
                return (
                  <TouchableOpacity
                    onPress={() => this.clickmenuItems(item.id, item.value)}
                  >
                    <View style={{ padding: 5, alignItems: "center" }}>
                      <View
                        style={{
                          paddingTop: 5,
                          paddingBottom: 5,
                          paddingLeft: 12,
                          paddingRight: 12,
                          shadowColor: "#d9d9d9",
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,
                          elevation: 5,
                          borderRadius: 15,
                          backgroundColor: "white",
                        }}
                      >
                        <Text style={{ color: "red" }}>{item.value}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    onPress={() => this.clickmenuItems(item.id, item.value)}
                  >
                    <View style={{ padding: 5, alignItems: "center" }}>
                      <View
                        style={{
                          paddingTop: 5,
                          paddingBottom: 5,
                          paddingLeft: 12,
                          paddingRight: 12,
                        }}
                      >
                        <Text style={{ color: "black" }}>{item.value}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }
            }}
            // keyExtractor={(item) => item.id}
            numColumns={1}
          /> */}
        {/* </View> */}
        {/* {this.props.loading && (
          <Loading navigation={this.props.navigation} animating={true} />
        )} */}
        <ScrollView style={{}}>
          <View style={{ padding: 5 }}>
            {/* <Text
              style={{
                color: "black",
                fontSize: wp("8%"),
                marginLeft: wp("5%"),
              }}
            >
              {this.state.categorynamestate}
            </Text>
            <Text style={{ marginLeft: wp("5%"), color: "#333333"}}>
              {this.state.menuitem_resultModeDesc.length}{" "}
              {this.state.categorynamestate} Types
            </Text> */}

            <FlatList
              data={this.state.menuitem_resultModeDesc}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item, index }) => (
                <View style={{ padding: 10 }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.clickMenuItem(
                        item.id,
                        item.title,
                        item.description,
                        item.price,
                        item.discountPercentage,
                        item.rating,
                        item.stock,
                        item.brand,
                        item.category,
                        item.logo
                      )
                    }
                  >
                    <View
                      style={{
                        backgroundColor: "#fff",
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 12,
                        paddingRight: 12,
                        shadowColor: "#d9d9d9",
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 1,
                        elevation: 3,
                        borderRadius: 5,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          paddingTop: wp("22%"),
                        }}
                      >
                        <Image
                          style={{
                            width: wp("80%"),
                            height: wp("80%"),
                            borderRadius: 5,
                          }}
                          source={{ uri: item.logo }}
                        />
                      </View>
                      <View
                      // style={{ }}
                      >
                        {/* <Text>{item.vat_category}</Text> */}
                        <Text
                          style={{
                            fontSize: wp("5%"),
                            color: "#333333",
                          }}
                        >
                          {item.title}{" "}
                        </Text>
                        <Text
                          style={{
                            color: "#7E7E7E",
                            paddingTop: 5,
                            paddingBottom: 5,
                          }}
                        >
                          {item.description}
                        </Text>

                        {/* <View style={{ flexDirection: "row" }}> */}
                        {/* <Text style={{ fontSize: wp("5%"), color: "#333333"}}>
                          £{item.price}
                          </Text> */}
                        {/* <View style={{width:wp('15%'),height:wp('8%'),margin:10,padding:5,backgroundColor:'#FE3D40',borderRadius:5,flexDirection:'row'}}>
                          <Image
                          style={{width:wp('3%'),height:wp('3%'),alignSelf:'center'}}
                        
                          source={require('../../../images/plus.png')}
                        >

                        </Image>
                              <Text style={{paddingLeft:5,color:'white',paddingTop:4}}>Add</Text>
                          </View> */}
                        {/* </View> */}
                      </View>
                      {/* <TouchableOpacity
                        onPress={() => this.addFavouriteItem(item.id)}
                      >
                        <View
                          style={{
                            borderRadius: 30,
                            backgroundColor: "#fff",
                            width: 30,
                            height: 30,
                            flex: 1,
                          }}
                        >
                          {this.state.categortitemstate == -1 ? (
                            <View></View>
                          ) : item.favoured == false ? (
                            <Image
                              style={{
                                width: wp("6%"),
                                height: wp("5%"),
                                alignSelf: "center",
                                marginTop: wp("4%"),
                              }}
                              source={require("../../../Images/heart.png")}
                            ></Image>
                          ) : (
                            <Image
                              style={{
                                width: wp("6%"),
                                height: wp("5%"),
                                alignSelf: "center",
                                marginTop: wp("4%"),
                              }}
                              source={require("../../../Images/heartfill.png")}
                            ></Image>
                          )}
                        </View>
                      </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              numColumns={1}
            />
          </View>
        </ScrollView>

        {/* <View> */}
        {/* <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.goCheckout()}
            style={styles.TouchableOpacityStyle}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {qty}
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: wp("4%") }}>
                  Checkout
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                £{(totvalue).toFixed(2)}
                </Text>
              </View>
            </View> */}
        {/* <ImageBackground  
                  source={require('../../../images/delivery.png')}
                      
                        style={styles.FloatingButtonStyle}>

                <View style={{width:wp('7%'),height:wp('7%'),borderRadius:wp('5%'),alignSelf:'flex-end',backgroundColor:'#DB6D13',marginTop:wp('3%'),marginRight:wp('2%')}}>
                    <View style={{marginTop:wp('1%')}}>
                           <Text style={{textAlign:'center',color:'white'}}>{this.state.bucketitemcountsate}</Text>
                    </View>
                      
                </View>

              </ImageBackground> */}
        {/* </TouchableOpacity> */}
        {/* </View> */}

        <Modal
          isVisible={this.state.showdealsstate}
          onRequestClose={() => this.setState({ showdealsstate: false })}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.Alert_Main_View}>
              {dealsArraydata.map((prop, key) => {
                return (
                  <View
                    style={{
                      paddingLeft: wp("3%"),
                      paddingTop: wp("10%"),
                      flex: 1,
                    }}
                  >
                    <View style={{ paddingBottom: 10 }}>
                      <Text style={{ fontWeight: "bold" }}>
                        {dealsArraydata[key].name}
                      </Text>
                    </View>

                    <FlatList
                      keyExtractor={(item, index) => item.id}
                      data={dealsArraydata[key].deals_items}
                      renderItem={({ item, index }) => {
                        return (
                          <View
                            style={{
                              alignItems: "center",
                              backgroundColor: "#ececec",
                              justifyContent: "center",
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                paddingLeft: "6%",
                                marginRight: "6%",
                              }}
                            >
                              <View
                                style={{
                                  flex: 3,
                                  paddingTop: wp("2%"),
                                }}
                              >
                                <Text
                                  style={{
                                    color: "#333333",
                                  }}
                                >
                                  {item.name}
                                </Text>
                              </View>
                              <View
                                style={{
                                  paddingLeft: wp("20%"),
                                  flex: 1,
                                }}
                              >
                                <RadioButton.Android
                                  value={index}
                                  onPress={() =>
                                    this.onPressCheckBoxDeal(
                                      item.id,
                                      item.name,
                                      item.price,
                                      index,
                                      key
                                    )
                                  }
                                  status={
                                    checkeddealsstate[key] ==
                                    String(index) + String(key)
                                      ? "checked"
                                      : "unchecked"
                                  }
                                />
                              </View>
                            </View>
                          </View>
                        );
                      }}
                      // keyExtractor={(item) => item.id}
                      numColumns={1}
                    />
                  </View>
                );
              })}

              <TouchableOpacity onPress={() => this.pressAddToCart()}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    width: wp("30%"),
                    height: wp("10%"),
                    borderRadius: 10,
                    backgroundColor: "#FE3D40",
                  }}
                >
                  <Text style={{ color: "white" }}>Add to Cart</Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: wp("5%"),
                }}
              >
                <TouchableOpacity
                  onPress={() => this.setState({ showdealsstate: false })}
                >
                  <Text style={{ color: "#333333" }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.menuReducer.loading,
  menucategories: state.menuReducer.menucategories,
  menuitem_result: state.menuReducer.menuitem_result,
  addfavourite_result: state.menuReducer.addfavourite_result,
  getDeals_result: state.menuReducer.getDeals_result,
});

export default connect(mapStateToProps)(Home);
