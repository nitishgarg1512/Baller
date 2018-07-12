/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SignUpView from './components/SignUp';

import { NavigationActions } from 'react-navigation';
import Colors from '../../utility/Colors'

class SignUp extends Component {

  static navigationOptions = {
    title: 'Sign In',
  };

  constructor() {
    super();
    this.state = {
      isRememberChecked: false,
      t1Color : Colors.appBlue,
      t2Color : Colors.appBlue,
      t3Color : Colors.appBlue,
      lastName: '',
      userName: '',
      password: '',
      confirmPassword: '',
      passphrase:'',
    };
  }

  componentWillReceiveProps(nextProps) {
  }
  
  onfocusFistText() {
   this.setState({
    t1Color : Colors.appRed,
    t2Color : Colors.appBlue,
    t3Color : Colors.appBlue,
   });
  }
  
  onfocusSecondText() {
    this.setState({
     t1Color : Colors.appBlue,
     t2Color : Colors.appRed,
     t3Color : Colors.appBlue,
    });
   }

  onfocusThirdText() {
    this.setState({
    t1Color : Colors.appBlue,
    t3Color : Colors.appRed,
    t2Color : Colors.appBlue,
    });
  }

  onSignUpButtonClick() {
    const { navigate } = this.props.navigation;
    navigate({ routeName: 'Welcome' })
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
      confirmPassword : text,
    })
  }

  onChangeThirdText(text) {
    this.setState({
      password : text,
    })
  }
  onForgotPasswordButtonClick() {
    console.log('forgot clicked');
  }
  onSignInButtonClick() {
    const {goBack} = this.props.navigation;
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    return (
      <SignUpView
        t1Color = {this.state.t1Color} 
        t2Color = {this.state.t2Color} 
        t3Color = {this.state.t3Color} 
        userName = {this.state.userName}
        password = {this.state.password}
        confirmPassword = {this.state.confirmPassword}
        onfocusFistText = {() => this.onfocusFistText()}
        onfocusSecondText = {() => this.onfocusSecondText()}
        onfocusThirdText = {() => this.onfocusThirdText()}
        onChangeFirstText = {(text) => this.onChangeFirstText(text)}
        onChangeSecondText = {(text) => this.onChangeSecondText(text)}
        onChangeThirdText = {(text) => this.onChangeThirdText(text)}
        onSignUpButtonClick={() => this.onSignUpButtonClick()}
        onForgotPasswordButtonClick={() => this.onForgotPasswordButtonClick()}
        onSignInButtonClick={() => this.onSignInButtonClick()}
      />
    );
  }
}


export default SignUp;
