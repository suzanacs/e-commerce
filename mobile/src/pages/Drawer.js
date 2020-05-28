import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import Vestido from './Vestido'
import Cropped from './Cropped'
import Home from './Home'




export default function Drawer() {
    const Drawer = createDrawerNavigator()
    return (
    
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Vestido" component={Vestido} />
          <Drawer.Screen name="Cropped" component={Cropped} />
        </Drawer.Navigator>
    </NavigationContainer> 
    )
}