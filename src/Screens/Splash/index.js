import React from 'react';
import {View, Image, Animated} from 'react-native';
import styles from './styles';
import {CommonActions} from '@react-navigation/native';
import {connect} from 'react-redux';

const hawayaLogo = require('../../../assets/images/hawaya-logo.png');

class Splash extends React.Component {
  state = {
    scaling: new Animated.Value(0),
  };

  goToOnBoarding() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'OnBoardingScreen'}],
      }),
    );
  }

  goToProfile() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'ProfileScreen'}],
      }),
    );
  }

  onAnimateFinished = ({finished}) => {
    if (finished) {
      if (!this.props.onboardingHide) {
        this.goToOnBoarding();
      } else {
        this.goToProfile();
      }
    }
  };

  componentDidMount() {
    Animated.timing(this.state.scaling, {
      toValue: 1,
      duration: 1000,
      delay: 0,
      useNativeDriver: true,
    }).start(this.onAnimateFinished);
  }

  render() {
    var {scaling} = this.state;
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            transform: [{scale: scaling}],
            opacity: scaling,
            ...styles.logoContainer,
          }}>
          <Image source={hawayaLogo} resizeMode="contain" style={styles.img} />
        </Animated.View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    onboardingHide: state.onboarding.hide,
  };
};

export default connect(mapStateToProps)(Splash);
