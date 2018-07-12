import React from 'react';
import {
  View,
  StyleSheet,
  Picker,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
const { width, height } = Dimensions.get('window');

const Row = props => (
    <View>
      <TouchableOpacity onPress={ () => {
        props.onChangePickerValue(props.item);
        
      }}>
        <View style={{width:300, height: 45, paddingLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1,alignItems: 'flex-start', justifyContent: 'center'}}>
          <Text style={{ fontSize: 15, color: 'black', fontWeight:'600' }}>{props.item}</Text>
        </View>
      </TouchableOpacity>
    </View>
);

const ItemsPicker = props => (
  <View style={styles.container}>
    <View style={{ backgroundColor: 'white', width: 300, height: 300, overflow: 'hidden', borderRadius: 5, borderWidth:2, borderColor:'black' }}>
       <View style={{ height: 40 }}>
          <View style={{
            backgroundColor: 'black', height: 40, justifyContent: 'center',
            alignItems: 'center'
          }}><Text style={{ fontSize: 20, color: 'white' }}>Select</Text></View>
      </View> 
      <FlatList
          data={props.listItems}
          renderItem={({item}) => 
          <Row 
           item={item}
           onChangePickerValue={props.onChangePickerValue}
          />
         }
        />
    </View>
  </View>
  
  

  // <View style={styles.container}>
  //   <View style={{ backgroundColor: 'black', width, height: 40 }}>
  //     <TouchableOpacity onPress={() => {
  //       props.doneAction();
  //     }}>
  //       <View style={{
  //         backgroundColor: 'black', width, height: 40, justifyContent: 'center',
  //         alignItems: 'center'
  //       }}><Text style={{ fontSize: 25, color: 'white' }}>Done</Text></View>
  //     </TouchableOpacity>
  //   </View>
  //   <Picker
  //     style={{ backgroundColor: 'white', width, height: 220 }}
  //     selectedValue={props.pickerValue}
  //     onValueChange={(item) => {
  //       alert(item);
  //       props.onChangePickerValue(item);
  //     }
  //     }>
  //     {props.listItems.map((s) => {
  //       return <Picker.Item key={s} value={s} label={s} />
  //     })}
  //   </Picker>
  // </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    zIndex: 1000,
    position: 'absolute',
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(22,22,22,0.5)',
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
    color: '#424232',
  },
});

export default ItemsPicker;
