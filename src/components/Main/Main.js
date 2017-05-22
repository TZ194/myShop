import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
// import { View, Text, TouchableOpacity } from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {
  gotoAuthentication() {
    const { navigator } = this.props;
    navigator.push({ name: 'AUTHENTICATION' });
  }
  gotoChangeInfo() {
    const { navigator } = this.props;
    navigator.push({ name: 'CHANGEINFO' });
  }
  gotoOrderHistory() {
    const { navigator } = this.props;
    navigator.push({ name: 'ORDERHISTORY' });
  }
    closeControlPanel = () => {
    this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
};
  // componentDidMount() {
  //     this.drawer.open();
  //   }
  render() {
    const { navigator } = this.props;
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Menu navigator={navigator} />}
        tapToClose
        openDrawerOffset={0.2}
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
