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
    <View style={styles.centerContainer}>
      <View style={styles.signInHeader}>
        <Text style={styles.welcomeText}>{'YO\'RE ALMOST THERE!'}</Text>
        <Image style={{width:100, height:100, resizeMode: 'contain'}} source={Images.ballerLogo}/>
        <Text style={styles.welcomeText}>{'The AFTV FC team captain and team admins have been notified.. They will add you to the squad as soon as possible!'}</Text>
        <TouchableOpacity  onPress={() => {  }}>
          <View style={{marginTop: 5, height: 40, width: width-44, backgroundColor: Colors.appRed ,alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.loginButtonText}>
              {'Done'}
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
    borderColor: 'grey',
    borderWidth: 2,
    padding: 3,
    marginBottom: 10,
  },
  centerContainer: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default Login;
