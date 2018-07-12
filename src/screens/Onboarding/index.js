import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Dimensions,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Container from './components/Onboarding';
import Images from '../../assets/index';

const pagesData = [
  {
    image: Images.ballerLogo,
    BGimage: Images.bg1,
    header: 'PLAY BALL....',
    description: '',
  },
  {
    image: Images.ballerLogo,
    BGimage: Images.bg2,
    header: 'TRACK YOUR STATES...',
    description: '',
  },
  {
    image: Images.ballerLogo,
    BGimage: Images.bg3,
    header: 'BUILD YOUR REP...',
    description: '',
  }
];

const { width } = Dimensions.get('window');

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.scrollViewRef = null;
    this.state = {
      currentPage: 0,
    };
  }

  getScrollViewRef(ref) {
    this.scrollViewRef = ref;
  }

  scrollToNext() {
    if (this.state.currentPage < pagesData.length - 1) {
      if (this.scrollViewRef && this.scrollViewRef !== null) {
        this.scrollViewRef.scrollTo({
          x: width * (this.state.currentPage + 1),
          y: 0,
          animated: true,
        });
      }
    } else {
      this.skipInformation();
    }
  }

  skipInformation() {
    const { navigate } = this.props.navigation;
    navigate({ routeName: 'Login' })
    // const resetAction = NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'Login' }),
    //   ],
    // });
    // this.props.navigation.dispatch(resetAction);
  }

  updatePosition(event) {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const pageFraction = contentOffset.x / layoutMeasurement.width;
    const page = Math.round(pageFraction);
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container
          getScrollViewRef={ref => this.getScrollViewRef(ref)}
          pagesData={pagesData}
          continuePressed={() => this.scrollToNext()}
          skipPressed={() => this.skipInformation()}
          currentPage={this.state.currentPage}
          updatePagePosition={event => this.updatePosition(event)}
        />
      </View>
    );
  }
}

Onboarding.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Onboarding.defaultProps = {
  navigation: {},
};
