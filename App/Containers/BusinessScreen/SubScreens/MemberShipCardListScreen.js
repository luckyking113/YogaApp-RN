import React from 'react'
import { Text, View, Image } from 'react-native';
import styles from './SubScreensStyles';
import Icon from 'react-native-vector-icons/AntDesign'

export default class MemberShipCardListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.membershipTitle}>
          <View style={{backgroundColor:'#f5883b',borderRadius:50}}>
            <Icon name='exclamation' size={12} color='white' />
          </View>          
          <Text style={{color:'#f5883b',fontSize:12, marginLeft:5}}>申请提现时,微信支付平台将1收取手续费0.6%</Text>
        </View>
        <View style={styles.membershipcontainer}>
          <Image source={require('../../../Assets/Images/homeIcon.png')} style={{width:60, height:60, marginBottom:15}}></Image>
          <Text>暂无内容</Text>
          <Text style={{marginTop:14}}>先去看一下其他页面吧</Text>
        </View>        
      </View>
    )
  }
}
