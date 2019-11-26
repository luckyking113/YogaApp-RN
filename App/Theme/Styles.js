import { StyleSheet, Dimensions } from 'react-native'
import Colors from './Colors'

export var ScreenWidth = Dimensions.get('window').width; 

export default StyleSheet.create({

  datatableCell: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey, 
  },
  datatableCellAvatar: {
    flex: 1,
    marginRight: 10,
    width: ScreenWidth * 0.3,
    height: ScreenWidth * 0.3 * 0.6,
  },
  datatableCellTitle: {
    flex: 1,
    padding: 7,
    width: ScreenWidth * 0.7,
    paddingRight: 30,
    color: Colors.mainText, 
  },
  datatableCellSubtitle: {
    flex: 1,
    padding: 7,
    width: ScreenWidth * 0.7,
    paddingRight: 30,
    color: Colors.subText, 
  },


  configtableCell: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef', 
    borderRadius: 5,
    height: 70
  },
  configtableCellIcon: {
    borderRadius:20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  configtableCellTitle: {
    width: ScreenWidth - 100,
    paddingLeft: 40
  }

})