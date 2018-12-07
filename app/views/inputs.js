import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

class Inputs extends Component {
  state = {
    comment: '',
    photoRemote: '',
    photoLocal: ''
  }
  handleSubmit = () => {
    //Api.submitForm(this.state.location);
    this.props.handleSubmit(this.state.comment, this.state.photoRemote)

  }

    // Stores the picture to cloudinary 
  storePicture = (uri) => {
    this.setState({
      photoLocal: uri
    })

    console.log("Attempting to store picture");
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/w5/image/upload";
    const CLAUDINARY_UPLOAD_PRESET = "gslrjwvq";

    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    let formData = new FormData();
    formData.append('file', {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });

    formData.append('upload_preset', CLAUDINARY_UPLOAD_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    }).then((res) => {
      this.photoGrab(res.data.secure_url, uri)
      console.log("Successfuly stored picture")
      console.log(res.data.secure_url)

    }).catch(function (err) {
      console.log("Failed to store pictures")
      console.log(err)
    })
  }

  handleComment = (text) => {
    this.setState({ comment: text })
   // console.log(text, "hereee")
  }

  photoGrab = (photoURL, photoURI) => {
    this.setState({ 
      photoRemote: photoURL,
      photoLocal: photoURI
     })
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
    this.props.navigation.navigate('Cam', { storePicture: this.storePicture })
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