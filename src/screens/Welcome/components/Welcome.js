import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import Images from '../../../assets/index';
import Colors from '../../../utility/Colors'

const { width, height } = Dimensions.get('window');

const Welcome = props => (
    <View style={styles.container}>
      <Image style={{flex:1, position: 'absolute'}} source={Images.bg1}/>
      <View style={{flex: 1,width, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex:1 ,alignItems: 'flex-end',justifyContent:'flex-start'}}>
          <TouchableOpacity onPress={()=>{
            }}>
            <View style={{height: 40,width,justifyContent: 'flex-start', alignItems: 'flex-end',marginTop: 25,marginRight: 25}}>
              <Text style={{color: 'white',fontSize: 25, fontWeight: '900'}}>X</Text>
            </View>
          </TouchableOpacity>
        </View> 
        <View style={{flex:1}}>
          <Image style={{height: 100, width: 100}} source={Images.ballerLogo}/>
        </View>
        <View style={{flex:1}}>
         <Text style={{color: 'white', fontStyle:'italic',fontSize: 25, fontWeight: '900'}}>WHAT'S NEXT ?</Text>
        </View>   
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
        <TouchableOpacity onPress={()=>{
                
            }}>
            <View style={{backgroundColor:Colors.appBlue,height: 40,marginBottom:15 , width: width-40, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white', fontStyle:'italic', fontWeight: '900'}}>WHY USE BALLERPROFILE?</Text>
            </View>
            
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                
            }}>
            <View style={{backgroundColor:Colors.appRed,height: 40,marginBottom:15 , width: width-40, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white', fontStyle:'italic', fontWeight: '900'}}>VISIT MY PROFILE PAGE</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                props.onTappedCreateFantasyTeam()
            }}>
              <View style={{backgroundColor:'white',height: 40,marginBottom:15 , width: width-40, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'black', fontStyle:'italic', fontWeight: '900'}}>CREATE A FANTASY TEAM</Text>
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
    backgroundColor: 'black'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Welcome;
