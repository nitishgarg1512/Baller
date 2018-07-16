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

const { width, height } = Dimensions.get('window');

const SignUp = props => (
  <View style={styles.container}>
    <Image style={{width,height, position: 'absolute'}} source={Images.bg1}/>
    <View style={styles.centerContainer}>
      <View style={styles.signInHeader}>
        <Image style={{width:100, height:100, resizeMode: 'contain'}} source={Images.ballerLogo}/>
        <Text style={styles.welcomeText}>{'Create your BallerProfile'}</Text>
        <Text style={styles.subtitleText}>{'The hottest talent outside of pro sports!'}</Text>
      </View>
      <View style={styles.userDetailscontainer}>
        <TextInput
            style={styles.input}
            placeholder={'Email'}
            onChangeText={(text) => { props.onChangeFirstText(text); }}
            value={props.username}
            onFocus = {()=> {
              props.onfocusFistText()
            }}
            underlineColorAndroid="transparent"
        />
        <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={(text) => { props.onChangeSecondText(text); }}
            value={props.password}
            onFocus = {()=> {
              props.onfocusSecondText()
            }}
            underlineColorAndroid="transparent"
        />
        <TextInput
            style={styles.input}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            onChangeText={(text) => { props.onChangeThirdText(text); }}
            value={props.password}
            onFocus = {()=> {
              props.onfocusThirdText()
            }}
            underlineColorAndroid="transparent"
        />
        <TouchableOpacity  onPress={() => { props.onSignUpButtonClick();  }}>
          <View style={{   borderColor: 'grey',backgroundColor: 'red',borderRadius:15, borderWidth: 1, width: 150,height: 40, backgroundColor: 'white' ,alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.loginButtonText}>
              {'Sign Up'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{padding: 40, flex:1,backgroundColor: 'rgba(0,0,0,0)', alignItems: 'center', justifyContent: 'flex-start'}}>
        <Text style={{color: 'lightgrey', fontSize: 14, fontWeight: '600'}}>Already have a account?</Text>
        <TouchableOpacity  onPress={() => { props.onSignInButtonClick(); }}>
            <View style={{marginTop: 30, height: 40, width: width-44, backgroundColor: 'rgb(12,90,178)' ,alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.loginButtonText}>
                {'Sign In ASAP'}
              </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {  props.onForgotPasswordButtonClick(); }}>
            <View style={{marginTop: 30, height: 40, width: width-44 ,alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.forgotButtonText}>
                {'Forgot your password ?'}
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
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 2,
    padding: 3,
    marginBottom: 10,
  },
  centerContainer: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white'
  },
  userDetailscontainer: {
    flex:1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'orange'
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'grey',
 
    fontSize: 13,
    fontWeight: '800',
  },
  forgotButtonText: {
    textAlign: 'center',
    color: 'lightgrey',
    fontSize: 13,
    fontWeight: '800',
    textDecorationLine: 'underline'
  },
  welcomeText: {
    textAlign: 'center',
    width,
    color: 'black',
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

export default SignUp;
