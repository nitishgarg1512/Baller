import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export const BoxTextInput = props => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder={props.placeHolder}
      onChangeText={(text) => { props.onChnageText(text); }}
      value={props.value}
      underlineColorAndroid="transparent"
    />
    {props.isShow && <Icon style={styles.icon} name={props.iconName} size={15} color="#900" />}
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    height: 35,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
});

export default BoxTextInput;
