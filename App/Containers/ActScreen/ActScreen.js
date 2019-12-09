import React from 'react'
import { Text, View, Button, Image } from 'react-native'
import styles from './ActScreenStyle';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SectionGrid } from 'react-native-super-grid';
import {STRINGS} from '../../Config';
import Icon from 'react-native-vector-icons/Ionicons';

function Item({ item: { title, bgColor, icon, iconColor, onPressHandler } }) {
  return (
    <TouchableOpacity style={styles.actionListBtn} onPress={onPressHandler}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={{backgroundColor:bgColor, borderRadius:50, width:30, height:30, justifyContent:'center',alignItems:'center'}}>
            <Icon name={icon} size={20} color={iconColor} /> 
          </View>          
          <Text style={{marginLeft:20}}>{title}</Text>
        </View>
        <View style={{alignSelf:'center'}}>
          <Icon name='ios-arrow-forward' size={18} color='#B8B8B8' />
        </View>
      </View>      
    </TouchableOpacity>  
  )
}

export default class ActScreen extends React.Component {
  goNotificationScreen = () => {
    this.props.navigation.navigate('SystemNotificationScreen');
  }

  goAssistantScreen = () => {
    this.props.navigation.navigate('SystemNotificationScreen');
  }

  goNoClassDaysScreen = () => {
    this.props.navigation.navigate('NoClassDaysScreen');
  }

  goGenerateCardScreen = () => {
    this.props.navigation.navigate('GenerateCardScreen');
  }
  DATA = [
    {
      title: STRINGS.WorkBench, //'工作台',
      data: [
        {
          title: STRINGS.SystemNotification, 
          icon: 'ios-notifications-outline',
          iconColor: 'white',
          bgColor:'#F79375',
          onPressHandler: this.goNotificationScreen,
        },
        {
          title: STRINGS.MarketingAssistant, 
          icon: 'md-help-circle-outline',
          iconColor: 'white',
          bgColor:'#F7C97D',
          onPressHandler: this.goAssistantScreen,
        },
        // {
        //   title: STRINGS.MembershipPeriod,
        //   icon: 'ios-calendar',
        //   iconColor: 'white',
        //   bgColor:'#73F583',
        //   onPressHandler: this.goMembershipPeriodScreen,
        // },
        // {
        //   title: STRINGS.MemberBirth, 
        //   icon: 'ios-heart-empty',
        //   iconColor: 'white',
        //   bgColor:'#63D9E5',
        //   onPressHandler: this.goMemberBirthScreen,
        // },  
        // {
        //   title: STRINGS.MembershipCard, 
        //   icon: 'md-card',
        //   iconColor: 'white',
        //   bgColor:'#F2A482',
        //   onPressHandler: this.goMembershipCardScreen,
        // },
        {
          title: STRINGS.NoClassDays, 
          icon: 'md-calendar',
          iconColor: 'white',
          bgColor:'#F2C282', 
          onPressHandler: this.goNoClassDaysScreen,
        },
        // {
        //   title: STRINGS.InvestIgatIonsDay,
        //   icon: 'md-happy',
        //   iconColor: 'white',
        //   bgColor:'#A1F282',
        //   onPressHandler: this.goInvestIgatIonsDayScreen,
        // },
        // {
        //   title: STRINGS.NoClassNotification, 
        //   icon: 'ios-megaphone',
        //   iconColor: 'white',
        //   bgColor:'#5EDAAF',
        //   onPressHandler: this.goNoClassNotificationScreen,
        // },
        {
          title: STRINGS.GenerateCard, 
          icon: 'ios-person',
          iconColor: 'white',
          bgColor:'#5ED1DA',
          onPressHandler: this.goGenerateCardScreen,
        },     
        {
          title: STRINGS.ReplyNotify, 
          icon: 'ios-share-alt',
          iconColor: 'white',
          bgColor:'#D371E1',
          onPressHandler: this.goReplyNotifyScreen,
        },    
        {
          title: STRINGS.OpenCard, 
          icon: 'md-open',
          iconColor: 'white',
          bgColor:'#DE6685',
          onPressHandler: this.goOpenCardScreen,
        },    
        {
          title: STRINGS.RestEndDay, 
          icon: 'ios-restaurant',
          iconColor: 'white',
          bgColor:'#E17171',
          onPressHandler: this.goRestEndDayScreen,
        },    
      ],
    },
  ]
  onPressHandler = () => {
    alert('test');
  }
  render() {
    return (
      <ScrollView style={styles.actionContainer}>      
        <SectionGrid
          itemDimension={340}
          spacing = {8}
          sections={this.DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item item={item} />}
          // itemContainerStyle = {styles.tabItemContainer}
          // renderSectionHeader={({ section: { title } }) => (
          //   <Text style={styles.sectionHeader}>{title}</Text>
          // )}
        />                  
      </ScrollView>
    )
  }
}
