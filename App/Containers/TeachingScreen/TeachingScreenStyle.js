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
  videoContainer:{
    ...ApplicationStyles.screen.container,
  },
  videoCard:{
    marginTop:10,    
  },
  content:{
    paddingHorizontal:10,
    paddingVertical:15,
    backgroundColor:'white'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlaySet:{
    flex:1,
    flexDirection:'row'
  }
})
