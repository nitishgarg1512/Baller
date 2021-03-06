import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';
import BoxInput from '../../../components/BoxTextInput/index';
import Images from '../../../assets/index';
import Colors from '../../../utility/Colors'

const { width, height } = Dimensions.get('window');

const Login = props => (
  <View style={styles.container}>
    <Image style={{width,height, position: 'absolute'}} source={Images.bg1}/>
    <View style={styles.centerContainer}>
      <View style={styles.signInHeader}>
        <Image style={{width:100, height:100, resizeMode: 'contain'}} source={Images.ballerLogo}/>
        <Text style={styles.welcomeText}>{'Welcome to BallerProfile'}</Text>
        <Text style={styles.subtitleText}>{'The hottest talent outside of pro sports!'}</Text>
      </View>
      <View style={styles.userDetailscontainer}>
        <TextInput
            style={styles.input}
            placeholder={'Baller Email'}
            onChangeText={(text) => { props.onChangeFirstText(text); }}
            value={props.username}
            onFocus = {()=> {
              props.onfocusFistText()
            }}
            underlineColorAndroid="transparent"
        />
        <TextInput
            style={styles.input}
            placeholder={'Baller Password'}
            secureTextEntry={true}
            onChangeText={(text) => { props.onChangeSecondText(text); }}
            value={props.password}
            onFocus = {()=> {
              props.onfocusSecondText()
            }}
            underlineColorAndroid="transparent"
        />
        <TouchableOpacity  onPress={() => {  props.onForgotPasswordButtonClick(); }}>
            <View style={{marginTop: 10, height: 40, width: width-44 ,alignItems: 'flex-start', justifyContent: 'center'}}>
              <Text style={styles.forgotButtonText}>
                {'Forgot your password ?'}
              </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => { props.onSignInButtonClick(); }}>
          <View style={{marginTop: 5, height: 40, width: 150, backgroundColor: Colors.appBlue ,alignItems: 'center', justifyContent: 'center',borderRadius: 20}}>
            <Text style={styles.loginButtonText}>
              {'Log in'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{padding: 40, flex:1,backgroundColor: 'rgba(0,0,0,0)', alignItems: 'center', justifyContent: 'flex-start'}}>
       
        <TouchableOpacity  onPress={() => {  props.onSignUpButtonClick(); }}>
            <View style={{flexDirection:'row',marginTop: 30, height: 40, width: width-44,alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'lightgrey', fontSize: 14, fontWeight: '600'}}>Don't have baller profile yet?</Text>
              <Text style={styles.signUpButtonText}>
                {'Sign Up ASAP'}
              </Text>
            </View>
        </TouchableOpacity>
        
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,1)',
  },
  input: {
    width: width - 40,
    height: 40,
    borderColor: 'white',
    borderBottomWidth: 2,
    padding: 3,
    marginTop: 10,
    color:'white'
  },
  centerContainer: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  userDetailscontainer: {
    flex:1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: '800',
  },
  signUpButtonText: {
    textAlign: 'center',
    color: Colors.appBlue,
    fontSize: 13,
    fontWeight: '800',
    marginLeft: 10,
    textDecorationLine: 'underline'
  },
  forgotButtonText: {
    textAlign: 'center',
    color: Colors.appBlue,
    fontSize: 13,
    fontWeight: '800',
    textDecorationLine: 'underline'
  },
  welcomeText: {
    textAlign: 'center',
    width,
    color: 'white',
    fontSize: 25,
    padding: 10,
    fontWeight: '700',
    fontStyle:'italic',
  },
  subtitleText: {
    textAlign: 'center',
    width,
    color: 'lightgrey',
    fontSize: 11,
    padding: 10,
    fontWeight: '900',
  },
  signInHeader: {
    flex: 1.2,
    width,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0)'

  },
});

export default Login;
