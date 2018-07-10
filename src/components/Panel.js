import React, { PureComponent } from 'react';
import {Component,StyleSheet,Text,View,Image,TouchableOpacity,Animated} from 'react-native'; //Step 1
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../assets/index'

var styles = StyleSheet.create({
  title: {
    padding: 10,
    color:'#2a2f43',
    fontWeight:'bold',
    backgroundColor: 'white',
  },
  body: {
    padding: 10,
    paddingTop: 0,
    paddingBottom: 10,
  }
});

class Panel extends PureComponent {
  constructor(props) {
    super(props);
    this.icons = { //Step 2
      'up': 'angle-double-up',
      'down': 'angle-double-down'
    };
    this.state = { //Step 3
      title: props.title,
      icon: props.icon,
      expanded: props.isExpand,
      animation: new Animated.Value()
    };
    console.log('Panal:',this.props.cardIndex)
  }
 
  _setMaxHeight(event){
    this.setState({
        maxHeight   : event.nativeEvent.layout.height
    });
}

_setMinHeight(event){
    this.setState({
        minHeight   : event.nativeEvent.layout.height
    });
}
  // _setMaxHeight(event) {
  //   if (!this.state.maxHeight) {
  //     this.setState({
  //       maxHeight: event.nativeEvent.layout.height,
  //     });
  //   }
  // }

  // _setMinHeight(event) {
  //   if (!this.state.minHeight) {
  //     this.setState({
  //       minHeight: event.nativeEvent.layout.height,
  //       animation: new Animated.Value(event.nativeEvent.layout.height),
  //     });
  //   }
  // }

  toggle() {
    let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
      finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded
    }, () => {
      this.state.animation.setValue(initialValue);
      Animated.timing(
        this.state.animation, {
          toValue: finalValue,
          duration: 400,
        }).start();
    });
  }
  
  render(){
    let icon = this.icons['down'];
    if(this.state.expanded){
      icon = this.icons['up'];   //Step 4
    }
    return (
      <Animated.View style={[this.props.cardStyle['card'],{height: this.state.animation}]} >
        <TouchableOpacity 
          onPress={ ()=> {
            //this.toggle.bind(this)
            this.props.didTapOnCard(this.props.cardIndex)
          }}
          style={this.props.cardStyle['titleContainer']} 
          onLayout={this._setMinHeight.bind(this)}
          >
          <View style={{ flex: 1, flexDirection: 'row', alignItems:'center', margin:10 }}>
            <Icon name={this.state.icon} size={20} color="rgba(0,0,0,0.2)" style={this.props.cardStyle['icon']}/>
            <Text style={styles.title}>{this.state.title}</Text>
          </View>
          <TouchableOpacity 
            style={this.props.cardStyle['toggleButton']} 
              //onPress={this.toggle.bind(this)}
              underlayColor="#f1f1f1">
              <Icon
                style={this.props.cardStyle['toggleButtonImage']}
                name={(this.props.isExpand) ? 'angle-double-up' : 'angle-double-down' }
                size={20}
              />
          </TouchableOpacity>
        </TouchableOpacity>
          <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
            {this.props.children}
          </View>
      </Animated.View>
    );
  }
}

export default Panel;