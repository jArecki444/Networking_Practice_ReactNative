import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';


// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Albums" />
        <AlbumList />
      </View>

    );
  }
}
