import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Metrics from '../../Theme/Metrics'
import Fonts from '../../Theme/Fonts'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex:1,    
    justifyContent: 'center',
    alignItems: 'center',

  },  
  messageManagementContainer: {
    ...ApplicationStyles.screen.container,
    flex:1,        
    alignItems: 'center',    
  },  
  messageManagementTxt:{
    color:'white',
    fontSize:12,
  },
  messageManagementCard:{
    paddingVertical:15, 
    paddingHorizontal:10, 
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:7
  },
  flatList:{
    width:'100%',
    paddingVertical:5,
    paddingHorizontal:10,
  },  
  ItemContainer:{
    backgroundColor:'white',
    marginBottom:5,
    borderRadius:4,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,    
  },
  configtableCell:{
    flexDirection:'row',    
    justifyContent:'space-between',
    alignItems:'center',    
    padding:10
  }
})
