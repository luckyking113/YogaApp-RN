import React from 'react'
import { Text, View,Image } from 'react-native';
import styles from './SystemNotificationScreenStyles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SectionGrid } from 'react-native-super-grid';
import { STRINGS} from '../../Config';
import { white } from 'ansi-colors';
import Icon from 'react-native-vector-icons/AntDesign';

function Item({ item: { date, card_title1, img_path, card_title2 }}){
  return (
    
    <TouchableOpacity>
      <View style={styles.NotificationContainer}>
        <View style={styles.titleContent}>
          <Text style={styles.dateFont}>{date}</Text>
        </View>
          <View style={styles.cardContainer}>
            <View style={{justifyContent:'flex-start', width:'100%', marginBottom:10}}>
              <Text>{card_title1}</Text>
            </View>        
            <View style={styles.imageContainer}>
              <Image
                style={{width: '100%', height: 180}}        
                source={{uri: img_path}}
                // source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
              />
            </View>

            <View style={{justifyContent:'space-between', width:'100%', marginTop:8, flexDirection:'row'}}>
              <Text>{card_title2}</Text>
              <Icon name='right' size={20} color='black' />
            </View>   
          </View> 
      </View>   
    </TouchableOpacity>
  )
}

export default class SystemNotificationScreen extends React.Component {

  DATA = [
    {
      data: [
        {
          date: STRINGS.CardDate[0],
          card_title1:STRINGS.CardTitle1[0], 
          img_path:"https://png.pngtree.com/element_our/md/20171207/md_5a299aefaa76a.png",
          card_title2: STRINGS.CardTitle2[0]
        },
        {
          date: STRINGS.CardDate[1],
          card_title1:STRINGS.CardTitle1[1], 
          // img_path:"https://www.bing.com/images/search?view=detailV2&ccid=qDbVqu5x&id=9C189EB1FB2C667D08F0BE0E6FE452BCBE777E8A&thid=OIP.qDbVqu5x8OxwFdWxBNmq6AHaFj&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2f6y9buxFZb-0%2fhqdefault.jpg&exph=360&expw=480&q=card+images&simid=608010305753058334&selectedIndex=24",
          img_path:"https://www.yugioh-card.com/japan/images/common/logo_dm.png",
          card_title2: STRINGS.CardTitle2[1]
        }      
    ]
  }
  ]

  render() {
    return (
      <ScrollView style={styles.actionContainer}>
        <SectionGrid
          itemDimension={500}
          spacing = {13}
          sections = { this.DATA }
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item item={item} />}
        >
        </SectionGrid>
      </ScrollView>
    )
  }  
}
