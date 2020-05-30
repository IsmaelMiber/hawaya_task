import React from "react";
import { View, Text, TextInput, Alert, ActivityIndicator } from "react-native";
import styles from "./styles";
import { BaseButton } from "react-native-gesture-handler";
import verifyNumber from "../../API/numVerify";
import { connect } from "react-redux";
import * as onboardingActions from "../../redux/actions/onboarding";

import CountryPicker, { FlagButton } from "react-native-country-picker-modal";
import { CommonActions } from "@react-navigation/native";

class OnBoardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: "EG",
      phoneNumber: "",
      error: "",
      verificationCode: "****",
      loaderIndicator: false,
      showVerificationCodeDialog: false,
    };

    this.inputsLength = this.state.verificationCode.length;
  }

  resetError = () => {
    this.setState({ error: "" });
  };

  renderFlagButton = (props) => {
    return <FlagButton {...props} />;
  };

  renderPhoneNumberDialog = () => {
    var { error } = this.state;
    switch (error) {
      case "network_error":
        return Alert.alert("حدث خطأ", "برجاء التأكد من حالة الأنترنت", [
          {
            text: "Ok",
            onPress: this.resetError,
          },
        ]);
      case "not_valid":
        return Alert.alert("حدث خطأ", "برجاء إدخال رقم هاتف صحيح", [
          {
            text: "Ok",
            onPress: this.resetError,
          },
        ]);
      default:
        return null;
    }
  };

  renderVerificationCodeDialog = () => {
    var { showVerificationCodeDialog } = this.state;
    if (showVerificationCodeDialog) {
      return Alert.alert("حدث خطأ", "برجاء التأكد من الكود", [
        {
          text: "Ok",
          onPress: () => {
            this.setState({ showVerificationCodeDialog: false });
          },
        },
      ]);
    }
    return null;
  };

  handleFocusOnNextInput = (nextInputIndex) => {
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
        verificationCode: "****",
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
          routes: [{ name: "ProfileScreen" }],
        })
      );
      this.props.hideOnboarding();
      this.props.setPhoneNumber(this.state.phoneNumber);
    }, 3000);
  };

  handleVerificationNumberChange = (val, index) => {
    var { verificationCode } = this.state;
    var newVerificationCode = verificationCode.split("");
    newVerificationCode[index] = val[val.length - 1] || "*";
    newVerificationCode = newVerificationCode.join("");
    this.setState(
      {
        verificationCode: newVerificationCode,
        loaderIndicator: !newVerificationCode.includes("*"),
      },
      () => {
        if (
          !newVerificationCode.includes("*") &&
          newVerificationCode != "1996"
        ) {
          this.fakingLoading();
        } else if (newVerificationCode == "1996") {
          this.goToProfile();
        }
      }
    );
  };

  getValueOfInput = (index) => {
    var { verificationCode } = this.state;
    var val = verificationCode[index];
    if (val == "*") {
      return "";
    } else {
      return val;
    }
  };

  renderVerificationCodeSection = () => {
    var { loaderIndicator } = this.state;
    var inputs = [];
    for (let i = 0; i < this.inputsLength; ++i) {
      inputs.push(
        <TextInput
          key={i}
          ref={(ref) => (this[`ref_${i}`] = ref)}
          onSubmitEditing={() => this.handleFocusOnNextInput(i + 1)}
          style={{ borderBottomWidth: 2 }}
          onChangeText={(val) => this.handleVerificationNumberChange(val, i)}
          value={this.getValueOfInput(i)}
          autoCompleteType="tel"
          keyboardType="number-pad"
        />
      );
    }
    return (
      <View>
        {/* Start 0f VerificationCode Dialog in case of error */}
        {this.renderVerificationCodeDialog()}
        {/* End 0f VerificationCode Dialog in case of error */}

        {loaderIndicator ? <ActivityIndicator /> : inputs}
      </View>
    );
  };

  handlePhoneNumberChange = (phoneNumber) => {
    this.setState({ phoneNumber });
  };

  handleSelectOfCountryCode = ({ cca2: countryCode }) => {
    this.setState({ countryCode });
  };

  onVerifyBtnPress = async () => {
    var { countryCode, phoneNumber } = this.state;
    var valid = await verifyNumber({
      phoneNumber,
      countryCode,
    });
    this.setState({
      error: valid,
    });
  };

  render() {
    var { countryCode, phoneNumber, error } = this.state;

    if (error == "valid") {
      return this.renderVerificationCodeSection();
    }
    return (
      <View style={styles.container}>
        {/* Start 0f PhoneNumber Dialog in case of error */}
        {this.renderPhoneNumberDialog()}
        {/* End 0f PhoneNumber Dialog in case of error */}
        <Text style={styles.title}>{`What's your phone\nnumber?`}</Text>
        <View style={styles.phoneNumberContainer}>
          {/* Start 0f PhoneNumber Text Input */}
          <TextInput
            value={phoneNumber}
            autoCompleteType="tel"
            keyboardType="number-pad"
            onChangeText={this.handlePhoneNumberChange}
            style={styles.phoneNumberInput}
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

        {/* Start Button To Validate PhoneNumber */}
        <BaseButton onPress={this.onVerifyBtnPress}>
          <View>
            <Text>Send Code</Text>
          </View>
        </BaseButton>
        {/* End 0f Button To Validate PhoneNumber */}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    hideOnboarding: () => dispatch(onboardingActions.onBoardingHide(true)),
    setPhoneNumber: (phoneNumber) =>
      dispatch(onboardingActions.saveUserPhoneNumber(phoneNumber)),
  };
};

export default connect(null, mapDispatchToProps)(OnBoardingScreen);
