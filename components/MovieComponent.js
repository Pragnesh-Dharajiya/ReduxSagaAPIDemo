import React, {Component} from 'react';
import {Button, FlatList, Platform, Text, TextInput, View} from 'react-native';

export default class MovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {movieName: '', releaseYear: ''};
  }
  render() {
    return (
      <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
        <Text
          style={{
            margin: 10,
            fontWeight: 'bold',
            color: 'forestgreen',
            fontSize: 20,
          }}>
          Redux Saga Tutorial
        </Text>
        <Text style={{margin: 10, color: 'black', fontSize: 20}}>
          New Movie Information
        </Text>
        <View style={{height: 100, margin: 10}}>
          <TextInput
            style={{
              flex: 1,
              margin: 5,
              padding: 10,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={(Text) => this.setState({movieName: Text})}
            value={this.state.movieName}
            placeholder="Enter the Movie Name"
          />
          <TextInput
            style={{
              flex: 1,
              margin: 5,
              padding: 10,
              borderColor: 'gray',
              borderWidth: 1,
              width: 120,
            }}
            onChangeText={(Text) => this.setState({releaseYear: Text})}
            value={this.state.releaseYear}
            placeholder="Enter the Year"
          />
        </View>
        <View style={{height: 70, flexDirection: 'row'}}>
          <Button
            title="Fetch Movies"
            onPress={() => {
              this.props.onFetchMovies('asc');
            }}></Button>
          <Button title="Add Movies"></Button>
        </View>
        <FlatList
          data={this.props.movies}
          keyExtractor={(item) => item.name}
          renderItem={({item, index}) => (
            <Text
              style={{
                padding: 10,
                fontWeight: 'bold',
                fontSize: 17,
                color: 'white',
                backgroundColor:
                  index % 2 === 0 ? 'dodgerblue' : 'mediumseegreen',
              }}>
              {`${item.name},releaseYear=${item.releaseYear}`}
            </Text>
          )}
        />
      </View>
    );
  }
}
