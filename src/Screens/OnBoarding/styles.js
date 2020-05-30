import { StyleSheet } from "react-native";
import Fonts from "../../utils/Fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontFamily: Fonts.skolarExtraBold,
    fontSize: 40,
    color: "#000",
  },
  phoneNumberContainer: {
    flexDirection: "row-reverse",
  },
  phoneNumberInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    fontFamily: Fonts.skolarExtraBold,
  },
  countryPickerContainer: {
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    justifyContent: "center"
  },
});

export default styles;
