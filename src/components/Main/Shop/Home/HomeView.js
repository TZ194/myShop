import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
        <ScrollView>
        <Collection />
        <Category navigator={this.props.navigator} />
        <TopProduct navigator={this.props.navigator} />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
