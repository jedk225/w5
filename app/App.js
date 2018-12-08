import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import AppNavigator from './AppNavigator';
import { Camera, Permissions } from 'expo';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProjects: []
    }
  }

  componentDidMount() {
    this.loadProjectFromStorage()
  }

  loadProjectFromStorage = async () => {
    try {
      const json = await AsyncStorage.getItem('projects');
      const projects = JSON.parse(json);
      if (projects) {
        this.setState({ currentProjects: projects })
      }
    } catch (e) {
      //do nothing
    }
  }

  addProject = (project) => {
    const {
      currentProjects
    } = this.state

    // Pull Project out of possibleProjects
    const newProjects = [...currentProjects, project];

    this.setState({
      currentProjects: newProjects
    })

    AsyncStorage.setItem('projects', JSON.stringify(newProjects))
  }

  render() {
    return (
      <AppNavigator
        screenProps={{
          currentProjects: this.state.currentProjects,
          addProject: this.addProject,
        }}
      />
    );
  }
}

