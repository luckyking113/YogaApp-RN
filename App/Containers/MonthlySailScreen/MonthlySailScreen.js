import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './MonthlySailScreenStyle'

export default class MonthlySailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleFont}>2019/12/09 ~ 2019/12/15</Text>          
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.detailTitleContainer}>
            <Text style={styles.detailTitleFont}>新发卡张数</Text>
            <Text style={styles.detailTitleFontNum}>0</Text>
          </View>
          <View style={styles.detailView}>            
            <Image source={require('../../Assets/Images/dollar.png')} style={{height:'100%', width:'21%'}} />
            <View style={{alignItems:'flex-end'}}>
              <Text style={{color:'#f24900', fontSize:40}}>0.00</Text>
              <Text style={{color:'rgba(0,0,0,.4)', fontSize:14}}>总金额(元)</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
