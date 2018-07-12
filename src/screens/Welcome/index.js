
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import WelcomeView from './components/Welcome'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const {width,height} = Dimensions.get('window')

export default class Welcome extends Component {

  onCreateFantasy() {
    const { navigate } = this.props.navigation;
    navigate({ routeName: 'Findteam' })
  }
  render() {
    return (
     <WelcomeView 
       onCreateFantasy={()=>{this.onCreateFantasy()}}
     />
    );
  }
}

