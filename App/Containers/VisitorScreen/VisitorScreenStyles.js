import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',    
    alignItems: 'flex-start',    
  },
  searchContainer:{
    width:'100%',
    height:60,
    paddingVertical:5,
    paddingHorizontal:20,
    flexDirection:'row',
    alignItems:'center',
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 10,
    flexDirection:'row',    
    alignItems:'center',    
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)',
    fontSize:12,
    marginTop:7,
  },
  searchInput:{
    padding: 10,
    // borderColor: '#CCC',
    // borderWidth: 1,
    backgroundColor:'white',
    width:'100%',
    borderRadius:5
  },
  listViewContainer:{
    width:'100%',
    padding:10,
    backgroundColor:'white'
  }
})
