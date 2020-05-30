import React from 'react';

import {SafeAreaView} from 'react-native';

// Screens
import OnBoardingScreen from './src/Screens/OnBoarding';
import ProfileScreen from './src/Screens/Profile';
import SplashScreen from './src/Screens/Splash';

// Navigator
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Store
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
            <Stack.Screen
              name="OnBoardingScreen"
              component={OnBoardingScreen}
            />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
