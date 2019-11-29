import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './TeachingScreenStyle'
import Icon from 'react-native-vector-icons/Ionicons';  
import { ScrollView } from 'react-native-gesture-handler';

export default class TeachingScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.videoContainer}>
          <View style={styles.videoCard}>  
            <Image
              style={{width: '100%', height: 200}}
              source={require('../../Assets/Images/yogaAd.jpeg')}
            />           
            <View style={styles.content}>
              <Text>TeachingScreen</Text>
            </View>            
          </View>

          <View style={styles.videoCard}>  
            <Image
              style={{width: '100%', height: 200}}
              source={require('../../Assets/Images/yogaAd.jpeg')}
            />           
            <View style={styles.content}>
              <Text>TeachingScreen</Text>
            </View>            
          </View>
        </View>
      </ScrollView>
    )
  }
}