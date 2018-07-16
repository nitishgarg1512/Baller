/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import LandingView from './components/Landing';

import { NavigationActions } from 'react-navigation';
import Colors from '../../utility/Colors'

class Login extends Component {

  static navigationOptions = {
    title: 'Sign In',
  };

  constructor() {
    super();
    this.state = {
      isRememberChecked: false,
      t1Color : Colors.appBlue,
      t2Color : Colors.appBlue,
      lastName: '',
      userName: '',
      password: '',
      passphrase:'',
    };
  }

  componentWillReceiveProps(nextProps) {
  }
  
  onfocusFistText() {
   this.setState({
    t1Color : Colors.appRed,
    t2Color : Colors.appBlue,
   });
  }
  
  onfocusSecondText() {
    this.setState({
     t1Color : Colors.appBlue,
     t2Color : Colors.appRed,
    });
   }

  onCheckedButtonClick() {
    this.setState({
      isRememberChecked : !this.state.isRememberChecked,
    });
  }
  onChangeFirstText(text) {
    this.setState({
      userName : text,
    })
  }
  onChangeSecondText(text) {
    this.setState({
      password : text,
    })
  }
  onForgotPasswordButtonClick() {
    console.log('forgot clicked');
  }
  onSignInButtonClick() {
    const { navigate } = this.props.navigation;
    navigate({ routeName: 'Login' })
  }

  onSignUpButtonClick() {
    const { navigate } = this.props.navigation;
    navigate({ routeName: 'SignUp' })
  }

  
  render() {
    return (
      <LandingView
        onSignUpButtonClick={() => this.onSignUpButtonClick()}
        onSignInButtonClick={() => this.onSignInButtonClick()}
      />
    );
  }
}


export default Login;
