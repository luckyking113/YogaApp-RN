import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  loginContainer: {
    ...ApplicationStyles.screen.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    backgroundColor: 'white',
  },
  loginContent:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:"100%",    
  },
  loginInput:{
    height:50,
    width:'80%',
    backgroundColor:'rgba(255,255,255,0.8)', 
    marginBottom:20,    
  },
  loginBtn:{
    height:50,
    width:'100%',
    backgroundColor:'#79ECB3', 
    justifyContent:'center',
    alignItems:'center',    
  },  
})
