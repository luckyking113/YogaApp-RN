import React from 'react'
import { Text, View } from 'react-native'
import styles from './SuggestionScreenStyle'

export default class SuggestionScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>SuggestionScreen</Text>
      </View>
    )
  }
}
