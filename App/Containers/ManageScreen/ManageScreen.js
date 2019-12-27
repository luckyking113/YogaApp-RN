import React from 'react'
import { Text, View, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { SectionGrid } from 'react-native-super-grid'

import styles from './ManageScreenStyle'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import Colors from '../../Theme/Colors'

import {STRINGS} from '../../Config'


function Item({ item: { title, icon, color, onPressHandler } }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPressHandler}>
      <Icon name={icon} size={30} color={color} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default class ManageScreen extends React.Component {

  //'工作台' session handlersv
  go2AgentMission = () => {
    this.props.navigation.navigate('AppointmentScreen');
  }
  go2PersonalEducation = () => {
    this.props.navigation.navigate('AppointmentScreen');
  }
  go2ScanCode = () => {
    this.props.navigation.navigate('ScanCode');
  }
  go2YogaHeadline = () => {
    this.props.navigation.navigate('OutMoneyScreen');
  }
  go2Configuration = () => {
    this.props.navigation.navigate('Configuration');
  }
  go2ExperienceManagement = () => {
    this.props.navigation.navigate('ExperienceManagement');
  }
  go2MemberSceen = () => {
    this.props.navigation.navigate('MemberScreen');
  }
  go2VisitorScreen = () => {
    this.props.navigation.navigate('VisitorScreen');
  } 

  DATA = [
    {
      title: STRINGS.WorkBench, //'工作台',
      data: [
        {
          title: STRINGS.AgentMission, //'代约团课' AgentMission
          icon: 'md-alarm',
          color: Colors.iconYellow,
          onPressHandler: this.go2AgentMission,
        },
        {
          title: STRINGS.PersonalEducation, //'代约私教' PersonalEducation
          icon: 'md-body',
          color: Colors.iconPink,
          onPressHandler: this.go2PersonalEducation,
        },
        {
          title: STRINGS.ScanCode, //'扫码签到' ScanCode
          icon: 'ios-qr-scanner',
          color: Colors.iconGreen,
          onPressHandler: this.go2ScanCode,
        },
        {
          title: STRINGS.YogaHeadline, //'瑜伽头条' YogaHeadline
          icon: 'ios-basket',
          color: Colors.iconFire,
          onPressHandler: this.go2YogaHeadline,
        },
        {
          title: STRINGS.Configuration, //'小程序配置' Configuration
          icon: 'ios-infinite',
          color: Colors.iconYellow,
          onPressHandler: this.go2Configuration,
        },
        {
          title: STRINGS.ExperienceManagement, //'体验课管理' ExperienceManagement
          icon: 'ios-rocket',
          color: Colors.iconPink,
          onPressHandler: this.go2ExperienceManagement,
        },
      ],
    },
    {
      title: STRINGS.Member + '/' + STRINGS.Visitor + STRINGS.Manage, //'会员/访客管理',
      data: [
        {
          title: STRINGS.Member, //'会员',
          icon: 'ios-bookmark',
          color: Colors.iconYellow,
          onPressHandler: this.go2MemberSceen,
        },
        {
          title: STRINGS.Visitor, //'访客',
          icon: 'ios-contact',
          color: Colors.iconPink,
          onPressHandler: this.go2VisitorScreen
        },
        {
          title: STRINGS.MemberCard, //'会员卡',
          icon: 'ios-card',
          color: Colors.iconGreen,
        },
        {
          title: STRINGS.MemberCard + STRINGS.Name, //'会员卡名称',
          icon: 'ios-calendar',
          color: Colors.iconFire,
        },
      ],
    },
    {
      title: STRINGS.Course + STRINGS.Manage, //'课程管理',
      data: [
        {
          title: STRINGS.Course + STRINGS.Manage, //'课程管理',
          icon: 'ios-book',
          color: Colors.iconYellow,
        },
        {
          title: STRINGS.GroupSchedule, //'团课课程表',
          icon: 'ios-calendar',
          color: Colors.iconPink,
        },
        {
          title: STRINGS.ClassFee + STRINGS.Setting, //'课时费设置',
          icon: 'ios-cellular',
          color: Colors.iconGreen,
        },
        {
          title: STRINGS.CourseEvaluation, //'课程评价',
          icon: 'ios-chatboxes',
          color: Colors.iconFire,
        },
      ],
    },
    {
      title: STRINGS.Venue + STRINGS.Manage, //'场馆管理',
      data: [
        {
          title: STRINGS.Venue + STRINGS.Manage, //'场馆管理',
          icon: 'ios-home',
          color: Colors.iconYellow,
        },
        {
          title: STRINGS.Classroom + STRINGS.Manage, //'教室管理',
          icon: 'ios-albums',
          color: Colors.iconPink,
        },
        {
          title: STRINGS.Employee + '/' + STRINGS.Coach, //'员工/教练',
          icon: 'ios-contacts',
          color: Colors.iconGreen,
        },
        {
          title: STRINGS.Announcement + STRINGS.Manage, //'公告管理',
          icon: 'ios-megaphone',
          color: Colors.iconFire,
        },
        {
          title: STRINGS.Venuespace, 
          icon: 'ios-photos',
          color: Colors.iconFire,
        },
        {
          title: STRINGS.Recruitment,
          icon: 'ios-filing',
          color: Colors.iconFire,
        },
      ],
    },

    {
      title: STRINGS.StatisticalReport ,
      data: [
        {
          title: STRINGS.CardSalesStatistics,
          icon: 'ios-cash',
          color: Colors.iconYellow,
        },
        {
          title: STRINGS.BusinessStatistics,
          icon: 'ios-stats',
          color: Colors.iconPink,
        },
        {
          title: STRINGS.ConsumptionCardRanking,
          icon: 'md-card',
          color: Colors.iconGreen,
        },
        {
          title: STRINGS.ClassHourFeeStatistics,
          icon: 'md-checkbox-outline',
          color: Colors.iconFire,
        },
        {
          title: STRINGS.CardIssuance, 
          icon: 'md-podium',
          color: Colors.iconFire,
        },
        {
          title: STRINGS.CollectionStatistics,
          icon: 'md-wallet',
          color: Colors.iconFire,
        },
      ],
    },
  ]

  render() {
    return (
      <ScrollView>   
        <View style={styles.container}>
          <SectionGrid
            itemDimension={70}
            sections={this.DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item item={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        </View>
      </ScrollView>
    )
  }
}
