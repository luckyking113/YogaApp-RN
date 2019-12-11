import React from 'react'
import { Text, View } from 'react-native'
import styles from './StatisticalScreenStyle'

export default class StatisticalScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{color:'#000', fontWeight:'bold'}}>本月累计:</Text>
          <Text>当月累计销售会员卡总张数及总销售金额</Text>
        </View>
        <View style={{marginTop:15}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>线上售卡:</Text>
          <Text>会员在微信端自主下单购买会员卡总数(张)</Text>
        </View>
        <View style={{marginTop:15}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>线上售卡金额:</Text>
          <Text>会员在微信端自主下单购买会员卡总金额</Text>
        </View>
        <View style={{marginTop:15}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>门店售卡:</Text>
          <Text>包含新发卡、 补录老卡、 批量导入的总会员卡张数</Text>
        </View>
        <View style={{marginTop:15}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>门店售卡金额:</Text>
          <Text>门店新发卡、 补录老卡、 批量导入的总会员卡销售金额</Text>
        </View>
        <View style={{marginTop:15}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>新增会员:</Text>
          <Text>当日新增会员总人数</Text>
        </View>
        <View style={{marginTop:15}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>新增访客:</Text>
          <Text>当日新增访客总人数</Text>
        </View>    
        <View style={{marginTop:15}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>团课/精品课预约:</Text>
          <Text>当日被预约团课/精品课数量及已预约总人次</Text>
        </View>
        <View style={{marginTop:15}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>私教预约:</Text>
          <Text>当日被预约的私教课数量</Text>
        </View>
      </View>
    )
  }
}
