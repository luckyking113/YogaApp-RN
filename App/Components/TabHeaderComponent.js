import React from 'react'
import { Text, View } from 'react-native';
import {STRINGS} from '../Config';

export default class TabHeaderComponent extends React.Component {
    render() {
        return (
            <View
                style={{
                height: 50,                  
                backgroundColor: '#79ECB3',
                justifyContent: 'center',
                }}>
                <Text style={{fontSize:20,color: 'white', textAlign: 'center'}}>{this.props.title}</Text>
            </View>
        )        
    }
}
