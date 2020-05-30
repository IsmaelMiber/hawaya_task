import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: Fonts.skolarExtraBold,
    fontSize: 28,
    color: '#000',
    marginTop: 40,
  },
  phoneNumberContainer: {},
  phoneNumberInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    fontFamily: Fonts.skolarRegular,
    fontSize: 24
  },
  countryPickerContainer: {
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'center',
  },
  numberVerificationContainer: {
    flexDirection: 'row-reverse',
    marginTop: 40,
  },
  sendBtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  sendCodeBtn: {
    backgroundColor: '#f3f3f3',
    borderRadius: 25,
    paddingVertical: 20,
  },
  sendCodeText: {
    fontFamily: Fonts.skolarBold,
    fontSize: 16,
    textAlign: 'center',
    color: '#bbb',
  },
  sendCodeBtnActive: {
    backgroundColor: "#00E2D5"
  },
  sendCodeTextActive: {
    color: "#fff"
  },
  vericiationCodeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  vericiationCodeInput :{
    width: 40,
    marginHorizontal: 2,
    borderBottomColor: "#eee",
    borderBottomWidth: 2,
    fontSize: 24,
    fontFamily: Fonts.skolarRegular
  },
  subTitle: {
    fontSize: 16,
    fontFamily: Fonts.skolarRegular,
    textAlign: "left",
    color: "#bbb",
    marginTop: 20
  },
  loaderIndicator: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  }
});

export default styles;
