import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import bannerImage from '../../../../media/temp/banner.jpg';

const { width } = Dimensions.get('window');

class Collection extends Component {
  render() {
    const { wrapper, textStyle, imageStyle } = styles;
    return (
      <View style={wrapper}>
      <View style={{ height: 50, justifyContent: 'center' }}>
        <Text style={textStyle}>SPRING COLLECTION</Text>
      </View>
      <TouchableOpacity style={{ flex: 4, justifyContent: 'center' }}>
        <Image source={bannerImage} style={imageStyle} />
      </TouchableOpacity>
      </View>
    );
  }
}

export default Collection;

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
  wrapper: {
    // height: height * 0.4,
    width: width - 20,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { witdh: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 30,
    color: '#AFAEAF'
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth
  }
});
