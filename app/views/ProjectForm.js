import React, { Component } from 'react';
import { Alert, Platform, Text, View, StyleSheet, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import Inputs from './inputs.js';
import Api from '../utils/API';
import { Header, Avatar } from 'react-native-elements';


export default class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  state = {
    location: null,
    errorMessage: null,
  };
  welcome = () => {
    Alert.alert(this.props.navigation.state.params.item.projectDescription);
  }

  handleSubmit = (comments, photo) => {
    //Api.submitForm(this.state.location);

    // Saves location to database
    Api.saveLocation(this.state.location, comments, photo, "", this.props.navigation.state.params.item.projectName);

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


    //consoles soon as u page loads console.log(this.state.location);
    //to get the stamp just remove google mapviw.

    const { item } = this.props.navigation.state.params

    return (


      <KeyboardAvoidingView style={styles.container} behavior= "padding" enabled>
        <View style={{ flex: 1 }}>

          <View style={{ flex: .30 }}>

            <Header
              leftComponent={{ icon: 'menu', color: '#fff' }
              }
              centerComponent={{text:item.projectName}}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
          </View>
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
                // image={require('../assets/pin.png')}

                draggable
                onDragEnd={e => console.log(e.nativeEvent, this.timestamp)}
                description={MapView.Marker.description}
              />


            </MapView>


          )}

          <View style={{ flex: 1 }}>
            <Inputs handleSubmit={
              this.handleSubmit
            } />
          </View>



        </View>

      </KeyboardAvoidingView>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    //backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
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
});


