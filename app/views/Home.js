import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';

import { Header } from 'react-native-elements';
export default class Home extends React.Component {

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
    backgroundColor: "#cfcfcf",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    padding: 7.5
  }

});