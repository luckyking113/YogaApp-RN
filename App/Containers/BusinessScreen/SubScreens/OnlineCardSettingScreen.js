import React from 'react'
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './SubScreensStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../../Theme/Colors';
import { ScrollView } from 'react-native-gesture-handler';

function Item({ item: {id, title, details ,color, onItemClickHandler } }) {
  return (  
    <View style={styles.cardSettingContainer}>
      <View style={styles.detailCard}>
        <TouchableOpacity style={styles.cardLeftContent}>
          <View style={styles.cardImage1}>
            <Image style={styles.image} source={require('../../../Assets/Images/card.jpeg')} />
          </View>
          <View style={styles.leftTxt}>
            <View style={{flexDirection:'row'}}>              
              <Text style={styles.leftTxtFont}>{title}</Text>                  
            </View>              
            <Text style={styles.leftTxtFont}>{details[0]}</Text>
            <Text style={styles.leftTxtFont}>{details[1]}</Text>   
            <Text style={styles.leftTxtFont}>{details[2]}</Text>           
          </View>
        </TouchableOpacity>
      </View> 
      <TouchableOpacity style={styles.cardRightContent}>
        <Text style={styles.bottomTxtFont}>设置线上销售分销规则</Text>
        <View style={styles.bottomArrowRight}>
          <Icon name='right' size={12} color={Colors.lightGrey}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default class OnlineCardSettingScreen extends React.Component {
  DATA = [
    {
      id: '1',
      title: '瑜伽30次',      
      color: 'red',
      details:['期限12个月','售价 1599元','额度 30次'],
      onItemClickHandler: this.onItemClickHandler1,
    },
    {
      id: '2',
      title: '售卡设置',      
      color: 'green',
      details:['期限1个月','售价 0元','额度 8次'],
      onItemClickHandler: this.onItemClickHandler2,
    },
    {
      id: '3',
      title: '我的收益',      
      color: '#34b1eb',
      details:['期限265元','售价 0元','额度 29次'],
      onItemClickHandler: this.onItemClickHandler,
    },
    {
      id: '4',
      title: '收益结算',      
      color: '#f5c858',
      details:['期限265元','售价 0元','额度 29次'],
      onItemClickHandler: this.onItemClickHandler,
    }
  ]

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.CardSettingHeader}>
          <Text style={styles.bottomTxtFont}>会员/访客分销结算说明</Text>
          <TouchableOpacity style={styles.bottomArrowRight}>
            <Icon name='right' size={12} color={Colors.lightGrey}/>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <FlatList
            data={this.DATA}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
            style={styles.flatList}
          /> 
        </ScrollView>
      </View>
    )
  }
}
