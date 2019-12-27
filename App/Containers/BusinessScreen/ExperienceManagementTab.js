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


export default class ExperienceManagement extends React.Component {
  onItemClickHandler1 = (id) => {
    this.props.navigation.navigate('MemberShipCardListScreen');
  }

  onItemClickHandler2 = (id) => {
    this.props.navigation.navigate('OnlineCardSettingScreen');
  }

  onItemClickHandler3 = (id) => {
    this.props.navigation.navigate('MyIncomeScreen');
  }

  onItemClickHandler4 = (id) => {
    this.props.navigation.navigate('IncomeCalculatorScreen');
  }

  DATA = [
    {
      id: '1',
      title: '分销售卡',
      icon: 'menuunfold',
      color: 'red',
      onItemClickHandler: this.onItemClickHandler1,
    },
    {
      id: '2',
      title: '售卡设置',
      icon: 'setting',
      color: 'green',
      onItemClickHandler: this.onItemClickHandler2,
    },
    {
      id: '3',
      title: '我的收益',
      icon: 'creditcard',
      color: '#34b1eb',
      onItemClickHandler: this.onItemClickHandler3,
    },
    {
      id: '4',
      title: '收益结算',
      icon: 'calculator',
      color: '#f5c858',
      onItemClickHandler: this.onItemClickHandler4,
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
