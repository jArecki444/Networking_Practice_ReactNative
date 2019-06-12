import React, { Component } from 'react';
import { Text, View } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
class AlbumList extends Component {
        state = { albums: [] };

        componentWillMount() {
          fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then(responseJson => this.setState({ albums: responseJson }));
        }

        renderAlbums() {
          return this.state.albums.map(album => <Text>{album.title}</Text>);
        }

        render() {
          console.log(this.state);
          return (
            <View>
              {this.renderAlbums()}
            </View>
          );
        }
}

export default AlbumList;
