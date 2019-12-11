import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',    
    alignItems: 'center',
  },
  calendarContainer:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',    
  }
})
