import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';


export default class Home extends React.Component {

  render() {
    return (

      <View style={styles.container}>

        <FlatList
          data={this.props.screenProps.currentProjects}
          renderItem={({ index, item }) => {

            return <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('ProjectForm', { item })}>
              <Text>
                {item.projectName}
              </Text>
              <Text>
                {item.projectDescription}
              </Text>
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

  }

});