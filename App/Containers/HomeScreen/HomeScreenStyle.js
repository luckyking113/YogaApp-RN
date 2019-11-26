import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',        
  },
  homeSlideContainer: {
    flex:1,
  },
  homeContainer:{
    flex:3,    
  },
  tabContainer:{
    flex:1,
    flexDirection:'row',    
    justifyContent: 'space-around',        
    backgroundColor:'white',
    width:'100%',
    paddingVertical:8
  },
  tabItemContainer:{
    width:'22%',
    textAlign:'center',
    alignItems:'center',    
  },
  tabItemBtn:{    
    justifyContent: 'center',
    alignItems: 'center' 
  }
})
