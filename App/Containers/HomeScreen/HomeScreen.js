import React from 'react';
import { StyleSheet,Text, View, ScrollView, Dimensions } from 'react-native';
import styles from './HomeScreenStyle';
import { SliderBox } from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/Ionicons';
import { SectionGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../Theme/Colors';
import {STRINGS} from '../../Config';

var screenHeight = Dimensions.get('window').height; 

function Item({ item: { title, bgColor, icon, color, onPressHandler } }) {
  return (
    <TouchableOpacity style={styles.tabItemBtn} onPress={onPressHandler}>
      <View style={{width:50, height:50, borderRadius:15, justifyContent: 'center', alignItems: 'center', backgroundColor:bgColor }}>        
        <Icon name={icon} size={30} color={color} />        
      </View>            
      <Text style={styles.title}>{title}</Text>      
    </TouchableOpacity>
  )
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',        
      ]
    };
  }

  goBookingScreen = () => {
    this.props.navigation.navigate('BookingScreen');
  }
  goAssignedScreen = () => {
    this.props.navigation.navigate('AssignedScreen');
  }
  goMemberScreen = () => {
    this.props.navigation.navigate('MemberScreen');
  }
  goVisitorScreen = () => {
    this.props.navigation.navigate('VisitorScreen');
  }

  DATA = [
    {
      title: STRINGS.WorkBench, //'工作台',
      data: [
        {
          title: STRINGS.Booking, //'代约团课' AgentMission
          icon: 'ios-calendar',
          color: 'white',
          bgColor:'#F79375',
          onPressHandler: this.goBookingScreen,
        },
        {
          title: STRINGS.Assigned, //'代约私教' PersonalEducation
          icon: 'ios-checkbox-outline',
          color: 'white',
          bgColor:'#F7C97D',
          onPressHandler: this.goAssignedScreen,
        },
        {
          title: STRINGS.Member, //'扫码签到' ScanCode
          icon: 'ios-person',
          color: 'white',
          bgColor:'#73F583',
          onPressHandler: this.goMemberScreen,
        },
        {
          title: STRINGS.Visitor, //'瑜伽头条' YogaHeadline
          icon: 'ios-ribbon',
          color: 'white',
          bgColor:'#63D9E5',
          onPressHandler: this.goVisitorScreen,
        },       
      ],
    },
  ]

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>                
          <View style={styles.homeSlideContainer}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={screenHeight/4}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
            />
          </View>
          <View style={styles.homeContainer}>
            <View style = {styles.tabContainer}>
              <SectionGrid
                itemDimension={60}
                sections={this.DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item item={item} />}
                itemContainerStyle = {styles.tabItemContainer}
                // renderSectionHeader={({ section: { title } }) => (
                //   <Text style={styles.sectionHeader}>{title}</Text>
                // )}
              />        
            </View>            
          </View>          
        </View>
      </ScrollView>
    )
  }
}