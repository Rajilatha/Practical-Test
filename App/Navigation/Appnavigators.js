import React from "react";
import { Image, Text, View, Platform } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import IconMenu from "react-native-vector-icons/Feather";
import IconHeart from "react-native-vector-icons/AntDesign";


import SignIn from '../Screens/Startup/SignIn';



import SearchScreen from '../Screens/Search/SearchScreen';





//  //more

import MyProfile from '../Screens/MyAccount/MyProfile';

// // //home

import HomeScreen from '../Screens/Home/HomeScreen';
// import PickUp from '../Screens/Home/PickUp';

import Checkout from '../Screens/Home/Checkout';


const StartNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: () => null,
      },
      navigatorStyle: {
        navBarHidden: true,
      },
    },
   

  },
  {
    navigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
      },
    },
// // //     
  }
);

//hole screen navigations
const Home = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
//

  Checkout: {
    screen: Checkout,
    navigationOptions: {
      header: null,
    },
  },

  
});

//hole screen navigations
const Card = createStackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      header: null,
    },
  },
});



const MyAccount = createStackNavigator({
  
  MyProfile: {
    screen: MyProfile,
    navigationOptions: {
      header: null,
    },
  },
});

const TabView = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("../Images/home-active.png")
            : require('../Images/home-.png');
          return (
            <Image
              source={image}
              style={{ width: wp("8%"), height: wp("8%") }}
            />
          );
        },
      },
    },
    Card: {
      screen: Card,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("../Images/card.png")
            : require("../Images/card1.png");
          return (
            <Image
              source={image}
              style={{ width: wp("8%"), height: wp("8%") }}
            />
          );
        },
      },
    },

   
    MyAccount: {
      screen: MyAccount,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("../Images/my-account-active.png")
            : require("../Images/my-account.png");
          return (
            <Image
              source={image}
              style={{ width: wp("8%"), height: wp("8%") }}
            />
          );
        },
      },
    },
  },
  {
    order: ["Home", "Card", "MyAccount"],

    tabBarOptions: {
      showIcon: true,
      activeTintColor: "#FE3D40",
      inactiveTintColor: "#818181",
      // showLabel:false,
      style: {
        backgroundColor: "#fff",
        height: wp("16%"),
        paddingTop: wp("1%"),
      },
      tabBarPosition: "bottom",
      swipeEnabled: true,
      animationEnabled: true,
      labelStyle: {
        fontSize: wp("3%"),
        justifyContent: "center",
        alignSelf: "center",
      },

      safeAreaInset: {
        bottom: "always",
      },

      tabBarPosition: "bottom",
      lazyLoad: true,
      shifting: true,
      borderTopColor: "#fff",
    },
  }
);

const getstart = false;

const createRootNavigator = createSwitchNavigator(
  {
    StartNavigator: {
      screen: StartNavigator,
    },
    TabView: {
      screen: TabView,
    },
  },
  {
    initialRouteName: getstart ? "TabView" : "StartNavigator",
  }
);

const App = createAppContainer(createRootNavigator);

export default App;
