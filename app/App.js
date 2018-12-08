import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import AppNavigator from './AppNavigator';
import { Camera, Permissions } from 'expo';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleProjects: [],
      currentProjects: []
    }
  }

  async componentDidMount(){
    try {
        const json = await AsyncStorage.getItem('projects');
        const projects = JSON.parse(json);
        if (projects) {
            this.setState({ currentProjects: projects })
        }
    } catch (e){
        //do nothing
    }
    
}

  addProject = (index) => {
    const {
      currentProjects,
      possibleProjects,
    } = this.state

    // Pull Project out of possibleProjects
    const addedProject = possibleProjects.splice(index, 1)

    // And put Project in currentProjects
    currentProjects.push(addedProject)

    // Finally, update our app state
    this.setState({
      currentProjects,
      possibleProjects,
    })
  }

  render() {
    return (
   <AppNavigator
          screenProps={ {
            currentProjects: this.state.currentProjects,
            possibleProjects: this.state.possibleProjects,
            addProject: this.addProject,
          } }
        />
    );
  }
}

