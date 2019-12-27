import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Metrics from '../../../Theme/Metrics'
import Font from 'App/Theme/Fonts';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex:1,    
  },
  incomeContainer: {
    ...ApplicationStyles.screen.container,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  incomeTitle:{
    backgroundColor:'white',
    paddingVertical:25,
    paddingHorizontal:80,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  incomeCalculatorTitleContionar:{
    height:100,
    backgroundColor: Colors.lightGreen,
    paddingHorizontal:20,
    paddingVertical:10,
    justifyContent:'space-between'
  },
  imcomeCalculatorCardContainer:{
    flex:1,
    backgroundColor:'white',
    marginTop:8
  },
  calculatorTitle:{
    color:'white',
    fontSize:12
  },
  calculatorTitleDetail:{
    color:'white',
    fontSize:40
  },
  membershipTitle:{
    alignItems:'center',
    padding:5,
    flexDirection:'row',
    justifyContent:'center'
  },
  membershipcontainer: {
    ...ApplicationStyles.screen.container,
    flex:1,    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  cardSettingContainer:{
    marginTop:10,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,  
    marginHorizontal:10,
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
    shadowOffset: { width: 0, height: 1 },
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
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',    
    paddingHorizontal:20,
    paddingVertical:7,
    backgroundColor:'white'
  },
  CardSettingHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',    
    paddingHorizontal:10,
    paddingVertical:7,
    backgroundColor:'white'
  },
  topBtn:{    
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  },
  bottomArrowRight:{
    justifyContent:'center',
    alignItems:'center',
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
  },
  bottomTxtFont:{
    fontSize:Font.size.medium,
    color: Colors.lightGreen
  },
  ItemContainer:{
    backgroundColor:'white',
    marginBottom:5,    
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,    
  },
  configtableCell:{
    flexDirection:'row',    
    justifyContent:'space-between',
    alignItems:'center',    
    padding:10
  },
  flatList:{
    width:'100%',
    paddingVertical:5,
    paddingHorizontal:10,
  },  
})
