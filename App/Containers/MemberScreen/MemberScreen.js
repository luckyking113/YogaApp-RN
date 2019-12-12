import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './emails';
const KEYS_TO_FILTERS = ['user.name', 'subject'];

import styles from './MemberScreenStyles';

export default class MemberScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={{width:'65%'}}>
            <SearchInput 
              onChangeText={(term) => { this.searchUpdated(term) }} 
              style={styles.searchInput}
              placeholder="Type a message to search"
            />
          </View>          
          <View style={{paddingStart:'5%',width:'35%', flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Hello</Text>
            <Text>Hello</Text>
          </View>    
        </View>        
        <ScrollView style={styles.listViewContainer}>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                <View>
                  <Image source={require('../../Assets/Images/homeIcon.png')} style={{width:50, height:50, marginRight:10}} />
                </View>
                <View>
                  <Text>{email.user.name}</Text>
                  <Text style={styles.emailSubject}>{email.subject}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}
