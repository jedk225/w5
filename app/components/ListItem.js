import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const ListItem = props => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.handlePress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  </View>
)

export default ListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,.4)',
    borderBottomWidth: 1
  },
  text: {
    padding: 15

  }
})