import React from 'react'
import { Text, View } from 'react-native';
import styles from './BookingScreenStyles';

export default class BookingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>BookingScreen</Text>
      </View>
    )
  }
}
