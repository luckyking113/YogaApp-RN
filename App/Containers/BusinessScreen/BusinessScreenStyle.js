import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Metrics from '../../Theme/Metrics'
import Fonts from '../../Theme/Fonts'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  sectionHeader: {
    backgroundColor: Colors.sectionHeader,
    ...Metrics.smallPadding,
    ...Fonts.style.normal,
  },
  item: {
    flexDirection: 'column',
    ...Metrics.smallVerticalPadding,
    alignItems: 'center',    
  },
  title: {
    ...Metrics.tinyVerticalMargin,
    ...Fonts.style.small,
  },
})
