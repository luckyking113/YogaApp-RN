import { StyleSheet } from 'react-native';
import Colors from 'App/Theme/Colors';
import ApplicationStyles from 'App/Theme/ApplicationStyles';


export default StyleSheet.create({
  headerContainer: {    
    ...ApplicationStyles.screen.headerContainer,
    paddingHorizontal:20,   
    flexDirection:'row',    
  },
  imageContainer:{
    flex:1,
    alignSelf:'center'
  },
  dropDownBtnContainer:{
    flex:2,
    alignSelf:'center',
    marginLeft:'9%'
  }
})
