import React from 'react'
import { Text, View } from 'react-native'
import styles from './StudyScreenStyle'

export default class StudyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>Study</Text>
      </View>
    )
  }
}
