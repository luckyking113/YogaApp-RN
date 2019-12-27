import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles';
import Font from 'App/Theme/Fonts';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  detailContainer:{
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,    
  },
  detailCard:{    
    paddingHorizontal:15,
    backgroundColor:'white',    
    // height:100, 
    justifyContent:'center',    
    borderRadius: 1,
    borderColor: '#ededed',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,    
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:20
  },
  cardLeftContent:{
    flexDirection:'row',
    justifyContent:'space-between',     
  },
  cardImage:{
    width:80,
    height:80,    
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  cardImage1:{    
    width:120,
    height:80,    
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  leftTxt:{
    marginLeft:15,
    alignItems:'flex-start',
    justifyContent:'space-between',    
  },
  image:{
    width:'100%',
    height:'100%'
  },
  cardRightContent:{
    justifyContent:'center',
    alignItems:'center'
  },
  topBtn:{    
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  },
  topBtnTxt:{
    color:'white',
    fontSize:Font.size.small
  },
  BottomBtn:{    
    height:25,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    borderColor:Colors.lightGreen,
    borderWidth:1,
  },
  bottomBtnTxt:{
    color:'rgba(0,0,0,0.6)',
    fontSize:Font.size.small
  },
  leftTxtFont:{
    fontSize:Font.size.medium,
    marginBottom:5
  }
})
