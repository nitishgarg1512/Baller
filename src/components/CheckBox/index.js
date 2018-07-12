import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import Images from '../../assets/index';


export const Check = props => (
  <View>
    <Image source={(props.isRememberChecked) ? Images.checkBoxFilled : Images.checkBoxEmpty} />
  </View>
);

export default Check;
