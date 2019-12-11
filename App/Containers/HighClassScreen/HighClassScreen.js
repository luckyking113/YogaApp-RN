import React from 'react'
import { Text, View } from 'react-native';
import styles from './HighClassScreenStyles';

export default class HighClassScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>HighClassScreen</Text>
      </View>
    )
  }
}
