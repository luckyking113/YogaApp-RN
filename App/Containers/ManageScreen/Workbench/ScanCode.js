import React from 'react'
import { Text, View } from 'react-native'
import styles from '../ManageScreenStyle'

import QRCode from 'react-native-qrcode-svg';

export default class ScanCode extends React.Component {
  state = {
    text: 'Open "keepyoga.com" in Safari',
  };
 
  render() {
    return (
      <View style={styles.container}>

        <Text style={{padding:30}}>
          {this.state.text}
        </Text>
        
        <QRCode
          value={this.state.text}
          size={300}
          backgroundColor='white'
          color='black'
          ecl='H'/>
      </View>
    );
  };
}
