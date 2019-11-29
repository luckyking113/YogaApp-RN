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
  }
})
