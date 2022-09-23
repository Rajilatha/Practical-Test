import React from 'react';
import {StatusBar, Platform} from 'react-native';
//import EStyleSheet from 'react-native-extended-stylesheet';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import SignIn from './Screens/Startup/SignIn';
import configureStore from './Redex/store';

import Navigators from './Navigation/Appnavigators';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <View style={{flex: 1}}>
      {/* <GeneralStatusBarColor backgroundColor="#C7003B"
barStyle="light-content"/> */}
<Navigators/>
     {/* <SignIn/> */}
      {Platform.OS === 'ios' ? (
        <FlashMessage position="top" />
      ) : (
        <FlashMessage position="top" hideStatusBar="true" />
      )}
    </View>
  </Provider>
);
