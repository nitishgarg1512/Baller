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

const Landing = props => (
  <View style={styles.container}>
    <Image style={{width,height, position: 'absolute'}} source={Images.bg1}/>
    <View style={styles.centerContainer}>
      <View style={styles.signInHeader}>
        <Image style={{width:100, height:100, resizeMode: 'contain'}} source={Images.ballerLogo}/>
        <Text style={styles.welcomeText}>{'Welcome to BallerProfile'}</Text>
        <Text style={styles.subtitleText}>{'The hottest talent outside of pro sports!'}</Text>
      </View>
      {/* <View style={styles.userDetailscontainer}>
        <TextInput
            style={[ styles.input, {borderColor : props.t1Color} ]}
            placeholder={'Baller Email'}
            onChangeText={(text) => { props.onChangeFirstText(text); }}
            value={props.username}
            onFocus = {()=> {
              props.onfocusFistText()
            }}
            underlineColorAndroid="transparent"
        />
        <TextInput
            style={[ styles.input, {borderColor : props.t2Color} ]}
            placeholder={'Baller Password'}
            secureTextEntry={true}
            onChangeText={(text) => { props.onChangeSecondText(text); }}
            value={props.password}
            onFocus = {()=> {
              props.onfocusSecondText()
            }}
            underlineColorAndroid="transparent"
        />
        <TouchableOpacity  onPress={() => { props.onSignInButtonClick(); }}>
          <View style={{marginTop: 5, height: 40, width: width-44, backgroundColor: Colors.appRed ,alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.loginButtonText}>
              {'Log in'}
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
      <View style={{padding: 40, flex:1,backgroundColor: 'rgba(0,0,0,0)', alignItems: 'center', justifyContent: 'flex-start'}}>
        <Text style={{color: 'lightgrey', fontSize: 14, fontWeight: '600'}}>Don't have baller profile yet?</Text>
        <TouchableOpacity  onPress={() => {  props.onSignUpButtonClick(); }}>
            <View style={{marginTop: 30, height: 40, width: width-44, backgroundColor: 'rgb(12,90,178)' ,alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.loginButtonText}>
                {'Sign Up ASAP'}
              </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {  props.onSignInButtonClick(); }}>
            <View style={{flexDirection: 'row', marginTop: 30, height: 40, width: width-44 ,alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.forgotButtonText}>
                {'Already have a baller profile?     '}
              </Text>
              <Text style={{color: 'white', fontSize: 19,textDecorationLine: 'underline'}}>
                {'Login'}
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
    alignItems: 'flex-start',
    backgroundColor: 'rgba(1,0,0,1)',
  },
  input: {
    width: width - 40,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
    padding: 3,
    marginBottom: 10,
  },
  centerContainer: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  userDetailscontainer: {
    flex:0.7,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange'
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: '800',
  },
  forgotButtonText: {
    textAlign: 'center',
    color: 'lightgrey',
    fontSize: 13,
    fontWeight: '800',
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
    justifyContent: 'flex-start',
    marginTop: 30,
    backgroundColor: 'rgba(0,0,0,0)'

  },
});

export default Landing;
