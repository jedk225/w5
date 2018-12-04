import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider,
  Platform
} from 'react-native';
import { RNCamera } from 'react-native-camera';

class TakePicture extends Component {

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      console.log('Path to image: ' + data.uri);
    } catch (err) {
      // console.log('err: ', err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
        >
          <View style={styles.captureContainer}>
            <TouchableOpacity style={styles.captureBtn} onPress={this.takePicture}>
              <Icon style={styles.iconCamera}>camera</Icon>
              <Text>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </RNCamera>

        <View style={styles.space} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },

  captueContainer: {
    position: 'absolute',
    bottom: 0,
  },
  
  captureBtn: {
    backgroundColor: 'red'
  }
});