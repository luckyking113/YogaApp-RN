import React from 'react'
import { Text, View, StatusBar, Image, ImageBackground} from 'react-native'
import styles from './SplashScreenStyle'

export default class SplashScreen extends React.Component {
  constructor(props){
    super(props);    
  }  

  componentWillMount(){
    setTimeout(() => {
      this.props.navigation.navigate('LoginScreen');  
    }, 5000);    
  }

  render() {
    return (
      <ImageBackground source={require('../../Assets/Images/splash.jpg')} style={{width:'100%', height:'100%'}}>        
        <StatusBar hidden />        
      </ImageBackground>
    )
  }
}
