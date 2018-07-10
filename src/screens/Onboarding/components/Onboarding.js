import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  topView: {
    flex: 0.2,
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skipView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  skipText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    // fontFamily: 'Lato-Medium',
    textAlign: 'center',
    marginVertical: 6,
    marginHorizontal: 15,

  },
  scrollview: {
    width,
  },
  animatedView: {
    width,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  animatedImage: {
    width: width * 0.25,
    height: width * 0.25,
    margin: 12,
  },
  headerText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: '600',
    // fontFamily: 'Lato-Bold',
    color: 'white',
    textAlign: 'center',
  },
  detailText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
    // fontFamily: 'Lato-Medium',
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  pageControlView: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    borderRadius: 2.5,
    margin: 3,
    width: 5,
    height: 5,
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 8,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    width: width * 0.75,
    height: 45,
    borderRadius: 15,
    marginBottom: 8,
  },
  buttontext: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    // fontFamily: 'Lato-Bold',
  },
});

const PageControlView = (data, currentIndex) => {
  const dotViews = [];
  data.forEach((element, index) => {
    let dotStyle = 'white';
    let dotscale = 1;
    if (currentIndex === index) {
      dotStyle = 'lightgrey';
      dotscale = 1.6;
    }
    dotViews.push(<View
      key={index}
      style={[styles.dot, { backgroundColor: dotStyle, transform: [{ scale: dotscale }] }]}
    />);
  });
  return dotViews;
};

const AnimatedView = ({ data }) => (
  <View style={styles.animatedView}>
    <Image source={data.image} style={styles.animatedImage} resizeMode="contain" /> 
    <Text style={styles.headerText}>{data.header}</Text>
    <Text style={styles.detailText}>{data.description}</Text>
  </View>
);

const Container = props => (
  <View style={styles.container}>
    <Image style={{height, width, position: 'absolute'}}  source={props.pagesData[0].BGimage}/>
    <ScrollView
      ref={ref => props.getScrollViewRef(ref)}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={Boolean(false)}
      style={styles.scrollview}
      onScroll={event => props.updatePagePosition(event)}
      scrollEventThrottle={16}
    >
      {
        props.pagesData.map((data, index) => <AnimatedView key={`key ${index}`} data={data} />)
      }
    </ScrollView>
    <View style={styles.topView}>
      <View style={{ flex: 1 }} />
      <View style={styles.pageControlView}>
        {props.pagesData.length > 0 && PageControlView(props.pagesData, props.currentPage)}
      </View>
      <View style={styles.skipView}>
        {props.currentPage < props.pagesData.length - 1 &&
        <TouchableOpacity activeOpacity={0.7} onPress={() => props.skipPressed()}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>}
      </View>
    </View>
  </View>
);

Container.propTypes = {
  updatePagePosition: PropTypes.func,
  getScrollViewRef: PropTypes.func,
  continuePressed: PropTypes.func,
  skipPressed: PropTypes.func,
  currentPage: PropTypes.number,
  pagesData: PropTypes.arrayOf(PropTypes.object),
};

Container.defaultProps = {
  updatePagePosition: () => {},
  getScrollViewRef: () => {},
  continuePressed: () => {},
  skipPressed: () => {},
  currentPage: 0,
  pagesData: [],
};

export default Container;
