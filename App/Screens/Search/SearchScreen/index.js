import React, { Component } from "react";
import {
  View,
  Text,
  
  SafeAreaView,
  ScrollView,
  
} from "react-native";





class Home extends Component {
  
 

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F5F2" }}>
        <ScrollView>
          <View
            style={{
              margin: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 5,
              backgroundColor: "#fff",
              shadowColor: "#d9d9d9",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            
          <Text>Card</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}



export default (Home);
