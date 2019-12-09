import React from 'react'
import { Switch, Text, View,Image } from 'react-native';
import styles from './GenerateCardScreenStyle';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SectionGrid } from 'react-native-super-grid';
import { STRINGS} from '../../Config';
import { white, gray } from 'ansi-colors';
import Icon from 'react-native-vector-icons/AntDesign';

function Item({ item: { name, date, logo_imgPath, content }}){
  return (
    
    <View style={ styles.itemView }>   
        <View style={{flex:1, flexDirection:"row", alignItems:'stretch'}}>
            <View style={{width:100, height:80, flex:0.8, justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <Image
                    style={{width: 40, height: 40, borderRadius:50 }}              
                    source={{uri: logo_imgPath}}
                    />
            </View>
            <View style={{height:80, flex:2.5, flexDirection:'column',justifyContent:'center'}}>            
                <Text style={{marginBottom:5, fontSize: 18}}>
                    {name}
                </Text>
                <Text style={styles.textGrayFontColor}>
                    {date}
                </Text>
                <Text style={styles.textGrayFontColor}>
                    {content}
                </Text>  
            </View>
            <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'flex-end'}}>
                 <Text style={styles.generalTextColor}>Alex</Text>       
                 <Text style={styles.generalTextColor}>$2090</Text>       
            </View>
        </View>     
        <View style={styles.lineView}/>
        <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
          <Text style={styles.generalTextColor}>2019-11-28 19:34</Text> 
          <Text style={styles.generalTextColor}>sfddfsdfsdf</Text>  
        </View>          
    </View>
  )
}

export default class GenerateCardScreen extends React.Component {

  state = {switchValue:false}
  toggleSwitch = (Value) => {
    this.setState({switchValue: Value})
  }

  DATA = [
    {
      data: [
        {
          name: "Alex",
          date:STRINGS.CardTitle1[0], 
          logo_imgPath:"https://d33v4339jhl8k0.cloudfront.net/docs/assets/55d20ae1e4b089486cadc329/images/57d86db1903360216365887f/file-FbUn7SYVJy.png",
          content: STRINGS.CardTitle2[0]
        },
        {
            name: "Thomas",
            date:STRINGS.CardTitle1[0], 
            logo_imgPath:"https://www.trzcacak.rs/myfile/detail/397-3971790_sri-ganesh-hd-transparent-png-images-vinayagar-images.png",
            content: STRINGS.CardTitle2[0]
          },
          {
            name: 'Stefan',
            date:STRINGS.CardTitle1[0], 
            logo_imgPath:"http://www.pngmart.com/files/10/Fashionable-Women-Wearing-Sunglasses-PNG.png",
            content: STRINGS.CardTitle2[0]
          },
          {
            name: "Alex",
            date:STRINGS.CardTitle1[0], 
            logo_imgPath:"https://facebook.github.io/react-native/img/tiny_logo.png",
            content: STRINGS.CardTitle2[0]
          },
          {
            name: "Alex",
            date:STRINGS.CardTitle1[0], 
            logo_imgPath:"https://d33v4339jhl8k0.cloudfront.net/docs/assets/55d20ae1e4b089486cadc329/images/57d86db1903360216365887f/file-FbUn7SYVJy.png",
            content: STRINGS.CardTitle2[0]
          },
          {
              name: "Thomas",
              date:STRINGS.CardTitle1[0], 
              logo_imgPath:"https://www.trzcacak.rs/myfile/detail/397-3971790_sri-ganesh-hd-transparent-png-images-vinayagar-images.png",
              content: STRINGS.CardTitle2[0]
            },
            {
              name: 'Stefan',
              date:STRINGS.CardTitle1[0], 
              logo_imgPath:"http://www.pngmart.com/files/10/Fashionable-Women-Wearing-Sunglasses-PNG.png",
              content: STRINGS.CardTitle2[0]
            },
            {
              name: "Alex",
              date:STRINGS.CardTitle1[0], 
              logo_imgPath:"https://facebook.github.io/react-native/img/tiny_logo.png",
              content: STRINGS.CardTitle2[0]
            }
    ]
  }
  ]

  render() {
    return (      
            <ScrollView style={styles.actionContainer}>
                <SectionGrid
                itemDimension={500}
                spacing = {10}
                sections = { this.DATA }
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item item={item} />}
                >
                </SectionGrid>        
            </ScrollView>
    )
  }  
}