import React, {Component} from 'react'
import {View, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class MenuRight extends Component {
   

    render() {
        return (
            <View  style={{flexDirection: 'row'}}>
            <TouchableOpacity>
                <Image style={{width: 25, height: 25, marginRight: 20}} source={require('../assets/procurar.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={{width: 25, height: 25, marginRight: 15}} source={require('../assets/supermercado.png')} />
            </TouchableOpacity>
            </View>
        )
    }
}
