import React from 'react';
import { StyleSheet,Text, View, Image,ScrollView, Dimensions, StatusBar } from 'react-native';
import styles from './HomeScreenStyle';
import { SliderBox } from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/Ionicons';
import { SectionGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../Theme/Colors';
import {STRINGS} from '../../Config';

import { ProgressBar } from 'react-native-paper';

// import { SuperGridSectionList } from 'react-native-super-grid';

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

function StatisticalItem({ item: {statisticalNumber, title, bgColor } }) {
  return (    
    <View style={{width:'100%', height:80, borderRadius:8, backgroundColor:'white',justifyContent: 'center', alignItems: 'center', borderLeftWidth: 6, borderLeftColor:bgColor }}>        
      <Text style={{color:bgColor, fontSize:20}}>{statisticalNumber}</Text>      
      <Text style={styles.title}>{title}</Text>      
    </View>
  )
}

function AppointmentItem({ item: {teacherName,country, oclick, detail,State, bgColor } }) {
  return (    
    <View style={{width:'100%',flexDirection:'row', paddingHorizontal:50,height:100, borderRadius:0,justifyContent: 'space-between', alignItems: 'center', borderLeftWidth: 6, borderLeftColor:bgColor }}>          
      <View style={{flexDirection:'row', width:'100%',justifyContent: 'space-between'}}>
        <View>
          <View style={{flexDirection:'row'}}>
            <Text style={{}}>{oclick}</Text>
            <View style={{backgroundColor:'#F7C97D',marginLeft:15,alignItems:'center', justifyContent:'center',width:40}}>
              <Text style={{}}>{country}</Text>   
            </View>          
          </View>        
          <Text style={styles.title}>{detail}</Text>
          <Text style={styles.title}>{State}</Text>      
        </View>
        <View>
          <View style={{justifyContent:'flex-end',marginTop:0, alignItems:'center',flexDirection:'row'}}>
            <Text>{teacherName}</Text>
            <Image
              style={{width: 30, height: 30, marginLeft:10}}
              source={require('../../Assets/Images/homeIcon.png')}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
      ],      
    };
  }

  goBookingScreen = () => {    
    this.props.navigation.navigate('AgentMission');
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

  todayOperate = () => {    
    this.props.navigation.navigate('StatisticalScreen');
  }

  monthlySail = () => {    
    this.props.navigation.navigate('MonthlySailScreen');
  }

  todayAppointment = () => {    
    this.props.navigation.navigate('AppointmentScreen');
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

  StatisticalItems = [
    {
      title: STRINGS.WorkBench, //'工作台',
      data: [
        {
          title: STRINGS.CreditCard,           
          statisticalNumber:0,
          color: 'white',
          bgColor:'#F79375',          
        },
        {
          title: STRINGS.CashAmount,  
          statisticalNumber:0,     
          color: 'white',
          bgColor:'#F7C97D',          
        }, 
        {
          title: STRINGS.StoreCard,
          statisticalNumber:0,
          color: 'white',
          bgColor:'#78EFB4',          
        },
        {
          title: STRINGS.SolidAmount,
          statisticalNumber:0,
          color: 'white',
          bgColor:'#78CBEF',          
        },
        {
          title: STRINGS.NewMember, 
          statisticalNumber:0,   
          color: 'white',
          bgColor:'#AA78EF',          
        },
        {
          title: STRINGS.NewVisitor,
          statisticalNumber:1,       
          color: 'white',
          bgColor:'#EF78BD',          
        }, 
        {
          title: STRINGS.AddVisitorLectures, 
          statisticalNumber:20,      
          color: 'white',
          bgColor:'#58EE56',          
        },
        {
          title: STRINGS.PrivateAppointment,
          statisticalNumber:0,     
          color: 'white',
          bgColor:'#56E2EE',          
        }, 
      ],
    },
  ]

  AppointmentItems = [
    {
      title: STRINGS.WorkBench, //'工作台',
      data: [
        {
          oclick:'12:20-13:30',
          country:STRINGS.ClassTabs[0],
          detail: STRINGS.AppointmentDetail1, 
          State: '0/1/30',
          borderColor: 'transparent',
          bgColor:'#F79375',
          teacherName: STRINGS.TeacherName[0],
          progressState:30,      
        },
        {
          oclick:'12:20-13:30',
          country:STRINGS.ClassTabs[0],
          detail: STRINGS.AppointmentDetail1, 
          State: '6/6/12',
          borderColor: 'transparent',
          bgColor:'#F7C97D',
          teacherName: STRINGS.TeacherName[1],
          progressState:30,      
        },
        {
          oclick:'12:20-13:30',
          country:STRINGS.ClassTabs[0],
          detail: STRINGS.AppointmentDetail1, 
          State: '7/7/12',
          borderColor: 'transparent',
          bgColor:'#78EFB4',
          teacherName: STRINGS.TeacherName[2],
          progressState:30,      
        },    
      ],
    },
  ]  

  render() {
    return (
      <ScrollView>        
        <StatusBar backgroundColor="#79ECB3" />
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
            <View style={styles.operateContainer}>
              <View style={styles.operateContent}>
                <Text>{STRINGS.TodayOperate}</Text>
                <TouchableOpacity onPress={this.todayOperate}>
                  <View style={{flexDirection:'row'}}>                
                    <Text style={styles.statisticalTxt}>{STRINGS.StatisticalSpecification}</Text>
                    <Icon name='ios-arrow-forward' size={18} color='#81F0B9' />
                  </View>                
                </TouchableOpacity>
              </View> 

              <View style={styles.operateBrefContent}>
                <SectionGrid
                  itemDimension={120}
                  spacing={8}
                  sections={this.StatisticalItems}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => <StatisticalItem item={item} />}
                  // itemContainerStyle = {styles.operateBrefItems}   
                />  
              </View>  

              <TouchableOpacity style={styles.monthlySailContent} onPress={this.monthlySail}>
                <Text>{STRINGS.MonthlySailTxt}</Text>
                <View >
                  <View style={{flexDirection:'row'}}>                    
                    <Icon name='ios-arrow-forward' size={18} color='#81F0B9' />
                  </View>                
                </View>
              </TouchableOpacity>

              {/* Appointment screen */}
              <View>                
                <View style={styles.operateContent}>
                  <Text>{STRINGS.TodaysAppointment}</Text>
                  <TouchableOpacity onPress={this.todayAppointment}>
                    <View style={{flexDirection:'row'}}>                
                      <Text style={styles.statisticalTxt}>{STRINGS.More}</Text>
                      <Icon name='ios-arrow-forward' size={18} color='#81F0B9' />
                    </View>                
                  </TouchableOpacity>
                </View> 
                <View style={styles.appointmentDetail}>
                  <SectionGrid
                    itemDimension={200}
                    spacing={0}
                    sections={this.AppointmentItems}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <AppointmentItem item={item} />}
                    // itemContainerStyle = {styles.appointmentDetailItems}   
                  />  
                </View>
              </View>
            </View>            
          </View>          
        </View>
      </ScrollView>
    )
  }
}