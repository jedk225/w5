import React from 'react';
import { StyleSheet, Text, Alert, View, Button, FlatList, TouchableOpacity } from 'react-native';
import Prompt from '@perrymitchell/react-native-prompt';
import { Header } from 'react-native-elements';
import API from '../utils/API';

export default class Home extends React.Component {

  state = {
    promptVisible: false,
    message: ''
  };

  handleSubmit = (value) => this.setState({
    promptVisible: false,
    message: `You said "${value}"`
  })

  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 1 }}>
          <Header
            //  leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'W5 Platform solutions', style: { color: '#fff' } }}
          //   rightComponent={{ icon: 'home', color: '#fff' }}
          />

        </View>


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ height: 80, justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 20 }} onPress={() => this.setState({ promptVisible: true })}>
              Add to Existing Project
          </Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>
              {this.state.message}
            </Text>
          </View>
          <Prompt
            title="Add to Existing Project"
            placeholder="Project Name"
            defaultValue=""
            visible={this.state.promptVisible}
            onCancel={() => this.setState({
              promptVisible: false,
              message: "You cancelled"
            })}
            onSubmit={(value) => {
              API.getProject(value).then(project => {
                  if (project) {
                    this.props.screenProps.addProject(project)
                  } else {
                    console.log("Error: Unable to load Projects")
                  }
              })

              this.setState({
                promptVisible: false,
                message: `Project name: ${value}`
            
              })
            }} />
        </View>

        <FlatList
          data={this.props.screenProps.currentProjects}
          renderItem={({ index, item }) => {

            return <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('ProjectForm', { item })}>

              <View style={styles.listItem}>

                <Text>
                  {item.projectName}
                </Text>
                <Text>
                  {item.projectDescription}
                </Text>

              </View>
            </TouchableOpacity>;
          }}
          contentContainerStyle={{ padding: 10 }}
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    flex: 1,
    margin: 20,
    fontWeight: "bold",
    color: "black",
    fontSize: 25,
    backgroundColor: "red"

  },
  listItem: {
    backgroundColor: "#c0deed",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    padding: 7.5,
    marginBottom: 20,
    marginTop: 10
  }

});