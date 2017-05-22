import React, { Component } from 'react';
import { Navigator, StatusBar } from 'react-native';
import Authentication from './Authentication/Authentication';
import Main from './Main/Main';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';


StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'MAIN' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'MAIN':return <Main navigator={navigator} />
            case 'CHANGEINFO':return <ChangeInfo navigator={navigator} />
            case 'AUTHENTICATION':return <Authentication navigator={navigator} />
            default: return <OrderHistory navigator={navigator} />;
          }
        }}
        configureScene={route => {
          if (route.name === 'AUTHENTICATION') return Navigator.SceneConfigs.FloatFromRight;
          return Navigator.SceneConfigs.FloatFromLeft;
        }}
      />
    );
  }
}
