import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from "./src/components/App.js"

export default class app5 extends Component {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('app5', () => app5);
