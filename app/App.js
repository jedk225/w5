import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import Api from './utils/API'
//import SubmitButton from 'react-native-submit-button';




export default class App extends Component {
  state = {
    location: null,
    errorMessage: null,
  };
 handleSubmit = () =>{
 Api.submitForm(this.state.location)


 }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);

    }


    console.log(this.state.location);
    //to get the stamp just remove google mapviw.
    return (
      <View style={{ flex: 1 }}>

        {this.state.location && (
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}

          >
            <MapView.Marker.Animated
              ref={marker => { this.marker = marker }}
              coordinate={this.state.coordinate}
              onRegionChange={this.onRegionChange}
              coordinate={{
                latitude: this.state.location.coords.latitude,
                longitude: this.state.location.coords.longitude,
                timestamp: this.state.location


              }}
              draggable
              onDragEnd={e => console.log(e.nativeEvent, this.timestamp)}
              description={MapView.Marker.description}
  />


          </MapView>


        )}
        <View style={{ height: 50 }}>
              
          <Button title = "submit location"
          onPress ={this.handleSubmit} 
           
            />

        </View>


      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});


