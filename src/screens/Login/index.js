/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import LoginView from './components/Login';

import { NavigationActions } from 'react-navigation';

class Login extends Component {

  static navigationOptions = {
    title: 'Sign In',
  };

  constructor() {
    super();
    this.state = {
      isRememberChecked: false,
      t1Color : 'blue',
      t2Color : 'blue',
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
    t1Color : 'red',
    t2Color : 'blue',
   });
  }
  
  onfocusSecondText() {
    this.setState({
     t1Color : 'blue',
     t2Color : 'red',
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
    navigate({ routeName: 'Welcome' })
  }

  onSignUpButtonClick() {
    const { navigate } = this.props.navigation;
    navigate({ routeName: 'SignUp' })
  }

  
  render() {
    return (
      <LoginView
        t1Color = {this.state.t1Color} 
        t2Color = {this.state.t2Color} 
        userName= {this.state.userName}
        password= {this.state.password}
        onfocusFistText = {() => this.onfocusFistText()}
        onfocusSecondText = {() => this.onfocusSecondText()}
        onChangeFirstText = {(text) => this.onChangeFirstText(text)}
        onChangeSecondText = {(text) => this.onChangeSecondText(text)}
        onSignUpButtonClick={() => this.onSignUpButtonClick()}
        onForgotPasswordButtonClick={() => this.onForgotPasswordButtonClick()}
        onSignInButtonClick={() => this.onSignInButtonClick()}
      />
    );
  }
}


export default Login;
