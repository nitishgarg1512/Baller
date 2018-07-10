
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Onboarding from '../screens/Onboarding/index';
import Login from '../screens/Login/index';
import SignUp from '../screens/SignUp/index';
import Welcome from '../screens/Welcome/index';
import Findteam from '../screens/FindTeam/index';

export default BallerNavigator = StackNavigator({
     Onboarding: {
      screen: Onboarding,
      key: 'Onboarding',
      header: null,
      navigationOptions: {
        header: null
      }
     },
     Findteam: {
      screen: Findteam,
      key: 'Findteam',
      header: null,
      navigationOptions: {
        header: null
      }
     },
     Login: {
      screen: Login,
      key: 'Login',
      header: null,
      navigationOptions: {
        header: null
      }
     },
     SignUp: {
      screen: SignUp,
      key: 'SignUp',
      header: null,
      navigationOptions: {
        header: null
      }
     },
     Welcome: {
      screen: Welcome,
      key: 'Welcome',
      header: null,
      navigationOptions: {
        header: null
      }
     }
    },
    {
      initialRouteName: 'Onboarding',
    });

