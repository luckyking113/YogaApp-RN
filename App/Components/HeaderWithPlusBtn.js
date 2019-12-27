import React from 'react'
import { Text, View } from 'react-native';
import {STRINGS} from '../Config';
import Colors from '../Theme/Colors';
import Padding from '../Theme/Padding';

import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HeaderWithPlusBtn extends React.Component {    

    render() {
        const { navigation, title, RText } = this.props;
        return (
            <View
                style={{
                height: 50,
                backgroundColor: Colors.lightGreen,
                justifyContent: 'space-between',
                flexDirection:'row',  
                alignSelf:'center',
                alignItems:'center',
                width:'100%',
                paddingHorizontal:Padding.HeaderBarPadding,
                textAlignVertical: "center"
                }}>
                <View>                    
                    {/* <TouchableOpacity onPress={() => navigation.navigate('HomeScreen', { name: 'HomeScreen' })}> */}
                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                        <Icon name='left' size={20} color='white' />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{fontSize:20,color: 'white', textAlign: 'center'}}>{title}</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Icon name='plus' size={20} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        )        
    }
}
