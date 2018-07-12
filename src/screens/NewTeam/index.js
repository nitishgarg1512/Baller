/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NewteamView from './components/NewTeam';

import { NavigationActions } from 'react-navigation';
import Colors from '../../utility/Colors'

class Newteam extends Component {

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
    navigate({ routeName: 'Welcome' })
  }

  onSignUpButtonClick() {
    const { navigate } = this.props.navigation;
    navigate({ routeName: 'SignUp' })
  }

  
  render() {
    return (
      <NewteamView
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


export default Newteam;
