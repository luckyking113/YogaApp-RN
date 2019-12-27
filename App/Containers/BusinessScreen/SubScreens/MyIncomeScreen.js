import React from 'react'
import { Text, View, Image } from 'react-native';
import styles from './SubScreensStyles';

export default class MyIncomeScreen extends React.Component {
  render() {
    return (      
      <View style={[styles.container,{paddingTop:7}]}>
        <View style={styles.incomeTitle}>
          <View style={{justifyContent:"center",alignItems:'center'}}>
            <Text style={{color:'#f2914b',fontSize:18}}>0
              <Text style={{color:'rgba(0,0,0,.6)',fontSize:10,marginLeft:10}}>元</Text>
            </Text>
            <Text style={{fontSize:10,color:'rgba(0,0,0,.6)', marginTop:7}}>总收益</Text>
          </View>
          <View style={{justifyContent:"center",alignItems:'center'}}>
            <Text style={{color:'#3da9fc',fontSize:18}}>0<Text style={{color:'rgba(0,0,0,.6)',fontSize:10,marginLeft:10}}>元</Text></Text>
            <Text style={{fontSize:10,color:'rgba(0,0,0,.6)', marginTop:7}}>待结算</Text>
          </View>
        </View>
        <View style={styles.incomeContainer}>
          <Image source={require('../../../Assets/Images/homeIcon.png')} style={{width:60, height:60, marginBottom:15}}></Image>
          <Text style={{fontSize:12}}>暂无内容</Text>
          <Text style={{fontSize:12, marginTop:10}}>先去看一下其他页面吧</Text>
        </View>
      </View>
    )
  }
}
