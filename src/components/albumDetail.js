import React from 'react';
import {
  Text, View, StyleSheet, Image, Linking
} from 'react-native';
import Card from './card';
import CardItem from './cardItem';
import Button from './button';

const AlbumDetail = ({ album }) => {
  const {
    title, artist, thumbnail_image, image, url
  } = album;

  return (
    <Card>
      <CardItem>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image style={styles.albumImageStyle} source={{ uri: image }} />
      </CardItem>
      <CardItem>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImageStyle: {
    flex: 1,
    height: 300,
    width: null // trick for full width filled image
  }
});

export default AlbumDetail;
