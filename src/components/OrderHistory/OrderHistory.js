import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {
  goBackToMain() {
    const { navigator } = this.props;
    navigator.pop();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <Text>
        OrderHistory Component
        </Text>
        <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
        <Text>
        Go back
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
