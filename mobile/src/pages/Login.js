import React from 'react'
import {TextInput, View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function Login({navigation}){

    return (
       <View style={styles.container}>
           <Text style={styles.textTitulo}>Login</Text>
           <TextInput style={styles.input} placeholder='Login'></TextInput>
           <TextInput style={styles.input} placeholder='Senha'></TextInput>   
           <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}><Text style={styles.text}>Entrar</Text></TouchableOpacity>
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

    input: {
        borderWidth: 1,
        marginBottom: 5,
        borderRadius:4,
        borderColor: '#000000',
        backgroundColor: '#ffffff'
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