import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Home extends React.Component {

  render() {
    return (

      <View style={styles.container}>


   <Text style={{backgroundColor: "pink",height:80,marginBottom:480,fontWeight: "bold", fontSize:18,marginLeft:2,marginRight:1}}>     Welcome to w5 please click on your Project we have We have {this.props.screenProps.currentFriends.length} Projects,
   please add or get into your Project. </Text>



<View style={{flex:1}}>
{
          this.props.screenProps.possibleFriends.map((friend, index) => (
            <Button
              key={friend}
              title={`Add ${friend}`}
              onPress={() =>
                this.props.navigation.navigate('Details')
              }
            />
          )
          )
        }
       

</View>
     
        
       




      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    margin: 20,
    fontWeight: "bold",
    color: "black",
    fontSize: 25,
    backgroundColor: "red"

  }

});