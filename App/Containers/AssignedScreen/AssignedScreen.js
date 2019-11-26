import React from 'react'
import { Text, View } from 'react-native';
import styles from './AssignedScreenStyles';

export default class AssignedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>AssignedScreen</Text>
      </View>
    )
  }
}
