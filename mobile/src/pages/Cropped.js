import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default class Cropped extends Component {

    static navigationOption = {
        drawerLabel: 'Cropped'
    }

    render() {
        return (
            <View>
                <Text>Imagem dos Cropped</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
})