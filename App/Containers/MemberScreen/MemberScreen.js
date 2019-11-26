import React from 'react'
import { Text, View } from 'react-native';
import styles from './MemberScreenStyles';

export default class MemberScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>MemberScreen</Text>
      </View>
    )
  }
}
