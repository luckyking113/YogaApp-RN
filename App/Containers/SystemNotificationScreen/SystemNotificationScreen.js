import React from 'react'
import { Text, View } from 'react-native';
import styles from './SystemNotificationScreenStyles';

export default class SystemNotificationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>SystemNotificationScreen</Text>
      </View>
    )
  }
}
