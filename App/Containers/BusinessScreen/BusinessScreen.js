import React from 'react'
import { Text, View } from 'react-native'
import styles from './BusinessScreenStyle'

import Icon from 'react-native-vector-icons/Ionicons'
import { SectionGrid } from 'react-native-super-grid'
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

export default class BusinessScreen extends React.Component {

  //'工作台' session handlers
  go2AgentMission = () => {
    this.props.navigation.navigate('AgentMission');
  }
  go2PersonalEducation = () => {
    this.props.navigation.navigate('PersonalEducation');
  }
  go2ScanCode = () => {
    this.props.navigation.navigate('ScanCode');
  }
  go2YogaHeadline = () => {
    this.props.navigation.navigate('YogaHeadline');
  }
  go2Configuration = () => {
    this.props.navigation.navigate('Configuration');
  }
  go2ExperienceManagement = () => {
    this.props.navigation.navigate('ExperienceManagement');
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
        },
        {
          title: STRINGS.Visitor, //'访客',
          icon: 'ios-contact',
          color: Colors.iconPink,
        },
        {
          title: STRINGS.MemberCard, //'会员卡',
          icon: 'ios-card',
          color: Colors.iconGreen,
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
