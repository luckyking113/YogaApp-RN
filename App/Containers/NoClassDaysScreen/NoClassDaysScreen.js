import React from 'react'
import { Switch, Text, View,Image } from 'react-native';
import styles from './NoClassDaysScreenStyle';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SectionGrid } from 'react-native-super-grid';
import { STRINGS} from '../../Config';
import { white, gray } from 'ansi-colors';
import Icon from 'react-native-vector-icons/AntDesign';

function Item({ item: { name, date, logo_imgPath, content }}){
  return (
    
    <View>   
        <View style={{flex:1, flexDirection:"row", alignItems:'stretch', height: 100, marginLeft:10, marginRight:10}}>
            <View style={{ width:100, height:100, flex:1, justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <Image
                    style={{width: 50, height: 50, borderRadius:50 }}              
                    source={{uri: logo_imgPath}}
                    />
            </View>
            <View style={{height:100, flex:2.5, flexDirection:'column',justifyContent:'center'}}>            
                <Text>
                    {name}
                </Text>
                <Text>
                    {date}
                </Text>
                <Text>
                    {content}
                </Text>  
            </View>
            <View style={{flex:1}}>
              <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', alignItems: 'flex-end'}}>
                <Icon name={"mail"} size={20} color={'#e0e0e0'} /> 
                <Icon name={"phone"} size={20} color={'#e0e0e0'} /> 
              </View>              
            </View>
        </View>        
        <View style={{width:5000, height:1, backgroundColor:'#e0e0e0', marginTop:10, marginBottom:10}}/>
    </View>
  )
}

export default class NoClassDaysScreen extends React.Component {

  state = {switchValue:false}
  toggleSwitch = (Value) => {
    this.setState({switchValue: Value})
  }

  DATA = [
    {
      data: [
        {
          name: "王红艳",
          date:STRINGS.CardTitle1[0], 
          logo_imgPath:"https://d33v4339jhl8k0.cloudfront.net/docs/assets/55d20ae1e4b089486cadc329/images/57d86db1903360216365887f/file-FbUn7SYVJy.png",
          content: STRINGS.CardTitle2[0]
        },
        {
            name: "陈琛",
            date:STRINGS.CardTitle1[0], 
            logo_imgPath:"https://www.trzcacak.rs/myfile/detail/397-3971790_sri-ganesh-hd-transparent-png-images-vinayagar-images.png",
            content: STRINGS.CardTitle2[0]
          },
          {
            name: '王青',
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
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{ flexDirection:'row', padding:5, justifyContent:'space-between', width:'100%', height: 30, backgroundColor:'#ededed'}}>
                <Text style={{marginTop:2, marginLeft:5}}>只看未回访</Text>
                <Switch
                  style={{marginTop:0}}
                  onValueChange = {this.toggleSwitch}
                  value = {this.state.switchValue}/>
            </View>
            <ScrollView style={styles.actionContainer}>
                <SectionGrid
                itemDimension={500}
                spacing = {0}
                sections = { this.DATA }
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item item={item} />}
                >
                </SectionGrid>        
            </ScrollView>
        </View>
    )
  }  
}
