import React from 'react'
import { Text, View } from 'react-native'
import styles from './BusinessScreenStyle'

export default class BusinessScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>Business</Text>
      </View>
    )
  }
}
