import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions, Platform } from "react-native";
const imageWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: imageWidth / 380 });
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: wp("2%"),
  },
  searchtxt: {
    paddingLeft: wp("5%"),
    paddingTop: Platform.OS == "android" ? wp("0%") : wp("4%"),
  },
});
