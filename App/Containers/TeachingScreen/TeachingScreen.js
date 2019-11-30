import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import styles from './TeachingScreenStyle'
import Icon from 'react-native-vector-icons/Ionicons';  
import { ScrollView, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Video from 'react-native-video';

const {width} = Dimensions.get('window');

export default class TeachingScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repeat:false,
      rate:1,
      volume:1,
      muted:false,
      resizeMode: 'cover',
      duration:0.0,
      currentTime:0.0,
      paused:true,
      rateText:'1.0',
      pausedText:'Play',
      hideControls: false,
    }
  }

  onLoad = (data) => {
    //set duration
    this.setState({duration: data.duration});
  }

  // this calls every 250ms
  onProgress = (data) => {
    //set current time
    this.setState({currentTime: data.currentTime});
  }

  //video end
  onEnd = (data) => {
    //set pausedText and paused, set video current time is 0
    this.setState({pausedText: 'Play', paused:true});
    this.video.seek(0);
  }

  render() {    
    return (
      <ScrollView>
        <View style={styles.videoContainer}>
          <View style={styles.videoCard}>
            <TouchableOpacity style={{width, height: width * .6, backgroundColor:'black'}} onPress={() => this.setState({paused: !this.state.paused})}>
              <Video                
                ref = {(ref) => this.video = ref}
                source={require('../../Assets/Video/yoga1.mp4')}
                repeat = {this.state.repeat}
                rate = {this.state.rate}
                volume = {this.state.volume}
                muted = {this.state.muted}
                resizeMode = {this.state.resizeMode}
                style={styles.backgroundVideo}     
                paused = {!this.state.paused}           
                onLoad = {this.onLoad}
                onProgress = {this.onProgress}
                onEnd={this.onEnd}
              />              
            </TouchableOpacity>     
            <View style={styles.content}>
              <Text style={{fontSize:16}}>瑜伽理疗要啃的12只"肌" 毕博士运动康复系统 创始人 毕义明亲授</Text>
              <View style={{flexDirection:'row', marginTop:10}}>
                <Text style={{color:'#79ECB3',fontSize:16}}>免费</Text>
                <Text style={{marginLeft:10, color:'#787878',fontSize:14}}>169975人学过</Text>
              </View>
            </View>
          </View>          
        </View>
      </ScrollView>
    )
  }
}