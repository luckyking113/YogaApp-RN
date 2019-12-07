import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles';
import Font from 'App/Theme/Fonts';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',  
    flex:1,    
  },
  RegisterTop:{
    backgroundColor:Colors.lightGreen,
    height:100,
    justifyContent:'space-between',
    flexDirection:'row',    
    paddingHorizontal:10,
    alignItems:'center'    
  },
  TopTxt:{
    fontSize:Font.size.regular,
    color:Colors.white,
  },
  detailContainer:{
    paddingHorizontal:10, 
    marginTop: -30   
  },
  DetailTxt:{
    fontSize:Font.size.h5,
    color:Colors.black,
  }
})
