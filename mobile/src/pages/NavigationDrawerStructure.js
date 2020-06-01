import React, {Component} from 'react'
import {View, Image, TouchbleOpacity} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class NagivationDrawerStructure extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer()
    }

    render() {
        return (
            <View style={{flexDirection: 'row', marginLeft: 10}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image style={{width: 25, height: 25}} source={require('../assets/drawer.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

