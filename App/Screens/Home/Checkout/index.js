import React, { Component } from 'react';
import {
  View, Text,
  Image,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity, 
  ImageBackground,
  TextInput

} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconback from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { RadioButton } from 'react-native-paper';
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating';
import { showMessage, hideMessage } from "react-native-flash-message";


import { connect } from 'react-redux';


import registerAction from '../../../Redex/Menu/actions';
import Loading from '../../../Components/Loading';



const {getMenuItemsData,clearProps} = registerAction;

import styles from './styles';



let varientDatadata=[];
let addonsDatadata;
let crustsDatadata;
let addonsCheckboxdata=[];
let crustCheckboxdata=[];
let checkeddealsstate=[]
let commentsDatadata=[]
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idstate:'',
      logostate:'',
      valuestate:'',
      pricestate:'',
      titlestate:'',
      descriptionstate:'',
      varientModeDesc:[],
      varientModeDescObj:{},
      addonsModeDescObj:{},
      addonsModeDesc:[],

      crustsModeDescObj:{},
      crustsModeDesc:[],
      checked:[],
      checkedcrust:0,


      isdelete:false,
      isdeletecrust:false,

      addonsCheckboxdataDesc : [],
      addonsCheckboxdataDescObj:{},

      crustCheckboxdataDescObj:{},
      crustCheckboxdataDesc:[],

      commentsModeDescObj:{},
      commentsModeDesc:[],

      varientselectId:0,
      varientnamestate:'',
      varientpricestate:'',
      countitemstate:1,
      showaddonsstate:true,
      showcrustsstate:true,

      addratestate:false,
      starCount:0,
      overall_ratingstate:0,

      vatvalue:0,
      userreviewdatastate:'',

      commentstate:false,
      backstate:'menuitem'
      
      
      }; 
  }

  static getDerivedStateFromProps(props, state) {
    state.varientModeDesc=[]
    state.addonsModeDesc=[]
    state.crustsModeDesc=[]
    state.commentsModeDesc=[]


    if(props.menuitemdata_result!=undefined){
      varientDatadata=[]
      addonsDatadata=[]
      crustsDatadata=[]
      state.varientselectId=0
      state.varientnamestate=''
      state.varientpricestate=''
      if(props.menuitemdata_result=='err'){

      }else{
        console.log(props.menuitemdata_result, "props.menuitemdata_result")
        console.log(props.menuitemdata_result)
        try{
          state.varientnamestate=props.menuitemdata_result.variants[0].name
        }catch(e){
          console.log(e);
        }
        try{
          state.varientselectId=props.menuitemdata_result.variants[0].id
        }catch(e){
          console.log(e);
        }

        try{
          state.varientpricestate=props.menuitemdata_result.price
        }catch(e){
          console.log(e);
        }
        try{
          state.logostate = props.menuitemdata_result.thumbnail;
        }catch(e){
          console.log(e);
        }


        props.dispatch(clearProps());

        }
      }
  

  }


componentDidMount(){
   this.getData()
   this.focusListener = this.props.navigation.addListener('didFocus', () => {
     
    this.getData()
  });
   
}
clickAddToCart=async()=>{
  if(this.state.varientselectId==0){
    await AsyncStorage.getItem('savedIds', (err, result) => {

    });
  }
}
getData=async()=>{
  
    const idstate = await AsyncStorage.getItem('idstate')
    const accesstoken = await AsyncStorage.getItem('access_token')
 
    this.props.dispatch( getMenuItemsData(accesstoken,idstate))

   
  
  try {
    const idstate = await AsyncStorage.getItem('idstate')
  this.setState({
    idstate:idstate
  })
    const value = await AsyncStorage.getItem('value')
    this.setState({
      valuestate:value
    })

    const title = await AsyncStorage.getItem("title");
    this.setState({
        titlestate: title,
    });
  //  const logo = await AsyncStorage.getItem('logo')
   
    const description = await AsyncStorage.getItem('description')
    this.setState({
      descriptionstate:description
    })

    const price = await AsyncStorage.getItem('price')
    this.setState({
      pricestate:price
    })
 
 
   
  } catch(e) {
    console.log(e)
  }
}



  render() {
    
        return (
          <SafeAreaView style={{ flex: 1, paddingTop: wp("10%") }}>
            <View style={{}}>
              <Iconback
                name="chevron-back-outline"
                size={30}
                color={"white"}
                style={{ paddingLeft: wp("5%") }}
                onPress={() => this.clickBack()}
              />
            </View>

            <ScrollView style={{ marginBottom: wp("20%") }}>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ width: wp("80%"), height: wp("80%") }}
                  source={{ uri: this.state.logostate }}
                />

                <Text
                  style={{
                    color: "black",
                    fontSize: wp("5%"),
                    padding: wp("4%"),
                    fontWeight: "bold",
                  }}
                >
                  {this.state.titlestate}
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "white",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}
              >
                <View style={{}}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  >
                    <Text
                      style={{
                        padding: wp("4%"),
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#6A6A6A",
                        fontSize: wp("4%"),
                      }}
                    >
                      {this.state.descriptionstate}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#fff",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      padding: wp("4%"),
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6A6A6A",
                      fontSize: wp("4%"),
                    }}
                  >
                    Price -  {this.state.pricestate}
                  </Text>
                </View>

               
              </View>
            </ScrollView>

            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                // onPress={() => this.clickAddToCart()}
                style={styles.TouchableOpacityStyle}
              >
                <View style={{ alignSelf: "center" }}>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: wp("5%"),
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontSize: wp("4%") }}>
                      Add
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        );  
  }
}




const mapStateToProps = state =>({ 
 
  loading:state.menuReducer.loading,
  addreview_result:state.menuReducer.addreview_result,
  menuitemdata_result:state.menuReducer.menuitemdata_result

});

export default connect(mapStateToProps)(Home);
