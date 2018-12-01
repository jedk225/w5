import { createStackNavigator } from 'react-navigation';
import Home from './views/Home';
import UfoFinder from './views/UfoFinder';
import WhaleSpotter from './views/WhaleSpotter';


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  UfoFinder: { screen: UfoFinder},
  WhaleSpotter: { screen: WhaleSpotter}

});

export default AppNavigator;