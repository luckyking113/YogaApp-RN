import React from 'react'

import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';

import styles from '../../../Theme/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'



function Item({ item: {id, title, image, date, onItemClickHandler } }) {
  return (
    <TouchableOpacity onPress={() => onItemClickHandler(id)}>
      {/* <View>
      <Image style={{width: 50, height: 50}} source={{uri:image}} />
      <Text style={styles.title}>{title}</Text>
      </View> */}
      <View style={styles.datatableCell}>
        <View>
          <Image style={styles.datatableCellAvatar} source={{uri:image}} />
        </View>
        <View>
          <View style={styles.datatableCellTitle}>
            <Text>{title}</Text>
          </View>
          <View style={styles.datatableCellSubtitle}>
            <Text>{date}</Text>
          </View>
        </View>
      </View>
      {/* <ListItem            
            title={title}
            subtitle={date}
            avatar={{ uri: image }}
            containerStyle={{ borderBottomWidth: 1 }} 
      /> */}
    </TouchableOpacity>
  )
}


export default class YogaHeadline extends React.Component {

  onItemClickHandler = (id) => {
    alert('testing...' + id);
  }


  DATA = [
    {
      id: '1',
      title: '代约团课代约团课代约团课',
      image: 'https://picsum.photos/200/300',
      date: '2019-11-10',
      onItemClickHandler: this.onItemClickHandler,
    },
    {
      id: '2',
      title: 'tttt',
      image: 'https://picsum.photos/200/300',
      date: '2019-11-10',
      onItemClickHandler: this.onItemClickHandler,
    },
  ]
  

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.DATA}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}
