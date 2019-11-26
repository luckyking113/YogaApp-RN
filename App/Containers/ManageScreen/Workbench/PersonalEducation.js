import React from 'react'

import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import Icon from 'react-native-vector-icons/AntDesign'
import SegmentedControlTab from "react-native-segmented-control-tab";

import Colors from '../../../Theme/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'
import { ScreenWidth } from '../../../Theme/Styles'

import { StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress';
import { StackedBarChart } from 'react-native-svg-charts'
import { STRINGS } from '../../../Config';



function Item({ item: {id, title, starttime, endtime, stat, name, image, data, lcolor, onItemClickHandler } }) {
  
  if(data == undefined) {
    return (
      <View>
      </View>
    )
  }

  return (
    <TouchableOpacity onPress={() => onItemClickHandler(id)}>
      <View style={styles.tableCell}>
        <View style={{ width: 8, backgroundColor: lcolor }} />
        <View style={styles.tableCellData}>

          <View style={styles.datatableCellTime}>          
            <Text style={{width:110, padding:1}}>{starttime}-{endtime}</Text>
            <Text style={{backgroundColor:'#eeaa00', color:'white', padding:1}}> {stat} </Text>
          </View>
          <View style={styles.datatableCellTitle}>          
            <Text style={{width:250, padding:1}}>{title}</Text>
            <Text style={{width:50, color:Colors.subText, padding:1}}> {name} </Text>
            <Image style={{width: 20, height: 20, borderRadius:10}} source={{uri:image}} />
          </View>          

          <Text style={styles.datatableCellSubtitle}>{title}</Text>
          
          <View style={styles.datatableCellSubtitle}>
            {/* <Progress.Bar progress={0.3} width={ScreenWidth * 0.8} /> */}
            <StackedBarChart
                style={ { height: 6,  width: ScreenWidth * 0.8 } }
                keys={ [ 'a', 'b', 'c' ] }
                colors={ [ Colors.iconOrange, Colors.iconDGreen, Colors.lightGrey ] }
                data={ data }
                showGrid={ false }
                contentInset={ { top: 30, bottom: 30 } }
                horizontal={true}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const _today = new Date();

export default class PersonalEducation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      selectedIndex: 0,
      DATA: [{}],
    };
  }

  onTabChangedHandler = (id) => {
    this.setState({ selectedIndex: id });
    this.props.navigation.setParams({Title: '代约' + STRINGS.ClassTabs[id]});
  }

  onItemClickHandler = (id) => {

  }


  reloadData = () => {
    this.setState({DATA : [
      {
        id: '1', 
        title: 'Title', 
        starttime: '12:20', 
        endtime: '13:20', 
        stat: 'OK', 
        name: '小姜', 
        image: 'https://picsum.photos/200/300', 
        data: [{a:2, b:3, c:8}], 
        lcolor: '#f044aa',
        onItemClickHandler: this.onItemClickHandler,
      },
      {
        id: '2', 
        title: '我的房子', 
        starttime: '16:20', 
        endtime: '17:20', 
        stat: 'OK', 
        name: '高城兰', 
        image: 'https://picsum.photos/200/300', 
        data: [{a:0, b:8, c:8}], 
        lcolor: '#44f0aa',
        onItemClickHandler: this.onItemClickHandler,
      },
      {
        id: '3', 
        title: '我的房子', 
        starttime: '14:30', 
        endtime: '15:30', 
        stat: 'end', 
        name: '高城兰', 
        image: 'https://picsum.photos/200/300', 
        data: [{a:6, b:1, c:4}], 
        lcolor: '#44aaf0',
        onItemClickHandler: this.onItemClickHandler,
      },
    ]});
  }
  

  render() {
    return (
      <View>
        <View style = {{backgroundColor: Colors.primary, padding: 3, flexDirection: 'row',}}>
          <View style={{flex:0.15}}>
            
          </View>
          <View style={{flex:0.7}}>
            <SegmentedControlTab
              values={STRINGS.ClassTabs}
              selectedIndex={this.state.selectedIndex}
              onTabPress={this.onTabChangedHandler}
              tabsContainerStyle={{borderWidth: 0, backgroundColor: Colors.primary,}}
              tabTextStyle={{color: Colors.white}}
              tabStyle={{borderWidth: 0, backgroundColor: Colors.primary}}
              activeTabStyle={{backgroundColor: Colors.primary, borderBottomWidth: 4, borderBottomColor: Colors.white, color: Colors.white}}
            />            
          </View>
          <View style={{flex:0.15, justifyContent: 'center', alignItems: 'center',}}>
            <Icon name={'export'} size={25} color={Colors.white} ></Icon>
          </View>
        </View>
        <View>
          <CalendarStrip
            isChinese
            showWeekNumber
            selectedDate={this.state.selectedDate}
            onPressDate={(date) => {
              this.setState({ selectedDate: date });
              this.reloadData();              
            }}
            onPressGoToday={(today) => {
              this.setState({ selectedDate: today });
              this.reloadData();
            }}
            onSwipeDown={() => {
              alert('onSwipeDown');
            }}
            markedDate={[ moment(_today).format('YYYY-MM-DD') ]}
            weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
            ref={component => this._calendar = component}
          />
        </View>
        <SafeAreaView>
          <FlatList
            data={this.state.DATA}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
          />          
        </SafeAreaView>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({

  tableCell: {
    flex: 1,
    flexDirection: 'row',
    height: 110, 
  },
  datatableCellAvatar: {
    flex: 1,
    marginRight: 10,
    height: 30,
  },
  tableCellData: {
    flex: 1,
    padding: 5,
    paddingLeft: 30,
    width: ScreenWidth * 0.9,
    color: Colors.mainText, 
  },
  datatableCellTitle: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    width: ScreenWidth * 0.7,
    color: Colors.mainText, 
  },
  datatableCellTime: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    width: ScreenWidth * 0.7,
    color: Colors.mainText, 
  },
  datatableCellSubtitle: {
    flex: 1,
    padding: 5,
    width: ScreenWidth * 0.7,
    color: Colors.subText, 
  },

})