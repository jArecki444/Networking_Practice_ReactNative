import React from 'react';
import { Text } from 'react-native';
import Card from './card';
import CardItem from './cardItem';

const AlbumDetail = props => (
  <Card>
    <CardItem>
      <Text>{props.album.title}</Text>
    </CardItem>
  </Card>
);

export default AlbumDetail;
