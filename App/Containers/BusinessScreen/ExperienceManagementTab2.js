import React from 'react';

import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './BusinessCustomStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Item({ item: {id, title, icon, color, onItemClickHandler } }) {
  return (
    <TouchableOpacity onPress={() => onItemClickHandler(id)} style={styles.ItemContainer}>
      <View style={styles.configtableCell}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <View style={{borderRadius:20,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center', backgroundColor:color}}>
            <Icon name={icon} size={25} color={'white'} ></Icon>
          </View>
          <Text style={{marginLeft:10}}>{title}</Text>
        </View>
        <View style={styles.configtableCellTitle}>
          <Icon name='right' size={15} color={'lightgray'} ></Icon>
        </View>
      </View>
    </TouchableOpacity>
  )
}


export default class ExperienceManagementTab2 extends React.Component {
  // onItemClickHandler1 = (id) => {
  //   this.props.navigation.navigate('MemberShipCardListScreen');
  // }

  onItemClickHandler1 = (id) => {
    this.props.navigation.navigate('WishingWall');
  }

  onItemClickHandler2 = (id) => {
    this.props.navigation.navigate('EventScreen');
  }

  onItemClickHandler3 = (id) => {
    this.props.navigation.navigate('EventScreen');
  }

  DATA = [
    {
      id: '1',
      title: '活动管理',
      icon: 'gift',
      color: 'green',
      onItemClickHandler: this.onItemClickHandler1,
    },
    {
      id: '2',
      title: '我要分销活动',
      icon: 'creditcard',
      color: '#34b1eb',
      onItemClickHandler: this.onItemClickHandler2,
    },
    {
      id: '3',
      title: '我的分销数据',
      icon: 'calculator',
      color: '#f5c858',
      onItemClickHandler: this.onItemClickHandler3,
    }
  ]
  

  render() {
    return (
      <View style={styles.container}>        
        <FlatList
          data={this.DATA}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
          style={styles.flatList}
        /> 
      </View>
    )
  }
}
