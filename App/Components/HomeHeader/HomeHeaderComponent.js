import React from 'react'
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './HomeHeaderComponentStyles';
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class HomeHeaderComponent extends React.Component {
  onPressIconHandler = () => {
    alert('test');
  }
  render() {
    return (
      <View style={styles.headerContainer}> 
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={this.onPressIconHandler}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../Assets/Images/homeIcon.png')}
            />
          </TouchableOpacity>
        </View>       
        
        <View style={styles.dropDownBtnContainer}>
          <TouchableOpacity style={{flexDirection:'row', width:100}} onPress={this.onPressIconHandler}>
            <Text style={{color:'white',fontSize:20}}>圣雅圣雅</Text>
            <Icon name='ios-arrow-down' size={20} color='white' style={{marginTop: 5, marginLeft:5}}/>
          </TouchableOpacity>
        </View>               
      </View>
    )
  }
}
