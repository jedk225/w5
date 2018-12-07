import { createStackNavigator } from 'react-navigation';
import Home from './views/Home';
// import UfoFinder from './views/UfoFinder';
// import WhaleSpotter from './views/WhaleSpotter';
// import Details from './views/Details';
// import inputs from './views/inputs';
import ProjectForm from './views/ProjectForm';

import Cam from './views/Cam';

//import NavBar from './components/NavBar';




const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  ProjectForm: { screen: ProjectForm },
  
  // UfoFinder: { screen: UfoFinder },
  // WhaleSpotter: { screen: WhaleSpotter },
  // Details: { screen: Details },
  // //TakePicture: { screen: TakePicture },
  // inputs: { screen: inputs },


  Cam: { screen: Cam },


  //NavBar: { screen: NavBar }


});

export default AppNavigator;