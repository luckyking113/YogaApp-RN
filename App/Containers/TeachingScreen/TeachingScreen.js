import React from 'react'
import { Text, View } from 'react-native'
import styles from './TeachingScreenStyle'
import Icon from 'react-native-vector-icons/Ionicons';  

export default class TeachingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>TeachingScreen</Text>
      </View>
    )
  }
}