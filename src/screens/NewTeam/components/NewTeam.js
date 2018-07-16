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
        <Image style={{width:150, height:150, resizeMode: 'contain'}} source={Images.ballerLogo}/>
        <Text style={styles.congratsText}>{'Congrats Dimitri,'}</Text>
        <Text style={styles.subtitleText}>{'You are now Captain and Admin of Newteam United!'}</Text>
      </View>
      <View style={styles.userDetailscontainer}>
         <TouchableOpacity  onPress={() => { props.onSignInButtonClick(); }}>
            <View style={{marginTop: 5, height: 50, width: 200,borderRadius: 25, backgroundColor: 'black' ,alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.buttonText}>
                {'INVITE BALLERS'}
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.subtitleText}>{'Even Mess! needs his teammates!'}</Text>
          <TouchableOpacity  onPress={() => { props.onSignInButtonClick(); }}>
            <View style={{marginTop: 5, height: 50, width, backgroundColor: 'grey' ,alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.buttonText}>
                {'DONE'}
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
    backgroundColor: 'white',
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
    width,
    marginTop: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
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
    fontSize: 27,
    marginTop: 30,
    fontWeight: '700',
    fontStyle:'normal',
  },
  congratsText: {
    textAlign: 'center',
    width,
    color: 'black',
    fontSize: 25,
    marginTop: 30,
    fontWeight: '700',
    fontStyle:'normal',
  },
  subtitleText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    margin: 35,
  },
  signInHeader: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default NewTeam;
