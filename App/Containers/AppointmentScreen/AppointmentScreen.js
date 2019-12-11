import React from 'react';
import { Text, View } from 'react-native';
import styles from './AppointmentScreenStyle';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import moment from 'moment';
import AppointmentList from '../../Components/AppointmentList/AppointmentList';

const _today = new Date();

export default class AppointmentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      selectedIndex: 0,
      DATA: [{}],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calendarContainer}>
          <CalendarStrip
            isChinese
            showWeekNumber
            selectedDate={this.state.selectedDate}
            onPressDate={(date) => {
              this.setState({ selectedDate: date });
              // this.reloadData();              
            }}
            onPressGoToday={(today) => {
              this.setState({ selectedDate: today });
              // this.reloadData();
            }}
            onSwipeDown={() => {
              alert('onSwipeDown');
            }}
            markedDate={[ moment(_today).format('YYYY-MM-DD') ]}
            weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
            ref={component => this._calendar = component}
          />
        </View>
        <View style={{marginTop:10}}>
          <AppointmentList navigation = {this.props.navigation}/>
        </View>
      </View>
    )
  }
}
