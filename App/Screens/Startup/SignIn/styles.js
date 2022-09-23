import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions, Platform } from "react-native";
const imageWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: imageWidth / 380 });
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default EStyleSheet.create({
  iteminterest: {
    height: wp("30%"),
    width: wp("45%"),
    borderRadius: 5,
  },
  iteminterest1: {
    flex: 1,
    paddingLeft: wp("3%"),
    paddingRight: wp("5%"),
  },
  textstyls: {
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: Platform.OS == "ios" ? 20 : 10,
    shadowColor: "#d9d9d9",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    color:'#828282'
  },
});
