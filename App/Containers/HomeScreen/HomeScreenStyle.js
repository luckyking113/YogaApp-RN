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
    // textAlign:'center',
    alignItems:'center',    
  },
  tabItemBtn:{    
    justifyContent: 'center',
    alignItems: 'center' 
  },
  operateContainer:{
    flexDirection:'column',    
  },
  operateContent:{
    height:50,
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor:'white',
    marginTop:10,
    paddingHorizontal:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  statisticalTxt:{
    color:'#81F0B9',
    marginRight:10,
  },
  operateBrefContent:{
    paddingHorizontal:7,
  },
  operateBrefItems:{
    width:'48%',
    textAlign:'center',
    alignItems:'center',
  },

  appointmentDetail:{
    width:'100%'
  }, 

  monthlySailContent:{
    height:50,
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor:'white',
    marginTop:10,
    paddingHorizontal:15,    
    flexDirection:'row',
    justifyContent:'space-between'
  },

  datatableCellSubtitle: {
    flex: 1,    
    width: '100%',
    color: Colors.subText, 
    marginTop:5,
  },
})
