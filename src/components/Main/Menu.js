import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import profileIcons from '../../media/temp/profile.png';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogedIn: true };
  }
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
  render() {
    const { container, profile, btnStyle, btnText, btnSignInStyle,
    btnTextSignIn, loginContainer, username } = styles;
    const logoutJSX = (<View style={{ flex: 1 }}>
              <TouchableOpacity style={btnStyle} onPress={this.gotoAuthentication.bind(this)} navigator={this.navigator} >
                <Text style={btnText}>Sign In</Text>
              </TouchableOpacity>
            </View>);
    const loginJSX = (<View style={loginContainer}>
              <Text style={username}>
              Nguyen Thanh Tung
              </Text>
              <View>
              <TouchableOpacity style={btnSignInStyle} onPress={this.gotoOrderHistory.bind(this)}>
                <Text style={btnTextSignIn}>Order History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
                <Text style={btnTextSignIn}>Change Info</Text>
              </TouchableOpacity>
              <TouchableOpacity style={btnSignInStyle}>
                <Text style={btnTextSignIn}>Sign out</Text>
              </TouchableOpacity>
              </View>
            </View>);
    const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX;
    return (
      <View style={container}>
        <Image source={profileIcons} style={profile} />
        {mainJSX}
      </View>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    borderRightWidth: 3,
    borderColor: '#FFF',
    alignItems: 'center'
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 30
  },
  btnStyle: {
    height: 50,
    paddingHorizontal: 90,
    backgroundColor: '#FFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#34B089',
    fontSize: 20,
    fontFamily: 'Avenir'
  },
  btnSignInStyle: {
    height: 50,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
    paddingLeft: 10
  },
  btnTextSignIn: {
    color: '#34B089',
    fontSize: 15,

  },
  loginContainer: {
    flex: 1,
    alignItems: 'center'
  },
  username: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 20,
    marginBottom: 50
     }
});
