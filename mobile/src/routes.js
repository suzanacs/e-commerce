import React, {Component} from 'react'
import {View, Image, TouchbleOpacity} from 'react-native'
import {createAppContainer, NavigationActions} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'

import Vestido from './pages/Vestido'
import Cropped from './pages/Cropped'
import Login from './pages/Login'
import Home from './pages/Home'
import ExternalScreen from './pages/ExternalScreen'
import NavigationDrawerStructure from './pages/NavigationDrawerStructure'


const Vestido_StackNavigator = createStackNavigator({
    First: {
        screen: Vestido,
        navigationOptions: ({navigation}) => ({
            title: 'Vestido',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerRight: () => <Image style={{width: 25, height: 25, marginRight: 8}} source={require('../src/assets/supermercado.png')} />
        })
    }
})

const Cropped_StackNavigator = createStackNavigator({
    Second: {
        screen: Cropped,
        navigationOptions: ({navigation}) => ({
            title: 'Cropped',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerRight: () => <Image style={{width: 25, height: 25, marginRight: 8}} source={require('../src/assets/supermercado.png')} />
        })
    }
})

const Home_StackNavigation = createStackNavigator({
    Third: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerRight: () => <Image style={{width: 25, height: 25, marginRight: 8}} source={require('../src/assets/supermercado.png')} />,
            headerRight: () => <Image style={{width: 20, height: 20, marginRight: 40}} source={require('../src/assets/procurar.png')} />
        })
    }
})

const Login_StackNavigation = createStackNavigator({
    Quarter: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            title: 'Login'
        })
    }
})

const Drawer = createDrawerNavigator ({
    Login: {
        screen: Login_StackNavigation,
        navigationOptions: {
            drawerLabel: 'Login',
            drawerLockMode: 'locked-closed'
        }
    },

    Home: {
        screen: Home_StackNavigation,
        navigationOptions: {
            drawerLabel: 'Home'
        }
    },

    Vestido: {
        screen: Vestido_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Vestido'
        }
    },

    Cropped: {
        screen: Cropped_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Cropped',
        }
    }

})

const Routes = createAppContainer(
    createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions:{
                title: 'Login'
            }
        },

        Drawer: {
            screen: Drawer,
            navigationOptions:{
                headerShown: false
            }
        },

        ExternalScreen: {
            screen: ExternalScreen,
            navigationOptions:{
                title: 'External'
            }
        }
    })
)

export default Routes