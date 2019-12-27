import React from 'react'
import { Text, View, Image } from 'react-native';
import styles from './WishingWallScreenStyles';

export default class AssignedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Image source={require('../../Assets/Images/homeIcon.png')} style={{width:80, height:80, marginBottom:15}} />
        <Text>暂无进行中活动</Text>
      </View>
    )
  }
}
