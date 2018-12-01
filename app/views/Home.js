import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Ufo',
        'Whale',
        
      ],
      currentFriends: [],
    }
  }

  addFriend = (index) => {
    const {
      currentProjects,
      possibleFriends,
    } = this.state

    // Pull friend out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1)

    // And put friend in currentFriends
    currentFriends.push(addedFriend)

    // Finally, update our app state
    this.setState({
      currentFriends,
      possibleFriends,
    })
  }
  render() {
    return (
     
      <View style={styles.container}>
      
       <Text style={styles.header}> Welcome to w5 please click on your Project. </Text>
       
       <View style={styles.buttonContainer}>
       
        <Button
          title="Project Ufo!!"
          onPress={() =>
            this.props.navigation.navigate('UfoFinder')
          }
        /></View>
       
        <View style={styles.buttonContainer}>
          <Button
             onPress={() =>
              this.props.navigation.navigate('WhaleSpotter')
            }
            title="Project Whale"
            color="#841584"
          />
        </View>
        

        
        
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
  header:{
    flex:1,
    margin: 0,
    fontWeight: "bold",
  }

});