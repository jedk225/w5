import React from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";

import { Camera, Permissions } from 'expo';

// ... other code from the previous section
/* ???
<Camera ref={ref => { this.camera = ref; }} ...
// ...
snap = async () => {
  if (this.camera) {
    let photo = await this.camera.takePictureAsync();
    console.log(photo);
  }
};*/

export default class App extends React.Component {
  state = {
    switchValue: false ,
    hasCameraPermission: null, //Permission value
    type: Camera.Constants.Type.back, //specifying app start with back camera.
  };
  async componentWillMount() {
    //Getting Permission result from app details.
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {

      const { hasCameraPermission } = this.state;
  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.switchview}>
          <Text>Show camera</Text>
         
          <Switch 
              onValueChange={value => {
                this.setState({ switchValue: value });
              }}
              value={this.state.switchValue}
              style={styles.switch}
          />
        </View>
        
        {this.state.switchValue ? (
          <View style={styles.cameraview}>
              <Camera style={styles.camera} type={this.state.type}>
<View style={styles.camerabuttonview}>
  <TouchableOpacity
    style={styles.cameraButtons}
    onPress={this.cameraChange}
  >
    <Text
      style={{ fontSize: 18, marginBottom: 10, color: "white" }}
    >
      Flip
    </Text>
  </TouchableOpacity>
</View>

</Camera>
          <Text>Camera on</Text>
        </View>
        ) : (
          <View style={styles.cameraview}>
            <Text>Camera off</Text>
          </View>
        )}
   
   

      </View>
     
    );
  }
}
}
cameraChange = () => {
  this.setState({
    type:
      this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
  });
  
};

const styles = StyleSheet.create({});