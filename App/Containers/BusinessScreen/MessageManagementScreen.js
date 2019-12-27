import React from 'react';

import { Switch, SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './BusinessCustomStyle';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Colors from '../../Theme/Colors';

export default class MessageManagementScreen extends React.Component {
  state = {
    switchValue:false,
    switchValue1:true,
    switchValue2:false,
  }
  toggleSwitch = (Value) => {
    this.setState({switchValue: Value})
  }
  toggleSwitch1 = (Value) => {
    this.setState({switchValue1: Value})
  }
  toggleSwitch2 = (Value) => {
    this.setState({switchValue2: Value})
  }
  render() {
    return (
      <View style={styles.messageManagementContainer}>
        <View style={{padding:10,backgroundColor:Colors.lightGreen, width:'100%', alignItems:'center'}}>
          <Text style={styles.messageManagementTxt}>当前余额(条)</Text>
          <Text style={[styles.messageManagementTxt,{fontSize:35, color:'yellow', marginTop:10}]}>0.00</Text>
          <TouchableOpacity style={{backgroundColor:'#fa6e32', marginTop:10,paddingVertical:3, paddingHorizontal:15,borderRadius:10,}}>
            <Text style={styles.messageManagementTxt}>充值</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name='pay-circle-o1' size={15} color='white' />
              <Text style={[styles.messageManagementTxt,{marginLeft:5}]}>充值记录</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Icon name='mail' size={15} color='white' />
              <Text style={[styles.messageManagementTxt,{marginLeft:5}]}>短信发送记录</Text>
            </View>
          </View>
        </View>
        <ScrollView style={{flex:1, width:'100%'}}>
          <Text style={[styles.messageManagementTxt,{color:'rgba(0,0,0,.6)',marginLeft:10, marginVertical:5}]}>约课通知 (团课)</Text>
          <View style={styles.messageManagementCard}>
            <View style={{flexDirection:'row'}}>
              <Text>团课预约成功提醒</Text>
              <Text style={{marginLeft:10, color:Colors.lightGreen}}>查看模板</Text>
            </View>
            <View style={{marginTop:-5}}>
              <Switch
                style={{margin:0}}
                onValueChange = {this.toggleSwitch}
                value = {this.state.switchValue}/>
            </View>
          </View>
          <View style={styles.messageManagementCard}>
            <View style={{flexDirection:'row'}}>
              <Text>团课预约成功提醒</Text>
              <Text style={{marginLeft:10, color:Colors.lightGreen}}>查看模板</Text>
            </View>
            <View style={{marginTop:-5}}>
              <Switch
                style={{margin:0}}
                onValueChange = {this.toggleSwitch1}
                value = {this.state.switchValue1}/>
            </View>
          </View>
          <View style={styles.messageManagementCard}>
            <View style={{flexDirection:'row'}}>
              <Text>团课开课前提醒</Text>
              <Text style={{marginLeft:10, color:Colors.lightGreen}}>查看模板</Text>
            </View>
            <View style={{marginTop:-5}}>
              <Switch
                style={{margin:0}}
                onValueChange = {this.toggleSwitch2}
                value = {this.state.switchValue2}/>
            </View>
          </View>   
        </ScrollView>
      </View>
    )
  }
}
