import React from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import verifyNumber from '../../API/numVerify';
import {connect} from 'react-redux';
import * as onboardingActions from '../../redux/actions/onboarding';

import CountryPicker, {FlagButton} from 'react-native-country-picker-modal';
import {CommonActions} from '@react-navigation/native';

class OnBoardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: 'EG',
      callingCode: '+20',
      phoneNumber: '',
      error: '',
      verificationCode: '****',
      loaderIndicator: false,
      showVerificationCodeDialog: false,
      progress: 50,
    };

    this.inputsLength = this.state.verificationCode.length;
  }

  resetError = () => {
    this.setState({error: ''});
  };

  renderFlagButton = props => {
    return <FlagButton {...props} />;
  };

  renderPhoneNumberDialog = () => {
    var {error} = this.state;
    switch (error) {
      case 'network_error':
        return Alert.alert('حدث خطأ', 'برجاء التأكد من حالة الأنترنت', [
          {
            text: 'Ok',
            onPress: this.resetError,
          },
        ]);
      case 'not_valid':
        return Alert.alert('حدث خطأ', 'برجاء إدخال رقم هاتف صحيح', [
          {
            text: 'Ok',
            onPress: this.resetError,
          },
        ]);
      default:
        return null;
    }
  };

  renderVerificationCodeDialog = () => {
    var {showVerificationCodeDialog} = this.state;
    if (showVerificationCodeDialog) {
      return Alert.alert('حدث خطأ', 'برجاء التأكد من الكود', [
        {
          text: 'Ok',
          onPress: () => {
            this.setState({showVerificationCodeDialog: false});
          },
        },
      ]);
    }
    return null;
  };

  handleFocusOnNextInput = nextInputIndex => {
    switch (nextInputIndex) {
      case 1:
        this[`ref_${nextInputIndex}`].focus();
      case 2:
        this[`ref_${nextInputIndex}`].focus();
      case 3:
        this[`ref_${nextInputIndex}`].focus();
    }
  };

  fakingLoading = () => {
    setTimeout(() => {
      this.setState({
        verificationCode: '****',
        loaderIndicator: false,
        showVerificationCodeDialog: true,
      });
    }, 3000);
  };

  goToProfile = () => {
    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'ProfileScreen'}],
        }),
      );
      this.props.hideOnboarding();
      this.props.setPhoneNumber(this.state.phoneNumber);
    }, 3000);
  };

  handleVerificationNumberChange = (val, index) => {
    var {verificationCode} = this.state;
    var newVerificationCode = verificationCode.split('');
    newVerificationCode[index] = val[val.length - 1] || '*';
    newVerificationCode = newVerificationCode.join('');
    this.setState(
      {
        verificationCode: newVerificationCode,
        loaderIndicator: !newVerificationCode.includes('*'),
      },
      () => {
        if (
          !newVerificationCode.includes('*') &&
          newVerificationCode != '1996'
        ) {
          this.fakingLoading();
        } else if (newVerificationCode == '1996') {
          this.goToProfile();
        }
      },
    );
  };

  getValueOfInput = index => {
    var {verificationCode} = this.state;
    var val = verificationCode[index];
    if (val == '*') {
      return '';
    } else {
      return val;
    }
  };

  renderVerificationCodeSection = () => {
    var {loaderIndicator, phoneNumber, callingCode, progress} = this.state;
    var inputs = [];
    for (let i = 0; i < this.inputsLength; ++i) {
      inputs.push(
        <TextInput
          key={i}
          ref={ref => (this[`ref_${i}`] = ref)}
          // onSubmitEditing={() => this.handleFocusOnNextInput(i + 1)}
          onChangeText={val => {
            this.handleVerificationNumberChange(val, i);
            if (val.length > 0) {
              this.handleFocusOnNextInput(i + 1);
            }
          }}
          value={this.getValueOfInput(i)}
          autoCompleteType="tel"
          keyboardType="number-pad"
          style={styles.vericiationCodeInput}
        />,
      );
    }
    return (
      <View style={styles.container}>
        {/* Start 0f ProgressBar */}
        <View style={styles.progressBar}>
          <View style={[styles.progressBarActive, {width: `${progress}%`}]} />
        </View>
        {/* End 0f ProgressBar */}
        <View style={styles.contentContainer}>
          {/* Start 0f VerificationCode Dialog in case of error */}
          {this.renderVerificationCodeDialog()}
          {/* End 0f VerificationCode Dialog in case of error */}
          <Text style={styles.title}>What’s the verification code</Text>
          <Text style={styles.subTitle}>
            {`Code sent to ${callingCode + ' ' + phoneNumber}`}
          </Text>
          <View style={styles.vericiationCodeContainer}>
            {loaderIndicator ? (
              <View style={styles.loaderIndicator}>
                <ActivityIndicator />
              </View>
            ) : (
              inputs
            )}
          </View>
        </View>
      </View>
    );
  };

  handlePhoneNumberChange = phoneNumber => {
    this.setState({phoneNumber});
  };

  handleSelectOfCountryCode = ({cca2: countryCode, callingCode}) => {
    this.setState({countryCode, callingCode: '+' + callingCode});
  };

  onVerifyBtnPress = async () => {
    var {countryCode, phoneNumber} = this.state;
    var valid = await verifyNumber({
      phoneNumber,
      countryCode,
    });
    this.setState({
      error: valid,
      progress: valid == 'valid' ? 100 : 50,
    });
  };

  render() {
    var {countryCode, phoneNumber, error, progress} = this.state;

    if (error == 'valid') {
      return this.renderVerificationCodeSection();
    }
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={70}>
        {/* Start 0f ProgressBar */}
        <View style={styles.progressBar}>
          <View style={[styles.progressBarActive, {width: `${progress}%`}]} />
        </View>
        {/* End 0f ProgressBar */}
        <View style={styles.contentContainer}>
          {/* Start 0f PhoneNumber Dialog in case of error */}
          {this.renderPhoneNumberDialog()}
          {/* End 0f PhoneNumber Dialog in case of error */}
          <View style={styles.phoneNumberContainer}>
            <Text style={styles.title}>{`What's your phone\nnumber?`}</Text>
            <View style={styles.numberVerificationContainer}>
              {/* Start 0f PhoneNumber Text Input */}
              <TextInput
                value={phoneNumber}
                autoCompleteType="tel"
                keyboardType="number-pad"
                onChangeText={this.handlePhoneNumberChange}
                style={styles.phoneNumberInput}
                onSubmitEditing={this.onVerifyBtnPress}
                returnKeyType="send"
              />
              {/* End 0f PhoneNumber Text Input */}

              {/* Start 0f Country PhoneNumber Code Picker */}
              <View style={styles.countryPickerContainer}>
                <CountryPicker
                  countryCode={countryCode}
                  withModal
                  withFilter
                  withAlphaFilter
                  withCallingCode
                  withEmoji
                  withCallingCodeButton
                  renderFlagButton={this.renderFlagButton}
                  onSelect={this.handleSelectOfCountryCode}
                  style={styles.countryPickerContainer}
                />
              </View>
              {/* End 0f Country PhoneNumber Code Picker */}
            </View>
          </View>

          {/* Start Button To Validate PhoneNumber */}
          <View style={styles.sendBtnContainer}>
            <TouchableOpacity
              onPress={this.onVerifyBtnPress}
              style={[
                styles.sendCodeBtn,
                phoneNumber.length > 0 ? styles.sendCodeBtnActive : {},
              ]}>
              <View>
                <Text
                  style={[
                    styles.sendCodeText,
                    this.state.phoneNumber.length > 0
                      ? styles.sendCodeTextActive
                      : {},
                  ]}>
                  Send Code
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* End 0f Button To Validate PhoneNumber */}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    hideOnboarding: () => dispatch(onboardingActions.onBoardingHide(true)),
    setPhoneNumber: phoneNumber =>
      dispatch(onboardingActions.saveUserPhoneNumber(phoneNumber)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(OnBoardingScreen);
