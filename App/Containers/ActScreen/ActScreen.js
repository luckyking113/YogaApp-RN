import React from 'react'
import { Text, View } from 'react-native'
import styles from './ActScreenStyle'

export default class ActScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>Act</Text>
      </View>
    )
  }
}
