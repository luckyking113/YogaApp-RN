import React from 'react'
import { Linking, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './RegisterDetailStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from 'App/Theme/Colors';

export default class AssignedScreen extends React.Component {
  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          <View style={styles.detailCard}>
            <TouchableOpacity style={styles.cardLeftContent}>
              <View style={styles.cardImage}>
                <Image style={styles.image} source={require('../../../Assets/Images/homeIcon.png')} />
              </View>
              <View style={styles.leftTxt}>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.leftTxtFont}>盖华(会员)</Text>
                  <Icon name='woman' size={16} color={Colors.lightBlue} style={{marginLeft:10}}/>
                </View>              
                <Text style={styles.leftTxtFont}>1864326524315</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity>
                    <Icon name='mail' size={16} color={Colors.lightGreen}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.dialCall(1864326524315)}}>
                    <Icon name='phone' size={16} color={Colors.lightGreen} style={{marginLeft:20}}/>
                  </TouchableOpacity>                
                </View>              
              </View>
            </TouchableOpacity>
            <View style={styles.cardRightContent}>
              <TouchableOpacity style={styles.topBtn}>
                <Icon name='right' size={20} color={Colors.lightGrey}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection:'row',backgroundColor:'white', height:40,alignItems:'center', justifyContent:'space-between', paddingHorizontal:20}}>
            <Text>当前积分</Text>
            <TouchableOpacity>
              <Text>0<Icon name='right' size={15} style={{marginLeft:10}} color={Colors.lightGrey}/></Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop:10,borderColor: '#ddd',
                      borderBottomWidth: 1,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 1,    }}>
          <View style={{flexDirection:'row',borderBottomWidth: 1,borderColor: '#ededed',backgroundColor:'white', height:40,alignItems:'center', justifyContent:'space-between', paddingHorizontal:20}}>
            <Text>会员卡</Text>            
          </View>
          <View style={styles.detailCard}>
            <TouchableOpacity style={styles.cardLeftContent}>
              <View style={styles.cardImage1}>
                <Image style={styles.image} source={require('../../../Assets/Images/card.jpeg')} />
              </View>
              <View style={styles.leftTxt}>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.leftTxtFont}>2019025468455</Text>                  
                </View>              
                <Text style={styles.leftTxtFont}>老会员年卡</Text>
                <Text style={styles.leftTxtFont}>有效期至 : 2020-09-22</Text>           
              </View>
            </TouchableOpacity>
            <View style={styles.cardRightContent}>
              <TouchableOpacity style={styles.topBtn}>
                <Icon name='right' size={20} color={Colors.lightGrey}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
