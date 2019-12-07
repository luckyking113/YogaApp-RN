import React from 'react'
import { Text, View } from 'react-native';
import styles from './RegisterLessionStyles';
import { ScrollView } from 'react-native-gesture-handler';

export default class RegisterLession extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.RegisterTop}>
            <Text style={styles.TopTxt}>VisitorScreen</Text>
            <Text style={styles.TopTxt}>VisitorScreen</Text>
          </View>
          <View style={styles.detailContainer}>
            <View style={{paddingHorizontal:15,backgroundColor:'white',marginBottom:10, height:60, justifyContent:'center'}}>
              <Text style={styles.DetailTxt}>VisitorScreen</Text>
            </View>
            <View style={{paddingHorizontal:15,backgroundColor:'white',marginBottom:10, height:100, justifyContent:'center'}}>
              <Text style={styles.DetailTxt}>VisitorScreen</Text>
            </View>
            <View style={{paddingHorizontal:15,backgroundColor:'white',marginBottom:10, height:100, justifyContent:'center'}}>
              <Text style={styles.DetailTxt}>VisitorScreen</Text>
            </View>
            <View style={{paddingHorizontal:15,backgroundColor:'white',marginBottom:10, height:100, justifyContent:'center'}}>
              <Text style={styles.DetailTxt}>VisitorScreen</Text>
            </View>
            <View style={{paddingHorizontal:15,backgroundColor:'white',marginBottom:10, height:100, justifyContent:'center'}}>
              <Text style={styles.DetailTxt}>VisitorScreen</Text>
            </View>
            <View style={{paddingHorizontal:15,backgroundColor:'white',marginBottom:10, height:100, justifyContent:'center'}}>
              <Text style={styles.DetailTxt}>VisitorScreen</Text>
            </View>
            <View style={{paddingHorizontal:15,backgroundColor:'white',marginBottom:10, height:100, justifyContent:'center'}}>
              <Text style={styles.DetailTxt}>VisitorScreen</Text>
            </View>    
          </View>
        </View>
      </ScrollView>
    )
  }
}
