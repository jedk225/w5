import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';




export default class App extends Component {
    render() {
      return (
        <View style={{flex:1}}>
          <SubmitButton  />
        </View>
      ); 
    } 
  }
  