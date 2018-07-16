import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import Images from '../../../assets/index';

const { width, height } = Dimensions.get('window');

const Row = props => (
  <View>
    <TouchableOpacity onPress={ () => {
      props.onTapTeam(props.index);
    }}>
      <View style={{width:130, height: 150, alignItems: 'center', justifyContent: 'center',margin: 10}}>
        <Image style={{height: 100, width: 100, backgroundColor: (props.selectedIndex == props.index) ? 'grey' : 'white', borderWidth:1 }} source={Images.ballerLogo}/>
        <Text style={{ fontSize: 15, color: 'black', fontWeight:'600',textAlign: 'center' ,marginTop: 10}}>{props.item.teamSize}</Text>
        <Text style={{ fontSize: 15, color: 'black', fontWeight:'600',textAlign: 'center' }}>{props.item.teamName}</Text>
      </View>
    </TouchableOpacity>
  </View>
);


const FindTeam = props => (
  <View style={styles.container}>
    <Text style={styles.headerText}>Find Your Team!</Text>
    <View>
      <TextInput
              style={ styles.input }
              placeholder={'Type your team\'s name here'}
              onChangeText={(text) => { props.onChangeTeamName(text); }}
              value={props.teamName}
              underlineColorAndroid="black"
          />
      <TextInput
              style={ styles.input }
              placeholder={'Type your team\'s name here'}
              onChangeText={(text) => { props.onChangeTeamName(text); }}
              value={props.teamName}
              underlineColorAndroid="black"
          />
    </View>
    <View style={{width, height: 200}}>
      <FlatList
            data={props.teamList}
            pagingEnabled={true}
            horizontal={true}
            renderItem={({item,index}) => 
            <Row 
            index={index}
            selectedIndex={props.selectedIndex}
            item={item}
            onTapTeam={props.onTapTeam}
            />
          }
          />
    </View> 
    {
      (props.selectedIndex == -1) && <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity  onPress={() => { props.onSignInButtonClick(); }}>
        <View style={{marginTop: 5, height: 40, width: width-44, backgroundColor: 'black' ,alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.loginButtonText}>
            {'I CAN\'T FIND MY TEAM'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => { props.onSignInButtonClick(); }}>
        <View style={{marginTop: 5, height: 40, width: width-44 ,alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.underLineText}>
            {'I don\'t play anymore!'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    }

    {
      (props.selectedIndex != -1) && <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity  onPress={() => { props.onTapPlayForthisTeam() }}>
        <View style={{marginTop: 5, height: 40, width: width-44, backgroundColor: 'black' ,alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.loginButtonText}>
            {'I PLAY FOR THIS TEAM'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    }
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(250,250,250,1)',
  },
  input: {
    width: width - 40,
    height: 40,
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 3,
    marginBottom: 10,
  },
  
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: '800',
    fontStyle: 'italic'
  },
  
  underLineText: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 13,
    fontWeight: '800',
    textDecorationLine: 'underline',
    fontStyle: 'italic'
  },
  headerText: {
    textAlign: 'center',
    width,
    color: 'black',
    fontSize: 25,
    padding: 10,
    fontWeight: '700',
    fontStyle:'normal',
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

export default FindTeam;
