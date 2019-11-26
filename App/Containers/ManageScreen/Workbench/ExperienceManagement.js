import React from 'react'

import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import styles from '../../../Theme/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'



function Item({ item: {id, title, icon, color, onItemClickHandler } }) {
  return (
    <TouchableOpacity onPress={() => onItemClickHandler(id)}>
      <View style={styles.configtableCell}>
        <View style={{borderRadius:20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center', backgroundColor:color}}>
          <Icon name={icon} size={25} color={'white'} ></Icon>
        </View>
        <View style={styles.configtableCellTitle}>
          <Text>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


export default class ExperienceManagement extends React.Component {

  onItemClickHandler = (id) => {
    
  }


  DATA = [
    {
      id: '1',
      title: '申请体验课设置',
      icon: 'ios-options',
      color: 'red',
      onItemClickHandler: this.onItemClickHandler,
    },
    {
      id: '2',
      title: '体验课申请管理',
      icon: 'ios-paper',
      color: 'green',
      onItemClickHandler: this.onItemClickHandler,
    },
  ]
  

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.DATA}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}
