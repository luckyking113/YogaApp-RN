import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native';
import styles from './AppointmentListStyles';
import Colors from '../../Theme/Colors';
import { SectionGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {STRINGS} from '../../Config';
import { StackedBarChart } from 'react-native-svg-charts';

const screenWidth = Math.round(Dimensions.get('window').width);

function AppointmentItem({ item: {teacherName,country, data, oclick, detail,state, bgColor,onPressHandler } }) {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={{width:'100%',flexDirection:'column', paddingHorizontal:50,height:100, borderRadius:0,justifyContent: 'space-between', paddingTop:18, alignItems: 'center', borderLeftWidth: 6, borderLeftColor:bgColor }}>          
        <View style={{flexDirection:'row', width:'100%',justifyContent: 'space-between'}}>
          <View>
            <View style={{flexDirection:'row'}}>
              <Text>{oclick}</Text>
              <View style={{backgroundColor:'#F7C97D',marginLeft:15,alignItems:'center', justifyContent:'center',width:40}}>
                <Text>{country}</Text>
              </View>          
            </View>        
            <Text style={styles.title}>{detail}</Text>
            <Text style={styles.title}>{state[0]}/{state[1]}/{state[2]}</Text>      
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
        <View style={styles.datatableCellSubtitle}>        
          <StackedBarChart
              style={ { height: 5,  width: '100%' }}
              keys={ [ 'a', 'b', 'c' ] }
              colors={ [ Colors.iconOrange, Colors.iconDGreen, Colors.lightGrey ] }
              data={ data }
              showGrid={ false }
              contentInset={ { top: 30, bottom: 30 } }
              horizontal={true}
          />
        </View>  
      </View>
    </TouchableOpacity>
  )
}

export default class AppointmentList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      AppointmentItems:[
        {      
          data: [
            {
              oclick:'12:20-13:30',
              country:STRINGS.ClassTabs[0],
              detail: STRINGS.AppointmentDetail1, 
              state: [0, 4, 14],
              borderColor: 'transparent',
              bgColor:'#F79375',
              teacherName: STRINGS.TeacherName[0],
              progressState:30,  
              data: [{a:2, b:3, c:8}],   
              onPressHandler:this.goRegisterLessionScreen       
            },
            {
              oclick:'14.30-15:40',
              country:STRINGS.ClassTabs[0],
              detail: STRINGS.AppointmentDetail1, 
              state: [0,8,18],
              borderColor: 'transparent',
              bgColor:'#F7C97D',
              teacherName: STRINGS.TeacherName[1],
              progressState:30,  
              data: [{a:0, b:8, c:8}],    
              onPressHandler:this.goRegisterLessionScreen1
            },
            {
              oclick:'18:30-19:40',
              country:STRINGS.ClassTabs[0],
              detail: STRINGS.AppointmentDetail1, 
              // state: '7/7/12',
              state: [0,8,30],
              borderColor: 'transparent',
              bgColor:'#78EFB4',
              teacherName: STRINGS.TeacherName[2],
              progressState:30,    
              data: [{a:6, b:1, c:4}], 
              onPressHandler:this.goRegisterLessionScreen2
            },    
          ],
        },
      ]
    }
  }

  goRegisterLessionScreen = () => {
    this.props.navigation.navigate('RegisterLession',{
      detail:this.state.AppointmentItems[0].data[0].detail,
      name:this.state.AppointmentItems[0].data[0].teacherName,
      oclick:this.state.AppointmentItems[0].data[0].oclick,
      state0:this.state.AppointmentItems[0].data[0].state[0],
      state1:this.state.AppointmentItems[0].data[0].state[1],
    });    
  }

  goRegisterLessionScreen1 = () => {
    this.props.navigation.navigate('RegisterLession',{
      detail:this.state.AppointmentItems[0].data[1].detail,
      name:this.state.AppointmentItems[0].data[1].teacherName,
      oclick:this.state.AppointmentItems[0].data[1].oclick,
      state0:this.state.AppointmentItems[0].data[1].state[0],
      state1:this.state.AppointmentItems[0].data[1].state[1],
    });    
  }  

  goRegisterLessionScreen2 = () => {
    this.props.navigation.navigate('RegisterLession',{
      detail:this.state.AppointmentItems[0].data[2].detail,
      name:this.state.AppointmentItems[0].data[2].teacherName,
      oclick:this.state.AppointmentItems[0].data[2].oclick,
      state0:this.state.AppointmentItems[0].data[2].state[0],
      state1:this.state.AppointmentItems[0].data[2].state[1],
    });    
  }  

  render() {
    return (
      <SectionGrid
        itemDimension={screenWidth}
        spacing={0}
        sections={this.state.AppointmentItems}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <AppointmentItem item={item} />}          
      />
    )
  }
}
