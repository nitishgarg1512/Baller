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

const NewTeam = props => (
  <View style={styles.container}>
      <Text style={styles.welcomeText}>{'NEWTEAM UNITED'}</Text>
      <View style={styles.signInHeader}>
        <Image style={{width:100, height:100, resizeMode: 'contain'}} source={Images.ballerLogo}/>
        <Text style={styles.welcomeText}>{'Welcome to BallerProfile'}</Text>
        <Text style={styles.subtitleText}>{'The hottest talent outside of pro sports!'}</Text>
      </View>
      <View style={styles.userDetailscontainer}>
         <TouchableOpacity  onPress={() => { props.onSignInButtonClick(); }}>
            <View style={{marginTop: 5, height: 40, width: width-44, backgroundColor: Colors.appRed ,alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.loginButtonText}>
                {'INVITE BALLERS'}
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.welcomeText}>{'Welcome to BallerProfile'}</Text>
          <TouchableOpacity  onPress={() => { props.onSignInButtonClick(); }}>
            <View style={{marginTop: 5, height: 40, width: width-44, backgroundColor: Colors.appRed ,alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.loginButtonText}>
                {'Log in'}
              </Text>
            </View>
          </TouchableOpacity>
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

export default NewTeam;
