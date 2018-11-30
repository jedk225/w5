import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
//import {
 // createStackNavigator,
 // createBottomTabNavigator
//} from 'react-navigation';
import Inputs from './views/inputs.js'
import Api from './utils/API';
//import SubmitButton from 'react-native-submit-button';

/*
import Home from './views/Home'
import Favorites from './views/Favorites'
import Details from './views/Details'

const HomeStack = createStackNavigator({
  HomeList: {
    screen: Home,
    navigationOptions: {
      title: 'Search Movies'
    }
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`
    })
  }
})

const FavoritesStack = createStackNavigator({
  FavoritesList: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favorites'
    }
  },
  FavoritesDetails: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`
    })
  }
})

export default createBottomTabNavigator({
  Home: { screen: HomeStack },
  Favorites: { screen: FavoritesStack }
})*/




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  state = {
    location: null,
    errorMessage: null,
  };

 handleSubmit = (comments,photo) => {
 //Api.submitForm(this.state.location);

 Api.saveLocation(this.state.location, comments, photo, "fx@gmail.com", "ufo spotter");


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
              // image={require('../assets/pin.png')}

              draggable
              onDragEnd={e => console.log(e.nativeEvent, this.timestamp)}
              description={MapView.Marker.description}
            />


          </MapView>


        )}
        <View style={{ height: 50 }}>

          <Button title="UFO SPOTTER"
            onPress={this.handleSubmit}

          />



        </View>
        <View style={{ height: -200 }}>
        <Inputs handleSubmit={
          this.handleSubmit
        } />
        </View>



      </View>



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
 submitButtonText:{
    color: 'white'
 }
});


