import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const imageWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: imageWidth / 380 });
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Platform } from "react-native";

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: wp("2%"),
  },
  TouchableOpacityStyle: {
    position: "absolute",

    width: wp("93%"),
    borderRadius: 4,
    height: wp("15%"),
    alignItems: "center",
    justifyContent: "center",
    right: wp("3%"),
    left: wp("3%"),
    margin: 5,
    bottom: wp("1%"),
    backgroundColor: "#5c5cff",
  },
  Alert_Main_View: {
    backgroundColor: "white",
    height: Platform.OS == "android" ? hp("60%") : hp("50%"),
    width: wp("80%"),
    borderWidth: 1,
    borderColor: "#fff",
  },

  Alert_Title: {
    fontSize: 18,
    color: "#000",

    padding: 5,
    height: "28%",
  },

  Alert_Message: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    padding: 5,
    height: "42%",
  },
});
