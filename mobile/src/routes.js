import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Vestido from './pages/Vestido'
import Cropped from './pages/Cropped'
import Login from './pages/Login'
import Home from './pages/Home'
import Drawer from './pages/Drawer'



const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
        Drawer,
        Vestido,
        Cropped

    })
)


  export default Routes