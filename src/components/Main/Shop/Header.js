import React, { Component } from 'react';
import { View,
   Text,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    StyleSheet } from 'react-native';
import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

class Header extends Component {
  render() {
    return (
      <View style={styles.wrapper} >
        <View style={styles.row1} >
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image source={icMenu} style={styles.iconStyle} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={styles.iconStyle} />
        </View>
        <TextInput style={styles.textinput} placeholder="What do you want to buy" />
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  wrapper: { height: height / 8,
     backgroundColor: '#34B089',
     padding: 5,
     justifyContent: 'space-around' },
  row1: { flexDirection: 'row', justifyContent: 'space-between' },
  textinput: { height: height / 15,
     backgroundColor: '#FFF',
     marginTop: 10,
     paddingLeft: 5,
     paddingRight: 5 },
  iconStyle: { width: 25, height: 25 },
  titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 }
});
