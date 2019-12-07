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
  NotificationContainer:{
    width:'100%',    
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',    
  },
  cardContainer:{
    width:'100%',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',    
    borderRadius:8,  
    marginTop:10,
    padding:10,
  },
  dateFont:{
    color:'white',
  },
  titleContent:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#dbdbdb',
    paddingHorizontal:30,
    paddingVertical:2,
    borderRadius:10,    
  },
  imageContainer:{
    width:'100%',
    height:180,
    
  }

})
