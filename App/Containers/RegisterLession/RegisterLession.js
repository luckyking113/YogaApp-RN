import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native';
import styles from './RegisterLessionStyles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SectionGrid } from 'react-native-super-grid';
import {STRINGS} from '../../Config';
import Colors from 'App/Theme/Colors';

const screenWidth = Math.round(Dimensions.get('window').width);

function Item({ item: { title, bgColor, icon, color, onPressHandler } }) {
  return (
    <View style={styles.detailCard}>
      <TouchableOpacity style={styles.cardLeftContent} onPress={onPressHandler}>
        <View style={styles.cardImage}>
          <Image style={styles.image} source={require('../../Assets/Images/homeIcon.png')} />
        </View>
        <View style={styles.leftTxt}>
          <Text style={styles.leftTxtFont}>盖华(会员)</Text>
          <Text style={styles.leftTxtFont}>老会员年卡</Text>
          <Text style={styles.leftTxtFont}>余额:289天</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.cardRightContent}>
        <TouchableOpacity style={styles.topBtn}>
          <Text style={styles.topBtnTxt}>签到</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BottomBtn}>
          <Text style={styles.bottomBtnTxt}>取消预约</Text>
        </TouchableOpacity>             
      </View>
    </View>
  )
}

export default class RegisterLession extends React.Component {
  goRegisterDetail = () => {
    this.props.navigation.navigate('RegisterDetail');
  }

  DATA = [
    {      
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
          data: [{a:2, b:3, c:8}],   
          onPressHandler:this.goRegisterDetail
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
          data: [{a:0, b:8, c:8}],    
          onPressHandler:this.goRegisterDetail
        },
        {
          oclick:'12:20-13:30',
          country:STRINGS.ClassTabs[0],
          detail: STRINGS.AppointmentDetail1, 
          State: '0/1/30',
          borderColor: 'transparent',
          bgColor:'#F79375',
          teacherName: STRINGS.TeacherName[0],
          progressState:30,  
          data: [{a:2, b:3, c:8}],   
          onPressHandler:this.goRegisterDetail
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
          data: [{a:0, b:8, c:8}],    
          onPressHandler:this.goRegisterDetail
        },
        {
          oclick:'12:20-13:30',
          country:STRINGS.ClassTabs[0],
          detail: STRINGS.AppointmentDetail1, 
          State: '0/1/30',
          borderColor: 'transparent',
          bgColor:'#F79375',
          teacherName: STRINGS.TeacherName[0],
          progressState:30,  
          data: [{a:2, b:3, c:8}],   
          onPressHandler:this.goRegisterDetail
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
          data: [{a:0, b:8, c:8}],    
          onPressHandler:this.goRegisterDetail
        },   
      ],
    },
  ]  

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.RegisterTop}>
            {/* <Text>{JSON.stringify(navigation.getParam('name'))}</Text> */}
            <Text style={styles.TopTxt}>{(navigation.getParam('detail'))} {(navigation.getParam('name'))}</Text>
            <Text style={styles.TopTxt}>{navigation.getParam('oclick')}</Text>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.detailCardHeader}>
              <Text style={styles.DetailTxt}>已签
                <Text style={{color:'#f25a38'}}>{navigation.getParam('state0')}</Text>
                人/预约
                <Text style={{color:Colors.lightGreen}}>{navigation.getParam('state1')}</Text>
                人
                </Text>
            </View>

            <SectionGrid
              itemDimension={screenWidth}
              sections={this.DATA}
              spacing={0}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Item item={item} />}              
            />
            
          </View>
        </View>
      </ScrollView>
    )
  }
}
