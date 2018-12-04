import React from 'react'
import { ScrollView, SafeAreaView, TextInput, StyleSheet } from 'react-native'

import ListItem from '../components/ListItem'

class Home extends React.Component {
  state = {
    movies: [],
    searchTerm: ''
  }

  componentDidMount() {
    this.searchMovies('Batman')
  }

  handleInput = searchTerm =>
    this.setState({ searchTerm }, () => this.searchMovies(searchTerm))

  searchMovies = input =>
    fetch(
      `http://www.omdbapi.com/?s=${input.replace(/ /g, '+')}&apiKey=trilogy`
    )
      .then(res => res.json())
      .then(json =>
        this.setState({
          movies: json.Search || []
        })
      )

  render() {
    const { navigation } = this.props
    const { movies, searchTerm } = this.state

    return (
      
      <SafeAreaView style={{ flex: 1 }}>
        <TextInput
          style={styles.input}
          value={searchTerm}
          placeholder="Search for a movie..."
          onChangeText={this.handleInput}
        />
        <ScrollView style={{ flex: 1 }}>
          {movies.map(movie => (
            <ListItem
              key={movie.imdbID}
              title={movie.Title}
              handlePress={() =>
                navigation.navigate('Details', {
                  title: movie.Title,
                  imdbID: movie.imdbID
                })
              }
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 24,
    backgroundColor: 'white',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
})