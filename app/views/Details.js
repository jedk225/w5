import React from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  AsyncStorage,
  View
} from 'react-native'

class Details extends React.Component {
  

  render() {
    
    return (
      <SafeAreaView>
        <View style={styles.buttonContainer}>
        <Text style={styles.bigblue}>Welcome!</Text>
        <Text style={styles.bigblack}>Please chose your project by clicking into the Button.</Text>

<Button
  title="Project Ufo!!"
  onPress={() =>
    this.props.navigation.navigate('UfoFinder')
  } />
  <Text>Poject Ufo join the 1000000 community hunting for UFOS</Text>
</View>

<View style={styles.buttonContainer}>
<Button
  onPress={() =>
    this.props.navigation.navigate('WhaleSpotter')
  }
  title="Project Whale"
  color="#841584"
/>
<Text>Poject Whale join the 1000000 community Spotting for Whales in your area</Text>

</View>



      </SafeAreaView>
    )
  }
}

export default Details

const styles = StyleSheet.create({
  container: {
    margin: 15,
    alignItems: 'center'
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
    margin: 0,
    fontWeight: "bold",
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigblack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
