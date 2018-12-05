import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import { Camera, Permissions } from 'expo';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleProjects: [],
      currentProjects: [{
        "key": "ufofinder will be a UID later",
        "projectName": "UFO Finder",
        "projectDescription": "ALIENS!!!!",
        "projectSlug": "ufofinder"
      },
      {
        "key": "ufwhalespotterofinder will be a UID later",
        "projectName": "Whale Spotter",
        "projectDescription": "I love Shamu!!",
        "projectSlug": "whalespotter"
      }]
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

