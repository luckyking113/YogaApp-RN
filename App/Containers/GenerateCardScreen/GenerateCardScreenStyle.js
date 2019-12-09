import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import { white } from 'ansi-colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainer:{
    flex:1,    
    backgroundColor:'#f5f5f5',    
  },

  lineView:{
    width:5000, height:1, backgroundColor:'#e0e0e0'
  },

  itemView:{
    backgroundColor:'white', marginLeft:-10, marginRight: -10, padding: 10
  },

  textGrayFontColor:{
    color: '#a0a0a0'
  }, 

  generalTextColor:{
    color: '#505050'
  }

})
