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
  ProgressViewIOSComponent,
  TextInput,
  Platform
 
} from 'react-native';

//import { TextInput } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";

const imageWidth = Dimensions.get('window').width;



import NavBar from '../../../Components/NavBarWithBack';
import Buttons from '../../../Components/Buttons'


import styles from './styles';

 import registerAction from '../../../Redex/MyAccount/actions';
import Loading from '../../../Components/Loading';

const {userShowLogin,updateUserData,clearProps} = registerAction;
let _storeAccess;

// const imageWidth = Dimensions.get('window').width;
class SignIn extends Component {
  fieldRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      citystate: "",
      countrystate: "",
     
     
      first_name: "",
    
      last_namestata: "",
      locationstate: "",
      phonestate: "",
      postcodestate: "",
      provincestate: "",
      rolestate: "",
      cartdatastate: "",
      passwordstate: "",
      confirmpasswordstate: "",
      birthstate: "",
      genderstate: "",
      unistate: "",
      companystate: "",
      tittlestate: "",

      
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.userShowResult != undefined) {
      console.log(props.userShowResult);
      (state.birthstate = props.userShowResult.birthDate),
        (state.genderstate = props.userShowResult.gender),
        (state.phonestate = props.userShowResult.phone),
        (state.unistate = props.userShowResult.university),
        (state.citystate = props.userShowResult.address.city),
        (state.companystate = props.userShowResult.company.name),
        (state.tittlestate = props.userShowResult.company.title),
        (state.first_name = props.userShowResult.firstName);

      props.dispatch(clearProps());
    }

    console.log(state.birthstate, "state.birthstate");

  }

  logoutPress = async () => {
    try {
      await AsyncStorage.setItem("access_token", "");
     
      this.props.navigation.navigate("SignIn");
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getUsersData();
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      this.getUsersData();
    });
  }

  getUsersData = async () => {
  

    try {
      const accesstoken = await AsyncStorage.getItem("access_token");

      if (accesstoken !== null) {
      

        this.props.dispatch(userShowLogin(accesstoken));

     
      } else {
        this.props.navigation.navigate("SignIn");
      }
    } catch (e) {
   
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <NavBar
          name={this.state.first_name}
        
        />
        <ScrollView>
          <View style={{ margin: wp("5%") }}>
            <View style={{ alignItems: "center", paddingBottom: wp("15%") }}>
              <Image
                style={{ width: wp("45%"), height: wp("45%") }}
                source={require("../../../Images/profile1.jpg")}
              />
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 12,
                  paddingRight: 12,
                  shadowColor: "#d9d9d9",
                  shadowOffset: { width: 0, height: 1 },
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
                    // paddingLeft:wp("10%")
                    // paddingTop: wp("22%"),
                  }}
                >
                  <Image
                    style={{ width: wp("10%"), height: wp("10%") }}
                    source={require("../../../Images/birthday.png")}
                  />
                </View>
                <View style={{ flex: 5 }}>
                  <Text style={{ fontSize: wp("5%"), color: "#333333" }}>
                    Birth Date {this.state.birthstate}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 12,
                  paddingRight: 12,
                  shadowColor: "#d9d9d9",
                  shadowOffset: { width: 0, height: 1 },
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
                    // paddingLeft:wp("10%")
                    // paddingTop: wp("22%"),
                  }}
                >
                  <Image
                    style={{ width: wp("8%"), height: wp("8%") }}
                    source={require("../../../Images/gender.png")}
                  />
                </View>
                <View style={{ flex: 5 }}>
                  <Text style={{ fontSize: wp("5%"), color: "#333333" }}>
                    {this.state.genderstate}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 12,
                  paddingRight: 12,
                  shadowColor: "#d9d9d9",
                  shadowOffset: { width: 0, height: 1 },
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
                    // paddingLeft:wp("10%")
                    // paddingTop: wp("22%"),
                  }}
                >
                  <Image
                    style={{ width: wp("8%"), height: wp("8%") }}
                    source={require("../../../Images/phone.png")}
                  />
                </View>
                <View style={{ flex: 5 }}>
                  <Text style={{ fontSize: wp("5%"), color: "#333333" }}>
                    Contact {this.state.phonestate}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 12,
                  paddingRight: 12,
                  shadowColor: "#d9d9d9",
                  shadowOffset: { width: 0, height: 1 },
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
                    // paddingLeft:wp("10%")
                    // paddingTop: wp("22%"),
                  }}
                >
                  <Image
                    style={{ width: wp("8%"), height: wp("8%") }}
                    source={require("../../../Images/university.png")}
                  />
                </View>
                <View style={{ flex: 5 }}>
                  <Text style={{ fontSize: wp("5%"), color: "#333333" }}>
                    Studies at {this.state.unistate}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 12,
                  paddingRight: 12,
                  shadowColor: "#d9d9d9",
                  shadowOffset: { width: 0, height: 1 },
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
                    // paddingLeft:wp("10%")
                    // paddingTop: wp("22%"),
                  }}
                >
                  <Image
                    style={{ width: wp("8%"), height: wp("8%") }}
                    source={require("../../../Images/location.png")}
                  />
                </View>
                <View style={{ flex: 5 }}>
                  <Text style={{ fontSize: wp("5%"), color: "#333333" }}>
                    From {this.state.citystate}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 12,
                  paddingRight: 12,
                  shadowColor: "#d9d9d9",
                  shadowOffset: { width: 0, height: 1 },
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
                    // paddingLeft:wp("10%")
                    // paddingTop: wp("22%"),
                  }}
                >
                  <Image
                    style={{ width: wp("8%"), height: wp("8%") }}
                    source={require("../../../Images/workplace.png")}
                  />
                </View>
                <View style={{ flex: 5 }}>
                  <Text style={{ fontSize: wp("5%"), color: "#333333" }}>
                    Worked at {this.state.companystate}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 12,
                  paddingRight: 12,
                  shadowColor: "#d9d9d9",
                  shadowOffset: { width: 0, height: 1 },
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
                    // paddingLeft:wp("10%")
                    // paddingTop: wp("22%"),
                  }}
                >
                  <Image
                    style={{ width: wp("8%"), height: wp("8%") }}
                    source={require("../../../Images/work.png")}
                  />
                </View>
                <View style={{ flex: 5 }}>
                  <Text style={{ fontSize: wp("5%"), color: "#333333" }}>
                    Work as a {this.state.tittlestate}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Buttons
                text="Logout"
                btnfontSize={wp("4.5%")}
                btnbackgroundColor="#5c5cff"
                btnborderColor="#5c5cff"
                btntxtncolor="#ffffff"
                btnMarginLeft={wp("5%")}
                btnMarginRight={wp("5%")}
                btnHight={60}
                btnWidth={wp("100%")}
                onPress={() => this.logoutPress()}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state =>({ 
  loading:state.myAccountReducer.loading,
  userShowResult:state.myAccountReducer.userShowResult,
  
  

});

export default connect(mapStateToProps)(SignIn);