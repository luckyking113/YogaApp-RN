import React from 'react'
import { Text, View } from 'react-native';
import styles from './GeneralClassScreenStyles';

export default class GeneralClassScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>GeneralClassScreen</Text>
      </View>
    )
  }
}
