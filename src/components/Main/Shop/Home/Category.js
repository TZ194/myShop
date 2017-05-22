import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { width } = Dimensions.get('window');

class Category extends Component {

  gotoListProduct() {
    const { navigator } = this.props;
    navigator.push({ name: 'LIST_PRODUCT' });
  }

  render() {
    const { wrapper, textStyle, imageStyle, cateTilte } = styles;
    return (
      <View style={wrapper}>
      <View style={{ height: 50, justifyContent: 'center' }}>
        <Text style={textStyle}> LIST OF CATEGORY</Text>
      </View>
      <View style={{ flex: 4, justifyContent: 'flex-end' }}>

      <Swiper width={imageWidth} height={imageHeight}>
        <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
          <Image source={littleIcon} style={imageStyle} >
            <Text style={cateTilte}>Maxi Dress</Text>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
        <Image source={maxiIcon} style={imageStyle} >
          <Text style={cateTilte}>Maxi Dress</Text>
        </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
        <Image source={partyIcon} style={imageStyle}>
        <Text style={cateTilte}>Maxi Dress</Text>
        </Image>
        </TouchableOpacity>
      </Swiper>
      </View>
      </View>
    );
  }
}

export default Category;

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
  wrapper: {
    width: width - 20,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { witdh: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    justifyContent: 'space-between'
  },
  textStyle: {
    fontSize: 30,
    color: '#AFAEAF'
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cateTilte: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#9A9A9A'
  }
});
