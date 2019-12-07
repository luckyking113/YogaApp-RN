import React from 'react'
import { Text, View, StatusBar, Image} from 'react-native'
import styles from './LoginScreenStyle'
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);    
  }

  onPressHandler = () => {    
    this.props.navigation.navigate('HomeNavigator');
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <StatusBar backgroundColor="#79ECB3" />
        <View style={styles.loginContent}>
          <TextInput style={styles.loginInput} placeholder='Email' underlineColor="#79ECB3" />
          <TextInput style={styles.loginInput} placeholder='Password' underlineColor="#79ECB3" secureTextEntry={true}/>  
          <View style={{width:'80%'}}>
            <TouchableOpacity style={styles.loginBtn} onPress={this.onPressHandler}><Text>Login</Text></TouchableOpacity> 
          </View>
        </View>
      </View>
    )
  }
}
