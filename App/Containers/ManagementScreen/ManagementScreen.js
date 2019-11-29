import React from 'react'
import { Text, View } from 'react-native'
import styles from './ManagementScreenStyles'

export default class ManagementScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>ManagementScreen</Text>
      </View>
    )
  }
}
