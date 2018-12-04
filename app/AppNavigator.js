import { createStackNavigator } from 'react-navigation';
import Home from './views/Home';
import UfoFinder from './views/UfoFinder';
import WhaleSpotter from './views/WhaleSpotter';
import Details from './views/Details';
import inputs from './views/inputs';
//import TakePicture from './views/TakePicture';

//import Camera from './views/Camera';

//import NavBar from './components/NavBar';




const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  UfoFinder: { screen: UfoFinder },
  WhaleSpotter: { screen: WhaleSpotter },
  Details: { screen: Details },
  //TakePicture: { screen: TakePicture },
  inputs: { screen: inputs }


  //Camera: { screen: Camera },


  //NavBar: { screen: NavBar }


});

export default AppNavigator;