import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Inputs extends Component {
  state = {
    comment: '',
    photo: '',
  }
  handleSubmit = () => {
    //Api.submitForm(this.state.location);
    this.props.handleSubmit(this.state.comment, this.state.photo)

  }

  handleComment = (text) => {
    this.setState({ comment: text })
    console.log(text, "hereee")
  }

  success = (comment) => {
    alert('commets: ' + comment)
  }
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.buttonContainer}>
<Button
  onPress={() =>
    this.props.navigation.navigate('Cam')
  }
  title="cam"
  color="#841584"
/>

</View>

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="description"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleComment} />




        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.handleSubmit
            //() => this.login(this.state.email, this.state.password)
          }>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default withNavigation(Inputs)
/* <Button
         title="Project Ufo!!"
         onPress={() =>
           this.props.navigation.navigate('Camera')
         }/>*/

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  con: {
    height: 400
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  }
})