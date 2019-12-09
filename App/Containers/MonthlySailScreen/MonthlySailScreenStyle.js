import { StyleSheet } from 'react-native';
import Colors from 'App/Theme/Colors';
import ApplicationStyles from 'App/Theme/ApplicationStyles';
import Fonts from 'App/Theme/Fonts';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',
  },
  titleContainer:{
    backgroundColor:Colors.lightGreen,
    height: 90,
    paddingHorizontal:10,
    justifyContent:'flex-end',
    paddingBottom:60,
  },
  detailContainer:{
    paddingHorizontal:10,
    marginTop:-50,    
    flex:1,
  },

  detailTitleContainer:{    
    backgroundColor:'white',
    padding:10,
    height:51,
    borderTopLeftRadius:7,
    borderTopRightRadius:7,
    borderBottomColor:'rgba(0,0,0,0.1)',
    borderBottomWidth:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  detailView:{
    backgroundColor:'white',
    padding:10,
    height:150,
    borderBottomRightRadius:7,
    borderBottomLeftRadius:7,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  titleFont:{
    color:'white',
    fontSize:Fonts.size.regular,
  },
  detailTitleFont:{
    fontSize:Fonts.size.regular,
  },
  detailTitleFontNum:{
    fontSize:Fonts.size.regular,
    color:Colors.lightGreen
  }
})
