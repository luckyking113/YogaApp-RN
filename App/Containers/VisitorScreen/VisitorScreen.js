import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './emails';
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import styles from './VisitorScreenStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from 'App/Theme/Colors';

export default class AssignedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',      
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  onPressHandler = () => {
    this.props.navigation.navigate('RegisterDetail');
  }

  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));    
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={{width:'85%'}}>
            <SearchInput 
              onChangeText={(term) => { this.searchUpdated(term) }} 
              style={styles.searchInput}
              placeholder="姓名/手机号"
            />
          </View>          
          <View style={{paddingStart:'5%',width:'35%', flexDirection:'row', justifyContent:'space-between'}}>                    
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:12}}>筛选</Text>
              <Icon name='filter' size={14} style={{marginLeft:1, marginTop:2}}/>
            </View>  
          </View>    
        </View>        
        <ScrollView style={styles.listViewContainer}>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={this.onPressHandler} key={email.id} style={styles.emailItem}>
                <View>
                  <Image source={require('../../Assets/Images/homeIcon.png')} style={{width:40, height:40, marginRight:10}} />
                </View>
                <View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:14}}>{email.user.name}</Text>
                    <Icon name='woman' size={12} color={Colors.lightBlue} style={{marginLeft:5, marginTop:5}}/>
                  </View>                   
                  <Text style={styles.emailSubject}>当前积分 : 0</Text>
                  <Text style={styles.emailSubject}>回访时间 : 2019-12-09 14:59</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

