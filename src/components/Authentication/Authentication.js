import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
  }

  signIn() {
    this.setState({ isSignIn: true });
  }

  signUp() {
    this.setState({ isSignIn: false });
  }

  goBackToMain() {
    const { navigator } = this.props;
    navigator.pop();
  }
  render() {
    const { container, row1, iconStyle, titleStyle, controlStyle, inputStyle,
    signInStyle, signUpStyle, inactiveStyle, activeStyle, BigButton, buttonText } = styles;

    const signInJSX = (
        <View>
          <TextInput style={inputStyle} placeholder="Enter your email" />
          <TextInput style={inputStyle} placeholder="Enter your password" />
          <TouchableOpacity style={BigButton}>
            <Text style={buttonText}>SIGN IN NOW</Text>
          </TouchableOpacity>
        </View>

    );

    const signUpJSX = (
      <View>
        <TextInput style={inputStyle} placeholder="Enter your name" />
        <TextInput style={inputStyle} placeholder="Enter your email" />
        <TextInput style={inputStyle} placeholder="Enter your password" />
        <TextInput style={inputStyle} placeholder="Re-enter your password" />
        <TouchableOpacity style={BigButton}>
          <Text style={buttonText}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    );

    const { isSignIn } = this.state;
    const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;

    return (
      <View style={container}>
        <View style={row1} >
          <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={iconStyle} />
        </View>

        {mainJSX}

        <View style={controlStyle}>
          <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
            <Text style={isSignIn ? activeStyle : inactiveStyle}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
            <Text style={!isSignIn ? activeStyle : inactiveStyle}>Sign UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#3EBA77',
     padding: 20,
     justifyContent: 'space-between',

    },
  row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  iconStyle: { width: 30, height: 30 },
  titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 30 },
  controlStyle: {
    flexDirection: 'row',
    width: 300
  },
  inactiveStyle: {
    color: '#D7D7D7'
  },
  activeStyle: {
    color: '#3EBA77'
  },
  signInStyle: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1,
    marginLeft: 50
  },
  signUpStyle: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 1
  },
inputStyle: {
  height: 50,
  backgroundColor: '#fff',
  marginBottom: 10,
  borderRadius: 20,
  paddingLeft: 30
},
BigButton: {
  height: 50,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center'
},
buttonText: {
  fontFamily: 'Avenir',
  color: '#fff',
  fontWeight: '400'
}
});
