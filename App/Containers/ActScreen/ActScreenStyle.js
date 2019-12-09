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
  actionContainer:{
    flex:1,    
    backgroundColor:'#ededed',    
  },
  actionListBtn:{    
    backgroundColor:'white',
    height:60,    
    marginHorizontal:5,    
    padding:15,
    justifyContent: 'center',  
    borderRadius:5,    
  },
  actionListContainer:{
    flex:1,    
    flexDirection:'column',
    justifyContent:'space-between'
  },  

})
