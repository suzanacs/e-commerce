import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'




export default function Home({navigation}) { 

    

    return (
        <View style={styles.container}>
            <Text style={styles.textTitulo}>Bem Vindo</Text>
           {/* <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}><Text style={styles.text}>Voltar ao login</Text></TouchableOpacity>*/}
        </View>
    )
}  


const styles = StyleSheet.create({
    container: {
        width:'100%',

        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#ffe4e1'
    },

    button: {
        borderRadius: 20,
        backgroundColor: '#87cefa',
        height:40,
        justifyContent: 'center',
        marginTop: 10
    },

    text: {
        textAlign: 'center',
        fontSize:18,
        color: '#778899'
    },

    textTitulo: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 30,
        color: '#778899'
    }


})