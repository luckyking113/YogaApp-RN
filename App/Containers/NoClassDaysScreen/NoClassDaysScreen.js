import React from 'react'
import { Text, View,Image } from 'react-native';
import styles from './NoClassDaysScreenStyle';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SectionGrid } from 'react-native-super-grid';
import { STRINGS} from '../../Config';
import { white } from 'ansi-colors';
import Icon from 'react-native-vector-icons/AntDesign';

function Item({ item: { name, date, logo_imgPath, content }}){
  return (
    <View>   
        <View style={{flex:1, flexDirection:"row", alignItems:'stretch', height: 100, marginLeft:10, marginRight:10}}>
            <View style={{width:100, height:100, flex:1, justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <Image
                    style={{width: 80, height: 80, borderRadius:80 }}              
                    source={{uri: logo_imgPath}}
                    />
            </View>
            <View style={{height:100, flex:3, flexDirection:'column',justifyContent:'center'}}>            
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
        </View>        
        <View style={{width:5000, height:1, backgroundColor:'gray', marginTop:10, marginBottom:10}}/>
    </View>
  )
}

export default class NoClassDaysScreen extends React.Component {

  DATA = [
    {
      data: [
        {
          name: "Alejjjx",
          date:STRINGS.CardTitle1[0], 
          logo_imgPath:"https://facebook.github.io/react-native/img/tiny_logo.png",
          content: STRINGS.CardTitle2[0]
        },
        {
            name: "Thomas",
            date:STRINGS.CardTitle1[0], 
            logo_imgPath:"https://facebook.github.io/react-native/img/tiny_logo.png",
            content: STRINGS.CardTitle2[0]
          },
          {
            name: 'Stefan',
            date:STRINGS.CardTitle1[0], 
            logo_imgPath:"https://facebook.github.io/react-native/img/tiny_logo.png",
            content: STRINGS.CardTitle2[0]
          }
        ]
    }
  ]

//   state = {
//     switchValue:true
//   };

//   _handleToogleSwitch = () => this.setState(state =>({
//     switchValue : !state.switchValue
//   }));

  render() {
    return (
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{ flexDirection:'row', width:'100%', height: 100, backgroundColor:'white'}}>
                <Text>dsdfsdf</Text>
                {/* <Switch 
                onValueChange = {this._handleToogleSwitch}
                value = {this.state.switchValue}/> */}
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
