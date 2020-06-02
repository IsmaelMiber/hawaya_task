import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Responsive from '../../utils/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Responsive.calcWidth(50),
  },
  title: {
    fontFamily: Fonts.skolarExtraBold,
    fontSize: Responsive.calcFont(28),
    color: '#000',
    marginTop: Responsive.calcHeight(40),
  },
  phoneNumberContainer: {},
  phoneNumberInput: {
    flex: 1,
    borderBottomWidth: Responsive.calcHeight(1),
    borderBottomColor: '#eee',
    fontFamily: Fonts.skolarRegular,
    fontSize: Responsive.calcFont(24),
  },
  countryPickerContainer: {
    marginRight: Responsive.calcWidth(10),
    borderBottomWidth: Responsive.calcHeight(1),
    borderBottomColor: '#eee',
    justifyContent: 'center',
  },
  numberVerificationContainer: {
    flexDirection: 'row-reverse',
    marginTop: Responsive.calcHeight(40),
  },
  sendBtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: Responsive.calcHeight(40),
  },
  sendCodeBtn: {
    backgroundColor: '#f3f3f3',
    borderRadius: Responsive.calcWidth(25),
    paddingVertical: Responsive.calcHeight(20),
  },
  sendCodeText: {
    fontFamily: Fonts.skolarBold,
    fontSize: Responsive.calcFont(16),
    textAlign: 'center',
    color: '#bbb',
  },
  sendCodeBtnActive: {
    backgroundColor: '#00E2D5',
  },
  sendCodeTextActive: {
    color: '#fff',
  },
  vericiationCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Responsive.calcHeight(40),
  },
  vericiationCodeInput: {
    width: Responsive.calcWidth(40),
    marginHorizontal: Responsive.calcWidth(2),
    borderBottomColor: '#eee',
    borderBottomWidth: Responsive.calcHeight(2),
    fontSize: Responsive.calcFont(24),
    fontFamily: Fonts.skolarRegular,
  },
  subTitle: {
    fontSize: Responsive.calcFont(16),
    fontFamily: Fonts.skolarRegular,
    textAlign: 'left',
    color: '#a8a8a8',
    marginTop: Responsive.calcHeight(20),
  },
  loaderIndicator: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressBar: {
    height: Responsive.calcHeight(8),
    backgroundColor: '#f4f4f4',
    width: '100%',
  },
  progressBarActive: {
    backgroundColor: '#00E2D5',
    flex: 1,
  },
});

export default styles;
