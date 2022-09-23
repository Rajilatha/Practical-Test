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
  TouchableOpacity,
  TextInput,
  BackHandler,
} from "react-native";

// import { TextInput } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { SearchBar } from 'react-native-elements';
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { showMessage, hideMessage } from "react-native-flash-message";

const imageWidth = Dimensions.get("window").width;

import NavBar from '../../../Components/NavBar';
import Buttons from '../../../Components/Buttons';
import registerAction from '../../../Redex/StartUp/actions';
import Loading from '../../../Components/Loading';
import {normalize} from '../../../../utils/scaling'
const { loginAccount, initialApi, clearProps } = registerAction;

import styles from "./styles";
import { TouchableHighlight } from "react-native-gesture-handler";

let _storeAccess
// const imageWidth = Dimensions.get('window').width;
let branchListSize = 0;
class SignIn extends Component  {
  fieldRef = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      visible: true,
      unamestate: "",
      passwordstate: "",
      isValidEmail: false,
    };
  }

  // componentWillMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  // }

  // componentDidMount(){
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  // }

  // handleBackButtonClick() {
  //   this.props.navigation.navigate('TabView');

  //   return true;
  // }

  static getDerivedStateFromProps(props, state) {
    if (props.loginresultmsgt != undefined) {
      showMessage({
        textStyle: { paddingLeft: 10 },
        titleStyle: { paddingLeft: 10 },
        message: "Success",
        description: "Login Success",
        type: "default",
        backgroundColor: "green", // background color
        color: "#ffffff",
        duration: 3850,
      });

      console.log(props.loginresultmsgt, "props.loginresultmsgt");

       const _storeAccess = async () => {
         try {
           await AsyncStorage.setItem("access_token", props.loginresultmsgt);
           props.navigation.navigate("Home");
          
           
         } catch (error) {
           console.log(error);
         }
       };

        _storeAccess();
        props.dispatch(clearProps());
        // _storeAccess = async () => {
        //   props.dispatch(clearProps());
        // };
        // _storeAccess();
        
      props.dispatch(clearProps());
    }

    // if (props.client_secret != undefined) {
    //   console.log(props.client_secret);
    //   props.dispatch(clearProps())

    // const  _storeAccess=async()=>{
    //       try {
    //       const obj = {
    //         client_id: 1,
    //         client_secret: "oNfsDxFcEYTlt10EzIR4FbtWEOAKFevNK1dnosAJ",
    //         grant_type: "password",
    //         username: state.unamestate,
    //         password: state.passwordstate,
    //         scope: "*",
    //       };
    //       props.dispatch(initialApi(obj));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //       };
      
    //     _storeAccess();
    //     props.dispatch(clearProps())
        // }

    // if (props.token != undefined) {
    //   console.log(props.token, "token");
    
    // const _storeAccess = async () => {
    //   try {
    //     await AsyncStorage.setItem("access_token", props.token);
      
    //      props.navigation.navigate("TabView");
    //       const branchList = await AsyncStorage.getItem("branchList");
    //       console.log(branchList, "branchList....");
    //       branchListSize = JSON.parse(branchList).length;
    //       console.log(branchListSize.toFixed, "branchListSize.....");
    //       if (branchListSize == 1) {
    //         props.navigation.navigate("TabView");
    //       } else {
    //         props.navigation.navigate("BranchScreen");
    //       }

    //        props.dispatch(userShowLogin(props.access_token))
    //     } catch (error) {
    //       console.log(error);
    //     }
    // };

    // _storeAccess();
    // props.dispatch(clearProps());
    
    // }

    else if (props.errorlogin != undefined) {
      console.log(props.errorlogin);
      showMessage({
        textStyle: { paddingLeft: 10 },
        titleStyle: { paddingLeft: 10 },
        message: "Error",
        description: props.errorlogin,
        type: "default",
        backgroundColor: "red", // background color
        color: "#ffffff",
        duration: 3850,
      });
      props.dispatch(clearProps());
    }
  }

  

  btnPress = async () => {
    if (this.state.unamestate == "") {
      showMessage({
        textStyle: { paddingLeft: 10 },
        titleStyle: { paddingLeft: 10 },
        message: "Error",
        description: "Please enter email",
        type: "default",
        backgroundColor: "red", // background color
        color: "#ffffff",
        duration: 3850,
      });
    } 
   
    else if (this.state.passwordstate == "") {
      showMessage({
        textStyle: { paddingLeft: 10 },
        titleStyle: { paddingLeft: 10 },
        message: "Error",
        description: "Please enter password",
        type: "default",
        backgroundColor: "red", // background color
        color: "#ffffff",
        duration: 3850,
      });
    } else {
      // try{
      //   const guest = await AsyncStorage.getItem('guest');
      //   alert(guest)
      // }catch(e){
      //    console.log(e)
      // }

      const obj = {
        username: this.state.unamestate,
        password: this.state.passwordstate,
      };
      this.props.dispatch(loginAccount(obj));
    }
  };

  // componentDidMount(){
  //     this.getData()
  // }

  // getData=async()=>{

  //    // this.props.dispatch(clearProps())
  // }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F5F2" }}>
        <NavBar
          name={"Login"}
          // onPressBack={() => this.props.navigation.navigate("SignUp")}
        />
        {this.props.loading && (
          <Loading navigation={this.props.navigation} animating={true} />
        )}
        <ScrollView>
          <View style={{ margin: wp("5%"), marginTop: wp("15%") }}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  paddingTop: wp("25%"),
                  paddingBottom: wp("20%"),
                  fontSize: wp("8%"),
                  fontWeight: "500",
                  marginBottom: wp("5%"),
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Practical Test
              </Text>
            </View>

            <View style={{ marginBottom: wp("5%") }}>
              <TextInput
                placeholder="UserName"
                mode="outlined"
                placeholderTextSize={wp("4%")}
                placeholderTextColor="#828282"
                style={styles.textstyls}
                onChangeText={(text) => this.setState({ unamestate: text })}
                keyboardType="default"
              ></TextInput>
            </View>

            <View>
              <TextInput
                placeholderTextColor="#828282"
                placeholder="Password"
                mode="outlined"
                placeholderTextSize={wp("4%")}
                style={styles.textstyls}
                secureTextEntry={true}
                onChangeText={(text) => this.setState({ passwordstate: text })}
                keyboardType="default"
              ></TextInput>
            </View>
          </View>

          <View style={{ alignSelf: "center" }}>
            <Buttons
              text="Login"
              btnfontSize={normalize(12)}
              btnbackgroundColor="#5c5cff"
              btnborderColor="#5c5cff"
              btntxtncolor="#ffffff"
              btnMarginLeft={wp("5%")}
              btnMarginRight={wp("5%")}
              btnHight={60}
              btnWidth={wp("100%")}
              onPress={() => this.btnPress()}
            />

          

           

            

          </View>

        
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.startUpReducer.loading,
  access_token: state.startUpReducer.access_token,
  errormsg: state.startUpReducer.errormsg,
  loginresultmsgt: state.startUpReducer.loginresultmsgt,
 
});

export default connect(mapStateToProps)(SignIn);
