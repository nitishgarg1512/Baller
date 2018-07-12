/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import FindteamView from './components/FindTeam';

import { NavigationActions } from 'react-navigation';

class Findteam extends Component {

  static navigationOptions = {
    title: 'Sign In',
  };

  constructor() {
    super();
    this.state = {
      teamName:'',
      teamList : [{
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
      {
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
      {
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
      {
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
      {
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
      {
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
      {
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
      {
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
      {
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
      {
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
      {
        image: '',
        teamSize: '11 Ballers',
        teamName: 'Team Name'
      },
    ],
    teamListFiltered : [],
    selectedIndex: -1
    };
  }

  componentWillReceiveProps(nextProps) {
  }
  
  onChangeTeamName(text) {
    
  }
  
  onTapTeam(index) {
    
    if(this.state.selectedIndex === index)  {
      this.setState({
        teamListFiltered: this.state.teamList,
        teamList: [],
        selectedIndex : -1,
      })
      index = -1
      this.timer(index)
      
      } else {   
        this.setState({
          teamListFiltered: this.state.teamList,
          teamList: [],
          selectedIndex : index,
        })
        this.timer(index)
    }
    
  }

  timer(index) {

    setTimeout(()=>{
      this.setState({
        teamList: this.state.teamListFiltered,
        selectedIndex : index,
      })
    },100
  )
  
  }
  onTapPlayForthisTeam() {
    const { navigate } = this.props.navigation;
    navigate({ routeName: 'NewTeam' })
  }
  
  render() {
    return (
      <FindteamView
        teamList = {this.state.teamList}
        teamName = {this.state.teamName} 
        selectedIndex = {this.state.selectedIndex} 
        onChangeTeamName = {(text) => this.onChangeTeamName(text)}
        onTapPlayForthisTeam = {() => this.onTapPlayForthisTeam()}
        onTapTeam = {(index) => this.onTapTeam(index)}
      />
    );
  }
}


export default Findteam;
