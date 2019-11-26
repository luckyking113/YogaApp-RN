import React from 'react'
import { Text, View } from 'react-native'
import styles from './HomeScreenStyle'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>Home</Text>
      </View>
    )
  }
}
