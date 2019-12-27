import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './SubScreensStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../../Theme/Colors';

function Item({ item: {id, title, icon, color, onItemClickHandler } }) {
  return (  
    <TouchableOpacity onPress={() => onItemClickHandler(id)} style={styles.ItemContainer}>      
      <View style={styles.configtableCell}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <View style={{borderRadius:20,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center'}}>
            <Image source={require('../../../Assets/Images/homeIcon.png')} style={{width:40, height:40}} />
          </View>          
          <Text style={{marginLeft:10,color:'rgba(0,0,0,.6)'}}>{title}</Text>          
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'rgba(0,0,0,.6)', marginRight:4}}>明细</Text>
          <Icon name='right' size={15} color={'rgba(0,0,0,.6)'} ></Icon>
        </View>
      </View>  
    </TouchableOpacity>
  )
}

export default class IncomeCalculatorScreen extends React.Component {
  onItemClickHandler = (id) => {
    this.props.navigation.navigate('MyIncomeScreen');
  }

  DATA = [
    {
      id: '1',
      title: '员工分销收益',
      icon: 'menuunfold',
      color: 'red',
      onItemClickHandler: this.onItemClickHandler,
    },
    {
      id: '2',
      title: '会员/访客分销收益',
      icon: 'setting',
      color: 'green',
      onItemClickHandler: this.onItemClickHandler,
    }    
  ]
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.incomeCalculatorTitleContionar}>
          <Text style={styles.calculatorTitle}>总待结算金额 (元)</Text>
          <Text style={styles.calculatorTitleDetail}>0.00</Text>
        </View>
        <View style={styles.imcomeCalculatorCardContainer}>
          <FlatList
            data={this.DATA}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
            style={styles.flatList}
          /> 
        </View>
      </View>
    )
  }
}
